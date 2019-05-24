function createBlock(x,i) {
            var elementID = "ANT"+(15-i);
            var xPos = x;
            var shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            shape.setAttribute('class', 'innerElement');
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
        //console.log(posX);
        createBlock(posX,i);}
