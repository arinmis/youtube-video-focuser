// Initialize button with user's preferred color
const recomVideos = document.getElementById("recomVideos");
const comments = document.getElementById("comments");
const homeFeed = document.getElementById("homeFeed");
console.log("popup.js is called");

// listen recommend checkbox
window.addEventListener("load", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.storage.sync.get(
    ["isHiddenRecomVideos", "isHiddenComments", "isHiddenHomeFeed"],
    ({ isHiddenRecomVideos, isHiddenComments, isHiddenHomeFeed }) => {
      recomVideos.checked = isHiddenRecomVideos;
      comments.checked = isHiddenComments;
      homeFeed.checked = isHiddenHomeFeed;
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
homeFeed.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hideComments,
  });
});

// listen home feed checkbox
comments.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hideHomeFeed,
  });
});

/* hide recommendation element of youtube
 * current id is: 'secondary'
 * update it if it is deprecated
 */
function hideRecomVideos() {
  chrome.storage.sync.get("isHiddenRecomVideos", ({ isHiddenRecomVideos }) => {
    // chage hide status
    console.log("here");
    isHiddenRecomVideos = !isHiddenRecomVideos;
    // update videos visibility data
    chrome.storage.sync.set({ isHiddenRecomVideos: isHiddenRecomVideos });
    // check if the url is correct
    if (!window.location.href.includes("youtube.com")) return;
    // block recommendations
    if (isHiddenRecomVideos) {
      document.getElementById("secondary-inner").style.display = "none";
      console.log("video is hiding");
    } else {
      document.getElementById("secondary-inner").style.display = "block";
      console.log("video is showing");
    }
  });
}

/*
 * hide comments element of youtube
 * current id is: 'comments'
 * update it if it is deprecated
 */
function hideComments() {
  chrome.storage.sync.get("isHiddenComments", ({ isHiddenComments }) => {
    // change hide status
    isHiddenComments = !isHiddenComments;
    // update comment visibility data
    chrome.storage.sync.set({ isHiddenComments: isHiddenComments });
    // check if the url is correct
    console.log(isHiddenComments);
    if (!window.location.href.includes("youtube.com")) return;
    // block recommendations
    if (isHiddenComments) {
      console.log("comments are hiding");
      document.getElementById("comments").style.display = "none";
    } else {
      console.log("comments are showing");
      document.getElementById("comments").style.display = "block";
    }
  });
}

/*
 * hide home feed
 */
function hideComments() {
  chrome.storage.sync.get("isHiddenHomeFeed", ({ isHiddenHomeFeed }) => {
    // change hide status
    isHiddenHomeFeed = !isHiddenHomeFeed;
    // update comment visibility data
    chrome.storage.sync.set({ isHiddenHomeFeed: isHiddenHomeFeed });
    // check if the url is correct
    console.log(isHiddenHomeFeed);
    if (!window.location.href.includes("youtube.com")) return;
    // block recommendations
    if (isHiddenHomeFeed) {
      console.log("home feed is hiding");
      document.getElementById("contents").style.display = "none";
    } else {
      console.log("home feed is showing");
      document.getElementById("contents").style.display = "block";
    }
  });
}
