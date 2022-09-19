Dev Job WebApp solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- Toggle light and dark mode
- Store any changes in LocalStorage


### Screenshot

![](assets/preview2.jpg)
![](assets/Screenshot%20(54).png)
![](assets/Screenshot%20(55).png)
![](assets/Screenshot%20(56).png)

### Links

- Solution URL: [https://amajid.dev/devjobsapp](https://amajid.dev/devjobsapp)
- Live Site URL: [https://skarzcode.github.io/Devjob-Webapp/](https://skarzcode.github.io/Devjob-Webapp/)

## My process

Sketch

At the beginning of the project, first I outlined all the components of the app with a pen and pad to get an understanding of how I would structure and make each section giving me clarity on what tools will be needed to execute the project

Static Version

Once the design was done, I then began creating a static version of the app using HTML5 and CSS alongside dummy data to know how each section should look and function. This gave me the ability to write better pseudo code as I knew what elements would be dynamic and interactive.

Dynamic Version

Finally after creating my Psuedo code and design ideas I began implementing Javascript to use Fetch to render the JSON data as well as creating Factory functions to create dynamic objects utilising Dom Elements that would change state after events
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
This was my first time working with JSON Data and using fetch by myself without any tutorials and at first, I used the module method which required specifying the type of the script to the module to retrieve the data which worked. However, i quickly came to realise it wouldn't work on Firefox, Microsoft Edge or IE. I then did some more research and used a simple Fetch which worked across browsers.

Another thing which I learned on this project was the event called input. At first, the search filter worked by only taking in inputs which wouldn't do anything until the search button was pressed then a function would run to display the job listings that fit the criteria. However, once I implemented the event called input I was able to run the search function anytime the input field had an additional character.

This solution however raised another issue. if the user was to press the backspace button to clear the input fields it wouldn't do anything. I then implemented another event which was key-down and specified the backspace key to dynamically change the content if the characters could still resemble anything related to the job

event listeners used in proj
```js

const proudOfThisFunc= () => {
 inputTitle.addEventListener("input", function(){
        if (current.position.toLowerCase().indexOf(inputTitle.value.toLowerCase()) !== -1 || current.company.toLowerCase().indexOf(inputTitle.value.toLowerCase()) !== -1  ){
            resetBtn.classList.add("DisplayBlock");
        }
        else {
            card.classList.add("DisplayNone");
            resetBtn.classList.add("DisplayBlock");
        }
    })

        inputLocation.addEventListener("input", function(){
        if (current.location.toLowerCase().indexOf(inputLocation.value.toLowerCase()) !== -1){
            resetBtn.classList.add("DisplayBlock");
        } else {
            card.classList.add("DisplayNone");
            resetBtn.classList.add("DisplayBlock");
        }
    })

      if(contractCheckBox.checked && current.contract == "Full Time"){

        } else if(contractCheckBox.checked && current.contract == "Part Time"){
            card.classList.add("DisplayNone");
        }
}


const proudOfThisFunc2 = () => {
   document.addEventListener("keydown", function(event) {
  if (event.key == "Backspace" && (current.position.toLowerCase().indexOf(inputTitle.value.toLowerCase()) !== -1 || current.company.toLowerCase().indexOf(inputTitle.value.toLowerCase()) !== -1) && current.location.toLowerCase().indexOf(inputLocation.value.toLowerCase()) !== -1) {
    card.classList.remove("DisplayNone");
  } 
  if(event.key == "Backspace" && (current.position.toLowerCase().indexOf(inputTitle.value.toLowerCase()) !== -1 || current.company.toLowerCase().indexOf(inputTitle.value.toLowerCase()) !== -1) && inputLocation.value.length == 1){
    card.classList.remove("DisplayNone");
  } else if(event.key == "Backspace" && current.location.toLowerCase().indexOf(inputLocation.value.toLowerCase()) !== -1 && inputTitle.value.length == 1){
    card.classList.remove("DisplayNone");
  }
    })
}

```

### Continued development
Things which I will be focusing on in future projects will be familiarising myself with more event listeners and their use cases. Furthermore, getting better at css layouts and transition to make smoother state changes in single page applications.


## Author

- Website - [Abdi Majid's Portfolio](https://www.amajid.dev)

