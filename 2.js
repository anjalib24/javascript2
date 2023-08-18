function totalvalue()
{
    let totalvalue=0;
    for(let i=0;i<arguments.length;i++)
    {
        totalvalue=+arguments[i];
    }
    console.log("the total cart value is :"+totalvalue);
return totalvalue; 
}
totalvalue(10,20,30);

