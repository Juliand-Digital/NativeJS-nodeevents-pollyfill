 
/* Polyfill EventEmitter - native JS implementation of node event library */
var EventEmitter = function (context) {this.context = context};
 
EventEmitter.prototype.on = function (event, listener) {
    if (typeof this.context[event] === "object")
        this.context[event] = listener;
    else
        this.context.addEventListener(event, listener, false);
};
 
EventEmitter.prototype.removeListener = function(event,listener) {
    this.context.removeEventListener(event,listener);
}
 
EventEmitter.prototype.emit = function (name) {
    var evt = document.createEvent("Event");
    evt.initEvent(name,true,true);
    this.context.dispatchEvent(evt);
};

EventEmitter.prototype.once = function (event, listener) {
    this.on(event, function g () {
        this.removeListener(event, g);
        listener.apply(this, arguments);
    });
};