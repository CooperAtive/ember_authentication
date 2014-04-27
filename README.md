## My Ember Authentication Playgrount following the Embercast Client-side Authentication series

Updated Ember, Handlebars and jQuery to most recent versions and made necessary changes to get basic
functionality and get rid of all deprication warnings.

Everything below here is directly from EmberCast
## Install

Clone this repository, and in the new directory, run:

    npm install
    node server.js

This will run a Node server on `localhost:3000` that you can visit in
your browser.

## Structure

`server.js` in the root directory is the Node server that features
very simple token-based authentication. 

`public/js/app.js` is where all Ember code for this Embercast resides.

