function unique(input)
{
    const charset=new set();
    for(const char of input)
    {
        if(charset.has(char))
        {
            console.log("the input string contains duplicate.");
            return false;
        }
        else
        {
            charset.add(char);
            console.log('the input string contain only unique characters ');
            return true;
        }
        unique("mithun");
        unique("anurag");
        unique("anjali");


    }
}