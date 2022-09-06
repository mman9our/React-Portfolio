import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useCallback, useRef } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };

  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="grid"
    >
      <motion.article initial={{ x: -200 }} whileInView={{ x: 0 }}>
        <header>
          <div className="container header__container">
            <h3>Hello I'm</h3>
            <h1 className="myName">Mohamed Mansour</h1>
            <h4 className="text-light">Software Engineer</h4>
            <div>
              <Typical
                className="moh"
                steps={[
                  "I Do Frontend Development JavaScript/React ",
                  3000,
                  "Building PHP/Laravel backends ",
                  2000,
                  "Creative JavaScript </Devloper>🚀👾  ",
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
              <button className="btn fireworks" onClick={fire}>
                Show them some love with fireworks🥳
              </button>
              <ReactCanvasConfetti
                refConfetti={getInstance}
                style={canvasStyles}
              />
              <CTA />
            </div>
            
            <HeaderSocials />

            <div className="me">
              <img src={ME} alt="me" />
            </div>

            <a href="#contact" className="scroll__down">
              Scroll Down
            </a>
          </div>
        </header>
      </motion.article>
    </motion.div>
  );
};
export default Header;
