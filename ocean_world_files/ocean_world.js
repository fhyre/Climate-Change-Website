let sea_animal_icons = document.querySelectorAll(".img-design");

sea_animal_icons.forEach( icon => {
    icon.addEventListener("click", () =>{
        document.querySelector(".modal-container").style.display = "block";
        document.getElementById(`${icon.id}-info`).style.display = "block";
    });
})

let modal_container = document.querySelector(".modal-container");

window.onclick = function(event) {
    if (event.target == modal_container) {
      modal_container.style.display = "none";
      document.querySelectorAll(".modal-content-window").forEach( card => {
          card.style.display = "none";
      })
    }
} 

let exit_button_arr = document.querySelectorAll(".exit-button");

exit_button_arr.forEach( exit_curr_frame => {
    exit_curr_frame.addEventListener("click", () => {
        exit_curr_frame.parentElement.parentElement.style.display = "none";
        modal_container.style.display = "none";
    })
})







