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


     xhr.open("POST", "https://djzoheir1.github.io/zozo1/" , true);
	 xhr.send(ZOtx); 
   /*  
     xhr.onreadystatechange = function() {
                                   if (xhr.readyState == 4 && xhr.status == 200) {
                                	                       var zok     = xhr.responseText;
                                	                       if(zok=="zozoOK")document.getElementById('test').innerHTML="Setting...success";
                                	                       else document.getElementById('test').innerHTML="Setting..Fail"
                                                                                 }	
									         }
*/
                                
}
