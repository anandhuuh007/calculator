function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val
}
function clearDisplay()
{
    document.getElementById("screen").value=""
}
function answer()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result

}

function backspace() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}

