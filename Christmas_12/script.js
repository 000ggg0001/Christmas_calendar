function drawTree(h) {
  for(var i=0; i<=h; i++){
    var star = '';
    
    for(var k = 1; k <= h - i; k++){
      
      star += " ";
    };
    for(var j=0; j<=i; j++) {
        
        star += " *";
    };
    
    console.log(star);
  };
};
let h = prompt('Enter the height of the tree:', 0);
drawTree(h-1);

console.log("Merry Christmas!🎄")
