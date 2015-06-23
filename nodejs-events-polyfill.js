 
/* Polyfill EventEmitter - native JS implementation of node event library */
var EventEmitter = function (context) {};
 
EventEmitter.prototype.on = function (event, listener) {
    context.addEventListener(event, listener, false);
};
 
EventEmitter.prototype.removeListener = function (event, listener) {
    context.removeEventListener(event,listener);
};
 
EventEmitter.prototype.emit = function (name) {
    if (context.dispatchEvent) {
        var evt = new Event(name);
        context.dispatchEvent(evt);
    } else {  /* Catch for older implementations */  
        var evt = document.createEvent("Event");
        evt.initEvent(name,true,true);
        context.dispatchEvent(evt);
    }
};

EventEmitter.prototype.once = function (event, listener) {
    this.on(event, function g () {
        this.removeListener(event, g);
        listener.apply(this, arguments);
    });
};