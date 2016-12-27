function CheckS1() {
	var len = document.zoform.SL1.value;
	if(len >16 && len < 20)document.getElementById('SlidVal1').innerHTML = " "+len+" Roll";
	else if(len ==20)document.getElementById('SlidVal1').innerHTML = " "+len+" Roll1";
	else document.getElementById('SlidVal1').innerHTML = " "+len;
	CheckL1(); 
}
function CheckS2() {
	var len = document.zoform.SL2.value;
	if(len >16 && len < 20)document.getElementById('SlidVal2').innerHTML =" "+ len+" Roll";
	else if(len ==20)document.getElementById('SlidVal2').innerHTML = " "+len+" Roll1";
	else document.getElementById('SlidVal2').innerHTML = " "+len;
    CheckL2();
}

function CheckL1() {
	 var len = document.zoform.TL1.value.length;
	 document.getElementById('TxtLen1').innerHTML = ". "+len;
}
function CheckL2() {
	 var len = document.zoform.TL2.value.length;
	 document.getElementById('TxtLen2').innerHTML = ". "+len;
}


  
 function CheckB1(CB,ID) {  
	 if(document.getElementById(CB).checked)document.getElementById(ID).style.color="#fff400";
     else document.getElementById(ID).style.color="black";
	 document.getElementById('test').innerHTML="Zr";
	// CheckAll();
 }
 function CheckS() {        
	 if(document.zoform.SL4.value==0) document.getElementById('SlidVal4').innerHTML="Horizontal";
	 else if(document.zoform.SL4.value==1) document.getElementById('SlidVal4').innerHTML="Vertical";
	 else if(document.zoform.SL4.value==2) document.getElementById('SlidVal4').innerHTML="Auto";
	 
	 if(document.zoform.SL3.value==0) document.getElementById('SlidVal3').innerHTML="Off";
	 else if(document.zoform.SL3.value==15) document.getElementById('SlidVal3').innerHTML="Auto";
	 else document.getElementById('SlidVal3').innerHTML= document.zoform.SL3.value;	 
 }
 function CheckR1() {
		if(document.getElementById('Px8').checked) return ("8");
		else if(document.getElementById('Px16').checked) return ("16");
		else return 0;
	}
 function SendOutput1(){
	 document.getElementById('test').innerHTML = "Setting.." ;
	 
	 var P1="PIX=" +CheckR1() +"~"; 
     //var P1="PIX=" + document.zoform.PIX.value +"~";
     var T1="TL1=" + document.zoform.TL1.value+ "~";
     var S1="SL1=" + document.zoform.SL1.value+ "~";
     var T2="TL2=" + document.zoform.TL2.value+ "~";
     var S2="SL2=" + document.zoform.SL2.value+ "~";
     var B1="BRG=" + document.zoform.SL3.value+ "~";
     var R1="ROT=" + document.zoform.SL4.value+ "~";
     var V1="SAV=SAVE~";
     var ZOtx="";
     
     if(document.zoform.Cpx.checked) ZOtx +=P1;
     if(document.zoform.Ct1.checked) ZOtx +=T1;
     if(document.zoform.Cs1.checked) ZOtx +=S1;
     if(document.zoform.Ct2.checked) ZOtx +=T2;
     if(document.zoform.Cs2.checked) ZOtx +=S2;
     if(document.zoform.Cbr.checked) ZOtx +=B1;
     if(document.zoform.Crot.checked)ZOtx +=R1;
     if(document.zoform.Csav1.checked)ZOtx +=V1;  
     
	 var xhr = new XMLHttpRequest;
	 
	 document.getElementById('test').innerHTML=ZOtx;
/*

     xhr.open("POST", "zozo.tpl", true);
     xhr.send(ZOtx); 
     
     xhr.onreadystatechange = function() {
                                   if (xhr.readyState == 4 && xhr.status == 200) {
                                	                       var zok     = xhr.responseText;
                                	                       if(zok=="zozoOK")document.getElementById('test').innerHTML="Setting...success";
                                	                       else document.getElementById('test').innerHTML="Setting..Fail"
                                                                                 }	
									         }
*/
                                
}
//************************************************************************************
 var wsUri = "ws://"djzoheir1.github.io/zozo1";
  var output;

  function init()
  {
    output = document.getElementById("output");
    testWebSocket();
  }

  function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  function onOpen(evt)
  {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RECEIVED: ' + evt.data+'</span>');
//    websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message); 
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  window.addEventListener("load", init, false);


//***************************************
 function LD(){
 	 
 	
	 document.getElementById('test').innerHTML = "Loading..." ;
	    var ZO="LoadBoardData=123456789ABCDEFGHOJKLM~";
	    var xhr = new XMLHttpRequest;
	     
	   xhr.open("POST", "boarddata.cgi", true);
	   xhr.send(ZO);  
	  
	   xhr.onreadystatechange = function() { 
	       if (xhr.readyState == 4 && xhr.status == 200) {
	    	               	          
	       	          var RXZO =      JSON.parse(xhr.responseText);   //   
	       	          
	       	          document.zoform.TL1.value= RXZO.zo.L1.txt;
	       	          document.zoform.SL1.value= RXZO.zo.L1.slid;
	       	          document.zoform.TL2.value= RXZO.zo.L2.txt;
	    	          document.zoform.SL2.value= RXZO.zo.L2.slid;
	    	          
	    	          document.zoform.SL4.value= RXZO.zo.L3.ROT; 
	    	          document.zoform.SL3.value= RXZO.zo.L3.BRG; 
	    	          
	    	          document.getElementById("Px8").checked=false;
	    	          document.getElementById("Px16").checked=false;
	    	          if(RXZO.zo.L3.PIX == 8)document.getElementById("Px8").checked=true;
	    	          else if(RXZO.zo.L3.PIX == "16")document.getElementById("Px16").checked=true;
	    	          
	    	          CheckS1();
	    	          CheckS2();
	    	          CheckL1();
	    	          CheckL2();
	    	          
	    	  	     document.getElementById('test').innerHTML = "On Board Data :  Loaded" ;
	                   }	             
	 			     }
	    

 }
