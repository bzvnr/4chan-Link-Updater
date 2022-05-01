const fileSystem = require("fs");
const path = require("path");
const regexes = require("./siteAndBoardRegexes.js");


// load test cases
const filePath = path.resolve(__dirname, "testCases.json");
const testCases = fileSystem.readFileSync(filePath, "utf8");
const typicalUseCases = JSON.parse(testCases).sitesAndBoardRegexes.typicalUseCases;

test("sitesToReplaceRegex matches all possible urlPaths for 4chan / 4chan archive links", () => {
  for (const useCase of typicalUseCases) {
    expect(useCase.url).toMatch(regexes.sitesToReplaceRegex);
  }
});
