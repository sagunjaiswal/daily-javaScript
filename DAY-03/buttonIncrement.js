function incrementValue()
{
    var value = document.getElementById('number').value;
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
