// for(var i=0;i<students.length;i++){
//     student=students[i];
//     html+='<h4>Student Name: '+student.name+'</h4>';
//     html+='<p>Track: '+student.track+'</p>';
//     html+='<p>Achivements: '+student.achivements+'</p>';
//     html+='<p>Points: '+student.points+'</p>';
// }

function getStudentInfo(student){
    var html = '';
    html+='<h4>Student Name: '+student.name+'</h4>';
    html+='<p>Track: '+student.track+'</p>';
    html+='<p>Achivements: '+student.achivements+'</p>';
    html+='<p>Points: '+student.points+'</p>';
    return html;
}
function print(msg){
   return document.write(msg);
}


 while(true){
    var searchToken = prompt('Type name to show info or type quit to exit');
    if(searchToken==="quit"){
        break;
    }else{
        for(var i=0;i<students.length;i++){
            student=students[i];
            if(searchToken===student.name){
               var info = getStudentInfo(student);
               print(info);
            }
        }
       
    }
    
    document.write(html);
    
}
