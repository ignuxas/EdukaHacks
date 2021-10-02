//By: Ignas Mikolaitis
//Website: ignuxas.com
var n = [];

for (var i = 30; i < 38; i++){
    n.push(window.location.pathname[i]);
}

var out = "https://klase.eduka.lt/api/student" + "/quiz-templates/result-xml/" + n[0] + n[1] + n[2] + n[3] + n[4] + n[5] + n[6] + n[7] + "/perziura"
window.open(out)