import { Instagram } from "lucide-react";
import logo from "@/assets/vicky-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="Vicky Salud" className="h-9 w-9 rounded-full object-cover" />
            <span className="font-display text-lg text-primary-deep">Vicky Salud</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Atención médica integral, cercana y profesional. Cuidamos de ti y de tu familia con calidez y excelencia.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base text-primary-deep">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Ave. Central Gonzalo Pérez Llona 300, Local 6, Maipú, Región Metropolitana</li>
            <li>
              <a href="mailto:vickymedicoydental@gmail.com" className="hover:text-primary-deep">
                vickymedicoydental@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-primary-deep">Síguenos</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="https://www.instagram.com/vicky_medico_dental/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary-deep"
              >
                <Instagram size={16} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/56937671413"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary-deep"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.263.13-.302.229-.63.229-.988 0-.13-.028-.243-.056-.373-.1-.174-2.278-1.263-2.678-1.39zM16.001 27.02c-1.847 0-3.65-.502-5.229-1.448L4.87 27.02l1.462-5.702a10.99 10.99 0 0 1-1.518-5.586c0-6.114 4.973-11.087 11.087-11.087S27.088 9.618 27.088 15.732 22.115 27.02 16 27.02zm0-24.135C8.94 2.885 3.15 8.674 3.15 15.732c0 2.264.602 4.485 1.735 6.435L2 30l7.949-2.507a12.83 12.83 0 0 0 6.052 1.53c7.06 0 12.851-5.79 12.851-12.85S23.062 2.885 16 2.885z" />
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vicky Salud. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
