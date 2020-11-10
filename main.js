var pictures=["Colosseum-Rome.jpg","Chichen-Itza.jfif","Macchu-Picchu.jpg","Christ-The-Redeemer.jpg,","Petra.jfif","Great-Wall-Of-China.jpg","Taj-Mahal.jpg"];
var i=0;
function change(){
    document.getElementById("img1").src=pictures[i];
    if(i==6){
        i=0;
    }
    i++;
}