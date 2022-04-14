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

  ngOnInit(): void {}

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
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        pull: {
          quantity: 4
        },
        repulse: {
          distance: 50,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#C9FFE2",
        distance: 75,
        enable: true,
        opacity: 0.7,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.right,
        enable: true,
        outModes: {
          default: OutMode.out
        },
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1500
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };
  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}