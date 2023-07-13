export const requestInterval = function (fn, delay){
    const requestAnimFrame = (function() {
        return window.requestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    let start = new Date().getTime(),
         handle = {};

    function loop(){
         const current = new Date().getTime(),
                   delta = current - start;
        
         if(delta >= delay){
                fn.call();
                start  = new Date().getTime();
         }

         handle.value = requestAnimFrame(loop);
    }
    handle.value = requestAnimFrame(loop);

    return handle;
}

export const clearRequestInterval = function (handle) {
       window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : clearInterval(handle)
}
