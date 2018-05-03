var inventory = [
    "apple",
    "egg",
    "Ice cream",
    "rice",
    "carrot",
    "pizza",
    "potato",
    "olive oil",
    "onion"
];
var item = prompt('Enter a item to search:');
var foundItem;
var found=false;
for(var i=0;i<inventory.length;i++){
    if(item==inventory[i]){
            found=true;
            foundItem=inventory[i];
    }
}
if(found){
     document.write(foundItem+' Found in The inventory yayyy!');
}else{
    document.write('This item not Found yayyy!');
}
