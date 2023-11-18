let tabIndex = 0;
let tabs = null;
let tabHeaders = null;

function SetTabIndex(index){
    tabIndex = index;

    if (tabs == null){
        return;
    }

    for (let i = 0; i < tabs.length; i++) {
        if (i == tabIndex){
            tabs[i].style.display = "block";
            tabHeaders[i].classList.add("is-active");
        }
        else{
            tabs[i].style.display = "none";
            tabHeaders[i].classList.remove("is-active");
        }
      }
}

document.addEventListener("DOMContentLoaded", (event) => {
    tabs = document.getElementsByClassName("Tab");
    tabHeaders = document.getElementById("tabControl").getElementsByTagName("li");
  });