function  roledice(){
    let dice = Math.floor(Math.random()*6+1)
    switch (dice){
            case 1:
              console.log("  ");
    
              console.log("   .   ");
              console.log("  ");
            break;
            case 2:
                console.log("  ");
                console.log("  .   . ");
                console.log("  ");
                break;
            case 3:
                
        console.log(" . ");
        console.log("   . ");
        console.log("     . ");
        break;
           case 4:
            console.log("  .    . ");
            console.log("  ");
            console.log("  .    . ");
        break;
           case 5:
            console.log(" .   . ");
            console.log("   . ")
            console.log(" .   . ");
        break;
           default:
            console.log("  .  .  .");
            console.log("  ");
            console.log("  .  .  . ");
            
            
    }
}


roledice();