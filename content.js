/* url changes without page loading */
// store dwurl on load
let currentPage = location.href;
// listen for changes
setInterval(() => {
    // do your thing..
    hideRecomVideos()
    hideComments()
}, 500);


/* hide recommendation element of youtube
 * current id is: 'secondary'
 * update it if it is deprecated
 */
function hideRecomVideos() {
  chrome.storage.sync.get("isHiddenRecomVideos", ({ isHiddenRecomVideos }) => {
    // block recommendations
    if (isHiddenRecomVideos) {
      document.getElementById('secondary-inner').style.display = 'none'
    }
    else {
      document.getElementById('secondary-inner').style.display = 'block'
    }
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
  });
}
