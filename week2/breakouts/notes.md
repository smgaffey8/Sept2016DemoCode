#Topics
##Local Development
First you will need to select an editor.  
Atom, Sublime, Visual Code and Brackets are a few examples.
These all have common shortcuts (mostly) and roughly equivalent core functionality.

Next, install node (nodejs).  This will install globally into /usr/local/bin, along with a package installer called npm.
Use npm to install the http-server package globally.
```
    npm -install http-server -g
```
Now you can run a local http server by going to the directory in which you have the files to be served
(ie. ~/workspaces/project1) and running the `http-server` command.  
Typically, this directory will be where your index.html or server.js file is.
The 

Then you can go to your web browser and go to the URL http://localhost:8080 to see the files in that directory.

##Animation/Transformations

marquee is an old, deprecated html tag that moves an html block left, right, up or down.  
However, css now has new styles that can do this better, with more granular control.

The css attributes you want to research are position:absolute/relative, left/right/top/bottom to position your block 
and then `transition` and `transform` to begin animation.
See demo code for an example that compares a PacMan animation done in marquee and then done in css.

