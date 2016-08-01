# Neutrino Script

Like C for Javascript

# About

Neutrino script is a subset of javascript designed to allow low level memory management, shortcodes, defines, and more. See our website at http://neutrinoscript.com/ for more detailed documentation.

# Installing

Using npm on your command prompt / terminal run the following commands:

```bash
npm install -g neutrino
npm install -g neutrino-memory
```

# Getting Started

See our documentation on our website http://neutrinoscript.com/ for examples of how to write neutrinoscript .neu files.

# Running in NodeJS

neutrino run /path/to/your/script.neu

# Running in the Browser

Please see the documentation on how to use the provided build/neutrino.js file on the web.

** Changes from 1.0.1 to 1.1.0 introduce a new way to load neutrino script via the web.

Simply replace:

```javascript
window.neutrino.web(document);
```

with

```javascript
var neutrino = require('neutrino');
neutrino.web(document);
```

# License

Neutrino script is licensed under the MIT license

