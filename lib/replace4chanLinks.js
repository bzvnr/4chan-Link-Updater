
// Note that it cannot parse posts whose thread or post numbers only have a single digit
// posts in the format `/{number},{number}` might not work

var chanLinkReplacer = require("./siteAndBoardRegexes.js");

// Takes text with dead links and returns text with live links
function updateDeadLinks(textWithDeadLinks) {
  let deadLink;
  let textWithLiveLinks = textWithDeadLinks;
  
  while ((deadLink = chanLinkReplacer.sitesToReplaceRegex.exec(textWithLiveLinks)) !== null) {
  
    let liveLink = updateDeadLink(deadLink);
   
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
    boardName = deadLink[0].match(chanLinkReplacer.allBoards)[0];
  } catch (TypeError) { 
    console.error(`URL does not match correct formatting for this function: ${deadLink[0]}`);
  }
  return boardName;
}

// Selects a live archive site for a dead link corresponding to the link's board. Returns a live link
function updateDeadLink(deadLink) {
  let liveLink;
  let boardName = getBoardName(deadLink);
  
  for (const [archiveSite, archiveSiteBoards] of Object.entries(chanLinkReplacer.liveSitesAndBoards)) {
    
    if (boardName.match(archiveSiteBoards)) {
      // exclude single digit numbers [i.e. "4chan", "r9k", "3," etc.] 
      let linkNumbers = [...deadLink[0].matchAll(/\d{2,}/g)];
      
      // [website]/[board]/thread/[threadNumber]
      liveLink = `https://${archiveSite}${boardName}thread/${linkNumbers[0]}`;
      
      if (linkNumbers.length === 2) {
        // [website]/[board]/thread/[threadNumber]#q[postNumber]
        liveLink += `#q${linkNumbers[1]}`;
      } else if (linkNumbers.length !== 1) {
        return null;
      }
      break;
    }
  }
  return liveLink;
}

module.exports = {
  updateDeadLinks,
  updateDeadLink
};
