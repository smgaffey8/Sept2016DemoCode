require('jasmine')

describe('Home Page Stuff', ()=>{

    it("Should have a sick title", ()=>{

        browser.get('http://localhost:3000')
        expect( browser.getTitle() ).toEqual("Pizza Time! (noid)");

    });

});