let scrape = document.getElementById('scrape');

scrape.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapePage,
    });
})

function scrapePage() {
    const codeElements = document.querySelectorAll('[data-code-text]');

    let codeTexts = [];

    codeElements.forEach(element => {
        codeTexts.push(element.getAttribute('data-code-text'));
    });

    console.log(codeTexts);

    for (let i = 0; i < codeTexts.length; i++) {
        if (codeText.includes("api")) {
            //go to database and get the things associated with the link
        }
    }
