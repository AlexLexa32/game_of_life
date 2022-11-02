const r = document.getElementById("game");
const ctx = r.getContext("2d");
const box = 10, d = 40;
let x = 0, y = 0;
let flag = true;
ctx.fillStyle = "#111";
ctx.fillRect(0, 0, 400, 400);
document.addEventListener("keydown", direction);

//_______________________________________________________________________________________________________

let pole = [];
for (let i = 0; i < d*d; ++i) {
    pole.push(0);
}

//_______________________________________________________________________________________________________

function direction(event) {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
        let A = setInterval("f()", 100);
    } else {
        let X = (x-(x%box))/box;
        let Y = (y-(y%box))/box;
        pole[X+Y*d] = 1;

        for (let i = 0; i < pole.length; i++) {
            if (pole[i] === 0) {
                ctx.fillStyle = "white";
            } else if (pole[i] == 1) {
                ctx.fillStyle = "green";
            }
            ctx.fillRect((i%d)*box, ((i-(i%d))/d)*box, box-1, box-1);
        }
    }
}

function f() {
    let pole_new = [];
    for (let i = 0; i < d*d; ++i) {
        pole_new.push(0);
    }
    for (let i = 0; i < pole.length; i++) {
        let q = 0;
        let xq = i%d, yq = (i-(i%d))/d;
        if (xq > 0) {
            if (yq > 0) {
                let xe = xq-1;
                let ye = yq-1;
                if (pole[xe+ye*d] == 1) {
                    q++;
                }
            }
            let xw = xq-1;
            let yw = yq;
            if (pole[xw+yw*d] == 1) {
                q++;
            }
        }
        if (yq > 0) {
            if (xq < d-1) {
                let xe = xq+1;
                let ye = yq-1;
                if (pole[xe+ye*d] == 1) {
                    q++;
                }
            }
            let xw = xq;
            let yw = yq-1;
            if (pole[xw+yw*d] == 1) {
                q++;
            }
        }
        if (xq < d-1) {
            if (yq < d-1) {
                let xe = xq+1;
                let ye = yq+1;
                if (pole[xe+ye*d] == 1) {
                    q++;
                }
            }
            let xw = xq+1;
            let yw = yq;
            if (pole[xw+yw*d] == 1) {
                q++;
            }
        }
        if (yq < d-1) {
            if (xq > 0) {
                let xe = xq-1;
                let ye = yq+1;
                if (pole[xe+ye*d] == 1) {
                    q++;
                }
            }
            let xw = xq;
            let yw = yq+1;
            if (pole[xw+yw*d] == 1) {
                q++;
            }
        }
        if (pole[i] == 0) {
            if (q == 3) {
                pole_new[i] = 1;
            }
        } else if (pole[i] == 1) {
            if (q != 2 && q != 3) {
                pole_new[i] = 0;
            } else {
                pole_new[i] = 1;
            }
        }
    }
    for (let i = 0; i < pole.length; i++) {
        if (pole_new[i] === 0) {
            ctx.fillStyle = "white";
        } else if (pole_new[i] == 1) {
            ctx.fillStyle = "green";
        }
        ctx.fillRect((i%d)*box, ((i-(i%d))/d)*box, box-1, box-1);
    }
    pole = pole_new;
}

document.querySelector ('#game').onmousemove = function (event) {
    event = event || window. event;
    x = event.offsetX;
    y = event.offsetY;
}

for (let i = 0; i < pole.length; i++) {
    if (pole[i] === 0) {
        ctx.fillStyle = "white";
    } else if (pole[i] == 1) {
        ctx.fillStyle = "green";
    }
    ctx.fillRect((i%d)*box, ((i-(i%d))/d)*box, box-1, box-1);
}
