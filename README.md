# 4chan-Link-Updater

[![npm](https://img.shields.io/npm/v/4chan-link-updater.svg)](https://www.npmjs.com/package/4chan-link-updater)

This project contains functions to replace dead 4chan and 4chan archive links with live ones. It also contains regular expressions to match 4chan and 4chan archive sites with their respective boards.

If viewing this project on npmjs.com, the GitHub repository may have a more recent version.

## How To Use

To use this project, Node.js and npm must be installed. For installation instructions, [click here if using a Windows Operating System](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) or [here for Mac/Linux](https://github.com/nvm-sh/nvm#install--update-script).

While more detailed instructions are being developed, it is assumed that the reader has some understanding of JavaScript and Node.js. Knowledge of [Jest](https://jestjs.io/) is optional.

### Use Instructions

1. Download a ZIP file of the repository from GitHub.
2. Unzip the downloaded file.
3. In the project's `lib` folder, there is a file called `updateLinks.js`. Open the file and place the body of text containing links where specified.
4. Open your operating system's terminal window and change the current directory to the project's `lib` folder.
5. Type `node updateLinks.js` and press enter. The updated links will be displayed in the terminal window.

### Testing

Tests are used to verify this project's functionality. [Jest](https://jestjs.io/) is used as a testing framework.

#### Test Instructions

In the project's folder, run the command below in terminal. This will download packages necessary for testing.

```
npm install
```

To run the tests, enter the command below in terminal in the project's folder. The result of the tests will be displated in terminal.

```
npm test
```

## Bugs

The updateDeadLink(deadLink) function in replace4chanLinks.js has trouble parsing 4chan links that only have a single digit in their thread / post number. Additionally, if a link is in the format `/{threadNumber}/{words}(optional: postNumber)`, it incorrectly registers any number in {words} part as the postNumber. Finally, 4chan links ending in the format `/{threadNumber},{postNumber}` are not supported.

There is no safety check for non-functional links. Use with caution. 

To see the links that currently cannot be parsed, view [testCases.json](https://github.com/bzvnr/4chan-Link-Updater/blob/master/lib/testCases.json) replace4chanLinks.specialUseCases.nonFunctional.

## Misc. Resources

- [Live 4chan archives in a JSON file](https://github.com/4chenz/archives.json)
- [4chan archive site information](https://wiki.archiveteam.org/index.php/4chan)
- [General 4chan history](https://wiki.bibanon.org/4chan/History) (NSFW)
