// default options for removing
// videos and comment section
let isHiddenRecomVideos = true;
let isHiddenComments = true;

// initailize hiding state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isHiddenRecomVideos });
  chrome.storage.sync.set({ isHiddenComments });
  // logout defult values
  console.log(`isHiddenComments: ${isHiddenComments}`);
  console.log(`isHiddenRecomVideos: ${isHiddenRecomVideos}`);

});
