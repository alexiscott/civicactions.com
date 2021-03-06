import React from "react"
import Link from "gatsby-link"
import SocialLinks from "./../organisms/SocialLinks"
import Logo from "./../atoms/logo/Logo"
import USWDS from "./../scripts/USWDS"
import FooterNav from "./../navigation/FooterNav"

const Footer = ({ email, phone, address, address_line_2, city }) => {
  const email_link = `/mailto:${email}`

  return (
    <div className="footer__wrapper  footer">
      <footer className="usa-footer usa-footer-big" role="contentinfo">
        <div className="usa-footer-primary-section">
          <div className="usa-grid">
            <div className="usa-footer-contact-links usa-width-one-third">
              <Logo />
              <div className="footer__address">
                <Link to={email_link}> {email} </Link>
                <div className="footer__phone">{phone}</div>
                <div>{address}</div>
                <div> {address_line_2}</div>
                <div> {city} </div>
              </div>
              <div className="footer__social_links">
                <SocialLinks />
              </div>
            </div>
            <FooterNav />
          </div>
        </div>
      </footer>
      <USWDS />
    </div>
  )
}
export default Footer
