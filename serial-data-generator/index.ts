// import modules
// caution: `eventLoop` HAS to be imported before `gui`, and `gui` HAS to be
// imported before any `gui` submodules.
import * as eventLoop from "@flipperdevices/fz-sdk/event_loop";
import * as gui from "@flipperdevices/fz-sdk/gui";
import * as math from "@flipperdevices/fz-sdk/math";
// a common pattern is to declare all the views that your app uses on one object

let length;
let diff;
let randval;
let output;

let timer = eventLoop.timer("periodic", 200);
let scale = 255;

function padNumber(numString, desiredLength) {
    length = numString.length; // get length of number as a string
    diff = desiredLength - length; // how many zeros to pad to get to desired length
    if (diff===1){ // Pad 1 zero
        return ('0'+numString);
    }
    else if (diff === 2) { // Pad 2 zeroes
        return ('00'+numString);
    }
    else if (diff === 0){ // The string is already the correct length
        return numString;
    }
}


eventLoop.subscribe(timer, function(_subscription,) {
    randval = math.trunc(math.random()*scale).toString();
    output = padNumber(randval, 3);
    print("Outputting:", output );
    console.log(output);
}, eventLoop);

// stop app on back button press
eventLoop.subscribe(gui.viewDispatcher.navigation, (_sub, _item, eventLoop) => {
    eventLoop.stop();
}, eventLoop);

// run app
eventLoop.run();
