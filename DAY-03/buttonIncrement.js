// function increment(){
//     var i=0;
//     let num = document.getElementById('.btn .num').value=i++;
//     console.log(num);
//     // num++;

// }
function incrementValue()
{
    var value = document.getElementById('number').value;
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}