/** Four linked columns in one ruled box, like a newspaper front page: the steps of the approach, each linking to its section. */
export function FrontColumns({ steps }: { steps: { small: string; title: string; text: string; href: string }[] }) {
  return (
    <div className="cs-nw-front">
      {steps.map((s) => (
        <a key={s.small} className="cs-nw-col" href={s.href}>
          <small>{s.small}</small>
          <b>{s.title}</b>
          <span>{s.text}</span>
        </a>
      ))}
    </div>
  );
}
