

var Observ = require('rxjs');


var source    = [ 0,1,2,3,4, 5];

console.log(Observ);

var sourceOb = Observ.from ([0,1,2,3,4, 5]);

var sourceOb2 = Observ.interval(500).take(10); 

sourceOb2.filter(x => x % 2 === 1)
    .map( x => x + '!')
    .forEach(x => console.log(x));
