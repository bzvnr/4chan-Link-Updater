// Note that it cannot parse posts whose thread or post numbers only have a single digit
// posts in the format `/{number},{number}` are not supported

const chanLinkReplacer = require("./siteAndBoardRegexes");

const { liveSitesAndBoards, sitesToReplaceRegex, allBoards } = chanLinkReplacer;

// Takes text with dead links and returns text with live links
function updateDeadLinks(textWithDeadLinks) {
  let deadLink;
  let textWithLiveLinks = textWithDeadLinks;

  while (deadLink = sitesToReplaceRegex.exec(textWithLiveLinks)) {

    const liveLink = updateDeadLink(deadLink[0]);
    // replace dead link with live link
    if (liveLink !== null) {
      textWithLiveLinks = textWithLiveLinks.replace(deadLink[0], liveLink);
    } else {
      console.error(`Error for URL: ${deadLink[0]}. Please check link for formatting errors. Otherwise, report bug to developer and provide link.`);
      return null;
    }
  }
  return textWithLiveLinks;
}

// returns the board of a dead link
function getBoardName(deadLink) {
  let boardName = null;
  try {
    [boardName] = deadLink.match(allBoards);
  } catch (TypeError) {
    console.error(`URL does not match correct formatting for this function: ${deadLink[0]}`);
  }
  return boardName;
}

// Selects a live archive site for a dead link corresponding to the link's board.
// Returns a live link
function updateDeadLink(deadLink) {
  let liveLink;
  const boardName = getBoardName(deadLink);

  for (const [archiveSite, archiveSiteBoards] of Object.entries(liveSitesAndBoards)) {

    if (boardName.match(archiveSiteBoards)) {
      const match = sitesToReplaceRegex.exec(deadLink);
      const { threadNumber, wordsOrPostNumber, postNumber } = match.groups;

      // [website]/[board]/thread/[threadNumber]
      liveLink = `https://${archiveSite}${boardName}thread/${threadNumber}`;

      if (!wordsOrPostNumber && !postNumber) {
        // only threadNumber
        break;
      } else if (wordsOrPostNumber && !postNumber) {
        const wordContainsOnlyNumbers = /^\d+$/.test(wordsOrPostNumber);

        if (wordContainsOnlyNumbers) {
          liveLink += `#q${wordsOrPostNumber}`;
        }
      } else if (postNumber) {
        liveLink += `#q${postNumber}`;
      } else {
        return null;
      }
      break;
    }
  }
  return liveLink;
}

module.exports = {
  getBoardName,
  updateDeadLinks,
  updateDeadLink
};
