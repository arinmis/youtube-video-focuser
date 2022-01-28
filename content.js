// wait 5 second for page load
const wait = 5000
window.setTimeout(() => {
  console.log(`\n\n\n page is cleared after ${wait} ms\n\n\n`);

  hideRecomVideos()
  hideComments()
}, wait);


/* hide recommendation element of youtube
 * current id is: 'secondary'
 * update it if it is deprecated
 */
function hideRecomVideos() {
  chrome.storage.sync.get("isHiddenRecomVideos", ({ isHiddenRecomVideos }) => {
    // block recommendations
    console.log("isHiddenRecomVideos: " + isHiddenRecomVideos);
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
    console.log("isHiddenComments: " + isHiddenComments);
    if (isHiddenComments) {
      document.getElementById('sections').style.display = 'none'
    }
    else {
      document.getElementById('sections').style.display = 'block'
    }
  });
}
