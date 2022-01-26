window.onload = function() {
  console.log("\n\n\n page is loaded \n\n\n");

  hideRecomVideos()
  hideComments()
}


/* hide recommendation element of youtube
 * current id is: 'secondary'
 * update it if it is deprecated
 */
function hideRecomVideos() {
  chrome.storage.sync.get("isHiddenRecomVideos", ({ isHiddenRecomVideos }) => {
    // block recommendations
    console.log(isHiddenRecomVideos);
    if (isHiddenRecomVideos) {
      document.getElementById('secondary-inner').style.display = 'none'
    }
    else {
      document.getElementById('secondary-inner').style.display = 'block'
    }
    // update videos visibility data
    chrome.storage.sync.set({"isHiddenRecomVideos": !isHiddenRecomVideos});
  });

}


/*
 * hide comments element of youtube
 * current id is: 'sections'
 * update it if it is deprecated
 */
function hideComments() {
  chrome.storage.sync.get("isHiddenComments", ({ isHiddenComments }) => {
    // block recommendations
    if (isHiddenComments) {
      document.getElementById('sections').style.display = 'none'
    }
    else {
      document.getElementById('sections').style.display = 'block'
    }
    // update comment visibility data
    chrome.storage.sync.set({"isHiddenComments": !isHiddenComments});
  });
}
