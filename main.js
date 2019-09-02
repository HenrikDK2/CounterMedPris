document.addEventListener('DOMContentLoaded', ()=>{
    const produktList = document.querySelectorAll('.produkt');
    const produktArray = Array.from(produktList);
    let produkter = [
        {count:1, pris:100, totalPris:100},
        {count:1, pris:150, totalPris:150},
        {count:1, pris:275, totalPris:275}
    ];

    for(let i=0; i<produktList.length; i++){
        produktList[i].addEventListener('click', update);
    }

    function update(e){
        let index = produktArray.indexOf(e.currentTarget);

        if(e.target.getAttribute('class') === 'btn btn-plus'){
            produkter[index].count++;   
        }else if(e.target.getAttribute('class') === 'btn btn-minus'){
            produkter[index].count--;
        }

        if(produkter[index].count < 0){
            produkter[index].count = 0;
        }
        produkter[index].totalPris = produkter[index].count * produkter[index].pris;
        e.target.parentElement.querySelector('.antal').textContent = produkter[index].count;
        e.target.parentElement.querySelector('.pris').textContent = produkter[index].totalPris+'kr';
    }
});