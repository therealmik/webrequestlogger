let requestFilter = {
  urls: ["<all_urls>"],
};

let flags = [];

function logRequest(details) {
  console.log(details.method, details.url);
}

chrome.webRequest.onBeforeRequest.addListener(logRequest, requestFilter, flags);
