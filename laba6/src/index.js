import timer from './timer.js';
import './styles.css';

function component() {
  var element = document.createElement('div');
  var br      = document.createElement('br');
  var span    = document.createElement('span');
  span.innerHTML = 'Remaining seconds: '
  element.setAttribute('class','parent');

  var secondsToShow=document.createElement('div');
  var timerSec= document.createElement('label');
  var timeInput=document.createElement('input'); 
  timeInput.setAttribute('type','number');
  timeInput.setAttribute('placeholder','Seconds');
  timeInput.setAttribute('id','seconds');
  secondsToShow.setAttribute('id','secondsToShow');
  secondsToShow.innerHTML=0;
  timerSec.setAttribute('for','seconds');
  
  var text= document.createElement('label');
  var textInput=document.createElement('input');
  textInput.setAttribute('placeholder','Text for alert');
  textInput.setAttribute('id','text');
  
  var startButton=document.createElement('button');
  var resetButton=document.createElement('button');
  var pauseButton=document.createElement('button');
  var stopButton=document.createElement('button');
    

  startButton.setAttribute('id','start'); 
  startButton.setAttribute('class','button');
  startButton.innerHTML='Start';

  resetButton.setAttribute('id','reset');
  resetButton.setAttribute('class','button');
  resetButton.innerHTML='Reset';

  pauseButton.setAttribute('id','pause');
  pauseButton.setAttribute('class','button');
  pauseButton.innerHTML='Pause';

  stopButton.setAttribute('id','stop');
  stopButton.setAttribute('class','button');
  stopButton.innerHTML='Stop';

  var slowTimer = document.createElement('button');
  slowTimer.innerHTML='Start 0.5x timer';
  slowTimer.setAttribute('id','0.5x');
  slowTimer.setAttribute('class','button');
  
  

  element.appendChild(timerSec);  
  timerSec.appendChild(timeInput);
  text.appendChild(textInput);   
  element.appendChild(text);
  element.appendChild(br);
  element.appendChild(startButton);
  element.appendChild(slowTimer); 
  element.appendChild(resetButton);
  element.appendChild(pauseButton);
  element.appendChild(stopButton);
  element.appendChild(br);
  element.appendChild(span);  
  element.appendChild(secondsToShow);
  
  return element;
}

var element = component();
document.body.appendChild(element);
