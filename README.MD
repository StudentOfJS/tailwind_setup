# Steps for tailwind config and postcss

- npm i
- in package.json > scripts > change the path to the location and name of the imported css file
- add the target css file to the project
- add the css file to the appConfig
- npm run build:dev

# Steps for purgecss and tailwind

## these steps will remove all unused styles from file, make sure correct access is given :-)

- npm i
- in package.json > scripts > change the path to the location and name of the imported css file
- add the target css file to the project
- add the css file to the appConfig
- make sure the wildcards give postcss access to all the html, svelte and react files
- npm run build:prod
