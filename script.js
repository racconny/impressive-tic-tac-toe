var f = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

const empty = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

var counter = 1;

function putSign(i, j, b){
    counter % 2 == 0 ? f[i][j] = "O" : f[i][j] = "X";
    counter++;
    document.querySelector("#cell" + b).innerHTML = f[i][j];
    document.querySelector("#cell" + b).setAttribute("disabled","disabled");
    check(i, j);
}

function check(i, j){
    var e = f[i][j];
    if (
        //horizontal left
        (f[i][j+1] == e && f[i][j+2] == e ) ||
        //horizontal right
        (f[i][j-1] == e && f[i][j-2] == e ) ||
        //vertical bottom
        (f[i+1][j] == e && f[i+2][j] == e ) ||
        //vertical top
        (f[i-1][j] == e && f[i-2][j] == e ) ||
        //top left diagonal
        (f[i-1][j-1] == e && f[i-2][j-2] == e) ||
        //top right diagonal
        (f[i-1][j+1] == e && f[i-2][j+2] == e) ||
        //bottom right diagonal
        (f[i+1][j-1] == e && f[i+2][j-2] == e) ||
        //bottom left diagonal
        (f[i+1][j+1] == e && f[i+2][j+2] == e) ||
        //horizontal center
        (f[i][j+1] == e && f[i][j-1] == e) ||
        //vertical center
        (f[i+1][j] == e && f[i-1][j] == e) ||
        //diagonal from left center
        (f[i-1][j-1] == e && f[i+1][j+1] == e) ||
        //diagonal from right center
        (f[i-1][j+1] == e && f[i+1][j-1] == e)
    ){
        alert("Win " + e);
    }
    else if (counter == 10){
        alert("Draw");
    }
}

function reset(){
    f = empty;
    counter = 1;
    for (var i = 1; i < 10; i++){
        document.querySelector("#cell" + i).innerHTML = '';
        document.querySelector("#cell" + i).removeAttribute('disabled');
    }
}

