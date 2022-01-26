// Initialize button with user's preferred color
const recomVideos = document.getElementById("recomVideos");
const comments = document.getElementById("comments");
console.log('popup.js is called');


// listen recommend checkbox
window.addEventListener("load", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.storage.sync.get(
    ["isHiddenRecomVideos", "isHiddenComments"],
    ({ isHiddenRecomVideos, isHiddenComments }) => {
      recomVideos.checked = isHiddenRecomVideos
      comments.checked = isHiddenComments
    }
  );

});

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
  chrome.storage.sync.get("isHiddenRecomVideos", ({ isHiddenRecomVideos }) => {
    // chage hide status
    console.log("(before)video section status: " +  isHiddenRecomVideos);
    isHiddenRecomVideos = !isHiddenRecomVideos
    // block recommendations
    console.log("(after)video section status: " +  isHiddenRecomVideos);
    if (isHiddenRecomVideos) {
      document.getElementById('secondary-inner').style.display = 'none'
      console.log('video is hiding');
    }
    else {
      document.getElementById('secondary-inner').style.display = 'block'
      console.log('video is showing');
    }
    // update videos visibility data
    chrome.storage.sync.set({"isHiddenRecomVideos": isHiddenRecomVideos});
  });

}


/*
 * hide comments element of youtube
 * current id is: 'sections'
 * update it if it is deprecated
 */
function hideComments() {
  chrome.storage.sync.get("isHiddenComments", ({ isHiddenComments }) => {
    // change hide status
    isHiddenComments = !isHiddenComments
    // block recommendations
    if (isHiddenComments) {
      document.getElementById('sections').style.display = 'none'
    }
    else {
      document.getElementById('sections').style.display = 'block'
    }
    // update comment visibility data
    chrome.storage.sync.set({"isHiddenComments": isHiddenComments});
  });
}
