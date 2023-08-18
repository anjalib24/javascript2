alluser=["anjali",
"savita",
"ranu",
"gopal",
"mithin"

];
function isUserpresent(user)
{
    if(alluser.includes(user))
    {
        console.log('yes,${user} is a valid user.');
        return true;
    }
    else
    {
        console.log('No,${user} is not a valid user.')
    }

}
isUserpresent("mi");
