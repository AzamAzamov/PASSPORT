let box = document.querySelector(".box");
let img1 = document.createElement("img");
let img2 = document.createElement("img");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
let p6 = document.createElement("p");
let p7 = document.createElement("p");



box.style.width = "400px";
box.style.height = "230px";
box.style.border = "1px solid black";
box.style.borderRadius = "10px";
box.style.backgroundColor = "gray";
box.style.position = "relative";
box.style.display="flex";
box.style.flexDirection="column";



img2.style.position = "absolute";
img2.style.top = "90px";
img2.style.left = "10px";
img2.src = "./b.jpg";
img2.style.width = "100px";
img2.style.height = "100px";

img1.src = "./OIP (1).jpg";
img1.style.width = "100px";
img1.style.position = "absolute";
img1.style.top = "20px";
img1.style.left = "10px";

p1.innerHTML = "PASSPORT";
p1.style.position = "absolute";
p1.style.left = "120px";

p2.innerHTML = "REPUBLIC OF TADJIKISTAN";
p2.style.position = "absolute";
p2.style.left = "120px";
p2.style.top = "20px";

p3.innerHTML = "name: AZAM"
p3.style.position = "absolute";
p3.style.left = "120px";
p3.style.top = "50px";

p4.innerHTML = "surname: Azamov"
p4.style.position = "absolute";
p4.style.left = "120px";
p4.style.top = "70px";

p5.innerHTML = "date of birth: 12.05.1995"
p5.style.position = "absolute";
p5.style.left = "120px";
p5.style.top = "90px";

p6.innerHTML = "Place of residence :"
p6.style.position = "absolute";
p6.style.left = "120px";
p6.style.top = "140px";

p7.innerHTML = "Hissor city "
p7.style.position = "absolute";
p7.style.left = "120px";
p7.style.top = "160px";

box.append(p1, img1, img2 , p2 , p3 , p4 , p5 , p6 , p7);
