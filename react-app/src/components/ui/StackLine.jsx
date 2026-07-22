/** Dot-separated tech-stack subtitle used on project, publication, and achievement cards. */
export function StackLine({ children, className = "" }) {
  return (
    <p
      className={`text-accent-2 text-[0.88rem] font-medium mb-3.5 tracking-[0.01em] ${className}`}
    >
      {children}
    </p>
  );
}
