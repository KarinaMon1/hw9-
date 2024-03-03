const strs = document.querySelectorAll('#string');
const check1 = /https:\/\/\S*/gi;
const check2 = /http:\/\/\S*/gi;

strs.forEach(str => {
    let text = str.innerText;
    if(text.match(check1)!=null || text.match(check2)!=null ){
        str.innerText='';

        var newStr = document.createElement('a');
        newStr.href = text;

        newStr.appendChild(document.createTextNode(text));
        str.appendChild(newStr);
    }
});