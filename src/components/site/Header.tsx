import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vicky-logo.jpg.asset.json";

const nav = [
  { label: "Inicio", to: "#inicio" },
  { label: "Especialidades", to: "#especialidades" },
  { label: "Profesionales", to: "#profesionales" },
  { label: "Testimonios", to: "#testimonios" },
  { label: "Contacto", to: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="Vicky Salud" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-display text-lg tracking-tight text-primary-deep">Vicky Salud</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.to} href={n.to} className="text-sm text-muted-foreground transition-colors hover:text-primary-deep">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#reservar"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-deep"
        >
          Agendar Cita
        </a>
        <button className="md:hidden text-primary-deep" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <a key={n.to} href={n.to} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground">
                {n.label}
              </a>
            ))}
            <a href="#reservar" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
