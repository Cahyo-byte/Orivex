import Container from "../components/ui/Container";
import { Code2, Database, Palette, Server } from "lucide-react";

const items = [
  [Code2, "Frontend", "React, Tailwind, responsive UI"],
  [Server, "Backend", "Node.js, Express, REST API"],
  [Database, "Database", "MySQL & structured data"],
  [Palette, "Design", "Clean UI & user experience"],
];

function Technologies() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, desc]) => (
            <div key={title} className="flex items-center gap-4 rounded-2xl p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{title}</p>
                <p className="text-xs leading-5 text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Technologies;