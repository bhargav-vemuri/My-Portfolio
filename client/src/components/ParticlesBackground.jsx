import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 150, links: { opacity: 0.2 } } },
    },
    particles: {
      color: { value: "#0ea5e9" }, // cyan accent
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.05, width: 1 },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 0.5, straight: false },
      number: { density: { enable: true, area: 800 }, value: 40 },
      opacity: { value: 0.1 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    <ParticlesProvider init={async (engine) => await loadSlim(engine)}>
      <Particles id="tsparticles" options={options} className="fixed inset-0 -z-10" />
    </ParticlesProvider>
  );
}
