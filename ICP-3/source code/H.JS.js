var x= Math.random();
var b;
if(x<=0.3) {
    x = 'r';
}
else if(x>0.3 && x<=0.6){
    x = 'p';
}
else if(x>0.6){
    x='s';
}
console.log(x)
function sam(inp) {

    b = inp;
    if (b == 'r' && x == 'r') {
        document.write("Both choose rock");
    } else if (b == 'p' && x == 'p') {
        document.write("both choose paper");
    } else if (b == 's' && x == 's') {
        document.write("both choose scissors");
    } else if (b == 'r' && x == 'p') {
        document.write("computer choose paper so computer wins");
    } else if (b == 'r' && x == 's') {
        document.write("computer choose scissors so you win");
    } else if (b == 'p' && x == 'r') {
        document.write("computer choose rock so you win");
    } else if (b == 'p' && x == 's') {
        document.write("computer choose scissors so computer win");
    } else if (b == 's' && x == 'p') {
        document.write("computer choose paper so you win");
    } else if (b == 's' && x == 'r') {
        document.write("computer choose rock so computer win");
    }
}