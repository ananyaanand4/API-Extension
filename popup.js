let scrape = document.getElementById('scrape');

scrape.addEventListener("click", async () => {
    chrome.tabs.create({ url: 'http://localhost:3000' });

    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapePage,
    });
})
//     let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         func: scrapePage,
//     });
// })

/*
async function fetchExcelData() {
    const response = await fetch(chrome.runtime.getURL('bro.xlsx'));
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), {type: 'array'});
    
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
    return jsonData;
}
*/

function scrapePage() {
    const codeElements = document.querySelectorAll('[data-code-text]');

    let codeTexts = [];

    codeElements.forEach(element => {
        codeTexts.push(element.getAttribute('data-code-text'));
    });

    console.log(codeTexts);
    //const excelData = await fetchExcelData();

    codeTexts.forEach(codeText => {
        if(codeText.includes("https://api.openai.com/v1/")) {
            console.log("chat gpt api is called");
            chrome.storage.local.set({ key: 'chat gpt' }, function() {
                console.log('Value is set to ' + value);
            });
        }

        if(codeText.includes("https://api.spotify.com/v1/")) {
            console.log("spotify api is called");
            chrome.storage.local.set({ key: 'spotify' }, function() {
                console.log('Value is set to ' + value);
            });
        }

        /*
        excelData.forEach(row => {
            console.log(`row[1]: ${row[1]}`);
            if (codeText.includes(row[1])) {
                console.log(`Match found for: ${codeText}`);
                const rowData = row.slice(2);
                console.log(`Additional data: ${rowData}`);
                // Do something with rowData, like displaying it or using it in your extension
            }
        });
        */
    });

    /*
    for (let i = 0; i < codeTexts.length; i++) {
        if (codeTexts[i].includes("api")) {
        }
    }
    */
}
