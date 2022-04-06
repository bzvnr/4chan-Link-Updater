// link ending regex: [boardName]/(thread/)?threadNumber/?(((word|-)+)?(/?#?(p|q)?postNumber)?)?
const linkEnding = /\/\w+\/(\w+\/)?\d+(\/)?(((\w+|-)+)?((\/)?#?(p|q)?\d+)?)?/g;
  
const chanRegex = /boards(?:\.(4channel|4chan)\.org)/;
const yukiRegex =  /(?:yuki\.la)/;
const nyafuuRegex = /archive\.nyafuu\.org/;
const moeArchiveRegex = /archive\.moe\.org/;
const bStatsRegex = /archive\.b-stats\.org/;
const desuStorageRegex = /desu-storage\.org/;

const sitesToReplace = [chanRegex, yukiRegex, nyafuuRegex, moeArchiveRegex, bStatsRegex, desuStorageRegex];

const sitesToReplaceRegex = new RegExp("https?:\/\/(www\.)?(" + chanRegex.source + "|" + yukiRegex.source  + "|" + bStatsRegex.source + nyafuuRegex.source + "|" + moeArchiveRegex.source + "|" + desuStorageRegex.source + ")" + linkEnding.source);

const allBoards = /\/(3|a|aco|adv|an|asp|b|bant|biz|c|can|cgl|ck|cm|co|cock|con|d|diy|e|f|fa|fap|fit|fitlit|g|gd|gif|h|hc|his|hm|hr|i|ic|int|jp|k|lgbt|lit|m|mlp|mlpol|mo|mtv|mu|n|news|o|out|outsoc|p|po|pol|pw|q|qa|qb|qst|r|r9k|s|s4s|sci|soc|sp|spa|t|tg|toy|trash|trv|tv|u|v|vg|vint|vip|vm|vmg|vp|vr|vrpg|vst|vt|w|wg|wsg|wsr|x|xs|y)\//;

// omissions for sites other than archived.moe is due to search being disabled for those boards on those websites
const liveSitesAndBoards = {
  "arch.b4k.co": /\/(qb|v|vg|vm|vmg|vp|vrpg|vst)\//, // omitted: g, mlp
  "archive.4plebs.org": /\/(adv|f|hr|o|pol|s4s|sp|tg|trv|tv|x)\//,
  "archive.alice.al": /\/(bant|c|con|e|i|n|news|out|p|pw|qst|toy|vip|vp|vt|w|wg|wsr)\//,
  "archived.moe": /\/(asp|b|can|cock|fap|fitlit|gd|mlpol|mo|mtv|outsoc|po|spa|vint|xs)\//, // thumbnails only
  "archiveofsins.com": /\/(h|hc|hm|i|lgbt|r|s|soc|t|u)\//,
  "boards.fireden.net": /\/(cm|co|ic|sci|y)\//, // omitted: v. vip
  "desuarchive.org": /\/(a|aco|an|c|cgl|co|d|fit|g|gif|his|int|k|m|mlp|mu|q|qa|r9k|tg|trash|vr|wsg)\//,
  "rbt.asia/rebeccablacktech.com": /\/(a|aco|an|c|cgl|co|d|fit|g|gif|his|int|k|m|mlp|mu|q|qa|r9k|tg|trash|vr|wsg)\//, // same boards as desuarchive clone
  "thebarchive.com": /\/b\//,
  "warosu.org": /\/(3|biz|cgl|ck|diy|fa|ic|jp|lit|sci|vr|vt)\//,
}

const liveSitesAndBoardsNoFilter = {
  "arch.b4k.co": /\/(g|mlp|qb|v|vg|vm|vmg|vp|vrpg|vst)\//,
  "archive.4plebs.org": /\/(adv|f|hr|o|pol|s4s|sp|tg|trv|tv|x)\//,
  "archive.alice.al": /\/(bant|c|con|e|i|n|news|out|p|pw|qst|toy|vip|vp|vt|w|wg|wsr)\//,
  "archive.wakarimasen.moe": /\/(3|a|aco|adv|an|asp|b|bant|biz|c|cgl|ck|cm|co|d|diy|e|f|fa|fit|g|gd|gif|h|hc|his|hm|hr|i|ic|int|jp|k|lgbt|lit|m|mlp|mu|n|news|o|out|p|po|pol|pw|qa|qst|r|r9k|s|s4s|sci|soc|sp|t|tg|toy|trash|trv|tv|u|v|vg|vip|vm|vmg|vp|vr|vrpg|vst|vt|w|wg|wsg|wsr|x|xs|y)\//,
  "archived.moe": /\/(3|a|aco|adv|an|asp|b|bant|biz|c|can|cgl|ck|cm|co|cock|con|d|diy|e|f|fa|fap|fit|fitlit|g|gd|gif|h|hc|his|hm|hr|i|ic|int|jp|k|lgbt|lit|m|mlp|mlpol|mo|mtv|mu|n|news|o|out|outsoc|p|po|pol|pw|q|qa|qb|qst|r|r9k|s|s4s|sci|soc|sp|spa|t|tg|toy|trash|trv|tv|u|v|vg|vint|vip|vmg|vp|vr|vrpg|vt|w|wg|wsg|wsr|x|xs|y)\//,
  "archiveofsins.com": /\/(h|hc|hm|i|lgbt|r|s|soc|t|u)\//,
  "boards.fireden.net": /\/(cm|co|ic|sci|v|vip|y)\//,
  "desuarchive.org": /\/(a|aco|an|c|cgl|co|d|fit|g|gif|his|int|k|m|mlp|mu|q|qa|r9k|tg|trash|vr|wsg)\//,
  "rbt.asia/rebeccablacktech.com": /\/(a|aco|an|c|cgl|co|d|fit|g|gif|his|int|k|m|mlp|mu|q|qa|r9k|tg|trash|vr|wsg)\//, // same boards as desuarchive
  "thebarchive.com": /\/(b|bant)\//,
  "tokyochronos.net": /\/(a|c|g|jp|mu|r9k|vp|vrpg|vt)\//,
  "warosu.org": /\/(3|biz|cgl|ck|diy|fa|ic|jp|lit|sci|vr|vt)\//
}

const deadSitesAndBoards = {
  "archive.heinessen.com": /\/(an|fit|k|mlp|r9k|toy)\//,
  "archive.moe": /\/(a|biz|c|co|diy|gd|i|int|jp|m|mlp|out|po|s4s|sci|sp|tg|tv|v|vg|vp|vr|wsg)\//,
  "archive.loveisover.me": /\/(c|d|e|i|lgbt|t|u)\//,
  "archive.nyafuu.org": /\/(bant|c|con|e|n|news|out|p|toy|vip|vmg|vp|vst|vt|w|wg|wsr)\//,
  "archive.yeet.net": /\/(g|k|qa|s4s)\//,
  "boards.4tan.org": /\/(3|a|aco|adv|an|asp|b|bant|biz|c|can|cgl|ck|cm|co|cock|d|diy|e|f|fa|fap|fit|fitlit|g|gd|gif|h|hc|his|hm|hr|i|ic|int|jp|k|lgbt|lit|m|mlp|mlpol|mo|mtv|mu|n|news|o|out|outsoc|p|po|pol|qa|qst|r|r9k|s|s4s|sci|soc|sp|spa|t|tg|toy|trash|trv|tv|u|v|vg|vint|vip|vp|vr|w|wg|wsg|wsr|x|y)\//,
  "fgts.jp": /\/(asp|cm|h|hc|hm|n|p|r|s|soc|y)\//,
  "nsfw.archive.moe": /\/(h|u)\//,
  "yuki.la": /\/(3|a|aco|adv|an|asp|bant|biz|c|cgl|ck|cm|co|con|d|diy|e|fa|fit|g|gd|gif|h|hc|his|hm|hr|i|ic|int|jp|k|lgbt|lit|m|mlp|mu|n|news|o|out||p|po|pol|pw|q|qa|qst|r|r9k|s|s4s|sci|soc|sp|t|tg|toy|trv|tv|u|v|vg|vip|vm|vmg|vp|vr|vrpg|vst|vt|w|wg|wsg|wsr|x|xs|y)\//
}

module.exports = {
  sitesToReplace,
  sitesToReplaceRegex,
  allBoards,
  liveSitesAndBoards,
  liveSitesAndBoardsNoFilter,
  deadSitesAndBoards
};
