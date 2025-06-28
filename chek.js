const arr =[
    {name:"haroon",age:"12"},
    {name:"haroon",age:"44"},
    {name:"maaz",age:"33"},
    {name:"hamza",age:"3"},
    {name:"bilal",age:"33"},
]

const filterd = arr.filter((itm)=>{
    if(itm.age==="33" && itm.name==="bilal") return true;
})
console.log(filterd);
