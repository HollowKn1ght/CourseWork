function viewDivAmd(){
    document.getElementById("amdcon").style.display = "block";
    document.getElementById("nvidiacon").style.display = "none";
};

function viewDivNvidia(){
    document.getElementById("nvidiacon").style.display = "block";
    document.getElementById("amdcon").style.display = "none";
};

function change_dot_color(n, event) {
    let dots = document.getElementsByClassName("slider_dots")[0].children;
    for (let j = 0; j < dots.length; j++) {
        if (n == j) {
            dots[j].style.background = "#fdc501";
        }
        else {
            dots[j].style.background = "#fff";
        }
    }
}

document.getElementsByClassName("slider_dots")[0].children[0].style.background = "#fdc501";

let inputs = document.getElementsByClassName("slider_dot");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", change_dot_color.bind(event, i));
}
