function FloatingBadge({ title, value, className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur ${className}`}>
      <p className="text-[11px] font-medium text-slate-500">{title}</p>
      <p className="mt-0.5 text-sm font-extrabold text-slate-950">{value}</p>
    </div>
  );
}

export default FloatingBadge;