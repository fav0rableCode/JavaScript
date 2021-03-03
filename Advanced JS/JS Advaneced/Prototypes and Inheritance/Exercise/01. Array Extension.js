(function solve() {
Array.prototype.last = function() {
    return this[this.length-1]
}
Array.prototype.skip = function(n) {
    n = Number(n)
    let result = []
    for (let i = n; i < this.length; i++) {
        result.push(this[i])
    }
    return result
}
Array.prototype.take = function(n) {
    n=Number(n)
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(this[i])
    }
    return result
}
Array.prototype.sum = function() {
   return this.reduce((a,b) => a+b)
}
Array.prototype.average = function() {
    return this.reduce((a,b) => a+b) / this.length
}
})()
