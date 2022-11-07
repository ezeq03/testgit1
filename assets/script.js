let cant=document.getElementById('cantidadTickets').value;
let categoria=document.getElementById('categoria').value;
let pagarTotal=document.getElementById('pagarTotal')

function calc(){
  alert('funca')
  let ticket=200;
  

  if (cant>0 || !cant== Number) {
    switch (categoria) {
        case 'Estudiante':
            total = (ticket*0.8)*cant;
            pagarTotal.innerHTML=`Total a pagar: $ ${total}`;
            break;
        case 'Trainee':
            total = (ticket*0.5)*cant;
            pagarTotal.innerHTML =`Total a pagar: $ ${total}`;
            break;
        case 'Junior':
            total = (ticket*0.15) * cantidad;
            pagarTotal.innerHTML =`Total a pagar: $ ${total}`;
            break;
        case 'Ninguna':
            total = ticket * cantidad;
            pagarTotal.innerHTML =`Total a pagar: $ ${total}`;
            break;
    }

}

function resetCalc(){
  cantidad.value = ' ';
  categoria.value = 'Ninguna';
  pagarTotal.innerHTML = 'Total a pagar: $';  
}
