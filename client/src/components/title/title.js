import React from 'react';
import Particles from 'react-particles-js';
import './title.css';

const Title = props => {
    return (
        <div className="title container">
            <Particles
                canvasClassName="canvas"
                height="125px"
                params={{
                    particles: {
                        number: {
                            value: 6,
                            density: {
                                enable: false,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false,
                            color: "#ffcccb"
                        },
                        move: {
                            speed: 2,
                            out_mode: "out",
                            direction: "down",
                            bounce: true
                        },
                        // shape: {
                        //     type: "circle",
                        // },
                        // color: {
                        //     value: "#ffcccb"
                        // },
                        shape: {
                            type: "image",
                            image: {
                               src: "mihs.png", // Set image path.
                               width: .25,   // Width and height don't decide size.
                               height: .25  // They just decide aspect ratio.
                            }
                          },
                          
                        // color: {
                        //     // value: "#282c34"
                        //     value: "#ffcc"
                        // },
                        size: {
                            value: 40,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 7,
                                size_min: 30,
                                sync: false
                            }
                        },
                    },
                    retina_detect: true
                }} />
            {/* <img className="img-fluid" src="needle3.png" alt="" /> */}
                {props.header}
        </div>
    );
};

export default Title;