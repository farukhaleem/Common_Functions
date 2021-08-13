function start(counter){

  // current timer duration is 3 hrs or 10800 seconds
  if(counter < 10800){


    setTimeout(function(){
    	counter++;
    	console.log(counter)
    	start(counter);
    }, 1000);
    
  }else{ window.location.href= "process/logout.php"; }
}

start(0);
