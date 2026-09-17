from PIL import Image
import sys

def get_dominant_color(image_path):
    img = Image.open(image_path)
    # Get top-left pixel
    pixel = img.getpixel((10, 10))
    # If it has alpha, format as rgba
    if len(pixel) == 4:
        print(f"{image_path}: rgba({pixel[0]}, {pixel[1]}, {pixel[2]}, {pixel[3]/255}) / #{pixel[0]:02x}{pixel[1]:02x}{pixel[2]:02x}")
    else:
        print(f"{image_path}: rgb({pixel[0]}, {pixel[1]}, {pixel[2]}) / #{pixel[0]:02x}{pixel[1]:02x}{pixel[2]:02x}")

get_dominant_color("/Users/bipulchamoli/.gemini/antigravity/brain/aa60a329-67a0-4bfa-80d4-025c6f07edf3/.user_uploaded/media_1789653176174.png")
get_dominant_color("/Users/bipulchamoli/.gemini/antigravity/brain/aa60a329-67a0-4bfa-80d4-025c6f07edf3/.user_uploaded/media_1789653185244.png")
