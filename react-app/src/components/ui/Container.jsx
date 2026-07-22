/** Centered max-width wrapper used by every section. */
export function Container({ className = "", children, ...rest }) {
  return (
    <div className={`w-[92%] max-w-[1120px] mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
}
