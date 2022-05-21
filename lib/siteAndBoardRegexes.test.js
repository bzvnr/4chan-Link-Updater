const fileSystem = require("fs");
const path = require("path");
const regexes = require("./siteAndBoardRegexes");

const { sitesToReplaceRegex } = regexes;

// load test cases
const filePath = path.resolve(__dirname, "testCases.json");
const testCases = fileSystem.readFileSync(filePath, "utf8");
const { typicalUseCases } = JSON.parse(testCases).sitesAndBoardRegexes;

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

describe("Test capture groups", () => {
  test("Only threadNumber", () => {
    const match = sitesToReplaceRegex.exec("https://4chan.org/3/1");
    expect(match.groups.threadNumber).toBe("1");
    expect(match.groups.wordsOrPostNumber).toBeUndefined();
    expect(match.groups.postNumber).toBeUndefined();
  });

  test("threadNumber and postNumber", () => {
    const match = sitesToReplaceRegex.exec("https://4chan.org/3/1/1");
    expect(match.groups.threadNumber).toBe("1");
    expect(match.groups.wordsOrPostNumber).toBe("1");
    expect(match.groups.postNumber).toBeUndefined();
  });

  test("threadNumber, wordWithNumber, and postNumber", () => {
    const match = sitesToReplaceRegex.exec("https://4chan.org/3/1/1/1");
    expect(match.groups.threadNumber).toBe("1");
    expect(match.groups.wordsOrPostNumber).toBe("1");
    expect(match.groups.postNumber).toBe("1");
  });
});
