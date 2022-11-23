const textarray = ["cd Desktop","ls -la","uname -a","ssh root@localhost","sudo apt update","dmesg | tail"];
const index = Math.floor(Math.random() * textarray.length);
const text = textarray[index];
for (let x = 0; x < text.length; x++){
    document.querySelector('.lintext').textContent += text[x];
}