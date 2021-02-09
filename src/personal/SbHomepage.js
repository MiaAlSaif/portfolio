import React from "react";
import sbLanding from "../images/sb-landing.mov";
import sbAbout from "../images/sb-about.mp4";
import homepageImg from "../images/sb-homepage.png";
import homepageGif from "../images/sb-2019.gif";
import wireframes from "../images/sb-wf.png";
import multipleDesigns from "../images/sb-homepage-designs.gif";
import about from "../images/sb-about-wf.png";
import "./SbHomepage.css";

const SbHomepage = () => (
  <div className="sbHomepage">
    <div className="sbHeading">
      <div className="headingBackground" />
    </div>
    <div className="sbBody">
      <div className="sbContent">
        <section>
          <img alt="homepage" src={homepageImg} />
          <h3>Introduction</h3>
          <p>
            <span>Company:</span> Storyblocks, a subscription-based stock media
            company providing an unlimited library of royalty-free video, audio,
            and images
          </p>
          <p>
            <span>Role on Project:</span> Product Designer
          </p>
          <p>
            <span>Platform:</span> Web Application [Desktop and Mobile]
          </p>
          <p>
            <span>Overview:</span> Storyblocks provides businesses and creators
            with unlimited stock media and flexible licensing via a flat pricing
            subscription model. This effort involved researching and designing a
            unified experience representing all stock media types, as well as,
            consistent visuals for Storyblocks Home and About Us pages.
          </p>
          <p>
            <span>Challenge:</span> Storyblocks various media types fell under
            separate domains and did not offer a unified experience to visitors
            and users alike. This presented usability, traceability, and testing
            challenges, as well as, brand identity issues. An observed plateau
            of All Access plans and mix plan signups further validated the need
            for this redesign.
          </p>
          <p>
            <span>Approach:</span> Google analytics, Hotjar recordings and
            heatmaps, internal sales and usage data, heuristic evaluations, user
            interviews, preference testing, A/B Testing, and calculated net
            promoter score.
          </p>
          <p>
            <span>Results:</span> An ideal introductory experience to
            individuals searching 'Storyblocks', improved conversion rate for
            visitors with an emphasis on an All Access subscription, and newly
            generated paths to learnings along with a long term unified approach
            to Plans and Pricing.
          </p>
        </section>
        <section>
          <h3>The Problem</h3>
          <p>
            The current state of Storyblocks homepage lacked uniformity and
            presented several user experience issues. This has impacted the
            company's ability to leverage existing ad platforms to promote the
            brand story, created additional friction in acquiring higher-value
            plans customers, and most importantly was not in-line with
            Storyblocks One Site vision [a mission to unify all products and
            services under one domain and platform as a transition away from
            disjointed applications and domains].
          </p>
          <div className="img-bg">
            <img alt="homepage gif" src={homepageGif} />
          </div>
        </section>
        <section>
          <h3>Research and Findings</h3>
          <p>
            Utilizing data collected from Google Analytics and user interviews,
            we determined the following to be the core tasks for the Storyblocks
            One Site initiative:
          </p>
          <ul>
            <li>
              Design a unified experience and messaging that focuses on
              Storyblocks first, rather than a specific stock media type
            </li>
            <li>
              Reduce friction and provide a more effective path to viewing Plans
              & Pricing (P&P) by streamlining access to selecting media-specific
              plans, as well as, All Access. This, in turn, will unlock new
              learnings and offer a long-term unified P&P solution
            </li>
            <li>
              Revamp Storyblocks.com and About Us page to align with current
              brand identity and visuals
            </li>
            <li>
              Improve SEO through seamless design to increase search ranking on
              monitored essential terms
            </li>
          </ul>
          <p>
            The next step in the research process was to perform a competitive
            analysis, to gain strategic insights into the features, functions,
            flows, and feelings evoked by the design solutions of Storyblocks
            competitors. This allowed me to build up a better body of knowledge
            and identify several areas of opportunity for growth and
            differentiation.
          </p>
          <p>
            Armored by my findings thus far, I began collaborating with our
            in-house brand and marketing teams to align on messaging and
            visuals. Simultaneously, with the help of our in-house SEO
            specialist, we set out to produce copy that aligns with Storyblock’s
            identity and voice. Including individuals from different
            departments, enabled me to approach the design process in a
            collective and detailed manner.
          </p>
          <p>
            After examining Hotjar heat maps and different session recordings,
            to analyze what elements to include and highlight by order, the
            direction was to focus on communicating the following to the
            end-user:
          </p>
          <ul>
            <li>What is Storyblocks</li>
            <li>Why choose Storyblocks (Value props)</li>
            <li>Sample of Storyblocks content from each media type</li>
            <li>
              Who is Storyblocks, to establish a human connection with visitors
            </li>
            <li>Plans and Pricing for all media types</li>
            <li>Social proof</li>
          </ul>
          <p>
            As for the About Us page, the focus was to collaborate with the
            brand team to communicate the Storyblock history and culture most
            accurately and in a resonating manner.
          </p>
        </section>
        <section>
          <h3>Early Solution Iterations</h3>
          <p>
            At this stage in the process, I began to wireframe several design
            possibilities
          </p>
          <p>
            <span>Storyblocks Homepage</span>
          </p>
          <p>First wireframing session outcome</p>
          <div className="img-bg">
            <img alt="wireframes" src={wireframes} />
          </div>
          <p>
            Exploring different visual elements with consideration to
            Storyblocks visual identity and design system
          </p>
          <div className="img-bg">
            <img alt="multiple designs" src={multipleDesigns} />
          </div>
          <p>
            <span>Storyblocks About Us page</span>
          </p>
          <div className="img-bg">
            <img alt="wireframes" src={about} />
          </div>
          <p>
            From there, we narrowed down these options landing on two of the
            most effective designs, which I then transformed into high-fidelity
            prototypes using Sketch and Invision. Then, employing Usability Hub
            and Validately, we conducted preference testing to collect
            quantitative and qualitative data on which design participants
            preferred and why. The test began by presenting a participant with
            both prototypes side-by-side, leading to a series of questions that
            would help us understand the why and what behind their choice.
          </p>
          <p>
            Finally, iterating on the final two designs, I was able to
            incorporate the best aspects of both, in addition to any valuable
            feedback collected from preference test participants.
          </p>
        </section>
        <section>
          <h3>Final Solution</h3>
          <video controls className="cs-video">
            <source src={sbLanding} type="video/mp4" />
          </video>

          <video controls className="cs-video">
            <source src={sbAbout} type="video/mp4" />
          </video>

          <sup>
            This experience was live between Dec 2019-Jan 2021. Storyblocks
            homepage has since been updated.
          </sup>
        </section>
      </div>
    </div>
  </div>
);

export default SbHomepage;
