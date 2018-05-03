var html = '';
var headHtml=''
var red;
var green;
var blue;
var rgbColor;

function randomRGB(){
    var rgb = Math.floor(Math.random()*256);
    return rgb;
}

function randomColor(){
    var color='rgb(';
    color+=randomRGB()+',';
    color+=randomRGB()+',';
    color+=randomRGB()+')';

    return color;
}
function print(msg){
    document.write(msg);
}

var heading ="Rainbow Dots";
for(var i=0;i<=11;i++){
    var rgbColor = randomColor();
    headHtml += '<span style="color:'+rgbColor+'">'+heading[i]+'</span>';

}
headHtml +='<br><hr>'
print(headHtml);



for(var i=0; i<=70; i++){
    var rgbColor = randomColor();
    html +='<div class="dot" style="background-color:'+rgbColor+'"></div>';
   
}
print(html);