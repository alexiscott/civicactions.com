import React from 'react'
import PropTypes from 'prop-types';
import Img from "gatsby-image";
import Button from "../atoms/Buttons";
import ditapFile from "./../../content/docs/CivicActions-DITAP.pdf"


const Hero = ({
  client_name,
  title,
  subtitle,
  cta_text,
  cta_link,
  cta_is_external,
  hero_class,
  image,
  location,
  social
  }) => {


    const team_image = image ? <div className = "hero__image"><Img fluid = {image.childImageSharp.fluid} alt={`Image of ${title}`} /></div>: '';
    let button = null;

    if (cta_link && cta_link === "INTERNAL_DITAP_FILE") {
      // Wrap a form around the button so it so that it will open in Firefox.
      button = cta_link ? <form method="get" action={ ditapFile}>
                                  <Button type = 'hero'
                                          button_text = { cta_text }
                                          link = { ditapFile }
                                          isExternal = { cta_is_external } />
                                </form> : '';
    } else {
      // The button gets displayed only if the cta link is set.
      button = cta_link ? <Button type = 'hero'
                                    button_text = { cta_text }
                                    link = { cta_link }
                                    isExternal = { cta_is_external } /> : '';
    }



  const memberLocation = location ? <div className = "hero__location">{ location } </div> : '';
  let socialLinks;
  let memberSocial;

  if(social) {
    socialLinks = social.map((link, index) => {
      return <a className = "hero__social--link" key={index} href = { link.url }> { link.name } </a>
    });
    memberSocial = <div className = "hero__social">{ socialLinks } </div>;
  }

  return(
    <section className = {"hero usa-grid " + hero_class}>
      { team_image }
      <div className = "hero__text">
        <div className = "hero__client-name">{ client_name }</div>
        <h1 className = "hero__title">{ title }</h1>
        <div className = "hero__intro-text">{ subtitle }</div>
        { memberLocation }
        { memberSocial }
        {button}
      </div>
    </section>
  );
}

export default Hero;

Hero.propTypes = {
  title: PropTypes.string, // The Hero title
  subtitle: PropTypes.string, // The Hero subtitle
  cta_text: PropTypes.string, // Text that the button should display
  cta_link: PropTypes.string // Link for the button text
};
