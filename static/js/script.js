const last_photo = document.querySelectorAll(".item").length;
const first_photo = 1;

function my_media_query(first_query) {
    if (first_query.matches) {
        let main_title = document.getElementById("main_title");
        main_title.style.fontSize = "20px";
    } else {
        document.getElementById("main_title").style.fontSize = "25px";
    }
    
}

function check_photo_id(check_id) {

    if (check_id === first_photo) {
        // hide backwards arrow
        document.querySelector('.backwards').style.display = 'none';
        document.querySelector('.forward').style.display = 'inline';
    }
    else if (check_id === last_photo) {
        document.querySelector('.backwards').style.display = 'inline';
        // hide forward arrow
        document.querySelector('.forward').style.display = 'none';
    }
    else {
        // display both arrows
        document.querySelector('.backwards').style.display = 'inline';
        document.querySelector('.forward').style.display = 'inline';
    }
}

// changing the photo in the modal window when you click navigation arrows
function change_modal_photo(new_photo_id) {    
    if (new_photo_id === (first_photo - 1) || new_photo_id === (last_photo + 1) ) {
        return;
    }

    let new_photo_link = document.getElementById(new_photo_id).src;
    document.querySelector('.current_pic').href = new_photo_link;
    document.querySelector('.modal_content').src = new_photo_link; 
    // change the id of modal_content!
    document.querySelector('.modal_content').id = new_photo_id;

}

let first_query = window.matchMedia( "(max-width: 700px)" );
my_media_query(first_query);
first_query.addListener(my_media_query);

document.addEventListener('click', function(e) {
    
    // open the modal window
    if (e.target.className == 'item') {
        let current_item = e.target;
        // Get the modal and display it on the screen
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
        // modal_content <a>
        let modal_link = document.querySelector(".current_pic");
        modal_link.href = current_item.src;
        // modal_content <img>
        let modal_content = document.querySelector(".modal_content");
        modal_content.src = current_item.src;
        modal_content.id = current_item.id;

        let photo_id = parseInt(document.querySelector(".modal_content").id);
        check_photo_id(photo_id);
        
    }
    
    // close the modal window
    else if (e.target.className == 'close') {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    // if you click on the front arrow
    else if (e.target.className == 'forward') {
        let new_id;
        new_id = parseInt(document.querySelector(".modal_content").id) + 1;
        check_photo_id(new_id);
        change_modal_photo(new_id);    
     }
     
     // if you click on the back arrow
     else if (e.target.className == 'backwards') {
         let new_id;
         new_id = parseInt(document.querySelector(".modal_content").id) - 1;
         check_photo_id(new_id);
         change_modal_photo(new_id);
     }
        
});


