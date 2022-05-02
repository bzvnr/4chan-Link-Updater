const fileSystem = require("fs");
const path = require("path");
const updater = require("./replace4chanLinks.js");

const filePath = path.resolve(__dirname, "testCases.json");
const testCases = fileSystem.readFileSync(filePath, "utf8");
const replaceLinkTestCases = JSON.parse(testCases).replace4chanLinks;

const typicalUseCases = replaceLinkTestCases.typicalUseCases;
const specialUseCases = replaceLinkTestCases.specialUseCases;

function testUseCases(values) {
  for (const link of values) {
    testLink(link);
  }
}

function testLink(link) {
  const linkFixedByFunction = updater.updateDeadLink(link.broken);
  expect(linkFixedByFunction).toEqual(link.fixed);
}

describe("updateDeadLink(deadLink) with ", () => {
  test("typicalUseCases.functional", () => {
    testUseCases(typicalUseCases.functional);
  });

  test("specialUseCases.functional", () => {
    testUseCases(specialUseCases.functional);
  });

  // specialUseCases.nonFunctional
  describe("urlPath ", () => {
    test("in format: /threadNumber}/{words} with a number in {words}", () => {
      testLink(specialUseCases.nonFunctional[0]);
    });

    test("in format: /threadNumber}/{words}#p{postNumber} with a number in {words}", () => {
      testLink(specialUseCases.nonFunctional[1]);
    });

    test("with a single digit in its threadNumber", () => {
      testLink(specialUseCases.nonFunctional[2]);
    });

    test("with a single digit in its threadNumber and postNumber", () => {
      testLink(specialUseCases.nonFunctional[3]);
    });

    test("with a board containing a digit and a threadNumber with a single digit", () => {
      testLink(specialUseCases.nonFunctional[4]);
    });

    test("with a board that is a digit and a threadNumber with a single digit", () => {
      testLink(specialUseCases.nonFunctional[5]);
    });
  });
});

describe("getBoardName(deadLink)", () => {
  test("Testing getBoardName() for boardNames 3, s4s, r9k (using specialUseCases.functional)", () => {
    testUseCases(specialUseCases.functional);
  });
});
