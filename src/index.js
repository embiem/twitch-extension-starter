import "babel-polyfill";
import "./api/twitchExt";
import React from "react";
import ReactDOM from "react-dom";

// load component based on current view (viewer/config etc.)
// uses code-splitting for efficiency
const rootConfig = document.getElementById("root-config");
const rootLiveConfig = document.getElementById("root-liveconfig");
const rootMobile = document.getElementById("root-mobile");
const rootPanel = document.getElementById("root-panel");
const rootVideoComponent = document.getElementById("root-videocomponent");
const rootVideoFullscreen = document.getElementById("root-videofullscreen");

if (rootPanel) {
  import("./components/PanelPage/Panel.js").then(Panel =>
    ReactDOM.render(<Panel.default />, rootPanel)
  );
} else if (rootConfig) {
  import("./components/ConfigPage/Config.js").then(Config =>
    ReactDOM.render(<Config.default />, rootConfig)
  );
} else if (rootLiveConfig) {
  import("./components/LiveConfigPage/LiveConfig.js").then(Config =>
    ReactDOM.render(<Config.default />, rootLiveConfig)
  );
} else if (rootMobile) {
  import("./components/MobilePage/Mobile.js").then(Mobile =>
    ReactDOM.render(<Mobile.default />, rootMobile)
  );
} else if (rootVideoComponent) {
  import("./components/VideoComponentPage/VideoComponent.js").then(VideoComponent =>
    ReactDOM.render(<VideoComponent.default />, rootVideoComponent)
  );
} else if (rootVideoFullscreen) {
  import("./components/VideoFullscreenPage/VideoFullscreen.js").then(VideoFullscreen =>
    ReactDOM.render(<VideoFullscreen.default />, rootVideoFullscreen)
  );
} else {
  console.error("Unsupported Page!");
}
