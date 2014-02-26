
//takes input 0/1/2 and return Male for 1 and female for 2 and Both Male and Female otherwise
var numToSex=function(num1){
			if(num1===0){return "Both Male And Female";}
			else if(num1===1){return "Male";}
			else {return "Female";}
			}
    
//=================================
//This function checks sex as a string and corresponding number...It is my function for my programm need
var sexCheck=function(str){
						if(str==="Male"){return 1;}
						else{return 2;}			
						}
//========================
//function which sort an 2-D array according to a First column. and returns the sorted array.
var sortit=function(arr2){
				for(f=0;f<arr2.length;f++){
				  var min=f;
							for(e=f;e<arr2.length;e++){
									if(arr2[e][1]<arr2[min][1]){
													min=e;
													}}
								var temp=new Array(3);
									temp=arr2[f];
									arr2[f]=arr2[min];
									arr2[min]=temp
									
							}
					return arr2;		
				}
//==========================================================================
// check(a,b) function check whether variable a belongs to array b or not and returns the position if matches else returns -1
			var check = function(a,b,upperLimit){
										for(i=0;i<upperLimit;i++){
													if(a==b[i].substring(0,b[i].length-1)){
															return i;
													}
													if(a!=b[i].substring(0,b[i].length-1) && (i==upperLimit-1)){
																						return -1;
																						}		
													}
										}
									  
//==============================================================================
// My helper functoin takes input as education in form of string and returns number at which data corresponding to it should be placed
		var checkEducationGroup=function(str1){
								var ret1=0;
								loop1:for(i2=0;i2<12;i2++){
									if(str1===Education[i2]){
												ret1=i2;
												break loop1;
												}
										}
								return ret1;
						}
//===================================================================							  
//My helper functoin takes input as attendance in form of number and returns number at which data corresponding to it should be placed...i.e.attendance-group in which data should lie
	var checkAttendanceGroup=function(attendance1){
							if(attendance1>0 && attendance1<11){return 0;}
							else if(attendance1>10 && attendance1<21){return 1;}
							else if(attendance1>20 && attendance1<31){return 2;}
							else if(attendance1>30 && attendance1<41){return 3;}
							else if(attendance1>40 && attendance1<51){return 4;}
							else if(attendance1>50 && attendance1<61){return 5;}
							else if(attendance1>60 && attendance1<71){return 6;}
							else if(attendance1>70 && attendance1<81){return 7;}
							else if(attendance1>80 && attendance1<91){return 8;}
							else {return 9;}
							}
//===================================================================							  
//My helper functoin takes input as age in form of number and returns number at which data corresponding to it should be placed...i.e.age-group in which data should lie
		var checkAgeGroup=function(age1){
					if(age1>29 && age1<41){return 0;}
					else if(age1>40 && age1<51){return 1;}
					else if(age1>50 && age1<61){return 2;}
					else if(age1>60 && age1<71){return 3;}
					else if(age1>70 && age1<81){return 4;}
					else{return 5;}
					}
//===================================================================							  

		