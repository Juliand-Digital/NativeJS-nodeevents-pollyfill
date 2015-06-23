 
/* Polyfill EventEmitter - native JS implementation of node event library */
var EventEmitter = function (context) {this.context = context};
 
EventEmitter.prototype.on = function (event, listener) {
    this.context.addEventListener(event, listener, false);
};
 
EventEmitter.prototype.removeListener = function (event, listener) {
    this.context.removeEventListener(event,listener);
};
 
EventEmitter.prototype.emit = function (name) {
    if (this.context.dispatchEvent) {
        var evt = new Event(name);
        this.context.dispatchEvent(evt);
    } else {  /* Catch for older implementations */  
        var evt = document.createEvent("Event");
        evt.initEvent(name,true,true);
        this.context.dispatchEvent(evt);
    }
};

EventEmitter.prototype.once = function (event, listener) {
    this.on(event, function g () {
        this.removeListener(event, g);
        listener.apply(this, arguments);
    });
};