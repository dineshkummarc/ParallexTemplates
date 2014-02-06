init = function(){
      jarallax = new Jarallax();
      
      jarallax.setDefault('#p1, #p2, #p3', {opacity:'0'});
      jarallax.setDefault('#p1, #p2, #p3', {marginLeft:'-1000px'});
      jarallax.addAnimation('.planet2',[{progress: "0%", top:"70%"}, {progress: "100%", top: "40%"}]);
      jarallax.addAnimation('.planet1',[{progress: "0%", top:"90%"}, {progress: "100%", top: "-5%"}]);
      jarallax.addAnimation('.behind',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-10%"}]);
	  jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]);
	  jarallax.addAnimation('.theend',[{progress: "95%", opacity:"0"}, {progress: "100%", opacity:"0.85"}]);
      
      jarallax.addAnimation('#p1',[{progress: "15%", opacity:"0"}, {progress: "20%", opacity:"1"}]);
      jarallax.addAnimation('#p1',[{progress: "20%", opacity:"1"}, {progress: "30%"}]);
      jarallax.addAnimation('#p1',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
      jarallax.addAnimation('#p1',[{progress: "15%", marginLeft:"0"}, {progress: "40%"}]);
      
      jarallax.addAnimation('#p2',[{progress: "45%", opacity: "0"}, {progress: "50%", opacity: "1"}]);
      jarallax.addAnimation('#p2',[{progress: "50%", opacity: "1"}, {progress: "60%"}]);
      jarallax.addAnimation('#p2',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"0"}]);     
      jarallax.addAnimation('#p2',[{progress: "45%", marginLeft:"0"}, {progress: "70%"}]);
      
      jarallax.addAnimation('#p3',[{progress: "75%", opacity:"0"}, {progress: "80%", opacity:"1"}]);
      jarallax.addAnimation('#p3',[{progress: "80%", opacity:"1"}, {progress: "100%"}]);
      jarallax.addAnimation('#p3',[{progress: "75%", marginLeft:"0"}, {progress: "100%"}]);
    }