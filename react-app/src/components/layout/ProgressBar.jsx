import { useScrollProgress } from "../../hooks/useScrollProgress";

/** Thin gradient reading-progress bar fixed at the top of the viewport. */
export function ProgressBar() {
  const { progress } = useScrollProgress();
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-[3px] gradient-bg z-[150]"
      style={{ width: `${progress}%` }}
    />
  );
}
