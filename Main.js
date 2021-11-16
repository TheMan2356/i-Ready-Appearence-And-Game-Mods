var Button = document.createElement("button");
Button.innerHTML = "Alert";
Button.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button.style.border = "none"
Button.style.color = "white"
Button.style.background = "#2196F3"
Button.style.margin = "5px";
Button.onclick = function() {
  alert("i-Ready Sucks")
}
document.body.appendChild(Button);
var Button2 = document.createElement("button");
Button2.style.border = "none"
Button2.style.color = "white"
Button2.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button2.style.margin = "5px";
Button2.style.background = "#2196F3"
Button2.innerHTML = "Text";
Button2.onclick = function () {
  var Center = document.createElement("center")
  var Div = document.createElement("div");
  var Text = document.createElement("p");
Text.innerHTML = "I-Ready Sucks";
  Center.appendChild(Div)
  Div.appendChild(Text);
  document.body.appendChild(Center);
}

document.body.appendChild(Button2);

var Button3 = document.createElement("button");
Button3.innerHTML = "Notes";
Button3.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button3.style.margin = "5px";
Button3.style.border = "none"
Button3.style.color = "white"
Button3.style.background = "#2196F3"
Button3.onclick = function () {
  var Div = document.createElement("div");
  var Center = document.createElement("center")
  var Box = document.createElement("textarea");
  Center.appendChild(Div);
  Div.appendChild(Box)
  document.body.appendChild(Center);
}

document.body.appendChild(Button3);

var Button4 = document.createElement("button");
Button4.innerHTML = "Among Us";
Button4.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button4.style.border = "none"
Button4.style.margin = "5px";
Button4.style.color = "white"
Button4.style.background = "#2196F3"
Button4.onclick = function () {
  var Center = document.createElement("center");
  var Div = document.createElement("div");
  var Image = document.createElement("img");
  Image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOlrpXzjUT3wfS9TcYOQN_bulvmafLDjKhl121fPx&usqp=CAI&s";
  Center.appendChild(Div);
  Div.appendChild(Image);
  document.body.appendChild(Center);
}

document.body.appendChild(Button4);

var Button5 = document.createElement("button");
Button5.innerHTML = "Clicker";
Button5.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button5.style.border = "none"
Button5.style.margin = "5px";
Button5.style.color = "white"
Button5.style.background = "#2196F3"
Button5.onclick = function () {
  var Center = document.createElement("center");
  var Div = document.createElement("div");
  var Img2 = document.createElement("img");
  var Num = document.createElement("p");
  Num.innerHTML = 0;
  Num.id = "Num"
  Img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7vGV2qHAX4aWeu5Xr0oKxuBc2uRrq1T5rA&usqp=CAU";
  Img2.onclick = function () {
    var Get = Number(document.getElementById("Num").innerHTML);
    var Final = Get + 1;
    var Txt = document.getElementById("Num").innerHTML = Final;
  }
  document.body.appendChild(Center);
  Center.appendChild(Div);
  Div.appendChild(Img2);
  Div.appendChild(Num)
}

document.body.appendChild(Button5);

var Button6 = document.createElement("button");
Button6.innerHTML = "Dark Mode (Beta)";
Button6.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button6.style.margin = "5px";
Button6.style.border = "none"
Button6.style.color = "white"
Button6.style.background = "#2196F3"
Button6.onclick = function () {
  document.body.style.backgroundColor = "black";
  var Div = document.getElementsByTagName("div")[0];
  var Btn = document.getElementsByTagName("button")[0];
  Btn.style.backgroundColor = "black";
  Btn.style.color = "white";
  Div.style.backgroundColor = "black";
}

document.body.appendChild(Button6);

var Button7 = document.createElement("button");
Button7.innerHTML = "Custom Background";
Button7.style.border = "none"
Button7.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button7.style.color = "white"
Button7.style.background = "#2196F3"
Button7.onclick = function () {
  var Center = document.createElement("center");
  var Div = document.createElement("div");
  var Input = document.createElement("input");
  var Enter = document.createElement("button");
  Enter.innerHTML = "Enter";
  Enter.style.border = "none"
  Enter.style.color = "white"
  Enter.style.background = "#2196F3"
  Input.type = "text";
  Input.placeholder = "Input Image Url...";
  Input.style.border = "none";
  Input.id = "url";
  Input.style.outline = "none";
  Center.appendChild(Div);
  Div.appendChild(Input);
  Div.appendChild(Enter);
  document.body.appendChild(Center);
  Enter.onclick = function () {
    var Get = document.getElementById("url").value;
    var Img = document.getElementsByTagName("img")[0];
Img.src = Get;
  }
}

document.body.appendChild(Button7);

var Button8 = document.createElement("button");
Button8.innerHTML = "Custom Name";
Button8.style.border = "none"
Button8.style.color = "white"
Button8.style.background = "#2196F3"
Button8.style.boxShadow = "1px 2px 22px 0px rgba(89,87,87,0.85)";
Button8.style.margin = "5px";
Button8.onclick = function () {
  var Center = document.createElement("center");
  var Div = document.createElement("div");
  var Input = document.createElement("input");
  var Enter = document.createElement("button");
  Enter.innerHTML = "Enter";
  Enter.style.border = "none"
  Enter.style.color = "white"
  Enter.style.background = "#2196F3"
  Input.type = "text";
  Input.placeholder = "Input Name...";
  Input.style.border = "none";
  Input.id = "Txt"
  Input.style.outline = "none";
  Center.appendChild(Div);
  Div.appendChild(Input);
  Div.appendChild(Enter);
  document.body.appendChild(Center);
  Enter.onclick = function () {
    var Get = document.getElementById("Txt").value;
    document.getElementsByClassName("css-1ii68kw e15psnz1")[0].innerHTML = Get;
  }
}

document.body.appendChild(Button8)
