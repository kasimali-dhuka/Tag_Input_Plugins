$(document).ready(function(){

    // Adding an input element surrounded by div element above the input element,
    // in which the user adds a data-role = "tagInput" attribute.
    // And adding the attributes contained by the user input element.
    
    const dataRoleTagInput = $('[data-role="taginput"]');


    // Removing the user input element
    dataRoleTagInput.css("display", "none");
    

    // Getting the attribute values of user input element
    const dataRoleTagInputPlaceHolder = dataRoleTagInput.attr("placeholder");
    const dataRoleTagInputName = dataRoleTagInput.attr("name");
    const dataRoleTagInputClass = dataRoleTagInput.attr("class");


    // Creating the div element and input element
    dataRoleTagInput.before("<div class='tags-group'><input type='text' id='tags-input'></div>");
    const tagsGroup = $(".tags-group");
    const tagsInput = $("#tags-input");

    tagsGroup.css({"word-wrap": "break-word"});
    
    // Setting the attribute value of new input element
    tagsInput.attr({
        class: dataRoleTagInputClass,
        name: dataRoleTagInputName,
        placeholder: dataRoleTagInputPlaceHolder        
    });


    // When clicked on div(.tags-group), input(#tags-input) is focused
    tagsGroup.click(function(){
        tagsInput.focus();
    });

    
    // Adding an event listener for input plugins to activate
    tagsInput.keydown(function(event){
    
        // Now getting the value of the input element and assigning a variable
        var tagsInputValue = tagsInput.val();


        // Adding if condition, for no duplicate value
        if(event.keyCode == 13){

            // Checking if there is any children element in div
            if(tagsGroup.children("span")[0]){

                console.log("There is a span element");
                
                let tagsInputIdValue = "#"+tagsInputValue;
                let filter = $(".tag-span-badges").filter(tagsInputIdValue).text();

                if(filter){
                    
                    tagsInputValue = "";
                    tagsInput.val("");

                }

            }

        }


        // Now creating and appending tag badges from the input
        if(event.keyCode == 13 && tagsInputValue != "" && tagsInputValue != " "){

            tagsInput.before("<span class='tag-span-badges' id='"+ tagsInputValue +"'>"+ tagsInputValue +"</span>");
            $(".tag-span-badges").css({
                "background-color" : "#396e7f",
                "color" : "#fff",
                "padding" : "0px 4px",
                "border-radius" : "4px",
                "margin" : "0 3px"
            });
            tagsInput.val("");
            console.log("Created span");

        }
        else if(event.keyCode == 8){
            console.log("backspace");
            if(tagsInputValue == ""){

                $(".tag-span-badges").eq(-1).remove();
                console.log('removed span');

            }

        }

    });


});