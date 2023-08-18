const productdetail={
    name:"apple 2020 macbook Air Laptop",
    price:82000,
    color:"grey",
    harddisk:"256 gb",
};
console.log("below are the product details");
for(let keys of Object.keys(productdetail))
{
    console.log(keys+":"+productdetail[keys]);
}