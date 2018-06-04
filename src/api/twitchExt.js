import { getUserById, getChannelById } from "./client";

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

  window.Twitch.ext.onContext(context => {
    // this will get you info about language & theme (dark/light)
  });

  window.Twitch.ext.onError(err => {
    console.error(err);
  });
} else {
  console.error("Could not find Twitch.ext object");
}