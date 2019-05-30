document.getElementById("logBox").disabled = true; //make textarea disabled

function uiReload() {
    location.reload(true);
    }      //relaods the current page


function addRow() {
    var cell = 0;
    var row = 0;
    var cellLabels = ["", "cellPOS", "cellNEG", "cellPHASE"];
    let tableRef = document.getElementById("resultsBox");
    for (row; row < 14; row++) {

        let newRow = tableRef.insertRow(-1);
        rowLab = ("ANT"+(row+1)+"row");
        newRow.setAttribute('id',rowLab);
        newRow.classList.add("ANT"+(row+1));
        newRow.classList.add("dataRow");
//        console.log("row" + row);
        for (var cell; cell < 4; cell++) {
//
//            console.log(cell);
            lab = ("ANT"+(row+1)+cellLabels[cell])      //row + 1 for antenna offset value
//            console.log(lab);
            let newCell = newRow.insertCell(cell);
            newCell.setAttribute('id',lab);
            let newText = document.createTextNode('--');
            newCell.appendChild(newText);
        }
        cell = 0;
    }
}
addRow();

function populateTable(antennaData){
    var rowIdentifier = "";
    var cell = "";
    var pos = "";
    var neg = "";
    var phase = "";
    var calculatedPhase = 0;
    var i = 0;
    var j = 0;
//    console.log(antennaData[i][0]);
    for (i; i < 14; i++){
         rowIdentifier = (antennaData[i][0]);
         cell = document.getElementById(rowIdentifier)
         cell.innerHTML = antennaData[i][0];
         pos = (rowIdentifier+"cellPOS");
//         console.log(pos);
//         console.log(antennaData[i][1]);
         cell = document.getElementById(pos);
         //         console.log(antennaData[i][0]);
         cell.innerHTML = (antennaData[i][1]);
         neg = (rowIdentifier+"cellNEG");
         cell = document.getElementById(neg);
         cell.innerHTML = (antennaData[i][3]);
         calculatedPhase = getPhase(antennaData[i][2],antennaData[i][4])
         phase = (rowIdentifier+"cellPHASE");
         cell = document.getElementById(phase);
         cell.innerHTML = (calculatedPhase);
//         console.log(calculatedPhase);
         }




    }
function getPhase(phase_1, phase_2) {

    newPhase = Math.abs(phase_1) + Math.abs(phase_2);
    return newPhase;}

