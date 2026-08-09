function TechBadge({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
      {children}
    </span>
  );
}

export default TechBadge;