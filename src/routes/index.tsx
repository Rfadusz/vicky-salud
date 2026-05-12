import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Heart, Stethoscope, Brain, Baby, Activity, Sparkles, ArrowRight, Calendar, ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vicky Salud — Tu salud y bienestar en manos expertas" },
      { name: "description", content: "Clínica Vicky Salud: atención médica integral, especialidades, profesionales calificados y reserva de horas online." },
      { property: "og:title", content: "Vicky Salud — Clínica integral" },
      { property: "og:description", content: "Atención profesional, cálida y cercana. Agenda tu hora con nuestros especialistas." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Stethoscope, title: "Medicina General", desc: "Consultas integrales para el cuidado continuo de tu salud." },
  { icon: Heart, title: "Cardiología", desc: "Evaluación y seguimiento del corazón con tecnología moderna." },
  { icon: Brain, title: "Salud Mental", desc: "Acompañamiento psicológico y psiquiátrico personalizado." },
  { icon: Baby, title: "Pediatría", desc: "Cuidado integral para niñas, niños y adolescentes." },
  { icon: Activity, title: "Nutrición", desc: "Planes nutricionales adaptados a tu estilo de vida." },
  { icon: Sparkles, title: "Bienestar", desc: "Programas preventivos para vivir mejor cada día." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-primary-soft blur-3xl opacity-60" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <ShieldCheck size={14} className="text-primary" /> Atención profesional certificada
            </span>
            <h1 className="mt-6 text-4xl leading-tight text-primary-deep md:text-6xl">
              Tu salud y bienestar en manos expertas.
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              En Vicky Salud combinamos cercanía humana y excelencia clínica para cuidar de ti
              en cada etapa de la vida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#reservar"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary-deep"
              >
                Reservar Hora <ArrowRight size={16} />
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary-deep hover:bg-secondary"
              >
                Ver especialidades
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-primary-soft shadow-[var(--shadow-soft)]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                alt="Profesional de la salud atendiendo con calidez"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-deep">Agenda online</p>
                  <p className="text-xs text-muted-foreground">Disponible 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Sobre nosotros</span>
          <h2 className="mt-4 text-3xl text-primary-deep md:text-4xl">
            Una clínica pensada para acompañarte.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            En Vicky Salud creemos que la atención médica debe ser cercana, clara y respetuosa.
            Reunimos un equipo multidisciplinario que escucha, evalúa y acompaña a cada persona
            con un enfoque integral, basado en evidencia y mucho cariño.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="especialidades" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Nuestros servicios</span>
            <h2 className="mt-4 text-3xl text-primary-deep md:text-4xl">
              Especialidades para cada etapa de la vida.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reservar" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-primary-deep px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary opacity-40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent opacity-30 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary-soft/80">Reserva online</span>
              <h2 className="mt-4 text-3xl text-primary-foreground md:text-5xl">
                Agenda tu hora en segundos.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm text-primary-foreground/80 md:text-base">
                Elige tu especialista, fecha y horario. Pronto integraremos Reservo para
                facilitar aún más tu experiencia.
              </p>

              {/* Reservo iframe placeholder */}
              <div
                id="reservo-embed"
                className="mx-auto mt-10 flex min-h-[120px] w-full max-w-2xl items-center justify-center rounded-2xl border border-dashed border-primary-foreground/30 bg-primary-foreground/5 text-xs text-primary-foreground/60"
              >
                Espacio reservado para el iframe de Reservo
              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm font-medium text-primary-deep shadow-lg transition-transform hover:scale-[1.02]"
              >
                Reserva tu hora aquí <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESIONALES (placeholder anchor) */}
      <section id="profesionales" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Profesionales</span>
            <h2 className="mt-4 text-3xl text-primary-deep md:text-4xl">
              Un equipo en quien confiar.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Médicos y especialistas con vocación, experiencia y formación continua.
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl border border-border bg-card p-7 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-primary-soft" />
              <h3 className="mt-5 font-display text-xl text-primary-deep">Dr. Joan Manduley</h3>
              <p className="text-sm text-muted-foreground">Médico</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
