const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;

    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR; //"#7f8c8d"
    }else{
        title.style.color = BASE_COLOR; //rgb(52, 73, 94)
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}


// 계속 실행 시킨다.
init();
