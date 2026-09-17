import './App.css'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Container,
  GitBranch,
  Layers3,
  Package,
  Play,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const technologies = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Vite", icon: Zap },
  { name: "Tailwind", icon: Layers3 },
  { name: "Testing", icon: TestTube2 },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Server },
  { name: "GitOps", icon: GitBranch },
];

const structure = [
  {
    name: "src/",
    description: "Application source",
    items: ["components/", "pages/", "hooks/", "services/", "utils/"],
  },
  {
    name: "backend/",
    description: "Backend foundation",
    items: ["controllers/", "routes/", "services/", "models/"],
  },
  {
    name: "infrastructure/",
    description: "Infrastructure ready",
    items: ["docker/", "kubernetes/", "helm/", "terraform/"],
  },
  {
    name: "gitops/",
    description: "Deployment structure",
    items: ["applications/", "clusters/", "flux/"],
  },
];

const features = [
  {
    icon: Package,
    title: "Ready-to-build",
    description:
      "A structured foundation with the dependencies and tooling you need to start building immediately.",
  },
  {
    icon: Layers3,
    title: "Clean architecture",
    description:
      "A predictable project structure designed to keep application, infrastructure and deployment concerns organized.",
  },
  {
    icon: Workflow,
    title: "DevOps ready",
    description:
      "Dedicated spaces for Docker, Kubernetes, GitOps, Tekton, Helm and Terraform without forcing any workflow.",
  },
  {
    icon: TestTube2,
    title: "Testing included",
    description:
      "Vitest and React Testing Library are ready when you want to build reliable, testable components.",
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px] animate-pulse" />

        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute -right-40 top-[70%] h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] shadow-lg shadow-violet-500/10 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10">
              <Terminal className="h-4 w-4 text-white" />
            </div>

            <div>
              <span className="font-semibold tracking-tight">DevFlow</span>
              <span className="ml-2 hidden text-xs text-white/35 sm:inline">
                TEMPLATE
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#structure" className="transition hover:text-white">
              Structure
            </a>
            <a href="#stack" className="transition hover:text-white">
              Stack
            </a>
          </nav>

          <a
            href="https://github.com/Dataxis-UditSingh/devops-toolkit"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium transition duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <FaGithub className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-3 pb-20 pt-28 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex animate-[fadeIn_0.8s_ease-out] items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Production-ready project foundation
                <ChevronRight className="h-3 w-3 text-white/30" />
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Build faster.
                <br />
                <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                  Start with structure.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
                A modern React + TypeScript foundation with a clean
                architecture, essential dependencies, testing setup and
                infrastructure-ready structure.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#structure"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
                >
                  Explore Template
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="https://github.com/Dataxis-UditSingh/devops-toolkit"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <FaGithub className="h-4 w-4" />
                  View Repository
                </a>
              </div>

              {/* Quick stats */}
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-white/35">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  React + TypeScript
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Testing ready
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  DevOps structure
                </div>
              </div>
            </div>

            {/* Hero terminal */}
            <div className="relative mx-auto w-full max-w-xl">
              {/* floating badge */}
              <div className="absolute -right-2 -top-8 z-10 hidden animate-[float_5s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#111]/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2 text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,.7)]" />
                  Environment ready
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0c]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">
                {/* terminal top */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <span className="font-mono text-[10px] text-white/25">
                    devflow-template
                  </span>

                  <div className="w-10" />
                </div>

                {/* terminal content */}
                <div className="p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
                  <div className="text-white/30">~/projects</div>

                  <div className="mt-2">
                    <span className="text-violet-400">❯</span>{" "}
                    <span className="text-white/80">git clone</span>{" "}
                    <span className="text-cyan-300">
                      devflow-template.git
                    </span>
                  </div>

                  <div className="mt-1 text-white/25">
                    Cloning into &apos;devflow-template&apos;...
                  </div>

                  <div className="mt-5">
                    <span className="text-violet-400">❯</span>{" "}
                    <span className="text-white/80">npm install</span>
                  </div>

                  <div className="mt-2 space-y-1 text-white/35">
                    <div>
                      <span className="text-emerald-400">✓</span> dependencies
                    </div>
                    <div>
                      <span className="text-emerald-400">✓</span> development
                      tooling
                    </div>
                    <div>
                      <span className="text-emerald-400">✓</span> testing
                      environment
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-violet-400">❯</span>{" "}
                    <span className="text-white/80">npm run dev</span>
                  </div>

                  <div className="mt-2 rounded-lg border border-emerald-400/10 bg-emerald-400/[0.04] p-3 text-emerald-300/80">
                    <div>Local: http://localhost:5173</div>
                    <div className="text-white/30">
                      ready in 327ms
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-white/30">
                    <span className="text-violet-400">❯</span>
                    <span className="inline-block h-4 w-1.5 animate-pulse bg-white/50" />
                  </div>
                </div>
              </div>

              {/* bottom floating card */}
              <div className="absolute -bottom-8 -left-5 hidden animate-[float_6s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#101011]/90 p-4 shadow-2xl backdrop-blur-xl sm:block">
                <div className="mb-2 flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-violet-300" />
                  <span className="text-xs font-medium">Ready to build</span>
                </div>

                <div className="flex gap-1.5">
                  {["R", "TS", "V", "TW"].map((item) => (
                    <span
                      key={item}
                      className="flex h-7 min-w-7 items-center justify-center rounded-md bg-white/[0.06] px-1.5 text-[9px] text-white/45"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section
          id="stack"
          className="border-y border-white/[0.06] bg-white/[0.015]"
        >
          <div className="mx-auto max-w-7xl px-3 py-10 lg:px-8">
            <div className="mb-7 text-center text-xs uppercase tracking-[0.2em] text-white/25">
              Everything starts with the right stack
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="group flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-xs text-white/45 transition duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:text-white/75"
                >
                  <Icon className="h-3.5 w-3.5 text-white/30 transition group-hover:text-violet-300" />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-3 py-10 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-violet-300/70">
              Why this template
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Less setup.
              <br />
              More building.
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/40 sm:text-base">
              The foundation is organized so you can focus on your application
              instead of rebuilding the same project structure every time.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-[#080808] p-7 transition duration-500 hover:bg-[#0d0d0e] sm:p-9"
              >
                <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition duration-500 group-hover:-translate-y-1 group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.08]">
                  <Icon className="h-4 w-4 text-white/50 transition group-hover:text-violet-300" />
                </div>

                <h3 className="text-base font-medium">{title}</h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/35">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Structure */}
        <section
          id="structure"
          className="border-y border-white/[0.06] bg-white/[0.015]"
        >
          <div className="mx-auto max-w-7xl px-3 py-10 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/70">
                  Project architecture
                </div>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  A place for
                  <br />
                  everything.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-6 text-white/40 sm:text-base">
                  Application code, infrastructure, GitOps and CI/CD resources
                  each have their own dedicated space. Nothing is forced — the
                  structure simply gives your project a clean starting point.
                </p>

                <a
                  href="#"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
                >
                  Explore the architecture
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {structure.map((folder, index) => (
                  <div
                    key={folder.name}
                    className="group rounded-2xl border border-white/[0.07] bg-[#080808] p-5 transition duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-[#0c0c0d]"
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm text-violet-300/80">
                        {folder.name}
                      </span>

                      <ChevronRight className="h-4 w-4 text-white/15 transition group-hover:translate-x-1 group-hover:text-white/40" />
                    </div>

                    <p className="mt-2 text-xs text-white/25">
                      {folder.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {folder.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 font-mono text-[11px] text-white/35"
                        >
                          <span className="text-white/15">├─</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="mx-auto max-w-7xl px-3 py-10 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/70">
              Simple workflow
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Clone. Install. Build.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/35">
              No complicated setup. Your project starts with the foundation
              already in place.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Clone",
                command: "git clone",
              },
              {
                number: "02",
                title: "Install",
                command: "npm install",
              },
              {
                number: "03",
                title: "Build",
                command: "npm run dev",
              },
            ].map((step, index) => (
              <div key={step.number} className="relative">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15">
                  <div className="text-xs font-mono text-white/20">
                    {step.number}
                  </div>

                  <h3 className="mt-8 text-lg font-medium">{step.title}</h3>

                  <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/40 px-3 py-2.5 font-mono text-xs text-white/45">
                    <span className="mr-2 text-violet-400">$</span>
                    {step.command}
                  </div>
                </div>

                {index < 2 && (
                  <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/15 md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-auto max-w-5xl px-3 pb-10 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[90px]" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <Rocket className="h-5 w-5 text-white/70" />
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">
                Your next project starts here.
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/35">
                Clone the template, install the dependencies and start turning
                your idea into a production-ready application.
              </p>

              <div className="mt-8">
                <a
                  href="https://github.com/Dataxis-UditSingh/devops-toolkit"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
                >
                  <FaGithub className="h-4 w-4" />
                  Get the Template
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-white/25 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5" />
            DevFlow Template
          </div>

          <div>Built for developers who ship.</div>
        </div>
      </footer>

      {/* Global keyframes */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
