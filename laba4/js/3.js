function addDraggableRect() {
    	var newRectangle = document.createElement('div');
    	var canvas3 = document.getElementById('canvas3');
  		canvas3.appendChild(newRectangle);

  		newRectangle.style.position = 'absolute';
  		newRectangle.style.display = 'flex';
  		var r = Math.floor(Math.random() * (223));
  		var g = Math.floor(Math.random() * (256));
  		var b = Math.floor(Math.random() * (256));
  		var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  		newRectangle.style.backgroundColor = color;
  		var widthNumber = getRandomInt(40, 200);
  		newRectangle.style.width = widthNumber.toString(10) + 'px';
  		var heightNumber = getRandomInt(40, 200);
  		newRectangle.style.height = heightNumber.toString(10) + 'px';
  		var leftNumber = getRandomInt(160, 700);
  		newRectangle.style.left = leftNumber.toString(10) + 'px';
  		var topNumber = getRandomInt(100, 200);
		newRectangle.style.top = topNumber.toString(10) + 'px';


		newRectangle.setAttribute('class', 'draggable')
    }

    document.onmouseup = function(e) {
  		var elem = e.target; 
  		document.onmousemove = function() {
    		return false
  		}; 
	}

  document.onmousedown = function(e) { 
  let elem = e.target;
  if (elem.className && elem.className.indexOf('draggable') >= 0) {
    elem.ondragstart = function() {
      return false
    };
    let coor = elem.getBoundingClientRect();
    let osx = e.offsetX;
    let osy = e.offsetY; 

    document.onmousemove = function(ev) {
      let x = ev.clientX;
      let y = ev.clientY;

      elem.style.left = x - osx + 'px'; 
      elem.style.top = y - osy + 'px';
    }
  }
}