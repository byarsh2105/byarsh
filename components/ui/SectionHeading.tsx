interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-14 text-center">
      <h2 className="mb-3 font-serif text-5xl">{title}</h2>

      <p className="text-muted-foreground mx-auto max-w-xl">{subtitle}</p>
    </div>
  );
}
