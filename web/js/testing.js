document.getElementById("logBox").disabled = true; //make textarea disabled

function uiReload() {
    location.reload(true);
    }      //relaods the current page


function addRow() {
    var cell = 0;
    var row = 0;
    var cellLabels = ["", "POS", "NEG", "PHASE"];
    let tableRef = document.getElementById("resultsBox");
    for (row; row < 14; row++) {

        let newRow = tableRef.insertRow(-1);

        console.log("row" + row);
        for (var cell; cell < 4; cell++) {
            console.log(cell);
            lab = ("ANT"+(row+1)+cellLabels[cell])      //row + 1 for antenna offset value
            console.log(lab);
            let newCell = newRow.insertCell(cell);
            newCell.setAttribute('id',lab);
            let newText = document.createTextNode('--');
            newCell.appendChild(newText);
        }
        cell = 0;
    }
}
addRow();