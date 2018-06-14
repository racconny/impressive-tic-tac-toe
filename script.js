var d = askDimension();
var f = drawArray(d);
var counter = 1;

drawField(d);

function drawArray(d){
    var f = [];
    for (var i = 0; i < (d + 4); i++){
        f[i] = [];
        for (var j = 0; j < (d + 2); j++){
            f[i][j] = 0;
        }
    }
    return f;
}

function askDimension(){
    var ans =  Number(prompt("Enter dimension of the field",""));
    if ((ans >= 3) && (ans <= 50)){
        return ans;
    }
    else 
        alert ("Permissible range is from 3 to 50. Try again");
        return askDimension()
}

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
        alert("Winner is  " + e);
        for (var i = 1; i < (d*d); i++){
            document.querySelector("#cell" + i).setAttribute('disabled',"disabled");
        }
    }
    else if (counter == (d*d)+1 ){
        alert("A draw");
    }
}

function reset(){
    //clear view
    counter = 1;
    for (var i = 1; i <= (d*d); i++){
        document.querySelector("#cell" + i).innerHTML = '';
        document.querySelector("#cell" + i).removeAttribute('disabled');
    }
    //clear array
    for (var i = 0; i < (d + 4); i++){
        for (var j = 0; j < (d + 2); j++){
            f[i][j] = 0;
        }
    }
}

function drawField(d){
    var cell_id = 1;
    for (var r = 1; r <= d; r++){
        var new_row = document.createElement("tr");
        new_row.classList.add("row_" + r);
        document.querySelector(".field").appendChild(new_row);
        for (var c = 1; c <= d; c++, cell_id++){
            //creating of elements
            var parent = document.querySelector(".row_" + r);
            var new_cell = document.createElement('td');
            var btn = document.createElement('button');
            //setting attributes
            btn.setAttribute("id","cell" + cell_id)
            btn.setAttribute("onclick","putSign(" + (r + 1) + "," + (c + 1) + "," + cell_id + ")");
            new_cell.classList.add("cell");
            //appending
            new_cell.appendChild(btn);
            parent.appendChild(new_cell);
        }
    }
}
