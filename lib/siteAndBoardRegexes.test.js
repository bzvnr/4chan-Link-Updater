const regexes = require("./siteAndBoardRegexes.js");
const fileSystem = require("fs");
const path = require("path");

// load test cases
const filePath = path.resolve(__dirname, "urlPaths.txt");
let text = fileSystem.readFileSync(filePath, "utf8");
const urlPaths = text.split("\r\n\r\n");

test("sitesToReplaceRegex matches all possible urlPaths for 4chan / 4chan archive links", () => {
  for (const urlPath of urlPaths) {
    expect(urlPath).toMatch(regexes.sitesToReplaceRegex);
  }
});
