import React from "react";
import { RWebShare } from "react-web-share";
import { Button } from "@material-tailwind/react";

const ShareButton = () => {
    return (
      <div>
        <RWebShare
          data={{
            text: "Brooklyn Stoop Sale, be there or be square!",
            url: "",
            title: "Share this event with friends"
          }}
          onClick={() => console.info("share successful!")}
        >
          <button varient="Gradient" className="rounded-full share-button">Share</button>
        </RWebShare>
      </div>
    );
  };

  export default ShareButton;