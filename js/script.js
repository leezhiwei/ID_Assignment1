const textarray = ["cd Desktop","ls -la","uname -a","ssh root@localhost","sudo apt update","dmesg | tail"];
const index = Math.floor(Math.random() * textarray.length);
const text = textarray[index];
const changedoc = document.querySelector('.lintext')
for (let x = 0; x < text.length; x++){
    changedoc.textContent += text[x];
}