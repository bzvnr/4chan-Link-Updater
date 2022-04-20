# 4chan-Link-Updater
Replace broken/dead 4chan archive links with live ones. Contains Regex to search and replace links in a body of text.

See [here](https://github.com/4chenz/archives.json) for live 4chan archives in a JSON file.

Currently, it cannot parse 4chan links that only have a single digit in their thread / post number.
4chan links ending in the format `/{threadNumber},{postNumber}` don't work.


#### Use Instructions

While detailed use instructions are being developed, it is presumed that the reader has some understanding of JavaScript and Node.js.

This project requires Node.js to be installed. Installation details can be found [here](https://nodejs.org/en/download/).

Download a zip file of the repository from GitHub. Unzip the downloaded file. In the `lib` folder, create a JS file with the provided text below, placing your text where specified. Then, open the command window and navigate to the `lib` folder. Then, type "node yourScriptName.js" and hit enter. The links should be updated.


```
var 4chanLinkReplacer = require("./replace4chanLinks.js");

let myText = ""; // place text between the ""  

console.log(4chanLinkReplacer.updateDeadLinks(myText));
```
