const fileSystem = require("fs");
const path = require("path");
const regexes = require("./siteAndBoardRegexes.js");

// load test cases
const filePath = path.resolve(__dirname, "testCases.json");
const testCases = fileSystem.readFileSync(filePath, "utf8");
const typicalUseCases = JSON.parse(testCases).sitesAndBoardRegexes.typicalUseCases;

const sitesToReplaceRegex = regexes.sitesToReplaceRegex;

// sitesToReplaceRegex matches all possible urlPaths for 4chan / 4chan archive links
describe("sitesToReplaceRegex", () => {
  test.each(typicalUseCases)(
    "matches %useCase.url",
    (useCase) => {
      expect(useCase.url).toMatch(sitesToReplaceRegex);
    }
  );

  test.each(typicalUseCases)(
    "'s matched result matches url correctly",
    (useCase) => {
      const matchedURL = useCase.url.match(sitesToReplaceRegex)[0];
      expect(matchedURL).toBe(useCase.url);
    }
  );
});
