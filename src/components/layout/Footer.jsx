import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-black tracking-tight">ORIVEX<span className="text-indigo-600">.</span></p>
            <p className="mt-1 text-sm text-slate-500">Modern digital solutions.</p>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Orivex. Built with care.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;