

$( "#chose1" ).change(function(){ // When the value of #chose1 changes
  var choseval = $("#chose1").val(); // Get value of #chose1
  if(choseval == "C"){
      changeoption("#chose2", [ "Teaspoons", "Tablespoon"], ["T1", "Table1"]); // New custom function, changeoption(element, options [must be a list], values [must be a list]
  }
  if(choseval == "T"){
  changeoption("#chose2", ["Cups", "Tablespoon"], ["C2", "T2"]);
  }
  if(choseval == "table"){
  changeoption("#chose2", ["Cups", "Teaspoon"], ["C3", "Fe1"]);
  }
});

function changeoption(element, options, values){
  $(element).empty(); //Clear options
  var i = 0;
  while(i<options.length){ //Moves selected term in list
  $(element).append($("<option>").val(values[i]).html(options[i])); // Add our option and values
  i++; // Move onto next list item
  }} 

function preveri()
{
  var convert=document.getElementById("chose2").value; // What do we want to convert to? This works because there's only one possible value for each unit of measurement

  if(convert=="T1"){ // Cups to Teaspoons
      cups=Number(document.getElementById("c").value) * 48;
      document.getElementById("f").value=Math.round(cups);
  }
  if(convert=="Table1"){ // cups to tablespoons
      cups=Number(document.getElementById("c").value) * 16;
      document.getElementById("f").value=Math.round(cups);
  }
  if(convert=="C2"){ // teaspoon to tablespoon
      cups=Number(document.getElementById("c").value) / 3;
      document.getElementById("f").value=Math.round(cups);
  }
  if(convert=="T2"){ // tablespoon to teaspoon
      cups=Number(document.getElementById("c").value) * 3;
      document.getElementById("f").value=Math.round(cups);
  }
  if(convert=="C3"){ // tablespoon to cups
      cups=Number(document.getElementById("c").value) / 16;
      document.getElementById("f").value=Math.round(cups);
  }
  if(convert=="Fe1"){ // teaspoon to cups
      cups=Number(document.getElementById("c").value) / 48;
      document.getElementById("f").value=Math.round(cups);
  }
}

function validate(e){ // Our validate function
  x = e.keyCode;
  if((x<60&&x>47)||x==8||(x<106&&x>95)||x==110||x==190||x==16||x==17||x==18){ // Ignore numbers and other important keys, such as SHIFT and CONTROL
      return;
  }
  else{window.setTimeout("remove()",1);} // Trigger remove
}

function remove(){ // Remove invalid character
  y = document.getElementsByName("c")[0];
  q = y.value;
  q = q.slice(0, - 1); // Remove end character from value
  y.value = q;
}

