export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display">v</span>
            <span className="font-display text-lg text-primary-deep">Vicky Salud</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Atención médica integral, cercana y profesional. Cuidamos de ti y de tu familia con calidez y excelencia.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base text-primary-deep">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Av. Salud 123, Santiago</li>
            <li>+56 9 0000 0000</li>
            <li>hola@vickysalud.cl</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-primary-deep">Síguenos</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary-deep">Instagram</a></li>
            <li><a href="#" className="hover:text-primary-deep">Facebook</a></li>
            <li><a href="#" className="hover:text-primary-deep">WhatsApp</a></li>
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
