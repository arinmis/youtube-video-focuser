/* url changes without page loading */
// listen for changes
// time frequency in ms to apply setting in every
const freq = 500;
setInterval(() => {
  // run only in vidoes section
  if (!window.location.href.includes("youtube.com/watch"))
    return
  // try to remove related section 
  try {
    hideRecomVideos()
  }
  catch (e) {
    console.log(e)
  }

  try {
    hideComments()
  }
  catch (e) {
    console.log(e)
  }
}, freq);


/* hide recommendation element of youtube
 * current id is: 'secondary'
 * update it if it is deprecated
 */
function hideRecomVideos() {
  // check id'a are avaliable 
  if (document.getElementById('secondary-inner').style.display == null)
    throw `url ${window.location.href} doesn't contains related section`
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
  // check id'a are avaliable 
  if (document.getElementById('comments').style.display == null)
    throw `url ${window.location.href} doesn't contains related section`
  chrome.storage.sync.get("isHiddenComments", ({ isHiddenComments }) => {
    // block recommendations
    if (isHiddenComments) {
      document.getElementById('comments').style.display = 'none'
    }
    else {
      document.getElementById('comments').style.display = 'block'
    }
  });
}
