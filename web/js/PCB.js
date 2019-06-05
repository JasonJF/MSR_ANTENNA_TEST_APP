function createBlock(x,i) {
            var elementID = "ANT"+(15-i)+"base";
            var xPos = x;
            var shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            shape.setAttribute('class','baseBlock');
            shape.classList.add("ANT"+(15-i))

          shape.setAttribute('id', elementID);
            shape.style.x = xPos;
            document.getElementById("svgPCB").appendChild(shape);
        }
function createBlockPOS(x,i) {
            var elementID = "ANT"+(15-i)+"POS";
            var xPos = x;

            var shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            shape.setAttribute('class','innerElement pos');

          shape.setAttribute('id', elementID);
            shape.style.x = xPos;
            document.getElementById("svgPCB").appendChild(shape);
        }
function createBlockNEG(x,i) {
            var elementID = "ANT"+(15-i+"NEG");
            var xPos = x;

            var shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            shape.setAttribute('class','innerElement neg');

          shape.setAttribute('id', elementID);
            shape.style.x = xPos;
            document.getElementById("svgPCB").appendChild(shape);
        }

function editColor(ant,col) {
        el = document.getElementById(ant);
        el.style.fill = col;}
var x = 71.4;
      for (i = 1; i < 15 ; i++) {
        var newX = (x*i)-61;
        var posX = newX + 'px';
//        console.log(posX);

        createBlockPOS(posX,i);
        createBlockNEG(posX,i);
        createBlock(posX,i);}
var baseElements = [];
var rows = [];
baseElements = document.getElementsByClassName('baseBlock');
rows = document.getElementsByClassName('dataRow');
for (var i = 0; i < baseElements.length; i++) {
    baseElements[i].addEventListener('mouseover', mouseOverEffectElement);
    baseElements[i].addEventListener('mouseout', mouseOutEffectElement);
    baseElements[i].addEventListener('click', clickEffectElement);
    rows[i].addEventListener('mouseover', mouseOverEffectRow);
    rows[i].addEventListener('mouseout', mouseOutEffectRow);
}
function mouseOverEffectElement() {
  var indicator = (this.id);
  var key = "ANT((\\d+\\d)|(\\d))";                   //using regex to find key
  var value = indicator.match(key);
//  console.log(value[0]);
  r = document.getElementsByClassName(value[0]);
  r[1].classList.add("rowHover");
  this.classList.add("bar-highlight");
//  var indie = this.indexOf();
}
function mouseOutEffectElement() {
  var indicator = (this.id);
  var key = "ANT((\\d+\\d)|(\\d))";                   //using regex to find key
  var value = indicator.match(key);
//  console.log(value[0]);
  r = document.getElementsByClassName(value[0]);
  r[1].classList.remove("rowHover");
  this.classList.remove("bar-highlight");
}
function mouseOverEffectRow() {
  var indicator = (this.id);
  var key = "ANT((\\d+\\d)|(\\d))";                   //using regex to find key
  var value = indicator.match(key);
//  console.log(value[0]);
  r = document.getElementsByClassName(value[0]);
  this.classList.add("rowHover");
  r[0].classList.add("bar-highlight");
//  var indie = this.indexOf();
}
function mouseOutEffectRow() {
  var indicator = (this.id);
  var key = "ANT((\\d+\\d)|(\\d))";                   //using regex to find key
  var value = indicator.match(key);
//  console.log(value[0]);
  r = document.getElementsByClassName(value[0]);
  this.classList.remove("rowHover");
  r[0].classList.remove("bar-highlight");
}
function clickEffectElement(){
     var indicator = (this.id);
    var key = "ANT((\\d+\\d)|(\\d))";                   //using regex to find key
    var value = indicator.match(key);
    //console.log(value[0]);
    document.getElementById("selectedElement").innerHTML = value[0];
    getSelectedElement();
    }
function getSelectedElement(){
    var element = document.getElementById("selectedElement").innerHTML;
    //console.log(element)
    return(element);
    }