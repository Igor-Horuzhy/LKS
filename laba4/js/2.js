function addRectangle() {
    	var newRectangle = document.createElement('div');
    	var canvas2 = document.getElementById('canvas2');
  		canvas2.appendChild(newRectangle);

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

  		canvas2.onclick = function(event) {
   	 		var target = event.target;
    		light(target);
    		target.style.zIndex = 1000;
  		};
    }

 var selectedDiv;

    function light(node) {
    if (selectedDiv) {
        selectedDiv.removeAttribute('id');
      }

      selectedDiv = node;
      console.log('selectedDiv  ' + selectedDiv);
      selectedDiv.setAttribute('id', 'highlighted');
  }


    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }



  addEventListener("keydown", moveRect);

  function moveRect(e) {
      let Rect = document.getElementById("highlighted");

      let cs = window.getComputedStyle(Rect);

      let left = parseInt(cs.left);
      let top = parseInt(cs.top);

      switch (e.keyCode) {
        case 37:
            Rect.style.left = left - 10 + "px";
            break;
        case 38: 
            Rect.style.top = top - 10 + "px";
            break;
        case 39: 
            Rect.style.left = left + 10 + "px";
            break;
        case 40:
            Rect.style.top = top + 10 + "px";
            break;
      }
}
