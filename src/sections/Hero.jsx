import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowDown,
  FileText,
} from "lucide-react";
import Button from "../components/Button";
import ProfileImage from "../components/ProfileImage";
import CursorSpotlight from "../components/CursorSpotlight";
import { scrollToSection } from "../lib/scroll";
import { fadeUp, stagger } from "../lib/motion";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/alive7z",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumit-singh-bagdwal",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:sumitsbagdwal@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-16 md:pt-44 md:pb-20"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-50/70 via-white to-transparent dark:from-accent-500/[0.04] dark:via-[#050505] dark:to-[#050505]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 -z-10 hidden h-[480px] w-[480px] rounded-full bg-accent-100/40 blur-3xl md:block dark:bg-accent-600/10"
      />
      {/* Faint grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(37 99 235 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(37 99 235 / 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <CursorSpotlight />

      <div className="container-x grid min-w-0 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* Left column */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="min-w-0">
          <motion.div variants={fadeUp} className="mb-7">
            <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-accent-200 bg-accent-50 px-3.5 py-2 text-xs font-medium text-accent-800 dark:border-accent-500/25 dark:bg-accent-500/10 dark:text-accent-200">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
              Available for Software Engineering Internships
            </span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mb-3 text-sm font-medium text-ink-gray dark:text-neutral-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-xl text-[2.75rem] font-extrabold leading-[1.06] tracking-[-0.055em] text-ink-900 dark:text-white sm:text-6xl lg:text-[4rem]"
          >
            Sumit Singh Bagdwal
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mt-5 max-w-lg text-xl font-medium text-ink-gray dark:text-neutral-300 sm:text-2xl"
          >
            I build software for real-world problems.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-gray dark:text-neutral-400 sm:text-lg"
          >
            Computer Science undergraduate focused on full-stack development,
            real-time systems, problem solving, and building practical software
            products.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button className="w-full sm:w-auto" href="#projects" icon={ArrowRight} magnetic>
              View My Work
            </Button>
            <Button
              variant="secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              icon={FileText}
              className="w-full sm:w-auto"
            >
              View Resume
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-2"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={s.label}
                className="icon-button"
              >
                <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full min-w-0 max-w-[20rem] pb-6 lg:justify-self-end lg:max-w-[22rem]"
        >
          <ProfileImage />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about");
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-14 hidden flex-col items-center gap-2 text-xs font-medium text-ink-gray transition-colors hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 md:flex"
        aria-label="Scroll to explore"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
        Scroll to explore
      </motion.a>
    </section>
  );
}
