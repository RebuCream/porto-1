function openPopup(type){

const popup = document.getElementById("popup");
const content = document.getElementById("popup-content");

popup.style.display = "block";

if(type === "edit"){
content.innerHTML = `
<h2>Contoh Editing</h2>
<img src="img/edit1.jpg" width="400">
`;
}

if(type === "photo"){
content.innerHTML = `
<h2>Fotografi</h2>
<img src="img/photo1.jpg" width="400">
`;
}

if(type === "coding"){
content.innerHTML = `
<h2>Project Coding</h2>
<p>Website portfolio dan aplikasi web.</p>
`;
}

}

function closePopup(){
document.getElementById("popup").style.display = "none";
}