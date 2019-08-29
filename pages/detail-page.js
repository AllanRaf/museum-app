function submitComment(){


    const inputField = document.getElementById("name");

    let name = inputField.value;

    const textField = document.getElementById('msg');
    const msg = textField.value;

    //exit if data is not valid
    if(doesNotPassAllValidations(name, msg)){

        return null;

    }

    //capitalise first letter of name if necessary

    //if(Boolean(name.match(/^[a-z]/))) also works

    let regEx = /^[a-z]/;

    console.log(regEx.test(name));
    
    if(regEx.test(name)){

        name = name.charAt(0).toUpperCase() + name.slice(1);

    }

    //data valid, carry on
    
    const comment = document.createElement("section");

    const h3 = document.createElement("h3");

    const p = document.createElement("p");
    
    h3.innerHTML = `${name} said:`;

    p.innerHTML = msg;

    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);


    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);


    //reset
    inputField.value = null;
    textField.value = null;

}

function doesNotPassAllValidations(name, msg){


    if(!name){

        alert("Name and/or Message must not be left blank!");
        return true;

    }else if(!msg){

        alert("Message must not be left blank!");
        return true;

    }else if(msg.length>250){

        alert("Message must be under 250 characters in length!");
        return true;
    
    }

    //test comments for inappropriate comments

    regEx = /fuck|shit|bastard|bitch|cock/ig;

    if(regEx.test(msg)){

        alert("Warning: this comment has been flagged as offensive...");
        alert("But we'll post it anyway!");
    }


}