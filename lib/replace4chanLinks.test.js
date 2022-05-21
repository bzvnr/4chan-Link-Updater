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

  describe("urlPath", () => {
    test.each(specialUseCases.nonFunctional)(
      "specialUseCases.nonFunctional",
      (link) => {
        testLinkUpdated(link);
      }
    );
  });
/*
  // specialUseCases.nonFunctional
  describe("urlPath", () => {
    test("in format: /threadNumber}/{words} with a number in {words}", () => {
      testLinkUpdated(specialUseCases.nonFunctional[0]);
    });

    test("in format: /threadNumber}/{words}#p{postNumber} with a number in {words}", () => {
      testLinkUpdated(specialUseCases.nonFunctional[1]);
    });

    test("with a single digit in its threadNumber", () => {
      testLinkUpdated(specialUseCases.nonFunctional[2]);
    });

    test("with a single digit in its threadNumber and postNumber", () => {
      testLinkUpdated(specialUseCases.nonFunctional[3]);
    });

    test("with a board containing a digit and a threadNumber with a single digit", () => {
      testLinkUpdated(specialUseCases.nonFunctional[4]);
    });

    test("with a board that is a digit and a threadNumber with a single digit", () => {
      testLinkUpdated(specialUseCases.nonFunctional[5]);
    });
  });
  */
});

describe("getBoardName(deadLink)", () => {
  test.each(specialUseCases.functional)(
    "Testing getBoardName() for boardNames 3, s4s, r9k (using specialUseCases.functional)",
    (link) => {
      testLinkUpdated(link);
    }
  );
});
