import {
  IMAGE_ADDRESS_MESSAGE,
  UNSUPPORTED_IMAGE_MESSAGE,
  imageAddressOnly,
  imageFromClipboard,
  unsupportedImage,
} from './articlePaste';

/** The files on a clipboard (some browsers list them only as items). Browser only. */
export function clipboardFiles(data: DataTransfer): File[] {
  const files = Array.from(data.files);
  if (files.length) return files;
  return Array.from(data.items).flatMap((item) => {
    const file = item.kind === 'file' ? item.getAsFile() : null;
    return file ? [file] : [];
  });
}

/**
 * An image paste (decision.md D048): the file to upload, a message when it is an image the studio cannot upload (a
 * GIF, or only a web address such as an image copied inside Google Docs), or null for any other paste.
 */
export function imagePaste(data: DataTransfer): { file: File } | { message: string } | null {
  const files = clipboardFiles(data);
  const plain = data.getData('text/plain');
  const file = imageFromClipboard(files, plain);
  if (file) return { file };
  if (unsupportedImage(files, plain)) return { message: UNSUPPORTED_IMAGE_MESSAGE };
  if (imageAddressOnly(data.getData('text/html'), plain, files)) return { message: IMAGE_ADDRESS_MESSAGE };
  return null;
}
