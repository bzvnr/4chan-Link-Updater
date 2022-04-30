const fileSystem = require("fs");
const path = require("path");
const updater = require("./replace4chanLinks.js");

const filePath = path.resolve(__dirname, "testData.json");
let data = fileSystem.readFileSync(filePath, "utf8");
const testData = JSON.parse(data).replace4chanLinks;

const typicalUseCases = testData.typicalUseCases;
const specialUseCases = testData.specialUseCases;

describe("updateDeadLink(deadLink)", () => {
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
})

describe("getBoardName(deadLink)", () => {
  test("Testing getBoardName() for boardNames 3, s4s, r9k (using specialUseCases.functional)", () => {
    for (const link of specialUseCases.functional) {
      let linkFixedByFunction = updater.updateDeadLink(link.broken);
      expect(linkFixedByFunction).toEqual(link.fixed);
    }
  });
})

