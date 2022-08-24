import users from "/data.json" assert {type: "json"};
const jobPostingContainer = document.querySelector(".Job-Posting-Container");
let currentJob;
const CompanyInfo = document.querySelector("Company-Info");

console.log(currentJob);

console.log(users[0]);
console.log("hello");


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

    card.addEventListener("click", function(){
    users.forEach(curr => {
        if (card.id == curr.id){
        let currentJob = curr;
        console.log(currentJob);
        }
    });
    })

}

users.forEach(current => {
    renderjobs(current);
});

