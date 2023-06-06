// function doesn't have  a name
//setTimeout()
setTimeout(function (params) {
    console.log('Hello World! Executed after 2 seconds');
}, 2000);

//arrow function
setTimeout(()=> console.log('Hello World! Executed after 5 seconds'), 5000);

let show = function(params) {
    console.log("Hello There");
}
show();