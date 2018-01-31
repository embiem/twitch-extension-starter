# Twitch Extension Starter

This project will get you started developing Twitch Extensions using React!

TODO:
* explain in README how to package
* use the bestzip package to auto-zip a build for upload to twitch

## Getting started

1. Install with yarn or npm:

`yarn` or `npm install`

2. Bundle and start development server:

`yarn start` or `npm run start`

3. It will tell you "Extension Boilerplate service running on https://localhost:3000/". Go to this address in your browser.

4. Open source files in `src`, change something (e.g. in Viewer.js) and watch it being updated live in the browser!

5. Happy hacking!

## Notes

It references a fork of parcel-bundler that is stable and has a change to ensure no unsafe evals are used, which is not allowed in Twitch's iframes that will contain your extension.

Currently, this fork uses parcel v1.3.1 with the unsafe eval fix.