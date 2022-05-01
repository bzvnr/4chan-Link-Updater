const fileSystem = require("fs");
const path = require("path");
const updater = require("./replace4chanLinks.js");

const filePath = path.resolve(__dirname, "testCases.json");
const testCases = fileSystem.readFileSync(filePath, "utf8");
const replaceLinkTestCases = JSON.parse(testCases).replace4chanLinks;

const typicalUseCases = replaceLinkTestCases.typicalUseCases;
const specialUseCases = replaceLinkTestCases.specialUseCases;

describe("updateDeadLink(deadLink) with ", () => {
  test("typicalUseCases.functional", () => {
    for (const link of typicalUseCases.functional) {
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    }
  });

  test("specialUseCases.functional", () => {
    for (const link of specialUseCases.functional) {
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    }
  });

  // specialUseCases.nonFunctional
  describe("urlPath ", () => {
    test("in format: /threadNumber}/{words} with a number in {words}", () => {
      const link = specialUseCases.nonFunctional[0];
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    });

    test("in format: /threadNumber}/{words}#p{postNumber} with a number in {words}", () => {
      const link = specialUseCases.nonFunctional[1];
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    });

    test("with a single digit in its threadNumber", () => {
      const link = specialUseCases.nonFunctional[2];
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    });

    test("with a single digit in its threadNumber and postNumber", () => {
      const link = specialUseCases.nonFunctional[3];
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    });

    test("with a board containing a digit and a threadNumber with a single digit", () => {
      const link = specialUseCases.nonFunctional[4];
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    });

    test("with a board that is a digit and a threadNumber with a single digit", () => {
      const link = specialUseCases.nonFunctional[5];
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    });
  });
});

describe("getBoardName(deadLink)", () => {
  test("Testing getBoardName() for boardNames 3, s4s, r9k (using specialUseCases.functional)", () => {
    for (const link of specialUseCases.functional) {
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    }
  });
});
