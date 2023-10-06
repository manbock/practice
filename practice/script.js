let i
let j

function gugudan( dan) {
    for (i = 1; i <= 9; i++) {
        document.write(
            dan + " x " + i +" = " + dan*i + "<br>"
          );
        };
    };



for (j=2; j<=9; j++) {
    gugudan(j)
};