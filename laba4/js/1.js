var arr = [];
	var counter = 0;
    function addelem() {
        var table = document.getElementById("table");

        if(document.getElementById("end").checked === true) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(-1);
            row.onclick = removeDiv;



  			function removeDiv() {
    			table.deleteRow(this);
 			};
        } else {
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            row.onclick = removeDiv;

  			function removeDiv() {
    			table.deleteRow(this);
 			};

        }

        cell1.innerHTML = document.getElementById("text").value;
        cell1.style["background-color"] = document.getElementById("color").value;
        cell1.style.color = 'white';
        arr.push(document.getElementById("text").value);
        counter ++;
    }

    function getStatistics() {
  		alert(arr.join(',') + '\n size: ' + counter);
    }