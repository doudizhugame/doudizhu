
function changeNum(numId,flag){
	var numId=document.getElementById(numId);
	if(flag=="minus"){
		if(numId.value<=0){
			alert("宝贝数量必须大于0");
			return false;
			}
		else{
			numId.value=parseInt(numId.value)-1;
			productCount();
			}
		}
	else{
		numId.value=parseInt(numId.value)+1;
		productCount();
		}
	}
	

function productCount(){
	var total=0;       
	     
	var price;     
	var number;   
	var subtotal; 


	var myTableTr=document.getElementById("shopping").getElementsByTagName("tr"); 
	if(myTableTr.length>0){
	for(var i=1;i<myTableTr.length;i++){
	    if(myTableTr[i].getElementsByTagName("td").length>2){ 
		price=myTableTr[i].getElementsByTagName("td")[3].innerHTML;
		number=myTableTr[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value;
		total+=price*number;
		myTableTr[i].getElementsByTagName("td")[5].innerHTML=price*number;
		}
	}
	document.getElementById("total").innerHTML=total;
	
	}
}
window.onload=productCount;


function selectAll(){
	var oInput=document.getElementsByName("cartCheckBox");
 for (var i=0;i<oInput.length;i++){
 	    oInput[i].checked=document.getElementById("allCheckBox").checked;
	}
}
	

function selectSingle(){
	var k=0;
	var oInput=document.getElementsByName("cartCheckBox");
	 for (var i=0;i<oInput.length;i++){
	   if(oInput[i].checked==false){
		  k=1;
		  break;
	    }
	}
	if(k==0){
		document.getElementById("allCheckBox").checked=true;
		}
	else{
		document.getElementById("allCheckBox").checked=false;
		}
}


function deleteRow(rowId){
	var Index=document.getElementById(rowId).rowIndex; 
	document.getElementById("shopping").deleteRow(Index);
	document.getElementById("shopping").deleteRow(Index-1);
	productCount();
	}


function deleteSelectRow(){
	var oInput=document.getElementsByName("cartCheckBox");
	var Index;
	 for (var i=oInput.length-1;i>=0;i--){
	   if(oInput[i].checked==true){
		 Index=document.getElementById(oInput[i].value).rowIndex; 
		 document.getElementById("shopping").deleteRow(Index);
	     document.getElementById("shopping").deleteRow(Index-1);
	    }
	}
	productCount();
	}

