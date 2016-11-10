require('jasmine'); // Jasmine will insert some methods on the global object in node

// describe
// it
// expect


// toBe // to assert values
// not  // to assert !values

var server = require('../server');
var baseURL = "http://localhost:3000";
var request = require('request');

describe("Server API", ()=>{

    var endpoint = `${baseURL}/api`;
    // var endpoint = baseURL + "/api";
    
    it("should return a status of 200", (done)=>{

        request.get(endpoint, (err, response, body)=>{
            expect(response.statusCode).not.toBe(500);
            done();
        });

    });

    it("should give us pizza and beer", (done)=>{
        request.get(endpoint, (err, response, body)=>{
            expect(body).toBe('{"food":"pizza","beer":"yes"}')
            done();
        });
    })



});

// describe("Fancy Maths", ()=>{
//     it("should add numbers", (done)=>{
//         expect(adder(2,3)).toBe(5)
//     })
// });