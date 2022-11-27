const textarray = ["cd Desktop","ls -la","uname -a","ssh root@localhost","sudo apt update","dmesg | tail"];
const index = Math.floor(Math.random() * textarray.length);
const text = textarray[index];
const changedoc = document.querySelector('.lintext')
const year = new Date().getFullYear();
const footer = document.querySelector("footer");
footer.textContent = `Lee Zhi Wei, ${year}`;
for (let x = 0; x < text.length; x++){
    changedoc.textContent += text[x];
}

