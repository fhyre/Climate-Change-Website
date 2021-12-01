let fade_in_items = document.querySelector(".ocean-heading").querySelectorAll(".fade-in-type");

async function loopTitleStuff() {
    for(let i = 0; i < fade_in_items.length; ++i) {
        if (i > 0)
            fade_in_items[i - 1].style.display = "none";

        fade_in_items[i].style.display = "block";
        
        await new Promise(resolve => setTimeout(resolve, 4000));
        wrap(fade_in_items[i]);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

}

function wrap(text) {
    text.style.whiteSpace = "normal";
}

loopTitleStuff();