/**
 * Created by zhenghu on 14 年 七月. 12..
 */

var localStorage = chrome.storage.local;
var syncStorage = chrome.storage.sync;


chrome.contextMenus.create({title:"Add word '%s' to your knowledge base.",contexts: ["all"], "onclick": addWord});

function addWord() {
    chrome.tabs.executeScript(null, {
        code: "fetchWordInfo()"
    }, function(_infoArray){
        var infoArray = _infoArray[0];
        var info = {};
        var title = "word::" + infoArray.text;
        info[title] = infoArray;
        chrome.storage.local.get("index", function callback(value) {
            var indexList = [];
            if(chrome.runtime.lastError) {
                console.log("Last error!");
            }
            if (!value || !value.index) {
                console.log("No previous value");
            } else {
                console.log("Succ get!" + value.index);
                indexList = value.index;
            }

            indexList.push(infoArray.text);
            chrome.storage.local.set({"index": indexList}, function callback() {
                console.log("Index list updated!")
            });
            return 0;
        });
        chrome.storage.local.set(info, function callback() {
            console.log("Written!");
        });
    });
}


