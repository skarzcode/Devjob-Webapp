// import users from "./data.json" assert {type: "json"};
const jobPostingContainer = document.querySelector(".Job-Posting-Container");
let currentJob;
const CompanyBanner = document.querySelector(".Company-Info");
const CompanyDetails = document.querySelector(".Job-info-Container");
const searchContainer = document.querySelector(".SearchContainer");
const url = "./data.json";
let res;
const testCheck = document.querySelector(".testCheck");
const backbtn = document.querySelector(".back");
// Dom elements for job description page
const logoDiv = document.querySelector(".company-logo-img");
const logo = document.querySelector(".company_logo");
const companyName = document.querySelector(".Company-name");
const CompanyLink = document.querySelector(".Company-Link");
const postedAt = document.querySelector(".role-date");
const roleType = document.querySelector(".role-type");
const roleTitle = document.querySelector(".role-name");
const roleLocation = document.querySelector(".role-location");
const applyBtn = document.querySelector(".role-apply-now");
const jobDescription = document.querySelector(".description");
const jobRequirement = document.querySelector(".requirements-p");
const requirementsList = document.querySelectorAll(".list");
const jobDayToDay = document.querySelector(".what-you-will-do-p");
const jobDayToDayList = document.querySelectorAll(".list2");



// Function to fetch json data
function reqData(){
    fetch(url)
       .then(res=>res.json())
       .then(data=>{
          console.log(data[5]);
           res = data;
        // calling renderJobs function to render each job using
          data.forEach(current => {
            renderjobs(current);
        });
        
       })
       .catch((error)=>{
          console.error(error);
       })};

    //    function to change the content inside job description when clicking on jobs
       function updateJobInfo(curr){
        logoDiv.style.backgroundColor = curr.logoBackground;
        logo.src = curr.logo;
        companyName.innerHTML = curr.company;
        CompanyLink.innerHTML = curr.website;
        postedAt.innerHTML = curr.postedAt;
        roleType.innerHTML = curr.contract;
        roleTitle.innerHTML = curr.position;
        roleLocation.innerHTML = curr.location;
        applyBtn.id = curr.id;
        jobDescription.innerHTML = curr.description;
        jobRequirement.innerHTML = curr.requirements.content;
        for (let i = 0; i<requirementsList.length; i++ ){
            requirementsList[i].innerHTML = curr.requirements.items[i];
            jobDayToDayList[i].innerHTML = curr.role.items[i];
        };
        jobDayToDay.innerHTML = curr.role.content;
       };

      
// Function to render the json job postings as cards/dom elements

function renderjobs(current){
    let card = document.createElement("div");
    card.id = current.id;
    card.classList.add("jobCard");
    jobPostingContainer.appendChild(card);

    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logocard");
    logoDiv.style.backgroundColor = current.logoBackground;
    card.appendChild(logoDiv);

    let logoImg =  document.createElement("img");
    logoImg.classList.add("companyLogo");
    logoImg.src = current.logo;
    logoDiv.appendChild(logoImg);

    let jobSpec = document.createElement("div");
    jobSpec.classList.add("jobInfo");
    card.appendChild(jobSpec);

    let postingDate = document.createElement("p");
    postingDate.innerHTML = current.postedAt;
    jobSpec.appendChild(postingDate);

    let star = document.createElement("p");
    star.classList.add("dot")
    star.innerHTML = "*";
    jobSpec.appendChild(star);

    let contract = document.createElement("p");
    contract.innerHTML = current.contract;
    jobSpec.appendChild(contract);

    let role = document.createElement("h2");
    role.classList.add("role")
    role.innerHTML = current.position;
    card.appendChild(role);

    let name = document.createElement("p");
    name.classList.add("companyname")
    name.innerHTML = current.company;
    card.appendChild(name);

    let location = document.createElement("p");
    location.classList.add("joblocation")
    location.innerHTML = current.location;
    card.appendChild(location);

    testCheck.addEventListener("click", function(){
        if(testCheck.checked && contract.innerHTML == "Full Time"){
        card.style.display = "none";
        jobPostingContainer.classList.add("Displayanimation");
        jobPostingContainer.classList.remove("DisplayNoneanimation")
        } else if (testCheck.checked == false){
            card.style.display = "block";
        }
    })

    card.addEventListener("click", function(){
    res.forEach(curr => {
        if (card.id == curr.id){
        let currentJob = curr;
        updateJobInfo(curr);
        console.log(currentJob);
        CompanyBanner.classList.add("Displayanimation2");
        CompanyDetails.classList.add("Displayanimation3");
        // jobPostingContainer.classList.remove("Displayanimation");
        jobPostingContainer.classList.add("DisplayNoneanimation")
        searchContainer.classList.add("DisplayNone");
        backbtn.classList.add("DisplayFlex")
        setTimeout(() => {
            window.scrollTo(0,0);
        }, 500);
        setTimeout(() => {
            jobPostingContainer.classList.add("DisplayNone")
        }, 1000);
        }
    });
    })

}

// back btn goes back to the initial page where the job postings are

backbtn.addEventListener("click", function(){
    jobPostingContainer.classList.add("Displayanimation");
    jobPostingContainer.classList.remove("DisplayNone");
    jobPostingContainer.classList.remove("DisplayNoneanimation")
    CompanyBanner.classList.remove("Displayanimation2");
    CompanyDetails.classList.remove("Displayanimation3");
    searchContainer.classList.remove("DisplayNone");
    backbtn.classList.remove("DisplayFlex")
    setTimeout(() => {
        jobPostingContainer.classList.remove("Displayanimation");
    }, 1000);
    
})




reqData();


