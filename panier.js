const btn_plus = document.querySelectorAll('.btn-plus');
const btn_moins = document.querySelectorAll('.btn-moins');
const btn_chiffres = document.querySelector('.btn-chiffres');
const input_one = document.querySelector('.btn111');
const input_two = document.querySelectorAll('.input-one');
const total= document.querySelector('.total');


btn_plus.forEach((elt) => {elt.addEventListener('click', increaseQuantity)});
btn_moins.forEach((elt) =>{elt.addEventListener('click', decreaseQuantity)});



function increaseQuantity(){
    let quantity;    
    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.innerHTML) +1;
    quantity = this.previousElementSibling.innerHTML ;
    increaseSubTotal(this, quantity);
    totalAmount()
    
}
function decreaseQuantity(){
    let quantity;
    if(parseInt(this.nextElementSibling.innerHTML) > 0){
        this.nextElementSibling.innerHTML = parseInt(this.nextElementSibling.innerHTML) -1; 
        quantity = this.nextElementSibling.innerHTML ;
        decreaseSubTotal(this, quantity);
        totalAmount()
        
    }
    
};
function increaseSubTotal(elt, quantity){
    elt.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML = parseFloat(elt.parentElement.nextElementSibling.children[0].innerHTML) * quantity ;
}
function decreaseSubTotal(elt, quantity){
    elt.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML = parseFloat(elt.parentElement.nextElementSibling.children[0].innerHTML) * quantity ;

}

function totalAmount(){
    let sum = 0;
    for(let i=0;i<input_two.length;i++){
        sum += parseFloat(input_two[i].innerHTML);
    }

    total.innerHTML = "Total :" +sum + "fr";

}