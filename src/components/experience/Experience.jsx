import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid"
      style={{ marginTop: "3 rem" }}
    >
      <motion.article initial={{ y: 100 }} whileInView={{ y: 0 }}>
        <section id="experience">
          <h4>What Skills I Have</h4>
          <h2>My Experience</h2>

          <div className="container experience__container">
            <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>HTML</h4>
                    <h5>Semantic</h5>
                    <small className="text-light">Advanced</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>TypeScript</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>CSS/SCSS</h4>
                    <h5>BEM, StyledComponent</h5>
                    <small className="text-light">Advanced</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>ReactJs</h4>
                    <small className="text-light">Advanced</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>JavaScript</h4>
                    <h5>ES6, OOP, JQuery</h5>
                    <small className="text-light">Advanced</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Tailwind/Bootstrap</h4>
                    <small className="text-light">Advanced</small>
                  </div>
                </article>
              </div>
            </div>

            <div className="experience__backend">
              <h3>Backend Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>PHP</h4>
                    <h5>Sessions, Cookies</h5>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Laravel</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Database</h4>
                    <h5>MySQL, Firebase </h5>
                    <small className="text-light">Advanced</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>REST APIs</h4>
                    <small className="text-light">Advanced</small>
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Security/Auth</h4>
                    <h5>Validations, JWT</h5>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>ORM</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
            <h4 className="other_tools">
              {" "}
              <span> Other Tools:</span> Git, Github, Adobe XD{" "}
            </h4>
          </div>
        </section>
      </motion.article>
    </motion.div>
  );
};

export default Experience;
