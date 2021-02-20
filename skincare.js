// const skincareButton = document.getElementById("button-skincare"); 
// const input = document.getElementById("input");

// function getSkincare(x) {
//     return x;
// }

// skincareButton.addEventListener("click", () => {
//     const myList = document.getElementById("skincare-list");
//     const newElement = document.createElement("li");
//     newElement.textContent = "input";
//     myList.append(newElement);
//     console.log("hello")

//     const removeButton = document.createElement('button');
//     removeButton.setAttribute('class', 'remove-button')
//     removeButton.textContent = '(remove)';
//     myList.append(removeButton);
//     removeButton.addEventListener('click', () => {
//         newElement.remove();
//         removeButton.remove();
// });

const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
    const myList = document.getElementById("skincare-list");
    const newElement = document.createElement("li");
    newElement.textContent = document.getElementById("input").value;
    myList.append(newElement);
    
    const checkButton = document.createElement('input');
    checkButton.setAttribute('type', 'checkbox');
    checkButton.setAttribute('name', 'remove');
    const removeLabel = document.createElement('label');
    removeLabel.setAttribute('for', 'remove');
    myList.append(checkButton);


    checkButton.addEventListener('click', () => {
            if(newElement.style.textDecoration === "line-through"){
                newElement.style.textDecoration = "";}
            else{
                newElement.style.textDecoration = "line-through";
            }

});

const removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove-button')
    removeButton.textContent = 'remove';
    myList.append(removeButton);
    removeButton.addEventListener('click', () => {
        newElement.remove();
        removeButton.remove();
        checkButton.remove();
});
});




