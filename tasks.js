const prof=document.querySelector("#prof")
prof.textContent=localStorage.getItem("user").charAt(0)

document.addEventListener("DOMContentLoaded", function() {
    const tabsContainer=document.querySelector(".minichanges")
    const tabsList=document.querySelector(".task-wrapper")
    const tabsButton=document.querySelectorAll("a")
    const tabsPanel=document.querySelectorAll(".main-page>div")

    console.log(tabsButton.length)
    console.log(tabsPanel.length)

    if (tabsButton.length === tabsPanel.length+1 ) {
        tabsButton.forEach((element, index) => {
            if (index !== 0) {
                tabsPanel[index - 1].setAttribute("hidden", "");
            }
        });
    } else {
        console.error("Number of tabs in tabsButton and tabsPanel do not match.");
    }

    tabsContainer.addEventListener("click",e=>{
        const clickTab=e.target.closest("a");
        if(!clickTab) return;
        e.preventDefault();

        switchTab(clickTab);
    });

    function switchTab(newTab){
        const activePanelId=newTab.getAttribute("href");
        const activePanel=document.querySelector(activePanelId);
        tabsPanel.forEach((panel)=>{
            panel.setAttribute("hidden",true);
        });
        activePanel.removeAttribute("hidden");
    }
});





const add = document.querySelector(".plus");
const task = document.querySelector(".taskadd");
const deleteall=document.querySelector(".delete")
var graphcount =0;

add.addEventListener("click", (e) => {
  e.preventDefault();
  graphcount++;

    //ADDING TASK NAME

  if (task.value !== "") {



    yValues[0]++;
    chartBar.data.datasets[0].data = yValues;
    chartBar.update();
    chartDoughnut.data.datasets[0].data = yValues;
    chartDoughnut.update();


    const tasklist = document.querySelector(".tasklist");
    const row = document.createElement("tr");

    const staarray = ["-", "On Track", "At Risk", "Off Track"];
    const prioarray = ["-", "High", "Medium", "Low"];

    const newtask = document.createElement("td");
    newtask.innerText = task.value;
    row.appendChild(newtask);


    //ADDING DROPDOWNS
    for (let i = 0; i < 2; i++) {
      const newCell = document.createElement("td");
      const select = document.createElement("select");

      select.classList.add("checkbox")
      newCell.classList.add("newcell")
      newtask.classList.add("newtask")
      
      for (let j = 0; j < 4; j++) {
        const option = document.createElement("option");
        option.innerText = i === 0 ? staarray[j] : prioarray[j];
        select.appendChild(option);
      }

      newCell.appendChild(select);
      row.appendChild(newCell);
    }

    const date=document.createElement("input");
    date.setAttribute("type","date")

    date.classList.add("date-time")
    // const currentDate = new Date();
    // console.log(currentDate)
    tasklist.appendChild(row);
    // const options = { month: 'long', day: 'numeric' };
    // const formattedDate = currentDate.toLocaleDateString('en-US', options);
    // date.textContent = formattedDate;
    row.appendChild(date);


    tasklist.appendChild(row);
    task.value = "";

  }
});

deleteall.addEventListener("click",()=>{
        
    yValues[0]=0;
    chartBar.data.datasets[0].data = yValues;
    chartBar.update();
    chartDoughnut.data.datasets[0].data = yValues;
    chartDoughnut.update();
    clearAll();
})

function clearAll(){
    const tasklist = document.querySelector(".tasklist");
    tasklist.innerHTML="";
}


let chartBar;
let chartDoughnut;

var xValues = ["to-do", "doing", "done"];
var yValues = [0, 0, 0];
var barColors = ["#a69ff3"];
chartBar=new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            barThickness: 40,
            //   labels:task-count
        }]
    },
    //   options: {...}
});
var xValues = ["to-do", "doing", "done"];
var yValues = [0, 0, 0];
var barColors = ["#a69ff3"];
chartDoughnut=new Chart("doughnutchart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    //   options: {...}
});


