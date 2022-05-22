const fileSystem = require("fs");
const path = require("path");
const updater = require("./replace4chanLinks");

// load test cases
const filePath = path.resolve(__dirname, "testCases.json");
const testCases = fileSystem.readFileSync(filePath, "utf8");
const replaceLinkTestCases = JSON.parse(testCases).replace4chanLinks;

const { typicalUseCases, specialUseCases } = replaceLinkTestCases;

function testLinkUpdated(link) {
  const updatedLink = updater.updateDeadLink(link.broken);
  expect(updatedLink).toEqual(link.fixed);
}

describe("updateDeadLink(deadLink) with", () => {
  test.each(typicalUseCases.functional)(
    "typicalUseCases.functional",
    (link) => {
      testLinkUpdated(link);
    }
  );

  test.each(specialUseCases.functional)(
    "specialUseCases.functional",
    (link) => {
      testLinkUpdated(link);
    }
  );

  describe("link", () => {
    test.each(specialUseCases.nonFunctional)(
      "specialUseCases.nonFunctional",
      (link) => {
        testLinkUpdated(link);
      }
    );
  });
});

describe("getBoardName(deadLink)", () => {
  test.each(specialUseCases.functional)(
    "Testing getBoardName() for boardNames 3, s4s, r9k (using specialUseCases.functional)",
    (link) => {
      testLinkUpdated(link);
    }
  );
});
