# Breakouts

## Local Development
1. First you will need to select an editor.  
    - `Atom`, `Sublime`, `Visual Studio Code` and `Brackets` are a few popular examples. These all have common shortcuts (mostly) and roughly equivalent core functionality.

2. Next, install node (`nodejs`).
    - This will install globally into `/usr/local/bin`, along with a package installer called `npm`.
    - Use `npm` to install the `http-server` package **globally**.
        ```bash
        $ npm -install http-server -g
        ```
3. Now you can run a local HTTP server by going to the directory in which you have the files to be served (ie. ~/workspaces/project1) and running the `http-server` command. In this directory, be sure to have an `index.html`.

Then, you can go to your web browser and navigate to the URL http://localhost:8080 to see the files in that directory.

## Animation/Transformations
`marquee` is an old, deprecated HTML tag that moves an HTML block left, right, up or down. However, `css` now has new styles that can do this better, with more granular control.

The `css` attributes you want to research are:
- `position`: [ absolute | relative ]
- `left`
- `right`
- `top`
- `bottom`

Then use `transition` and `transform` to begin animation. See demo code for an example that compares a PacMan animation done in `marquee` and then done in `css`.
