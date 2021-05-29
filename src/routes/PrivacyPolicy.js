import React from "react";
import "../css/privacy.css";
const PrivacyPolicy = () => {
  const site = "myparentingcare.netlify.app";
  return (
    <div className="privacy-content">
      <h2>Privacy Policy</h2>
      <div className="privacy-about">
        <p>
          We totally respect {site} online privacy. So it goes without saying
          that we are fully committed to safeguarding {site} online privacy
          while {site}’re here at the Mysterious Writings website. And that’s
          precisely why we have decided to include the following, which
          discloses the information gathering and dissemination practices for
          this website.
        </p>
        <h3>Log Files</h3>
        <p>
          Like most standard websites, this website uses log files. These
          include: Internet Protocol addresses (IP addresses), browser type,
          Internet Service Provider (ISP), referring/exit pages, platform type,
          date/time stamp, and the number of clicks to analyze trends,
          administer the site, track user movement in the aggregate, and to
          gather broad demographic information for aggregate use. IP addresses,
          etc., are not linked to personally identifiable information.
        </p>
        <h3>Web Cookies and Beacons</h3>
        <p>
          Web cookies (also known as HTTP cookies, or just cookies) are parcels
          of text that are sent by a server to a Web browser, and then sent back
          unchanged by the browser each time it accesses that server. In other
          words, a cookie is a piece of data stored on a user’s computer that is
          tied to information about the user. Web beacons are objects that are
          embedded in a webpage or email that are invisible to the user, but
          allow checking that a user has viewed the page or email. Other names
          are web bug, tracking bug, tag or page tag.
        </p>
        <p>
          This website does "not" use cookies. Additionally, some of my business
          partners (for example, advertisers) may use cookies and web beacons as
          well. This site has no access to, or control of advertisers’ web
          cookies or web beacons. If {site} wish to enable cookies,
          {site} may do so through {site} individual browser options.
        </p>
        <h3>Links</h3>
        <p>
          This website contains links to other websites. Please be aware that we
          are not responsible for the privacy practices of other websites. We
          encourage {site}, when {site} leave this website, to read the privacy
          policy (or privacy statement) of each and every website {site} visit,
          as this particular privacy policy applies solely to this particular
          website.
        </p>
        <h3>Advertisers</h3>
        <p>
          {site} uses outside advertising networks and companies in order to
          display ads on this site. These ads may contain cookies and/or web
          beacons in order to collect data in the ad serving process. These such
          cookies and/or web beacons are collected by the companies and/or
          advertising networks, themselves. We do not have any access to this
          information. {site} currently works with several advertising networks
          and companies, such as: google adsense. If you have any questions,
          please check their websites for their respective privacy policies.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
