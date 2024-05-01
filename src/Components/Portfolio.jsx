/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pica.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Founder and Lead @Microsoft Learn Students' Hub LIET 🎉",
    description:
      "Collaboration to create a beginner friendly place to help College Students get started in the Techncical World.",
    url: "https://instagram.com/mlsh_liet",
  },
  {
    title: "WEF Global Shaper @Global Shapers Community Hyderabad",
    description:
      "A proud member of Global Shapers Community Hyderabad, an initiative of the World Economic Forum, that aims to solve local problems with global impact.",
    url: "https://www.globalshapers.org/hubs/hyderabad-hub/",
  },
  {
    title: "Designing Head @ArtigenZ Association LIET",
    description:
      "Leading the Design and Multimedia Team of ArtigenZ Association, a student run club under the aegis of The CSE-AI&ML Department of the LIET Institute.",
    url: "https://www.lords.ac.in/cse-aiml/student-association-artigenz/",
  },
  {
    title: "Junior Year @LIET as a CSE Student with specialization in AI & ML",
    description:
      "A Junior Year Student carving his way through the world of Computer Science with a specialization in Artificial Intelligence and Machine Learning.",
    url: "https://www.lords.ac.in/cse-aiml/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Roles</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
