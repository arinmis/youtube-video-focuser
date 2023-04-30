// default options for removing
// videos and comment section
const isHiddenRecomVideos = true;
const isHiddenComments = true;
const isHiddenHomeFeed = true;

// initailize hiding state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isHiddenRecomVideos });
  chrome.storage.sync.set({ isHiddenComments });
  chrome.storage.sync.set({ isHiddenHomeFeed });

  // logout defult values
  console.log(`isHiddenComments: ${isHiddenComments}`);
  console.log(`isHiddenRecomVideos: ${isHiddenRecomVideos}`);
  console.log(`isHiddenRecomVideos: ${isHiddenHomeFeed}`);
});
