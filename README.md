## Synopsis

Basic frontend web app template. Uses:

- grunt
- ES6
- babel
- eslint (includes some basic rules that I like)
- express server
- etc

Also demos use of multiple entry points using browserify and factor bundle.
Has some basic authentication use Google Auth2. 

## Installation

Install node, npm, grunt cli, sass.
Run npm install

## Running

Userful commands:

- "grunt" : Will build everything you need to get started. Then run npm run server then nav to localhost:3000.
- "grunt browserify:watch" : Will watch for changes in frontend JS.
- "npm run watch-backend" : Will watch for changes on backend JS.
- "grunt watch:style" : Watches changes in stylesheets.
- "grunt watch:html" : Watches for html/view changes.
- "npm run server": Runs express server on port 3000.
