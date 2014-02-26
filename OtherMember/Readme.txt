MOST IMPORTANT ADVICE : Please run these graphs on a server...it may be localhost
//===============================1===============================//
First Part Of the assignment=> State-wise plotting of graph for various criteria and various sex which you can get after running "Statewise.html" file

1. There are three selector...
	First for Criteria according to which the graph should be plotted
	Second selector for Sex...means for which sex do you want to plot the graph
	Third for the State for which you want to plot the graph
		It will output the graph according to our requirement

2. More Description about main functions of the part
	I have extracted data from the file and stored it in an array named "data".
	Further one of the main function is "requiredArray(criteria,sex,stateNo)" which takes the input from the selector according to user's requirement
	and outputs an array according to google api's need which is passed to main "drawchart(array)" function which plots the graphs.

//================================2==============================//

Second Part of the assignment=> Repeat first part for "Major Political Party"	which you can get by running "MajorPoliticalParty.html" file

1. There are also three selector...select your requirement and click on submit to get required graph.
	First selector for the criteria of estimating Major Political Parties
	Second selector for Sex...means for which sex do you want to plot the graph
	Third Selector is criteria for plotting graph of those 'selected major political parties.'

2.	More Description about main functions of this part
	I have extracted data from the file and stored it in an array named "data".
	Further one of the main function is "requiredArray(criteria,sex,graph1)" which takes the input from the selector according to user's requirement
	and outputs an array according to google api's need which is passed to main "drawchart(array)" function which plots the graphs.	

//==============================3=================================//
	
Third Part of the assignment => Mashing which you can get after running "Mashup.html" file	

1. There are also three selector...select your requirement and click on submit to get required graph.
	First selector for the criteria of plotting the graph like age etc.
	Second selector for Sex...means for which sex do you want to plot the graph
	Third Selector is criteria for sorting. It will sort the axes according to user's elected input
	
2.	More Description about main functions of this part
	I have extracted data from the file and stored it in an array named "data".
	Further one of the main function is "requiredArray(criteria,sex,wayOfSorting)" which takes the input from the selector according to user's requirement
	and outputs an array according to google api's need which is passed to main "drawchart(array)" function which plots the graphs.	
   Bubbles have varible color and radius according to the criteria selected which clearly distincts between higher and lower region of the graph.
	
//================Description about "Function.js" file====================//

This file contains some helper function which I required for 1st, 2nd, 3rd part of the assignment. The description of individual function is done in commenting along with that function

	