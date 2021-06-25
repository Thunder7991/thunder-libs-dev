export function debounce(delay,callback) {
    let timer = null
    return function(...args) {
        if(timer)clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this,args)
        },delay)
    }
}