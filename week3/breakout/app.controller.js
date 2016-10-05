// Create a controller
// with 1 argument, we are RETRIEVING a module

angular.module('FormMagic')
    .controller('theWand', wandCtrl);

wandCtrl.$inject = ['$timeout']

function wandCtrl ($timeout){
    console.log('Alakazaam!');
    var wand = this; // The object that exposes data to the view.  If it's not on here, you ain't gettin it
    wand.newSpell = {}; // declaring newSpell for readibility, angular WILL create it when we type into the inputs.  It's nice to show other developers and remind yourself that this is a variable being used in the controller
        
    wand.spellList = JSON.parse(window.localStorage.getItem('spells')) || []; // Retrieving info from LocalStorage and assigning it to spellList OR an empty array if we have nothing in LocalStorage

    window.wand = wand; // Attaching the ctrl object to the window is nice for debugging, but shouldn't stay in your production code

    wand.greeting = 'Any sufficiently advanced technology is indistinguishable from magic.';

    wand.addSpell = function(){

        if(wand.newSpell.name && wand.newSpell.manaCost && wand.newSpell.ingredient && wand.newSpell.spoopiness){

            wand.spellList.push( wand.newSpell );

            // Give newSpell a new object
            wand.newSpell = {};

            // Manually trigger the modal
            $('#myModal').modal('toggle');

            // Update localStorage

            var spells = angular.copy(wand.spellList); // copy our list of spells

            // Strip $$hashKey for storage
            spells.forEach(function(spell){
                delete spell.$$hashKey;
            });

            window.localStorage.setItem('spells', JSON.stringify(spells));
        }
        else{
            wand.spellFormErrMessage = 'Fill out the form completely!';
            $timeout(function(){
                wand.spellFormErrMessage = '';
            }, 3000)
        }

    }

}
