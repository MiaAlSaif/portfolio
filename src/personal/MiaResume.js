import React from "react";
import Pdf from "../images/MiaAlSaifResume.pdf";
import Download from "../images/download.png";
import "./modalContent.css";

const MiaResume = () => (
  <div className="contentContainer">
    <div className="headingContainer">
      <div className="headingBackground-cv" />
    </div>
    <div className="bodyContainer">
      <div className="contentBody">
        <section>
          <div className="cv-header">
            <div className="cv-ttl">
              <h1>Mia AlSaif</h1>
              <h4>Product Designer</h4>
            </div>
            <div className="dnld-btn">
              <a href={Pdf} target="_blank" rel="noreferrer">
                <img src={Download} alt="download icon" />
              </a>
            </div>
          </div>

          <div className="job-desc">
            <h4>Experience</h4>
            <p className="job-title">Product Designer @ Storyblocks</p>
            <p className="cv-tl">May 2019 – Jan 2020</p>
            <p className="cv-tl">Arlington, VA</p>
            <ul>
              <li>
                Conducted market and user research to refine and differentiate
                Enterprise offering; designed and launched tailored experiences
                that correlated to a 48% growth of qualified leads
              </li>
              <li>
                Redesigned Storyblocks landing and About Us pages as part of an
                initiative to consolidate products and deliver a unified
                experience
              </li>
              <li>
                Redesigned mobile and desktop experiences for SEO optimization,
                resulting in improved performance and ranking on Google for
                numerous identified search terms
              </li>
              <li>
                Performed continuous A/B testing with the focus on improving
                conversion and retention rates through several aspects of the
                applications (e.g. Plans and Pricing, search experience for
                visitors, and post-sign up segmentation)
              </li>
              <li>
                Maintained and contributed to Storyblocks design system and team
                operations
              </li>
            </ul>
          </div>
          <div className="job-desc">
            <p className="job-title">
              Senior Technical Support Engineer @ Acquia
            </p>
            <p className="cv-tl">Oct 2018 – May 2019</p>
            <p className="cv-tl">Remote</p>
            <ul>
              <li>
                Lead the resolution of technical and business issues impacting
                Fortune 500 companies and Government agencies;
                effectively-researched and analyzed various sources of
                information; thoughtfully delivered intricate findings to
                individuals with varying technical backgrounds
              </li>
              <li>
                Designed and launched Swarm, a product that resulted in improved
                global teams’ velocity and contractual service level agreement
                attainment
              </li>
              <li>
                Served as subject-matter expert during client advisory calls on
                development best practices, performance tuning, and
                infrastructure architecture
              </li>
              <li>
                Mentored and trained support engineers on job functions, as well
                as complex client issues
              </li>
            </ul>
            <p className="job-title">Technical Support Engineer @ Acquia</p>
            <p className="cv-tl">Oct 2016 – Oct 2018</p>
            <p className="cv-tl">Portland, OR</p>
          </div>
          <div className="job-desc">
            <p className="job-title">
              Front-End Developer @ Georgetown University
            </p>
            <p className="cv-tl">May 2014 – Jan 2015</p>
            <p className="cv-tl">Washington, D.C.</p>
            <ul>
              <li>
                Designed, developed, and launched WICS, a product that
                contributed to an increase in the number of services provided to
                over 157,667 classes in ten classroom buildings
              </li>
              <li>
                Identified opportunities for improved internal and external user
                experiences; expanded Classroom Educational Technology Services
                [CETS] scheduling system functionalities and services
              </li>
              <li>
                Owned all aspect of CETS homepage, including copywriting, visual
                design, and user experience
              </li>
            </ul>
          </div>
          <div className="job-desc">
            <p className="job-title">
              Applications Analyst @ Georgetown University
            </p>
            <p className="cv-tl">Sept 2013 – May 2014</p>
            <p className="cv-tl">Washington, D.C.</p>
            <ul>
              <li>
                Leveraged data analytics to identify usability challenges
                associated with McDonough School of Business [MSB] Technology
                Center homepage; addressed information architecture issues and
                expanded application functionalities
              </li>
              <li>
                Employed Google Sites and necessary API’s to launch McDonough
                School of Business project tracking workspace
              </li>
              <li>
                Designed, developed, and maintained Salesforce Mailer campaign
                templates used by MSB, Office of the Dean
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h4>Education and Certifications</h4>
            <p className="job-title">
              Master of Professional Studies (MPS) in Technology Management
            </p>
            <p className="cv-tl">Georgetown University</p>
            <p className="job-title">
              Bachelor of Science (B.S.) in Management Information Systems
            </p>
            <p className="cv-tl">Prince Mohammad bin Fahd University</p>
            <p className="job-title">Acquia Certified Cloud Pro</p>
            <p className="cv-tl">Acquia</p>
            <p className="job-title">Certified Scrum Master, CSM</p>
            <p className="cv-tl">Scrum Alliance</p>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default MiaResume;
