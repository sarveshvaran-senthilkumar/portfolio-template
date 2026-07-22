/** Two soft ambient gradient blobs behind the content. */
export function Blobs() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed -z-10 rounded-full blur-[120px] opacity-[0.16] w-[480px] h-[480px] -top-[140px] -left-[120px] bg-[#0ea5e9]"
      />
      <div
        aria-hidden="true"
        className="fixed -z-10 rounded-full blur-[120px] opacity-[0.16] w-[420px] h-[420px] -bottom-[160px] -right-[100px] bg-[#7c3aed]"
      />
    </>
  );
}
