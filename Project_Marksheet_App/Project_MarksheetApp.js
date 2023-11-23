let a1 = document.getElementById("S1_Maths");
let b1 = document.getElementById("S1_Sci");
let c1 = document.getElementById("S1_Eng");

let a2 = document.getElementById("S2_Maths");
let b2 = document.getElementById("S2_Sci");
let c2 = document.getElementById("S2_Eng");

let a3 = document.getElementById("S3_Maths");
let b3 = document.getElementById("S3_Sci");
let c3 = document.getElementById("S3_Eng");

let a4 = document.getElementById("S4_Maths");
let b4 = document.getElementById("S4_Sci");
let c4 = document.getElementById("S4_Eng");

let a5 = document.getElementById("S5_Maths");
let b5 = document.getElementById("S5_Sci");
let c5 = document.getElementById("S5_Eng");

const Total1 = () => {
    document.querySelector(".total1").innerHTML = (Number(a1.value) + Number(b1.value) + Number(c1.value));
    if (a1.value < 35) {
        document.querySelector("#S1_Maths").style.color = "red"
    } else {
        document.querySelector("#S1_Maths").style.color = "black"
    }
    if (b1.value < 35) {
        document.querySelector("#S1_Sci").style.color = "red"
    } else {
        document.querySelector("#S1_Sci").style.color = "black"
    }
    if (c1.value < 35) {
        document.querySelector("#S1_Eng").style.color = "red"
    } else {
        document.querySelector("#S1_Eng").style.color = "black"
    }
}
const Total2 = () => {
    document.querySelector(".total2").innerHTML = (Number(a2.value) + Number(b2.value) + Number(c2.value));
    if (a2.value < 35) {
        document.querySelector("#S2_Maths").style.color = "red"
    } else {
        document.querySelector("#S2_Maths").style.color = "black"
    }
    if (b2.value < 35) {
        document.querySelector("#S2_Sci").style.color = "red"
    } else {
        document.querySelector("#S2_Sci").style.color = "black"
    }
    if (c2.value < 35) {
        document.querySelector("#S2_Eng").style.color = "red"
    } else {
        document.querySelector("#S2_Eng").style.color = "black"
    }
}
const Total3 = () => {
    document.querySelector(".total3").innerHTML = (Number(a3.value) + Number(b3.value) + Number(c3.value));
    if (a3.value < 35) {
        document.querySelector("#S3_Maths").style.color = "red"
    } else {
        document.querySelector("#S3_Maths").style.color = "black"
    }
    if (b3.value < 35) {
        document.querySelector("#S3_Sci").style.color = "red"
    } else {
        document.querySelector("#S3_Sci").style.color = "black"
    }
    if (c3.value < 35) {
        document.querySelector("#S3_Eng").style.color = "red"
    } else {
        document.querySelector("#S3_Eng").style.color = "black"
    }
}
const Total4 = () => {
    document.querySelector(".total4").innerHTML = (Number(a4.value) + Number(b4.value) + Number(c4.value));
    if (a4.value < 35) {
        document.querySelector("#S4_Maths").style.color = "red"
    } else {
        document.querySelector("#S4_Maths").style.color = "black"
    }
    if (b4.value < 35) {
        document.querySelector("#S4_Sci").style.color = "red"
    } else {
        document.querySelector("#S4_Sci").style.color = "black"
    }
    if (c4.value < 35) {
        document.querySelector("#S4_Eng").style.color = "red"
    } else {
        document.querySelector("#S4_Eng").style.color = "black"
    }
}
const Total5 = () => {
    document.querySelector(".total5").innerHTML = (Number(a5.value) + Number(b5.value) + Number(c5.value));
    if (a5.value < 35) {
        document.querySelector("#S5_Maths").style.color = "red"
    } else {
        document.querySelector("#S5_Maths").style.color = "black"
    }
    if (b5.value < 35) {
        document.querySelector("#S5_Sci").style.color = "red"
    } else {
        document.querySelector("#S5_Sci").style.color = "black"
    }
    if (c5.value < 35) {
        document.querySelector("#S5_Eng").style.color = "red"
    } else {
        document.querySelector("#S5_Eng").style.color = "black"
    }
}