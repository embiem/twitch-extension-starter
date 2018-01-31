// a helper function to get you started fetching stuff
// from Twitch's APIs
async function twitchFetch(url) {
  const headers = new Headers({
    Accept: "application/vnd.twitchtv.v5+json",
    // TODO put your app's Client-ID in
    "Client-ID": "YOUR_CLIENT_ID"
  });

  const options = { method: "GET", headers: headers };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
  return undefined;
}

async function getUserById(userId) {
  const url = `https://api.twitch.tv/kraken/users/${userId}`;
  const result = await twitchFetch(url);
  return result;
}

async function getChannelById(channelId) {
  const url = `https://api.twitch.tv/kraken/channels/${channelId}`;
  const result = await twitchFetch(url);
  return result;
}

export { getUserById, getChannelById };
