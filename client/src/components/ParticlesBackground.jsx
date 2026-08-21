import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    particles: {
      color: { value: "#0ea5e9" }, // cyan accent
      links: { color: "#ffffff", distance: 180, enable: true, opacity: 0.1, width: 1 },
      move: { direction: "none", enable: true, outModes: { default: "out" }, random: true, speed: 0.8, straight: false },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.3, animation: { enable: true, speed: 0.5, minimumValue: 0.1 } },
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
