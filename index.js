#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var crypto = require('crypto');
var osenv = require('osenv');

var jsoptions = {
  compress: true,
  'only-parse': false,
  'emit-ast': false,
  'pretty-print': false,
  bare: true,
  'load-instead': false,
  warn: true,
  null: false,
  'simple-log': false,
  trace: false,
  output: '',
  memcheck: false,
  help: false,
  nowarn: false
};

/**
 * Executes and runs a .neu script with optional callback
 *
 * @param {File} filename - The .neu file to run
 * @param {Callback} cb - Optional callback function that returns the executed scripts console output
 */
function run(filename, cb) {
  try {
    var stats = fs.statSync(path.resolve(filename));
    if (stats) {
      var lljs = require('./vendors/lljs/bin/ljc');
      process.cwd(path.dirname(path.resolve(filename)));
      var tmpname = 'neu' + crypto.randomBytes(4).readUInt32LE(0) + 'trino.js';
      var tmpfilename = osenv.tmpdir() + '/' + path.basename(filename.replace('.neu', tmpname));
      lljs.RunNEU(filename, jsoptions, function(data) {
        fs.writeFileSync(tmpfilename, data);
        if (cb) {
          cb(require('child_process').execSync('node ' + tmpfilename, [], {
            cwd: osenv.tmpdir()
          }).toString());
          process.exit(1);
        } else {
          console.log(require('child_process').execSync('node ' + tmpfilename, [], {
            cwd: osenv.tmpdir()
          }).toString());
          process.exit(1);
        }
        fs.unlink(tmpfilename);
        process.exit(1);
      });
    } else {
      console.log('File Not Found:', filename);
      process.exit(1);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

/**
 * Converts a neutrino script (.neu) to javascript (.js)
 *
 * @param {File} filename - The .neu file to run
 * @param {File} outfile - The .js output file
 * @param {Object} options - Optional options to pass during conversion
 */
function convertToJS(filename, outfile, options) {
  // Passed Options Win
  jsoptions.compress = options.compress;
  try {
    var stats = fs.statSync(path.resolve(filename));
    if (stats) {
      var lljs = require('./vendors/lljs/bin/ljc');
      process.cwd(path.dirname(path.resolve(filename)));
      lljs.FromNEUtoJS(filename, outfile, jsoptions);
    } else {
      console.log('File Not Found:', filename);
      process.exit(1);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

/**
 * Runs a neutrino (.neutrino) binary
 *
 * @param {File} filename - The .neu file to run
 * @param {Callback} cb - Optional callback function that returns the executed scripts console output
 */
function runBinary(filename, cb) {
  try {
    var stats = fs.statSync(path.resolve(filename));
    if (stats) {
      var compressjs = require('compressjs');
      var algorithm = compressjs.BWTC;
      var tmpname = 'neu' + crypto.randomBytes(4).readUInt32LE(0) + 'trino.js';
      var tmpfilename = osenv.tmpdir() + '/' + path.basename(filename.replace('.neutrino', tmpname));
      var filed = fs.readFileSync(filename);
      var data = new Buffer(filed, 'utf8');
      var decompressed = new Buffer(algorithm.decompressFile(data)).toString();
      fs.writeFileSync(tmpfilename, decompressed);
      if (cb) {
        cb(require('child_process').execSync('node ' + tmpfilename, [], {
          cwd: osenv.tmpdir()
        }).toString());
        process.exit(1);
      } else {
        console.log(require('child_process').execSync('node ' + tmpfilename, [], {
          cwd: osenv.tmpdir()
        }).toString());
        process.exit(1);
      }
      fs.unlink(tmpfilename);
      process.exit(1);
    } else {
      console.log('File Not Found:', filename);
      process.exit(1);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

/**
 * Finds all script tages with type="text/neutrinoscript" and executes the code within that script block
 *
 * @paramm {Document} document - A brower page's document tag
 */
function web(document) {
  var scripts = document.getElementsByTagName('script');
  for (var script in scripts) {
    if (scripts[script].type === 'text/neutrinoscript') {
      var lljs = require('./vendors/lljs/bin/ljc');
      try {
        lljs.RunNEUScript(scripts[script].innerHTML, jsoptions, function(data) {
          eval(data); // @TODO: Remove the evil eval
        });
      } catch (e) {
        console.log('Error:', e);
      }
    }
  }
}

/**
 * Converts a web based neutrinoscript source to javascript
 *
 * @param {String} script - The .neu file or script contents
 * @param {Callback} cb - Optional callback function that returns the executed scripts console output
 */
function webToJS(script, cb) {
  var lljs = require('./vendors/lljs/bin/ljc');
  try {
    lljs.RunNEUScript(script, jsoptions, function(data) {
      cb(data);
    });
  } catch (e) {
    console.log('Error:', e);
  }
}

module.exports = {
  run: run,
  convertToJS: convertToJS,
  runBinary: runBinary,
  web: web,
  webToJS: webToJS
};