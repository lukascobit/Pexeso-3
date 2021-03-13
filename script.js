let Counter = 0;


function Change(Wanted){
    
    let rect = document.getElementById(Wanted);

    let rect1 = document.getElementById("rect1");
    let rect2 = document.getElementById("rect2");
    let rect3 = document.getElementById("rect3");
    let rect4 = document.getElementById("rect4");
    let rect5 = document.getElementById("rect5");
    let rect6 = document.getElementById("rect6");
    let rect7 = document.getElementById("rect7");
    let rect8 = document.getElementById("rect8");
    let rect9 = document.getElementById("rect9");
    let rect10 = document.getElementById("rect10");
    let rect11 = document.getElementById("rect11");
    let rect12 = document.getElementById("rect12");
    let rect13 = document.getElementById("rect13");
    let rect14 = document.getElementById("rect14");
    let rect15 = document.getElementById("rect15");
    let rect16 = document.getElementById("rect16");
    let rect17 = document.getElementById("rect17");
    let rect18 = document.getElementById("rect18");
    let rect19 = document.getElementById("rect19");
    let rect20 = document.getElementById("rect20");

    let rect1C = "#1296e2";
    let rect2C = "#1296e2";

    let rect3C = "#e2125f";
    let rect4C = "#e2125f";

    let rect5C = "#e2a412";
    let rect6C = "#e2a412";

    let rect7C = "aqua";
    let rect8C = "green";

    let rect9C = "green";
    let rect10C = "aqua";

    let rect11C = "yellow";
    let rect12C = "yellow";

    let rect13C = "pink";
    let rect14C = "wheat";

    let rect15C = "grey";
    let rect16C = "wheat";

    let rect17C = "pink";
    let rect18C = "grey";

    let rect19C = "#e25412";
    let rect20C = "#e25412";



    let First;
    let Second;





    if(Counter == 0){
        Endcol = eval(Wanted +"C");
        rect.style.backgroundColor = Endcol;
        console.log(Endcol)
        Counter++;
        

    }else if(Counter == 1){
        let Endcol2 = eval(Wanted +"C");
        rect.style.backgroundColor = Endcol2;
        console.log(Endcol2)
        Second = toString(Endcol2);
        console.log(Endcol,Endcol2)
        if(Endcol == Endcol2){
            Counter = -1;
        }
        Counter++;
        
    }else if(Counter == 2){  
            rect1.style.backgroundColor = "#5ace73";
            rect2.style.backgroundColor = "#5ace73";
            rect3.style.backgroundColor = "#5ace73";
            rect4.style.backgroundColor = "#5ace73";
            rect5.style.backgroundColor = "#5ace73";
            rect6.style.backgroundColor = "#5ace73";
            rect7.style.backgroundColor = "#5ace73";
            rect8.style.backgroundColor = "#5ace73";
            rect9.style.backgroundColor = "#5ace73";
            rect10.style.backgroundColor = "#5ace73";
            rect11.style.backgroundColor = "#5ace73";
            rect12.style.backgroundColor = "#5ace73";
            rect13.style.backgroundColor = "#5ace73";
            rect14.style.backgroundColor = "#5ace73";
            rect15.style.backgroundColor = "#5ace73";
            rect16.style.backgroundColor = "#5ace73";
            rect17.style.backgroundColor = "#5ace73";
            rect18.style.backgroundColor = "#5ace73";
            rect19.style.backgroundColor = "#5ace73";
            rect20.style.backgroundColor = "#5ace73";
           
           
            
            Counter = 0;
            
        }
    

    


};
