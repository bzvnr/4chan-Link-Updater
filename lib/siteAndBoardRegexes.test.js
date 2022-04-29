const regexes = require("./siteAndBoardRegexes.js");
const fileSystem = require("fs");
const path = require("path");

// load test cases
let text = fileSystem.readFileSync(path.resolve(__dirname, "url-paths.txt"), "utf8");
const urlPaths = text.split("\r\n\r\n");

test("urlPaths match all possible thread endings", () => {
  for (const urlPath of urlPaths) {
    expect(urlPath).toMatch(regexes.sitesToReplaceRegex);
  }
});
