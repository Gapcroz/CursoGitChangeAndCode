const referencia = document.querySelectorAll('.nav #menu-item');
const elementos=document.querySelectorAll('.carrusel');
const next=document.querySelectorAll('.next');
const prev=document.querySelectorAll('.prev');
const imagenes=document.querySelectorAll('.imagenes div');
const invisibleA = document.querySelectorAll('.invisibleA');
const invisibleD = document.querySelectorAll('.invisibleD');
const invisibleC = document.querySelectorAll('.invisibleC');


let currentIndex=0;

function reiniciar(){
    invisibleA.forEach((vi)=>{
        vi.classList.remove('active');
    });

};

function presentacionInicial(){
    invisibleA[0].classList.remove('active');
    invisibleA[1].classList.remove('active');
    invisibleA[2].classList.remove('active');
    invisibleA[0].classList.add('active');
    invisibleA[1].classList.add('active');
    invisibleA[2].classList.add('active');
}
function showItemsA() {
    // Oculta todos los elementos
    invisibleA.forEach((item, n) => item.classList.remove('active'));
    
    // Muestra solo los tres elementos actuales
    for (let i = 0; i < 3; i++) {
      
      const index = (currentIndex + i) % invisibleA.length;
      
      invisibleA[index].classList.add('active');
           
    };
};
function showItemsD() {
    // Oculta todos los elementos
    invisibleD.forEach((item, n) => item.classList.remove('active'));
    
    // Muestra solo los tres elementos actuales
    for (let i = 0; i < 3; i++) {
      
      const index = (currentIndex + i) % invisibleD.length;
      
      invisibleD[index].classList.add('active');
           
    }
}
function showItemsC() {
    // Oculta todos los elementos
    invisibleC.forEach((item, n) => item.classList.remove('active'));
    
    // Muestra solo los tres elementos actuales
    for (let i = 0; i < 3; i++) {
      
      const index = (currentIndex + i) % invisibleC.length;
      
      invisibleC[index].classList.add('active');
           
    }
}
showItemsA();
showItemsD();
showItemsC();

referencia.forEach((item, index) => {
    currentIndex=0;
    item.addEventListener('click', (e) => {
        
        e.preventDefault();               
        elementos.forEach((el) => el.style.display = 'none');
        elementos[index].style.display='block';        
    });
   
    
    
});

next[0].addEventListener('click', () => {
    
    currentIndex = (currentIndex + 1) % invisibleA.length; // Avanza al siguiente índice
    if(currentIndex===invisibleA.length-2){
        currentIndex=0;
        showItemsA(); // Actualiza la visualiización
    }else{
        showItemsA();
        }
});
next[1].addEventListener('click', () => {
    
    currentIndex = (currentIndex + 1) % invisibleD.length; // Avanza al siguiente índice
    if(currentIndex===invisibleD.length-2){
        currentIndex=0;
        showItemsD(); // Actualiza la visualiización
    }else{
        showItemsD();
    }
});
next[2].addEventListener('click', () => {
    
    currentIndex = (currentIndex + 1) % invisibleC.length; // Avanza al siguiente índice
    if(currentIndex===invisibleC.length-2){
        currentIndex=0;
        showItemsC(); // Actualiza la visualiización
    }else{
        showItemsC();
    }
});
    

prev[0].addEventListener('click', () => {
    currentIndex=invisibleA.length;
    currentIndex = (currentIndex - 1); // Avanza al siguiente índice
    
    showItems(); // Actualiza la visualiización
    
});








   
    



