class Timer {
  constructor(inputSecs,callback) {
    this.paused  = false;
    this.started = false;
    this.startedSlow = false;
    this.stopped = true;
    this.counter = 0 ;
    this.running = false;
    this.inputSecs = inputSecs;
    this.callback=callback;
    this.interval = 1000;
    this.inputText = document.getElementById("text");
  }

  start() {
    if (this.stopped) {
      this.started = true;
      this.paused = false;
      this.stopped = false;
      this.counter = Number(this.inputSecs.value);
      this.loop();
      this.running = true;
    }

    this.paused = false;
  }

  pause() {
    this.paused = true;
  }

  stop() {
    this.paused = false;
    this.started = false;
    this.stopped = true;
    this.running = false;
    this.counter = 0;
  }

  update(item) {
    document.getElementById("secondsToShow").innerHTML = item;    
    --this.counter;

    if (this.counter < 0) {
      this.callback.call();      
      this.stop();
    }
  }

  reset() {
    this.counter = Number(this.inputSecs.value);

    document.getElementById("secondsToShow").innerHTML = this.counter;
  }

  loop() {
    if (!this.stopped) {
      if (!this.paused) {
        this.update(this.counter);
      }

      setTimeout(() => this.loop(), this.interval);
    }
  }
}


function alertText(){
  var inputText = document.getElementById("text");
  var word = inputText.value;
  alert(word);
}

window.onload = function() {  

  let inputSecs = document.getElementById("seconds");
  const timer = new Timer(inputSecs,alertText);
  document.getElementById("start").onclick = function() {
    timer.interval = 1000;
    return timer.start();
  }
  document.getElementById("reset").onclick = function() { 
    return timer.reset(); 
  }
  document.getElementById("pause").onclick = function() { 
    return timer.pause();
  }
  document.getElementById("stop").onclick = function()  
  { 
    return timer.stop(); 
  }
  document.getElementById("0.5x").onclick = function() {
    timer.interval = 2000;
    return timer.start();
  }
};