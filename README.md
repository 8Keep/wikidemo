
This project is a potential new wiki solution for jMonkeyEngine, built using Docusaurus 2. All docs are written in Markdown (Github flavor) and can be edited through pull requests.

### Local Development

Make sure you have a recent version of node and yarn (or npm) installed. [See here.](https://classic.yarnpkg.com/en/docs/install)

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. (I'm using github pages)

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
