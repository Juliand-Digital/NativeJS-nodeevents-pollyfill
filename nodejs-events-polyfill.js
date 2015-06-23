 
/* Polyfill EventEmitter - native JS implementation of node event library */
var EventEmitter = function () {};
 
EventEmitter.prototype.on = function (event, listener) {
    window.addEventListener(event, listener, false);
};
 
EventEmitter.prototype.removeListener = function (event, listener) {
    window.removeEventListener(event,listener);
};
 
EventEmitter.prototype.emit = function (name) {
    if (window.dispatchEvent) {
        var evt = new Event(name);
        window.dispatchEvent(evt);
    } else {  /* Catch for older implementations */  
        var evt = document.createEvent("Event");
        evt.initEvent(name,true,true);
        window.dispatchEvent(evt);
    }
};

EventEmitter.prototype.once = function (event, listener) {
    this.on(event, function g () {
        this.removeListener(event, g);
        listener.apply(this, arguments);
    });
};