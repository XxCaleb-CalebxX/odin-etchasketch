const btn = document.querySelector('#create-grid');


btn.addEventListener("click" , function(event) {
    let value = +prompt("Enter a number: ");
    if (value<= 100) {
        createGrid(value);
    }
})


function createGrid(side) {
    const container = document.querySelector(".container");
    const list = document.querySelectorAll('.container .block');
    list.forEach((item)=> {
        item.remove();
    });
    for (i=1; i <= side; i++) {
        let temp_div = document.createElement('div');
        temp_div.style.display = "flex";
        for (j = 1; j<= side; j++) {
            let temp = document.createElement('div');
            let sidelen = 960/side;
            temp.setAttribute('style' , `height: ${sidelen}px; width: ${sidelen}px`)
            temp.addEventListener('mouseover' , function(event) {event.target.classList.add('hovered')});
            temp_div.appendChild(temp)
        }
        temp_div.classList.add('block');
        container.appendChild(temp_div);
    }
}