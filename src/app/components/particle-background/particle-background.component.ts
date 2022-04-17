import { Component } from "@angular/core";
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-particle-background',
  templateUrl: './particle-background.component.html',
  styleUrls: ['./particle-background.component.css']
})
export class ParticleBackgroundComponent {

  particleId: string = "particleId";

  constructor() {}

  particlesOptions = {
    background: {
      color: {
        value: "#000"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.repulse
        },
        onHover: {
          enable: true,
          mode: HoverMode.attract
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 350,
        }
      }
    },
    particles: {
      color: {
        value: "#F02040"
      },
      links: {
        color: {
          value: "#005E7C"
        },
        distance: 80,
        enable: true,
        opacity: 0.7,
        width: 2
      },
      collisions: {
        enable: false
      },
      move: {
        direction: MoveDirection.outside,
        enable: true,
        outModes: {
          default: OutMode.out
        },
        random: true,
        speed: 2,
        straight: false,
        vibrate: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 100
      },
      opacity: {
        value: 0.7
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {min: 0.5, max: 10 },
      }
    },
    detectRetina: true
  };
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);

    // await tsParticles.addParticleUpdater("color-rand", () => {
    //   return {
    //     init: (particle) => {
    //       const newHsl = rgbToHsl(getRandomRgbColor(78));  
    //       particle.color!.h.value = newHsl.h;
    //       particle.color!.s.value = newHsl.s;
    //       particle.color!.l.value = newHsl.l;
    //     },
    //     update: () => {
    //       /* nothing */
    //     },
    //     isEnabled: () => true,
    //   };
    // });
  
    // await tsParticles.load("tsparticles", {
    //   background: {
    //     color: "#000"
    //   }

    // });

  }
}