import React from "react";
import TrusatLogoBig from "../assets/TrusatLogoBig.svg";
import { NavLink } from "react-router-dom";
import SocialIcons from "../app/components/SocialIcons";

export default function SubscriptionConfirmed() {
  return (
    <div>
      <div className="static-page__wrapper join__wrapper">
        <div className="join__header">
          <img
            className="join__image join__logo-image"
            src={TrusatLogoBig}
            alt="Trusat logo"
          ></img>
          <h2 className="join__trusat-tagline">
            OPEN SOURCE SPACE SUSTAINABILITY
          </h2>
        </div>

        <p className="subscription-confirmed__copy">Signup Confirmed</p>
        <p className="static-page__copy">
          Launched on October 21, 2019, you are among the earliest members this
          global open source community dedicated to preserving our spacefaring
          future. TruSat is currently a prototype, with only a fraction of its
          planned functionality. As an early member, you’ll have opportunities
          to shape TruSat at every stage.
        </p>
        <p className="static-page__copy">
          Please check your inbox for a welcome email. You will receive updates
          about new features and opportunities to get involved in building both
          the software and community powering TruSat.
        </p>
        <p className="static-page__copy static-page__copy--bold join__subheader">
          <a
            className="subscription-confirmed__link app__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discuss.trusat.org/"
          >
            Join the conversation
          </a>
        </p>
        <p className="static-page__copy">
          Chat with your fellow TruSat community members and the people behind
          TruSat. Ask questions, share ideas.
        </p>
        <p className="static-page__copy static-page__copy--bold join__subheader">
          <NavLink
            className="app__nav-link static-page__link app__link"
            to="/how"
          >
            Learn how to track satellites
          </NavLink>
        </p>
        <p className="static-page__copy">
          Try your hand at sat spotting and build your skills
        </p>
        <p className="static-page__copy static-page__copy--bold join__subheader">
          <NavLink
            className="app__nav-link static-page__link app__link"
            to="/faq"
          >
            Learn more about TruSat
          </NavLink>
        </p>
        <p className="static-page__copy">
          Who’s behind TruSat, why does it exist, how does it work?
        </p>
        <p className="static-page__copy static-page__copy--bold join__subheader">
          Follow us
        </p>
        <SocialIcons />
      </div>
    </div>
  );
}
