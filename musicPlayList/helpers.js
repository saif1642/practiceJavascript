function printList(list){
    var listHtml = '<ol>';
    for(var i=0; i<list.length; i++){
        listHtml+='<li>'+list[i]+'</li>';
    }
    listHtml +='</ol>';
    print(listHtml);
}
function print(html){
    document.write(html);
}