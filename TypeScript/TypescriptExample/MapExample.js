var proArray=[
    {price:"100",product:"mobile"},
    {price:"500",product:"watch"},
    {price:"700",product:"tv"},
    {price:"400",product:"washing machine"}
];

var newpro = proArray.map(function(value){
return value.price
})
console.log(newpro);

var newPro1 = proArray.map(value=>value.price);
console.log(newPro1);

var dilter =  proArray.filter(function(value){
    if(value.price<300){
        return true;
    }
})
console.log(dilter);

const arrowvalue = proArray.filter(value=>value.price>300);
console.log(arrowvalue);

const sortPro = proArray.sort((a,b)=>(a.product>b.product ? 1:-1));
console.log(sortPro);