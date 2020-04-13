const title = document.querySelector("#title");

const CLICKED_CLASS = "click_change_className";

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    const currentClass = title.className;
    // console.log(currentClass);


    const hasClass= title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }

    // if(currentClass !== CLICKED_CLASS){ 
    //     title.className = CLICKED_CLASS;
    // }else{
    //     title.className = "";
    // }

    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR; // "#7f8c8d"
    }else{
        title.style.color = BASE_COLOR; // rgb(52, 73, 94)
    }
    










}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

// 계속 실행 시킨다.
init();
