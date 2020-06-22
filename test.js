function cal(){
    var txt1 = document.getElementById("text1");
    var txt2 = document.getElementById("text2");
    var out = document.getElementById("out");
    if(isNaN(txt1.value) || isNaN(txt2.value)) out.innerHTML = "半角数字を入力してください。";
    else out.innerHTML = Number(txt1.value) + Number(txt2.value);
}