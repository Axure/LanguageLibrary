/**
 * Created by zhenghu on 14 年 七月. 12..
 */

function fetchWordInfo() {

    var text = document.getSelection().toString();

    var currentDate = new Date();
//    var datetime = currentDate.getDate() + "/"
//        + (currentDate.getMonth()+1)  + "/"
//        + currentDate.getFullYear() + " @ "
//        + currentDate.getHours() + ":"
//        + currentDate.getMinutes() + ":"
//        + currentDate.getSeconds();

    var datetime = currentDate.toString();

    var url = window.location.href;



    var language = "en";

    var context = "hehe";

    var infoArray = {"text":text, "datetime":datetime, "url":url, "language": language, "context": context};

    console.log(infoArray);

    return infoArray;
}