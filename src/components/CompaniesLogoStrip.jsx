import React from "react";

function CompaniesLogoStrip() {
  return (
    <section className="flex flex-col justify-between p-10">
      <div className="flex justify-evenly items-center flex-wrap p-5">
        <img
          src="static/coinbase.png"
          alt="Coinbase"
          className="h-12"
        />
        <img
          src="static/spotify.png"
          alt="Spotify"
          className="h-12"
        />
        
        <img
          src="static/Slack.png"
          alt="Slack"
          className="h-10"
        />
        <img
          src="static/webflow.png"
          alt="Webflow"
          className="h-10"
        />
        
        <img
          src="static/coinbase.png"
          alt="Coinbase"
          className="h-12"
        />
        <img
          src="static/Zoom.png"
          alt="Zoom"
          className="h-10"
        />
        
        
      </div>
    </section>
  );
}

export default CompaniesLogoStrip;
