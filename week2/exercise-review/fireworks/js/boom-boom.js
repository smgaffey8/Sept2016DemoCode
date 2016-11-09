// document.getElementsByTagName('button')[0].addEventListener

function launchRocket() {
    console.log('Launch Rocket called');

    var rocket = document.createElement('div');
    rocket.style.left   = random(0, 100)+"vw";
    rocket.style.bottom = "0vh";
    rocket.style.width  = "20px";
    rocket.style.height = "80px";
    rocket.style.backgroundColor = "black";

    document.body.appendChild(rocket);

    var ID = setInterval(function() {
        launch(rocket, ID)
    }, 10);
}

function launch(rocket, ID) {
    var currentLeft = rocket.style.left.slice(0,-2)*1,
        currentBottom = rocket.style.bottom.slice(0,-2)*1;

    // console.log(
    //     rocket.style.left,
    //     rocket.style.bottom
    // );

    rocket.style.left   = (++currentLeft)+"vw";
    rocket.style.bottom = (++currentBottom)+"vh";


    if( currentBottom > 40 ) {
        console.log('Need to do some shit here');
        clearInterval( ID );
        explode( rocket );
    }
}

function explode( currentRocket ) {
    var numParticles = random(5, 10);
    var particle;

    for( var i=0; i < numParticles; i++ ) {
        particle = document.createElement('p');
        particle.style.left = currentRocket.style.left;
        particle.style.bottom = currentRocket.style.bottom;
        particle.counter = 0;

        document.body.appendChild(particle);

        var fizzleID = setInterval(function() {
            fizzle( particle, fizzleID );
        }, 100);

    }
}

function fizzle( currentParticle, counter, IntervalID ) {
    var currentLeft = currentParticle.style.left.slice(0,-2)*1,
        currentBottom = currentParticle.style.bottom.slice(0,-2)*1;

    particle.style.left   = currentLeft +=(random( random(-10,10), random(-10,10) ))+"vw";
    particle.style.bottom = currentBottom += (random( random(-10,10), random(-10,10) ))+"vh";

    particle.counter++;

    if( particle.counter >= 20 ) {
        clearInterval(IntervalID);
    }
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}
