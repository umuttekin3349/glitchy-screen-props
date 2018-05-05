console.log("running...")
var screen = {width: Math.round(Math.random()*10), height: Math.round(Math.random()*10)}
window.wrappedJSObject.screen = cloneInto(screen, window)