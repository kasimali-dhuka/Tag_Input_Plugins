(function(){

    // Adding an input element surrounded by div element above the input element,
    // in which the user adds a data-role = "tagInput" attribute.
    // And adding the attributes contained by the user input element.
    
    const dataRoleTagInput = document.querySelector("[data-role='taginput']");
    
    // Finding the parent element
    const parent_dataRoleTagInput = dataRoleTagInput.parentElement;
    
    // Removing the user input element
    dataRoleTagInput.style.display = "none";


    // Getting the attribute values of user input element
    const dataRoleTagInputClass = dataRoleTagInput.getAttribute("class");
    const dataRoleTagInputName = dataRoleTagInput.getAttribute("name");
    const dataRoleTagInputPlaceHolder = dataRoleTagInput.getAttribute("placeholder");


    // Creating the div element and input element
    // And attributes value to it        
    let divElement = document.createElement("DIV");
    divElement.setAttribute("id", "tags-group");

    let inputElement = document.createElement("INPUT");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("id", "tags-input");
    inputElement.setAttribute("name", dataRoleTagInputName);
    inputElement.setAttribute("class", dataRoleTagInputClass);
    inputElement.setAttribute("placeholder", dataRoleTagInputPlaceHolder);

    divElement.appendChild(inputElement);

    // Appending to the parent element of user input element
    // and using insertBefore to append before the input element
    parent_dataRoleTagInput.insertBefore( divElement, dataRoleTagInput);

    // Declaring variables for newly created div and input element
    const tagsGroup = document.getElementById("tags-group");
    tagsGroup.style.wordWrap = "break-word";
    const tagsInput = document.getElementById("tags-input");
    

    // Clicking div focues on input element
    tagsGroup.addEventListener("click", function(){
        tagsInput.focus();
    });

    
    // Adding event listener for input plugins to activate
    tagsInput.addEventListener("keydown", function(event){

        // Getting value from input element and assigning a variable
        var tagsInputValue = tagsInput.value;


        // Adding if condition, for duplicate values
        if(event.key == "Enter"){
            
            if(tagsGroup.childElementCount > 1){
                
                console.log("not empty");
                let verfiySpan = tagsGroup.querySelectorAll("span");
                let length = verfiySpan.length - 1;

                let i;
                for(i=0; i <= length; i++){
                    if(verfiySpan[i].id == tagsInputValue){
                        
                        console.log("Matched");
                        tagsInput.value = "";
                        return false;
                    
                    }
                }

            }
            else{
                console.log("empty");
            }

        }


        // Creating and appending tag badges from the input
        if(event.key == "Enter" && tagsInputValue != "" && tagsInputValue != " "){

            // creating and appending style element
            let spanElement = document.createElement("span");
            spanElement.textContent = tagsInputValue;
            tagsGroup.insertBefore( spanElement, tagsInput);

            // setting the attributes for span element
            spanElement.setAttribute("id", tagsInputValue);
            spanElement.setAttribute("class", "tag-span-badges");

            // Adding style to span element
            spanElement.style.backgroundColor = "#396e7f";
            spanElement.style.color = "#fff";
            spanElement.style.padding = "0px 4px";
            spanElement.style.borderRadius = "4px";
            spanElement.style.margin = "0 3px";

            // Clearing input value for next span element
            tagsInput.value = "";

        }
        else if(event.key == "Backspace" && tagsGroup.childElementCount > 1){

            if(tagsInput.value == ""){

                let allSpanElement = tagsGroup.querySelectorAll("span");
                let limit = allSpanElement.length-1;
                allSpanElement[limit].remove();

            }
            
        }


    });


})();