function init(){

    var obj = "";

    for(i = 0; i < 18; i++){

        obj += "<div></div>";

    }

    var main = document.getElementsByTagName("main")[0];

    main.innerHTML = obj;

    var firstDiv = main.firstElementChild;

    firstDiv.innerHTML = "D";
    firstDiv.className = "first";

}

function myFunction() {

    // get main
    var main = document.getElementsByTagName("main")[0];
    // get button
    var btn = document.getElementsByTagName("button")[0];
    // get all div tags inside main
    var divs = main.getElementsByTagName("div");

    // check first div background color
    if (divs[0].style.background != "black") {
       // in case default background color 
        for(i = 0; i < 3; i++){
            divs[i].style.background = "black";
        }
        btn.innerHTML = "White"

    } else {
        // change back to default background color
        for(i = 0; i < 3; i++){
            divs[i].style.background = "white";      
         }
         btn.innerHTML = "Black"
    }

  }