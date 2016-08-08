# Neutrino Script
![NeutrinoScript](https://raw.githubusercontent.com/active9/neutrinoscript/master/neutrino.png)
Like C for Javascript

# About

Neutrino script is a subset of javascript designed to allow low level memory management, shortcodes, defines, and more. See our website at http://neutrinoscript.com/ for more detailed documentation.

The syntax is fresh yet similar to javascript while providing extra abstraction layers to allow more logical code production. This means a script written in Neutrino script can be converted into javascript as it is converted into javascript during the complation process.

# Supported Javascript

Currently Neutrino script is designed to run under EMCAScript 5 equivalent javascript syntax only.

# Installing

Using npm on your command prompt / terminal run the following commands:

```bash
npm install -g neutrino
npm install -g neutrino-memory
```

# Getting Started

See our documentation on our website http://neutrinoscript.com/ for examples of how to write neutrinoscript .neu files.

# Converting NeutrinoScript to Javascript

neutrino convert /path/to/your/script.neu /output/path/script.js

# Running via NodeJS

neutrino /path/to/your/script.neu

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

