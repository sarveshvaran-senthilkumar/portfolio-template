/**
 * Bullet list with cyan ▹ markers. Items may contain inline HTML
 * (e.g. <strong>) so we render via dangerouslySetInnerHTML from trusted data.
 */
export function FeatureList({ items, className = "" }) {
  return (
    <ul className={`list-none ${className}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-[22px] mb-[7px] text-muted text-[0.94rem] before:content-['▹'] before:absolute before:left-0 before:text-accent [&_strong]:text-text [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  );
}
