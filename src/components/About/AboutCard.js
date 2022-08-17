import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Greg Robertson </span>
            and I'm based out of <span className="purple"> Seattle, WA.</span>
            <br />
            I'm a budding Software Engineer who loves to
            transform ideas into reality using code.
            Motivated developer with experience creating
            web apps with Python, Django, JavaScript, React, HTML5, CSS3, Bootstrap.
            <br />
            <br />
            Apart from coding, I love:
          </p>
          <ul>
            <li className="about-activity">
              Traveling
            </li>
            <li className="about-activity">
              Outdoors
            </li>
            <li className="about-activity">
              New Tech
            </li>
            <li className="about-activity">
              Gaming
            </li>
            <li className="about-activity">
              Sports
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
