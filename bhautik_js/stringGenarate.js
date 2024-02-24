let output = document.getElementById("output");

function String_Generator(alpha) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let str = ``;

    for (let i = 1; i <= alpha; i++) {
        str += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    output.innerHTML = str;
}