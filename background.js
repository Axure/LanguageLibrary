/**
 * Created by zhenghu on 14 年 七月. 12..
 */

var localStorage = chrome.storage.local;
var syncStorage = chrome.storage.sync;




chrome.contextMenus.create({title:"Add word '%s' to your knowledge base!",contexts: ["all"], "onclick": addWord});

function addWord() {
//    var selection = info.selectionText;
//    console.log(selection);

    // Set index list

    // Set actually storage


    // A two-bridged per se walk-through.

    chrome.tabs.executeScript(null, {
        code: "addWord_info()"
    }, function(info){
        console.log(info);
        title = 'word' + info.selection;
        localStorage.set({title: info.selection}, function callback(){
            console.log("Written" + info.selection);
    });






    })
}


