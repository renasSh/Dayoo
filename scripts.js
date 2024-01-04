particlesJS("particles-js", {
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 500 // Adjust this value to control particle density
            }
        },
        color: {
            value: "#ffda96"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 0.1,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 0.1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    }
});
