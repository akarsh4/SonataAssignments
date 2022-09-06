const fs= require('fs');
const path = require('path');
fs.writeFile(path.join(__dirname,'/traindetails','student.txt')
,'akarsh'
,(err)=>{
    if(err) throw err;
    console.log('student name accessed');
}
);
fs.readFile(path.join(__dirname,'/traindetails','student.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
}
);
