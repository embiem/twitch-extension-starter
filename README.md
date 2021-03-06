# Twitch Extension Starter

**Note: This project is outdated and the official [TwitchDev](https://github.com/twitchdev?type=source) resources/repos are recommended. If you're new to Twitch extensions, I highly recommend checking out this repo: [/extension-getting-started](https://github.com/twitchdev/extension-getting-started)**

This project will get you started developing Twitch Extensions using React!

## Getting started

1. Install with yarn or npm:

`yarn` or `npm install`

2. Bundle and start development server:

`yarn start` or `npm run start`

3. It will tell you the paths to the different pages in the console, e.g. "https://localhost:8080/panel.html". Go to this address in your browser.

4. Open file in `src/components/PanelPage/Panel.js`, change `<h1>This is the panel!</h1>` to something cool and watch it being updated live in the browser!

5. Happy hacking!

## Testing on Twitch

To test your extension on Twitch while running the development server (`yarn start` as described above), follow these steps:

1. Create your Twitch extension at https://dev.twitch.tv

2. Inside your extension versions, under "Asset Hosting", insert the correct values for `Testing Base URI` (by default: `https://localhost:8080/`), `Panel Viewer Path` (default: `panel.html`), `Config Path` (default: `config.html`) and `Live-Config Path` (default: `live_config.html`) respectively. These are the pages defined under `src/pages/`.

3. On the Versions -> Version Status page, click the "View on Twitch and Install" button.

4. Install your extension. You should be redirected to your config page and already see the content (default: "You're a streamer on the config page!")

5. Go back to the extensions inside your streamer dashboard, locate your extension under "Installed Extensions" and "Activate" your new extension.

6. Go to your channel and see the Viewer page of your extension integrated on Twitch! Make any changes and see them change live!!

7. Lastly go to your live streamer dashboard and see your live config page displayed in the Extensions widget!

In Short:

* Your viewer page is being displayed on your channel either as a video overlay (when your channel is live) or panel. You can choose between overlay or panel when creating the extension.

* Your config page is being displayed in your streamer's extensions dashboard, after installing the extension.

* Your live config page is being displayed in your streamer's live dashboard, after installing and activating the extension.

## Packaged ZIP

To create the ZIP, after successfully testing the extension, run "yarn package". This will create a new ZIP file in `/dist_zip` folder named after the current version set in your package.json.

In your extension's settings under Versions -> Version Assets, upload the created ZIP file. Then your're ready to move to "Hosted Test" in the Version Status section.

## Alternative

There's now an official developer-rig by TwitchDev, which gives you a more integrated environment. For an official solution, please go to https://github.com/twitchdev/developer-rig. You could also combine the rig with this starter code.
