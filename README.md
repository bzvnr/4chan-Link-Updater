# 4chan-Link-Updater
Replace broken/dead 4chan archive links with live ones. Contains Regex to search and replace links in a body of text.

See [here](https://github.com/4chenz/archives.json) for live 4chan archives in a JSON file.

Currently, it cannot parse 4chan links that only have a single digit in their thread / post number.
4chan links ending in the format `/{threadNumber},{postNumber}` don't work.


#### Use Instructions

This project requires Node.js to be installed. Installation details can be found [here](https://nodejs.org/en/download/).

While more detailed instructions are being developed, it is presumed that the reader has some understanding of JavaScript and Node.js.

1. Download a zip file of the repository from GitHub. 
2. Unzip the downloaded file.
3. In the project's `lib` folder, create a JS file with the provided text below, placing your text where specified.
4. Open your operating system's terminal window and change the current directory to the project's `lib` folder.
5. Type "node yourScriptName.js" and hit enter. It should output the updated links.

```
var 4chanLinkReplacer = require("./replace4chanLinks.js");

let myText = ""; // place text between the ""  

console.log(4chanLinkReplacer.updateDeadLinks(myText));
```
