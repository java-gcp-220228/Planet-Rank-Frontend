import { Component } from "@angular/core";
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine, Modes } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-particle-background',
  templateUrl: './particle-background.component.html',
  styleUrls: ['./particle-background.component.css']
})
export class ParticleBackgroundComponent {

  particleId: string = "particleId";
  red: string = "0";
  green: string = "0";
  blue: string = "40";

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
        value: "rgb(" +
         Math.floor((Math.random() * 300) + 44).toString() + "," + 
         Math.floor((Math.random() * 300) + 44).toString() + "," + 
         Math.floor((Math.random() * 300) + 44).toString() + ")"
      },
      links: {
        color: {
          value: "rgb(" +
          Math.floor((Math.random() * 300) + 44).toString() + "," + 
          Math.floor((Math.random() * 300) + 44).toString() + "," + 
          Math.floor((Math.random() * 300) + 44).toString() + ")"
        },
        distance: 80,
        enable: true,
        opacity: 0.7,
        width: 1
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
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 100
      },
      opacity: {
        value: 0.9
      },
      shape: {
        type: "polygon",
      },
      size: {
        value: {min: 1, max: 4 },
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