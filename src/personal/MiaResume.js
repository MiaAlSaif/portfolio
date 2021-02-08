import React from "react";
import entVideo from "../images/ENT-vid.mp4";
import entVideoMobile from "../images/ent-mobile.mov";
import segmentation from "../images/segmentation.jpg";
import whiteboard from "../images/ent-wb.jpg";
import personas from "../images/ent-persona.jpg";
import sketches from "../images/ent-wf-sketch.jpg";
import iteration from "../images/ent-wf2.jpg";
import iterationTwo from "../images/ent-wf1.jpg";
import navSketch from "../images/ent-nav.jpg";
import topNav from "../images/ent-top-nav.png";
import multiScreens from "../images/ent-screens.jpg";
import topNavGif from "../images/ent-top-nav.gif";
import finalPersona from "../images/ent-persona-final.png";
import "./SbHomepage.css";

const MiaResume = () => (
  <div className="sbHomepage">
    <div className="sbHeading">
      <div className="headingBackground" />
    </div>
    <div className="sbBody">
      <div className="sbContent">
        <section>
          <div className="video">
            <video controls>
              <source src={entVideo} type="video/mp4" />
            </video>
          </div>
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
            <span>Overview:</span> Storyblocks Enterprise licensing provides
            companies with unlimited stock content for a flat fee. The license
            can be written to a company and provides $1 million in
            indemnification. Storyblocks Enterprise is widely used by
            Broadcasting, Production, and Marketing groups.
          </p>
          <p>
            <span>Challenge:</span> Internally, the greatest challenge was the
            absence of a systematized knowledge base on Enterprise clients.
            Externally, potential leads struggled to discern what license
            satisfied their usage needs along with the appropriate legal
            coverage.
          </p>
          <p>
            <span>Approach:</span> Google analytics, Hotjar recordings and
            heatmaps, internal sales and usage data, heuristic evaluations, user
            interviews, and calculated net promoter score.
          </p>
          <p>
            <span>Results:</span> Foundational paths on-site for key products
            and segments, which unlocked new opportunities for future growth. In
            addition to codifying institutional knowledge and learnings of said
            key Enterprise personas.
          </p>
        </section>
        <section>
          <h3>The Problem</h3>
          <p>
            The current state of Enterprise offering lacked clarity and
            presented several challenges blocking growth. Storyblocks Enterprise
            product page resided on a separate domain, which resulted in
            visibility, traceability, and testing issues. Customer feedback and
            collected analytics raised concerns surrounding licensing
            information presented to leads. In addition, there was an absence of
            direct paths targeting key user personas. The main motivator for
            this effort was the inability to meet quarterly key performance
            indicators [KPI's], which negatively impacted both the business and
            customers.
          </p>
        </section>
        <section>
          <h3>The Research</h3>
          <p>
            At the beginning of the research process, myself and relevant
            stakeholders set a goal of seeking a comprehensive and data-driven
            understanding of both Enterprise and Standard license customers for
            the purpose of creating an Enterprise Value Proposition that excites
            our core customers. The plan was to accomplish this through ongoing
            quantitative and qualitative methods, together with collecting
            segmented Net Promoter Score. I started by engaging in interviews
            with 19 of Storyblocks Enterprise closed win/lost clients, along
            with recording key data from numerous sales call opportunities on
            the following:
          </p>
          <ul>
            <li>The stock provider discovery process</li>
            <li>The reason behind selecting Enterprise licensing</li>
            <li>Purchaser and Creator roles and touchpoints</li>
            <li>Top pain points when creating content</li>
            <li>Workflow - how customers really do their work</li>
          </ul>
          <p>
            Next, I proceeded to review both Google Analytics and internal sales
            and usage data. In addition to investigating visibility issues
            through heuristic evaluations, and conducting further user
            interviews. The following were identified to be the main problem
            areas:
          </p>
          <ul>
            <li>
              Licensing (including indemnification, transferability, and
              distribution rights)
            </li>
            <li>Content and search</li>
            <li>Internal Purchasing Friction</li>
          </ul>
          <p>More specifically:</p>
          <ul>
            <li>
              Storyblocks API offering and resources offered, along with use
              cases
            </li>
            <li>Lack of Storyblocks Enterprise visibility on the main site</li>
            <li>
              The absence of an internal data repository focused on Enterprise
              personas and segmentation
            </li>
          </ul>
          <p>
            To understand our users and to aid the process of identifying,
            learning about, and focusing on high value customer segments. We ran
            a mandatory post-signup persona survey for all users, for several
            weeks.
          </p>
          <img alt="steps" src={segmentation} />
          <p>
            The findings were quite interesting, for instance almost half
            [redacted value] of our users are primarily creating content for
            YouTube. Survey also revealed, in-house and production house editors
            make up two of our highest average PTC segments. Together, they
            account for a relatively high percentage [redacted value] of our
            Standard license users for video media. This validated one
            hypothesis around licensing confusion, where some customers failed
            to select the legal coverage necessary for their usage. Finally, to
            no surprise, data showed that professional users are preferable
            customers than hobbyists, this is because they activate better and
            select higher cost plans.
          </p>
        </section>
        <section>
          <h3>Synthesis of research</h3>
          <ul>
            <li>Enterprise main personas are as follows:</li>
            <ul>
              <li>
                Broadcasting companies (e.g. NBC News, Cox Media, Gray
                Television, Nexstar Media Group)
              </li>
              <li>
                Production companies (e.g. NBC, Amazon Studios, History Channel,
                A&E)
              </li>
              <li>
                Marketing Teams (e.g. AWS, Navy Federal Credit Union, Petco,
                Best Buy, EY, HCA Healthcare, HubSpot)
              </li>
              <li>
                API Clients (e.g. Prezi, Biteable, Moovly, Softcube, Vistaprint,
                WeVideo, Powtoon, Lightricks)
              </li>
            </ul>
            <p>
              These personas would later be documented and distributed
              internally, as well as, targeted through on-site experiences
              catered to each segment
            </p>
            <li>
              I was able to identify areas of opportunity to improve visibility
              on the main site, such as top navigation, footer, migrating
              Enterprise landing page onto the main domain, user account page,
              and leveraging Intercom to deliver targeted messaging
            </li>
            <li>
              A well-established plan to surface specific content genres that
              appealed and matched the use cases of each segment based on
              research findings
            </li>
          </ul>
        </section>
        <section>
          <h3>Testing and Early Solution Iterations</h3>
          <p>
            Using the data we had compiled thus far, I established a few
            hypotheses on pain points and began working towards validating each
            through A/B testing and examining analytics from Hotjar session
            recordings and heatmaps.
          </p>
          <p>
            On September 11, 2019 Enterprise landing page was successfully
            migrated onto the main domain.
          </p>
          <p>
            Next, I began an iterative process of creating on-site experiences
            tailored to each of the defined personas. The goal was to create
            development-friendly, component-based template pages that can be
            easily adapted to each segment. Along with that, I began to shape
            the visual identity of Enterprise offering and differentiating it
            from our Standard licensing while staying true to the overall brand
            identity. Along with that effort, I also worked to design and
            document these personas for internal usage.
          </p>
          <img alt="whiteboard" src={whiteboard} />
          <img alt="personas" src={personas} />
          <img alt="sketches" src={sketches} />
          <img alt="iteration" src={iteration} />
          <img alt="iteration two" src={iterationTwo} />
          <p>
            Simultaneously, in anticipation of the completion of these on-site
            experiences and to improve product visibility, I designed a few
            solutions to introduce and highlight Business Solutions in
            Storyblock top navigation. Some of these options were adapted to the
            current navigation, and some offered a vision for the future
          </p>
          <img alt="navigation sketch" src={navSketch} />
          <img alt="navigation iteration" src={topNav} />
          <p>
            On Nov 4th, 2019 I launched an A/B top navigation test displaying
            Business Solutions, which linked to the Enterprise landing page and
            four new targeted pages catering to each persona.
          </p>
          <p>
            By Dec 3rd, the test proved to significantly increase qualified
            leads and was rolled out to all users and visitors.
          </p>
          <img alt="multiple screens" src={multiScreens} />
          <p>The final outcome of this effort included the following:</p>
          <ul>
            <li>
              Migration of Storyblocks Enterprise microsite onto the main
              domain, with the intent of a redesign at a later point
            </li>
            <li>
              Four search engine optimized experiences, designed as
              component-based reusable templates customized to target identified
              personas
            </li>
            <li>
              Integrated Business Solutions in the global top navigation bar and
              footer
            </li>
            <img alt="top navigation gif" src={topNavGif} />
            <li>
              Documented and distributed researched and validated personas
              together with segmentation data internally [values and information
              redacted from sample below]
            </li>
            <img alt="final persona" src={finalPersona} />
            <div className="video">
              <video controls>
                <source src={entVideoMobile} type="video/mp4" />
              </video>
            </div>
          </ul>
        </section>
        <section>
          <h3>Measured Impact</h3>
          <ul>
            <li>Increased traffic by ~33%</li>
            <ul>
              <li>
                Enterprise microsite averaged ~1,050 unique page views per week,
                while all four enterprise pages averaged ~1,400.
              </li>
            </ul>
            <li>Increased qualified leads by ~35%</li>
            <ul>
              <li>
                Recorded an average of 88 qualified leads/week in 10 weeks
                leading up to migration, averaged 119 in 10 weeks following
              </li>
            </ul>
          </ul>
          <p>As for benefits and growth unlocks:</p>
          <ul>
            <li>
              This effort unlocked the ability to better understand visitor/lead
              on-site behavior
            </li>
            <ul>
              <li>
                <span>Prior:</span> Cross-site tracking is poor to non-existent
                due to cross-domain tracking to WordPress being unreliable
              </li>
              <li>
                <span>After:</span> Lead capture page is on the core domain and
                using the same framework for tracking. This served us in better
                understanding what Enterprise visitors and leads are doing
                on-site (e.g. what pages they visit and what content they are
                searching for)
              </li>
            </ul>
            <li>
              Unlocked the ability to improve Enterprise testing and improved
              robust analysis
            </li>
            <ul>
              <li>
                <span>Prior:</span> Could not run tests on WordPress, presenting
                difficulties in optimization
              </li>
              <li>
                <span>After:</span>
              </li>
              <ul>
                <li>
                  We now have the ability to run both engineering tests using
                  our A/B testing framework, in addition to Google Optimize
                  tests.
                </li>
                <li>
                  Unlocked Intercom access to deliver customized experiences
                  based on visitor
                </li>
                <li>
                  Unlocked ability to use valuable tools, such as HotJar,
                  ClearBit, etc.
                </li>
              </ul>
            </ul>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default MiaResume;
