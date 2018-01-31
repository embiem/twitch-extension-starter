import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { getUserById, getChannelById } from "./api/client";

if (window.Twitch.ext) {
  window.Twitch.ext.onAuthorized(async auth => {
    window.twitchAuthObj = auth;

    // this is just a suggestion
    // to get more info about the current user
    const userData = await getUserById(auth.userId.substr(1));
    window.twitchUserObj = userData;

    // this is just a suggestion
    // to get more info about the current channel
    const channelData = await getChannelById(auth.channelId);
    window.twitchChannelObj = channelData;
  });

  window.Twitch.ext.onError(err => {
    console.error(err);
  });
} else {
  console.error("Could not find Twitch.ext object");
}

const rootViewer = document.getElementById("root-viewer");
const rootConfig = document.getElementById("root-config");
const rootLiveConfig = document.getElementById("root-liveconfig");

// load component based on current view (viewer/config etc.)
// uses code-splitting for efficiency
if (rootViewer) {
  import("./components/ViewerPage/Viewer.js").then(Viewer =>
    ReactDOM.render(<Viewer.default />, rootViewer)
  );
} else if (rootConfig) {
  import("./components/ConfigPage/Config.js").then(Config =>
    ReactDOM.render(<Config.default />, rootConfig)
  );
} else if (rootLiveConfig) {
  import("./components/LiveConfigPage/LiveConfig.js").then(Config =>
    ReactDOM.render(<Config.default />, rootLiveConfig)
  );
} else {
  console.error("Unsupported Page!");
}
