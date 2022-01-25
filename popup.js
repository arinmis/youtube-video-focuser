// Initialize button with user's preferred color
const recomVideos = document.getElementById("recomVideos");
const comments = document.getElementById("comments");

// listen recommend checkbox 
recomVideos.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hideRecomVideos,
  });
});

// listen recommend checkbox 
comments.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hideComments,
  });
});

/* hide recommendation element of youtube
 * current id is: 'secondary'
 * update it if it is deprecated
 */
function hideRecomVideos() {
  chrome.storage.sync.get(() => {
    // block recommendations
    if (document.getElementById('secondary').style.visibility !== 'hidden') { 
      document.getElementById('secondary').style.visibility = 'hidden'
      console.log("videos are hiding")
    }
    else 
      document.getElementById('secondary').style.visibility = 'visible'
  });
}



/* 
 * hide recommendation element of youtube
 * current id is: 'sections'
 * update it if it is deprecated
 */
function hideComments() {
  chrome.storage.sync.get(() => {
    // block recommendations
    if (document.getElementById('sections').style.visibility !== 'hidden') { 
      document.getElementById('sections').style.visibility = 'hidden'
      console.log("videos are hiding")
    }
    else 
      document.getElementById('sections').style.visibility = 'visible'
  });
}
