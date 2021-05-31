import React from "react";
import "../css/disclosure.css";

// https://myparentingcare.netlify.app/

const Disclaimer = () => {
  const site = "myparentingcare.netlify.app";
  return (
    <div className="disclaimer-content">
      <h2>Disclaimer</h2>
      <div className="disclaimer-about">
        <h3>Affiliate Disclosure</h3>
        <p>
          The owner of {site} may receive compensation for recommendations made
          in reference to the products or services on this website.
        </p>
        <p>
          This compensation may be in the form of money, services or
          complimentary products and could exist without any action from a
          website visitor. Should you purchase a product or service that was
          recommended by {site}, it is understood that some form of compensation
          might be made to the {site} owner. For example, if you click on an
          affiliate link at {site} and then make a purchase of the recommended
          product or service, {site} owner may receive compensation.
        </p>
        <p>
          This Compensation Disclosure has been provided for your protection and
          to fully disclose any relationship between {site} product or service
          recommendations and the owners of those product or services.
        </p>
        <p>
          "Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
          affiliates."
        </p>
        <h3>Legal Disclosure</h3>
        <p>
          The information contained in {site} is for general information
          purposes only. The information is provided by {site} and while we
          endeavour to keep the information up to date and correct, we make no
          representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability or availability
          with respect to {site} or the information, products, services, or
          related graphics contained on {site} for any purpose. Any reliance you
          place on such information is therefore strictly at your own risk.
        </p>
        <p>
          In no event will we be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, or any loss or
          damage whatsoever arising from loss of data or profits arising out of,
          or in connection with, the use of {site}.
        </p>
        <p>
          Through {site} you are able to link to other websites which are not
          under the control of {site}. We have no control over the nature,
          content and availability of those sites. The inclusion of any links
          does not necessarily imply a recommendation or endorse the views
          expressed within them.
        </p>
        <p>
          Every effort is made to keep {site} up and running smoothly. However,
          {site} takes no responsibility for, and will not be liable for,
          {site} being temporarily unavailable due to technical issues beyond
          our control.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
