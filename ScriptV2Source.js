//By: Ignas Mikolaitis
//Website: ignuxas.com
var n = [];

for (var i = 30; i < 48; i++){
    n.push(window.location.pathname[i]);
}

n = String(n).replaceAll(",", "")
var out = "https://klase.eduka.lt/student/lesson-material/task-data/perziura/" + n;
var newWin = window.open(out);

newWin.onload = function () 
{
    if (newWin.document.readyState === 'complete') {
        var div=newWin.document.createElement("a");
        div.style.color = "black";
        div.style.left = "75px";
        div.style.top = "10px";
        div.style.position = "absolute";
        div.innerHTML = "ignuxas.com";
        div.href = "https://ignuxas.com/";
        
        setTimeout(function() {
            newWin.document.getElementsByClassName("ic_player")[0].remove()
            newWin.document.getElementsByClassName("in-iframe-body")[0].appendChild(div);

            n = prompt("Įveskite užduoties, kurią norite atlikti, numerį");

            newWin.loadStudentTaskTemplate(String(n), 'perziura');
        }, 1000);
    }
}
