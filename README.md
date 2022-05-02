# 4chan-Link-Updater

This project contains functions to replace dead 4chan and 4chan archive links with live ones. It also contains regular expressions to search and replace 4chan and 4chan archive sites and boards. Link to the project's npm package can be found [here](https://www.npmjs.com/package/4chan-link-updater).

To see the links that currently cannot be parsed, see in [testData.json](https://github.com/bzvnr/4chan-Link-Updater/blob/master/lib/testData.json) replace4chanLinks.specialUseCases.nonFunctional.

tl;dr: the updateDeadLink(deadLink) function in replace4chanLinks.js has trouble parsing 4chan links that only have a single digit in their thread / post number. If a link is in the format `/{threadNumber}/{words}(optional: postNumber)`, it incorrectly registers any number in {words} part as the postNumber. Additionally, 4chan links ending in the format `/{threadNumber},{postNumber}` don't work.

## How To Use

To use this project, [Node.js](https://nodejs.org/en/download/) must be installed.

While more detailed use instructions are being developed, it is assumed that the reader has some understanding of JavaScript and Node.js. Knowledge of [Jest](https://jestjs.io/) is optional.

### Use Instructions

1. Download a ZIP file of the repository from GitHub.
2. Unzip the downloaded file.
3. In the project's `lib` folder, create a .js file with the text provided below, placing your text containing links where specified.
4. Open your operating system's terminal window and change the current directory to the project's `lib` folder.
5. Type `node yourScriptName.js` and press enter. The updated links will be displayed in the terminal window.

```
const 4chanLinkUpdater = require("./replace4chanLinks.js");

const myText = ""; // place your text between the ""

console.log(4chanLinkUpdater.updateDeadLinks(myText));
```

### Testing

Tests are used to verify this project's functionality. [Jest](https://jestjs.io/) is used as a testing framework.

#### Test Instructions

In the project's folder, run the command below in terminal. This will download packages necessary for testing.

```
npm install
```

To run the tests, input the command below in terminal in the directory where the project is located. The result of the tests will be displated in terminal.

```
npm test
```

## Resources

- [Live 4chan archives in a JSON file](https://github.com/4chenz/archives.json)
- [4chan archive information](https://wiki.archiveteam.org/index.php/4chan)
- [General 4chan history](https://wiki.bibanon.org/4chan/History) (NSFW)