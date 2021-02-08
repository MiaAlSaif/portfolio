import React from "react";
import swarmHeader from "../images/swarmheader.png";
import swarmWireframe from "../images/swarm-wf.png";
import swarmWhiteboard from "../images/swarm-wb.png";
import swarmWorkflow from "../images/swarm-workflow.svg";
import swarmScreens from "../images/swarm-screens.png";
import swarmInternals from "../images/swarm-internals.png";
import "./SbHomepage.css";

const AcquiaSwarm = () => (
  <div className="sbHomepage">
    <div className="sbHeading">
      <div className="headingBackground" />
    </div>
    <div className="sbBody">
      <div className="sbContent">
        <section>
          <img alt="header" src={swarmHeader} />
          <h3>Introduction</h3>
          <p>
            <span>Company:</span> Acquia, a software-as-a-service company
            providing enterprise products, services, and technical support for
            the open-source web content management platform Drupal
          </p>
          <p>
            <span>Role on Project:</span> Product Designer
          </p>
          <p>
            <span>Timeline:</span> 4 weeks (incl. development)
          </p>
          <p>
            <span>Platform:</span> Zendesk
          </p>
          <p>
            <span>Overview:</span> Swarm, a Zendesk application that enables and
            facilitates collaboration on customer submitted tickets for the
            purpose of increasing department velocity and service level
            agreement attainment.
          </p>
          <p>
            <span>Challenge:</span> Internally, the greatest challenge was
            redesigning the existing workflow and training staff to adopt a new
            framework for resolving tickets. Technically, the lack of feature
            support via Zendesk and the need to implement a self-hosted API
            application.
          </p>
          <p>
            <span>Approach:</span> Surveys, User interviews, Usability testing,
            Benchmark testing, feature prioritizing, and affinity mapping
          </p>
          <p>
            <span>Results:</span> Swarm unlocks the ability to have multiple
            ticket owners across global and cross-departmental teams. It
            empowers staff members to resolve customer issues timely and
            accurately, knowing they can access internal support at an
            exponential rate.
          </p>
        </section>
        <section>
          <h3>The Problem</h3>
          <p>
            The existing collaboration model is transactional by nature. Seeking
            assistance to resolve a customer submitted issue that requires
            further information from another department (e.g. Account
            Management, Billing, Sales...etc.), or being able to transition a
            ticket globally was a cumbersome and disjointed process that spanned
            over Emails, Slack messages, and Jira. Zendesk native web
            application simply did not support multiple ticket owners or a clear
            handoff process.
          </p>
        </section>
        <section>
          <h3>The Research</h3>
          <p>
            I began by identifying target users: Individuals utilizing Zendesk,
            residing across different global time zones, to resolve customer
            reported issues or requests.
          </p>
          <ul>
            <li>Customer Support Engineers</li>
            <li>Support Leadership</li>
            <li>Technical Account Managers</li>
            <li>Account Managers</li>
            <li>Remote Administrators</li>
            <li>Ready Teams</li>
            <li>Engineering Teams</li>
            <li>IT Department Team</li>
            <li>Professional Services Team</li>
            <li>Sales Persons</li>
          </ul>
        </section>
        <section>
          <h3>User Interviews and workflow analysis revealed the following</h3>
          <p>Identified User Tasks throughout the lifecycle of a ticket</p>
          <p>Task 1</p>
          <p>
            User owns a customer submitted ticket that is in need of senior
            support assistance
          </p>
          <p>Task 2</p>
          <p>
            User owns a customer submitted ticket that is to be performed by a
            different team (e.g. Remote Administration)
          </p>
          <p>Task 3</p>
          <p>
            User owns a customer submitted ticket that is to be handed off to
            another user residing in a different time zone for continuous
            resolution.
          </p>
          <p>Identified Current Workflows</p>
          <p>Ticket owner workflow</p>
          <ol>
            <li>
              An owner requesting assistance utilizes a preset Zendesk macro.
              The macro displays an internal comment with the following fields
              to be populated:
            </li>
            <ul>
              <li>Provide a description of the issue</li>
              <li>What troubleshooting steps have been performed thus far</li>
              <li>What questions can a collaborator answer</li>
            </ul>
            <li>
              Owner manually provides details for each field in the internal
              comment
            </li>
            <li>
              A comment is published; the ticket is submitted in an Open status
              and is viewable from a Collaboration queue, which is only
              accessible by Support members.
            </li>
            <li>
              Owner receives input from a single collaborator in an internal
              comment
            </li>
            <li>The ticket is removed from the Collaboration queue</li>
            <li>Process is repeated if further assistance is required</li>
          </ol>
          <p>Collaborator workflow</p>
          <ol>
            <li>Collaborator visits Collaboration queue</li>
            <li>
              Collaborator selects a ticket and provides assistance in an
              internal comment
            </li>
            <li>The ticket is removed from the Collaboration queue</li>
          </ol>
          <p>
            The following are goals Identified through discussions with
            stakeholders and surveying users
          </p>
          <p>High-level goals</p>
          <ul>
            <li>
              Improve contractual service level agreement [SLA] compliance
            </li>
            <li>Enable targeted collaboration throughout ticket lifecycle</li>
            <li>Enable targeted collaboration throughout ticket lifecycle</li>
            <li>
              Transition tickets globally and across departments uninterruptedly
            </li>
          </ul>
          <p>Detailed goals</p>
          <ul>
            <li>Allow multiple ticket owners</li>
            <li>Allow for any identified user to become a collaborator</li>
            <li>
              An active collaborator/owner on a ticket should be able to see
              their tickets in a Zendesk view
            </li>
          </ul>
        </section>
        <section>
          <h3>Early solution iterations</h3>
          <p>
            In conversations with the Zendesk team, we uncovered technical
            limitations and pivoted towards designing and developing a
            self-hosted application that would integrate with the existing
            Zendesk configuration.
          </p>
          <p>Wireframes</p>
          <img alt="wireframe" src={swarmWireframe} />
          <img alt="whiteboard" src={swarmWhiteboard} />
          <p>User Flow for ticker owners and collaborators</p>
          <img alt="workflow" src={swarmWorkflow} />
          <p>Early User Testing</p>
          <p>
            From there, a minimal viable product was designed, developed, and
            implemented for the purpose of testing. At this time, I had
            established a diverse beta group from different teams to utilize the
            application over a period of two weeks. The goal was to track key
            performance indicators, as well as, solicit feedback for
            consideration in further iterations.
          </p>
        </section>
        <section>
          <h3>Synthesis of research</h3>
          <ul>
            <li>
              Due to the aforementioned technical limitations, which are the
              result of necessary features not being offered through Zendesk;
              additional design and interaction considerations must be afforded
              to maintain visual and workflow consistency.
            </li>
            <li>
              User interviews highlighted the importance of copy and action
              trigger labels for this application; further research and testing
              were conducted to ensure the language used encouraged
              collaboration and is in keeping with Acquia’s culture .
            </li>
            <li>
              User testing emphasized the importance of implementing visual cues
              in later iterations to ease the shift from previous workflows; as
              well as the importance of thoughtfully planning the onboarding
              process once Swarm is rolled out.
            </li>
          </ul>
          <p>Solution</p>
          <p>
            The final product introduced a new workflow of owning,
            collaborating, and handing off tickets cross-departmentally and
            globally. This involved an interface that presented numerous
            interaction possibilities.
          </p>
          <img alt="multiple screens" src={swarmScreens} />
          <p>
            To satisfy the need for cohesion and consistency, as well as a
            smooth transition into new workflows, the overall look and feel of
            the final product were adapted to Zendesk’s interface.
          </p>
          <p>
            Visual cues that reflect the changing state of the primary action
            button, such as copy and color, were implemented. This allowed users
            to identify currently available actions on a given ticket.
          </p>
          <p>
            Further, the final design maintains a point of reference by
            utilizing Zendesk's internal commenting feature. Through testing and
            analysis, myself and development identified the necessary triggers
            to populate and publish pre-configured internal comments. This
            allowed users to review the history of a ticket accurately and
            swiftly.
          </p>
          <img alt="designs" src={swarmInternals} />
        </section>
        <section>
          <h3>Measured Impact</h3>
          <p>
            The impact of this solution was measured over two annual quarters
            using Domo statistics. The data observed showed an influx in
            collaborated tickets; consequently improved teams’ velocity. Also,
            aggregate time logged for handoff meetings was optimized, together
            with improved and consistent communication with clients. This was
            reflected in customer satisfaction statistics collected via Email
            surveys that measured higher than previous quarters.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default AcquiaSwarm;
