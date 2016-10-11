// var counter = {
//   iteration:0,
//   increment: function() {
//     this.iteration++
//   }
// }

//  var counter = {
//   iteration:0,
//   increment: function() {
//     var inc = function(amt) {
//       this.iteration = amt;
//     }
//     inc(1);
//   }
// }

// var name = function() {
//   console.log("my name is", this);
// }

var myName = function (excited, arg2, arg3) {
    console.log('Extras:', arg2, arg3)
    if (excited) {
      var ending = "!"
    } else {
      var ending = "."
    }
    console.log('My name is', this.name, ending);
  }

var bill = {
  name:"Bill", 
  func : function() {
    console.log("howdy", this.name);
  }
}
var carlos = {
  name: "Carlos"
}

// bill.func();
bill.func.apply(carlos);

// bill.myName()
myName.call(bill);

// Math.max()
// Math.max(2,45,7,23,3)

var arr = [2,45,7,23,3]
// 'this' isn't used so we can just pass in null as the object/context
// Math.max.apply(null, arr)

var carlosIsMyName = myName.bind(carlos)

var carlosISMYNAME = myName.bind(carlos, true)

// var hi = [].map.call(['hello'], function(element) {
//   return element.toUpperCase();
// })

// navigator.getUserMedia
// navigator.mozGetUserMedia
// navigator.wekitGetUserMedia
// navigator.MSGetUserMedia

// var getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.getUserMedia

// if(getUserMedia) {
//   gtUserMedia = getUserMedia.bind(navigator)
// }
// navigator.getUserMedia