const students=[
    {
        name:'mithun',
        marks:95,
    },
    {
        name:'prabir',
        marks:'90',
    },
    {
    name:'ayush',
    marks:85,
    },
{
name :'golu' ,
marks:80,
},
];
const checkresult=(name)=>{
 for(let student of students){
    if(student.name===name)
    {
        return student.marks>90?
        console.log('congratulations :'+student.name+' you have cleared the exam'):console.log('sorrt1you have not cleared the exam');
    }
}
console.log('invalid user!!');

 };
 checkresult("mithun");
 checkresult('ayush');   

