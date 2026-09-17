export function HowItWorks() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Discovery, then a fixed-price proposal.', color: 'var(--butter)' },
    { num: '02', title: 'Build', desc: 'Systems implemented and tested.', color: 'var(--sage)' },
    { num: '03', title: 'Connect', desc: 'CRM, marketing and automation joined up. Team trained.', color: 'var(--sky)' },
    { num: '04', title: 'Execute', desc: 'Marketing and specialist support run the system.', color: 'var(--coral)' },
    { num: '05', title: 'Improve', desc: 'Maintenance and refinement as the business grows.', color: 'var(--light-sage)' },
  ];

  return (
    <section className="tint" style={{ padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="wrap reveal">
        <p className="label">How it works</p>
        <h2 style={{ maxWidth: '16em' }}>
          Consultancy, implementation and ongoing execution, in one line.
        </h2>
        
        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step" style={{ '--c': step.color } as React.CSSProperties}>
              <div className="bar"></div>
              <div className="num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
