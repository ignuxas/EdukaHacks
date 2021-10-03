//By: Ignas Mikolaitis
//Website: ignuxas.com
var n = [];

for (var i = 30; i < 38; i++){
    n.push(window.location.pathname[i]);
}

n = String(n).replaceAll(",", "")
var out = "https://klase.eduka.lt/api/student/quiz-templates/result-xml/" + n + "/perziura"
window.open(out)
