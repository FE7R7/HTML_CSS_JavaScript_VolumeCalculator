$ = function(id){
	return document.getElementById(id);
};

ResetTextfields = function(){
	$("tank").checked = true;
	$("width").value=" ";
	$("length").value=" ";
	$("height").value=" ";
	$("radius").value=" ";
	$("resultPara").innerHTML ="Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains";
	$("height").disabled = false;
	$("radius").disabled = true;
	$("length").disabled = false;
	$("width").disabled = false;
	$("radius").style.backgroundColor = "grey";
	$("length").style.backgroundColor = "white";
	$("width").style.backgroundColor = "white";
	$("height").style.backgroundColor = "white";
	$("theImage").src = "images/cube.jpg";
};

window.onload = function(){
	$("calculate").onclick = function(){calculate();}
	$("reset").onclick = function(){ResetTextfields();}
};

	/*This function takes an id which is an integer as a parameter
	This is parameter is passed from the HTML file when a choice is clicked on. 
	If the id is equal to 1 then the radius field is set to disabled and the 
	image src is changed to show the cube.jpg file
	If the id is 2 then the appropriate fileds is disabled and the cylinder.jpg image is 
	displayed. If the id is 3, agian the appropriate fields are disabled/enabled and the sphere.jpg 
	image is displayed.*/
SwapImageField = function(id){
	if (id==1)
	{
		$("width").value=" ";
		$("length").value=" ";
		$("height").value=" ";
		$("radius").value=" ";
		$("resultPara").innerHTML ="Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains";
		//
		$("height").disabled = false;
		$("radius").disabled = true;
		$("length").disabled = false;
		$("width").disabled = false;
		//
		$("radius").style.backgroundColor = "grey";
		$("length").style.backgroundColor = "white";
		$("width").style.backgroundColor = "white";
		$("height").style.backgroundColor = "white";
		$("theImage").src = "images/cube.jpg";
	}
	if (id==2)
	{
		$("width").value=" ";
		$("length").value=" ";
		$("height").value=" ";
		$("radius").value=" ";
		$("resultPara").innerHTML ="Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains";
		//
		$("height").disabled = false;
		$("radius").disabled = false;
		$("length").disabled = true;
		$("width").disabled = true;
		//
		$("radius").style.backgroundColor = "white";
		$("height").style.backgroundColor = "white";
		$("length").style.backgroundColor = "grey";
		$("width").style.backgroundColor = "grey";
		$("theImage").src = "images/cylinder.jpg";
	}
	if (id==3)
	{
		$("width").value=" ";
		$("length").value=" ";
		$("height").value=" ";
		$("radius").value=" ";
		$("resultPara").innerHTML ="Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains";
		//
		$("height").disabled = true;
		$("radius").disabled = false;
		$("length").disabled = true;
		$("width").disabled = true;
		//
		$("radius").style.backgroundColor = "white";
		$("length").style.backgroundColor = "grey";
		$("width").style.backgroundColor = "grey";
		$("height").style.backgroundColor = "grey";
		$("theImage").src = "images/sphere.jpg";
	}
};

/*This function takes the width, height and length values from the HTML, 
	checks to see if they are numbers, if so it calculates the volume of the tank
	The results are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
calculateTank = function(){
	let l = $("length").value;
	let w = $("width").value;
	let h = $("height").value;

	if(isNaN(l) || isNaN(w) || isNaN(h))
	{
		alert("Pleasse, press the Reset button and enter a valid value format");
	}
	else
	{
		let vol = l * w * h;
		$("resultPara").innerHTML = "The volume of the Tank is: "+vol+" Cm<sup>3</sup>. Please press the Reset button and choose a geometric form to calculate a new volume...Thank You!!!!";
	}
};

	/*This function takes the radius and height values from the HTML, 
	checks to see if they are numbers, if so it calculates the volume of the cylinder
	The results are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
calculateCylinder = function(){
	let r = $("radius").value;
	let h = $("height").value;

	if(isNaN(r) || isNaN(h))
	{
		alert("Pleasse, press the Reset button and enter a valid value format");
	}
	else
	{
		let vol = (Math.PI*(Math.pow(r,2))*h);
		$("resultPara").innerHTML = "The volume of the Cylinder is: "+vol+" Cm<sup>3</sup>. Please press the Reset button and choose a geometric form to calculate a new volume...Thank You!!!!";
	}
};

	/*This function takes the radius value from the HTML, 
	checks to see if it is a numbers, if so it calculates the volume of the sphere
	The result are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
calculateSphere = function(){
	let r = $("radius").value;

	if(isNaN(r))
	{
		alert("Pleasse, press the Reset button and enter a valid value format");
	}
	else
	{
		let vol = ((4/3)*Math.PI*Math.pow(r,3));
		$("resultPara").innerHTML = "The volume of the Sphere is: "+vol+" Cm<sup>3</sup>. Please press the Reset button and choose a geometric form to calculate a new volume...Thank You!!!!";
	}
};

	/*This function checks to see what radio-button is selected and then
	calls the appropriate function.  For example if the Tank is checked the calculateTank
	function is called.*/
calculate = function(){
	if($("tank").checked==true)
	{
		return calculateTank();
	}
	if($("cylinder").checked==true)
	{
		return calculateCylinder();
	}
	if($("sphere").checked==true)
	{
		return calculateSphere();
	}
};
