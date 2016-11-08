#Setting up an HTTPS Server

First, you'll need a server (e.g. a DigitalOcean droplet).

Then you'll want a domain name to point to that server.
Buy a domain name from 'IWantMyName' or 'NameCheap'.
Create an A record pointing your domain name to IP of droplet using your domain provider's dashboard. (An A record is a type of DNS record. It points a domain name to an IP address.)

Get a SIGNED certificate with 'LetsEncrypt'.
Select webserver "none of the above", and OS ubuntu 14.04.
Download and add execute permissions:

    $ wget https://dl.eff.org/certbot-auto
    $ chmod a+x certbot-auto

    # install
    $ ./certbot-auto

    # get cert
    $ ./certbot-auto certonly # your cert is in /etc/letsencrypt

You can then start your server code (server.js) to run your http and https server.
Look at the code to see how to set those up.  
The https server requires the certifications that we built above to establish the secure connection.

Want to automatically redirect HTTP traffic to HTTPS traffic? Use middleware!
(see server.js to find an example of that middleware)