# rusume

The creator got coerced by [me](https://github.com/spitefully-positive) to create this resume!  
May it be of great service!

# Notes by [spite](https://github.com/spitefully-positive)

This is all I did in the background for you, ordered from most interesting to least interesting:

- Added [Dockerfile](./Dockerfile) and [.dockerignore](./.dockerignore) for deploying the resume
- Added prettier as a formatter and configured it in [prettier.config.ts](./prettier.config.ts)
- Added some scripts and packages to handle linting and formatting of your code in [package.json](./package.json)
- Configured astro in [astro.config.ts](./astro.config.ts)
- Configured the typescript compiler in [tsconfig.json](./tsconfig.json)
- Added a useless boilerplate file [src/content.config.ts](./src/content.config.ts) which you can ignore

**So what's new?**

- You can now format your code with `bun run format` or maybe even just by saving if you [configure vscode correctly](https://prettier.io/docs/editors#visual-studio-code)
- You could build a docker image by running `docker build .` in the repository root (This will be important later)
- You can now use aliasses for certain folders configured in [tsconfig.json](./tsconfig.json) (This will be more important the more nesting happens in this project)
