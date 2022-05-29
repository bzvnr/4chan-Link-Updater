<div align="center">

[![npm][npm]][npm-url]
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/bzvnr/4chan-Link-Updater/issues)

  <a href="https://bzvnr.github.io/4chan-Link-Updater/">View in action with GitHub Pages</a>

<h1>4chan-Link-Updater</h1>
</div>

This project contains functions to automatically update dead 4chan and 4chan archive links with live ones. It also contains regular expressions to match 4chan and 4chan archive sites with their respective boards.

If viewing this project on npmjs.com, the GitHub repository may have a more recent version.

## Table of Contents

- [Examples](#examples)
- [Features](#features)
- [Rationale](#rationale)
- [Use Instructions](#use-instructions)
- [Installation](#installation)
- [Testing](#testing)
- [Limitations](#limitations)
- [Technologies](#technologies)
- [Miscellaneous](#miscellaneous)

## Examples

| Before | After |
|:------:|:-----:|
| https://boards.4channel.org/lit/thread/20169681/what-edition-of-hamlet-should-i-get#p20169912 | https://warosu.org/lit/thread/20169681#q20169912 |
| https://yuki.la/s4s/thread/7838249/cowe/7839030 | https://archive.4plebs.org/s4s/thread/7838249#q7839030 |

## Features

- Functions to replace post and thread links for 4chan and dead 4chan archives with lives ones automatically
- Regular expressions for 4chan archive sites and their respective boards

## Rationale

Threads on the imageboard 4chan are ephemeral, meaning they become inaccessible after some time. Links to the thread no longer work once a thread becomes inaccessible.

4chan archive sites that preserve threads past their deletion exist, but the 4chan links remain broken. Additionally, 4chan archives can go offline, rendering links to those archives broken.

This project solves that problem by providing functions to replace those broken / dead links with live ones automatically.

## Use Instructions

A live version of project can be used with [GitHub Pages](https://bzvnr.github.io/4chan-Link-Updater/). The project can also be used offline by [downloading](#installation) or cloning it from GitHub.

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

Tests are used to verify this project's functionality (see [limitations](#limitations) for tests that don't pass).

To run the tests, in a terminal navigated to the project's directory, run ```npm install``` if packages aren't installed, then ```npm test``` to run the tests.

## Limitations

Image links are currently not supported. To see the links that currently cannot be parsed, view [testCases.json](./lib/testCases.json) and search for "*nonFunctional*". Note that post and thread links in the format `/{threadNumber},{postNumber}` are not supported.

There is no safety check for non-functional links. Use with caution.

## Technologies

Technologies used for this project include:

- [Node.js](https://nodejs.org/en/download/) as a runtime environment
- <a href="https://npmjs.com">npm</a> for package management
- [Jest](https://jestjs.io/) for testing
- [webpack](https://github.com/webpack/webpack) for bundling
- [Visual Studio Code](https://code.visualstudio.com/) for development

## Miscellaneous

### npm Commands

- `npm install` - installs the required packages for the project
- `npm run build` - updates [bundle.js](./dist/bundle.js) to use the latest versions of the [replace4chanLinks.js](./lib/replace4chanLinks.js) and [siteAndBoardRegexes.js](./lib/siteAndBoardRegexes.js) files. [index.html](./index.html) will use the updated version of [bundle.js](./dist/bundle.js)
- `npm test` - runs the tests for the project with Jest

### Resources

- [Live 4chan archives in a JSON file](https://github.com/4chenz/archives.json)
- [4chan archive site information](https://wiki.archiveteam.org/index.php/4chan)
- [General 4chan history](https://wiki.bibanon.org/4chan/History) (NSFW)

[npm]: https://img.shields.io/npm/v/4chan-link-updater.svg
[npm-url]: https://www.npmjs.com/package/4chan-link-updater
