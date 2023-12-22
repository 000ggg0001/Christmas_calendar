

const phraseList = [ 
	"Christmas isn’t just a day, it’s a frame of mind. – Valentine Davies", 
	"The best way to spread Christmas cheer is singing loud for all to hear. – Will Ferrell", 
	"Christmas isn’t a season. It’s a feeling. – Edna Ferber", 
	"At Christmas, all roads lead home. – Marjorie Holmes", 
	"Christmas works like glue. It keeps us all sticking together. – Rosie Thomas", 
	"For it is in giving that we receive. – Francis of Assisi", 
	"Christmas is doing a little something extra for someone. – Charles M. Schulz", 
	"The smells of Christmas are the smells of childhood. – Richard Paul Evans", 
]; 


       
            function generate() {
               var finalName = phraseList[Math.floor( Math.random() * phraseList.length )];
               document.getElementById("uNameInput").value = finalName;
            };