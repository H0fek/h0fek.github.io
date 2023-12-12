let tabsContainers = null;
let tabControls = null;

function SetTabIndex(tabControlIndex, tabIndex){       
    let tabHeaders = tabControls[tabControlIndex].getElementsByTagName("li");
    let tabs = tabsContainers[tabControlIndex].getElementsByClassName("Tab");;

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
    tabsContainers = document.getElementsByClassName("tabsContainer");
    tabControls = document.getElementsByClassName("tabControl");
  });