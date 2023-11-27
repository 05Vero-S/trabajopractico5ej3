
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');

addBtn.addEventListener('click', (e) =>{
    e.preventDefault(); //hace q la pagina no se recargue de nuevo

    const text = input.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent=text;

    li.appendChild(p);
    li.appendChild(botonEliminar());
    ul.appendChild(li);

    li.className='pt-3'

    //como me quedaba la ultima tarea ingresada en el input para eso hago:
    input.value = '';

});

function botonEliminar(){
    const eliminarBtn= document.createElement('boton');

    eliminarBtn.textContent = 'Eliminar tarea';
    eliminarBtn.className='btn-delete btn btn-outline-danger my-2';


    eliminarBtn.addEventListener('click', (e) =>{
        const item =e.target.parentElement;
        ul.removeChild(item);
    });

    return eliminarBtn;
}

//Nota: en formulario input le puse el atributo required para que sea campo obligatorio pero no lo hace. Al hacer click sin escribir agrega una tarea vacía.