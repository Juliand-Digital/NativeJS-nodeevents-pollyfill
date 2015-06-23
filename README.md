# NativeJS-nodeevents-pollyfill
A native JS implementation of the node event library. Creates an object that can be used in the same was as using the node events library but utilising the native JS event functions and allowing for cross-browser compatability

# Usage

##Include library

```
<script href="nodejs-events-polyfill.js"></script>
```

## Dispatching & catching events

```
var eventEmitter = new EventEmitter(window);

function ringDoorBell()  {
  console.log("ring ring ring")
}
eventEmitter.on("doorbell",ringDoorBell); // runs every time doorbell rings
eventEmitter.on("doorbell",ringDoorBell); // runs only once then removes listener

eventEmitter.emit("doorbell"); 
eventEmitter.removeListener("doorbell",ringDoorBell); 

```

## Tapping in to native events
Using the native events makes it possible to tap in to existing events. An example of catching a window event (as context used in above example is window)

```
eventEmitter.on("onclose",doSomething);
```
