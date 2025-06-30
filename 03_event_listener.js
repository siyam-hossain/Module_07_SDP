//approach 1
document.getElementById("handleADD").addEventListener(
    "click", //parameter 1
    (event)=>{ //parameter 2: function or arrow function
        console.log("HEy there");
    }
)


//approach 2
const handleSearch = (event)=>{
    // console.log("Hello sir");
    const inputValue = document.getElementById("inputField").value;
    console.log(inputValue);




    //DOM Manupulation:

    const container = document.getElementById("comment-container");

    //creating element(tag) using javascript
    const p = document.createElement("p");
    //append p tag with input value
    p.innerText = inputValue;
    // console.log(p);

    container.appendChild(p);

    //clear input field
    document.getElementById("inputField").value = "";
}