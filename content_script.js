/**
 * Created by zhenghu on 14 年 七月. 12..
 */

function addWord_info() {

    var selection = document.getSelection();

    var date = new Date();

    var url = window.location.href;



    var language = "en";

    var context;

    var info = {"selection":selection, "date":date, "url":url, "language": language, "context": context};

    console.log(info);

    return info;
}