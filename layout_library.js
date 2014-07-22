/**
 * Created by zhenghu on 14 年 七月. 11..
 */


function createButton(id, width, height, xPosition, yPosition) {
    var newButton = document.createElement('button');

    newButton.id = id;

    var _newButton = $('#'+id);

    _newButton.css({'width': width+'px'});
    _newButton.css({'height': height+'px'});

    return newButton;

}



function main() {

    console.log("Hi!");

    var _body = $('#body');



//    body.css({"width": "500p", "height": "500px", "border-width": "2px"});
    _body.css({'width': '500px'});
    _body.css({'height': '500px'});
    _body.css({'border-width': '2px'});

    var firstButton = createButton('hi', 10, 10, 50, 50);

    _body[0].appendChild(firstButton);
    var args = arguments;
    console.log(args);

}

document.addEventListener("DOMContentLoaded", main);