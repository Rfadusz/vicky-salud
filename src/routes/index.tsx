import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import {
  Brain, Stethoscope, HeartPulse, Apple, MessagesSquare, Smile,
  ArrowRight, Calendar, ShieldCheck, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-medico.jpg.asset.json";
import joanImg from "@/assets/joan-manduley.png.asset.json";
import liliamImg from "@/assets/liliam-lopez.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vicky Salud — Tu salud y bienestar en manos expertas" },
      { name: "description", content: "Clínica Vicky Salud en Maipú: medicina general, salud mental, psiquiatría, psicología, nutrición y dental. Agenda tu hora online." },
      { property: "og:title", content: "Vicky Salud — Clínica integral" },
      { property: "og:description", content: "Atención profesional, cálida y cercana. Agenda tu hora con nuestros especialistas." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Brain, title: "Control de Salud Mental", desc: "Evaluación y seguimiento integral de tu bienestar emocional." },
  { icon: Stethoscope, title: "Psiquiatría", desc: "Atención especializada para el diagnóstico y tratamiento clínico." },
  { icon: HeartPulse, title: "Medicina General", desc: "Consultas integrales para el cuidado continuo de tu salud." },
  { icon: Apple, title: "Medicina Nutricional", desc: "Planes personalizados para un control de peso saludable y sostenible." },
  { icon: MessagesSquare, title: "Psicología", desc: "Acompañamiento terapéutico cercano, confidencial y basado en evidencia." },
  { icon: Smile, title: "Dental", desc: "Salud bucal integral con enfoque preventivo y estético." },
];

const professionals = [
  { img: joanImg.url, name: "Dr. Joan Manduley", role: "Médico General con enfoque en Salud Mental" },
  { img: liliamImg.url, name: "Dra. Liliam Lopez", role: "Directora del Centro" },
];

const testimonials = [
  { name: "María P.", initials: "MP", text: "Una atención cálida y muy profesional. Me sentí escuchada desde el primer momento." },
  { name: "Carlos R.", initials: "CR", text: "Excelente equipo. El proceso de reserva y la consulta fueron impecables." },
  { name: "Antonia S.", initials: "AS", text: "El enfoque humano marca la diferencia. Volvería sin dudarlo y lo recomiendo." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
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
                src={heroImg.url}
                alt="Interior minimalista de la clínica Vicky Salud"
                className="h-full w-full object-cover"
                width={1200}
                height={1500}
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
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Reserva online</span>
            <h2 className="mt-4 text-3xl text-primary-deep md:text-5xl">
              Agenda tu hora en línea.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-base">
              Elige tu especialista, fecha y horario disponible. Recibirás la confirmación al instante.
            </p>
          </div>

          <div className="mx-auto mt-12 w-full max-w-4xl">
            <iframe
              title="Agendamiento Reservo — Vicky Salud"
              src="https://agendamiento.reservo.cl/makereserva/agenda/a0FSEAZ0X0eDDU135H55D2J371x7Vr"
              width="100%"
              height="600"
              frameBorder="0"
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                display: "block",
                width: "100%",
              }}
            />
            <div className="text-center text-xs text-muted-foreground">
              <a
                href="https://agendamiento.reservo.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-deep"
              >
                Powered by Reservo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESIONALES */}
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
          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
            {professionals.map((p) => (
              <article key={p.name} className="rounded-2xl border border-border bg-card p-7 text-center transition-all hover:shadow-[var(--shadow-soft)]">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-primary-soft">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary-deep">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Testimonios</span>
            <h2 className="mt-4 text-3xl text-primary-deep md:text-4xl">
              Lo que dicen nuestros pacientes.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <Quote size={22} className="text-primary" strokeWidth={1.6} />
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  “{t.text}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-sm font-medium text-primary-deep">
                    {t.initials}
                  </div>
                  <div className="text-sm font-medium text-primary-deep">{t.name}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
