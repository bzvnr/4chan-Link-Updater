
<div align="center">

[![npm][npm]][npm-url]
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/bzvnr/4chan-Link-Updater/issues)

  <a href="https://bzvnr.github.io/4chan-Link-Updater/">View in action with GitHub Pages</a>

<h1>4chan-Link-Updater</h1>

</div>

This project contains functions to update dead 4chan and 4chan archive links with live ones. It also contains regular expressions to match 4chan and 4chan archive sites with their respective boards.

If viewing this project on npmjs.com, the GitHub repository may have a more recent version.

## Use Instructions

A live version of project can be used with [GitHub Pages](https://bzvnr.github.io/4chan-Link-Updater/). The project can also be used offline by downloading or cloning it from GitHub.

### Requirements

To use this project locally, Node.js and npm must be installed. See [installation instructions for Node.js for details](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). A short video on how to install Node.js can also be viewed [here](https://youtu.be/OBhw2BOez0w?t=82).

## Use Instructions

A live version of project can be used with [GitHub Pages](https://bzvnr.github.io/4chan-Link-Updater/). The project can also be used offline by downloading or cloning it from GitHub.

### Requirements

To use this project locally, Node.js and npm must be installed. See [installation instructions for Node.js for details](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). A short video on how to install Node.js can also be viewed [here](https://youtu.be/OBhw2BOez0w?t=82).

## Installation

This part assumes the [requirements](#requirements) have been fulfilled.

1. Click the green `Code` button [on the project's GitHub repository page](https://github.com/bzvnr/4chan-Link-Updater) and download the project as a ZIP file
2. Unzip the file
3. [Open your system's terminal](https://web.archive.org/web/20220528160004/https://towardsdatascience.com/a-quick-guide-to-using-command-line-terminal-96815b97b955?gi=f465d80a5ddf)
4. In the terminal, navigate to the project's directory (folder). If you are unfamiliar with terminal navigation, enter `cd [filePathToProjectDirectory]` without the brackets in the terminal (ex: `cd C:\Users\user\Downloads\4chan-Link-Updater-master\4chan-Link-Updater-master`). The directory navigated to should contain the project's `lib` folder
5. In the terminal, enter `npm install` to download the npm packages required for the project

The project's [HTML document](./index.html) opened in most browsers should work locally after these instructions.

## Testing

Tests are used to verify this project's functionality. As of 1.4.2, 80/81 tests pass. [Jest](https://jestjs.io/) is used as a testing framework.

In the project's folder, run the command below in terminal. This will download packages necessary for testing.

```
npm install
```

To run the tests, enter the command below in terminal in the project's folder. The result of the tests will be displated in terminal.

```
npm test
```

## Bugs

To see the links that currently cannot be parsed, view [testCases.json](https://github.com/bzvnr/4chan-Link-Updater/blob/master/lib/testCases.json) replace4chanLinks.specialUseCases.nonFunctional. 4chan links ending in the format `/{threadNumber},{postNumber}` are not supported.

There is no safety check for non-functional links. Use with caution. 

## Misc. Resources

- [Live 4chan archives in a JSON file](https://github.com/4chenz/archives.json)
- [4chan archive site information](https://wiki.archiveteam.org/index.php/4chan)
- [General 4chan history](https://wiki.bibanon.org/4chan/History) (NSFW)

[npm]: https://img.shields.io/npm/v/4chan-link-updater.svg
[npm-url]: https://www.npmjs.com/package/4chan-link-updater
