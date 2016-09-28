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
3. You can now run a local HTTP server by running the `http-server` command in the directory containing your files to be served (e.g. `~/workspaces/project1`). In this directory, be sure to have an `index.html`.

Then, you can go to [localhost](http://localhost:8080) your web browser, which will render `index.html`.

## Animation/Transformations
`marquee` is an old, deprecated HTML tag that moves an HTML block left, right, up or down. However, `css` now has new styles that can do this better, with more granular control.

The `css` attributes you want to research are:
- `position`: [ absolute | relative ]
- `left`
- `right`
- `top`
- `bottom`
- `transition`
- `transform`

See the demo code in this directory for an example that compares a PacMan animation done in `marquee` and then done in `css`.
