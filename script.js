function add() {
    event.preventDefault()
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a + b))
    document.getElementById("answer").value = a + b
    document.getElementById("ans").style.display = "block"
}