chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://www.facebook.com/?filter=all&sk=h_chr"};
    },
    {
        urls: [
            "*://facebook.com/",
            "*://www.facebook.com/"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);