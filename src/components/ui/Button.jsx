import { ArrowUpRight } from "lucide-react";

function Button({ children, href = "#contact", variant = "primary", className = "" }) {
  const styles = {
    primary: "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700",
    secondary: "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}

export default Button;