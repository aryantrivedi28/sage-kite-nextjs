/** Four coloured step cards, each a link to the section that covers it (`href`, e.g. "#local"). */
export function StepLinks({ steps }: { steps: { small: string; title: string; text: string; href: string }[] }) {
  return (
    <div className="cs-steps4">
      {steps.map((s) => (
        <a key={s.title} href={s.href}><small>{s.small}</small><b>{s.title}</b><span>{s.text}</span></a>
      ))}
    </div>
  );
}
