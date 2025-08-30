checkSdkCompatibility(0, 1);
let exports = {};
"use strict";

// dist/index.js
Object.defineProperty(exports, "__esModule", { value: true });
var eventLoop = require("@flipperdevices/fz-sdk/event_loop");
var gui = require("@flipperdevices/fz-sdk/gui");
var math = require("@flipperdevices/fz-sdk/math");
var length;
var diff;
var randval;
var output;
var timer = eventLoop.timer("periodic", 200);
var scale = 255;
function padNumber(numString, desiredLength) {
  length = numString.length;
  diff = desiredLength - length;
  if (diff === 1) {
    return "0" + numString;
  } else if (diff === 2) {
    return "00" + numString;
  } else if (diff === 0) {
    return numString;
  }
}
eventLoop.subscribe(timer, function(_subscription) {
  randval = math.trunc(math.random() * scale).toString();
  output = padNumber(randval, 3);
  print("Outputting:", output);
  console.log(output);
}, eventLoop);
eventLoop.subscribe(gui.viewDispatcher.navigation, function(_sub, _item, eventLoop2) {
  eventLoop2.stop();
}, eventLoop);
eventLoop.run();
