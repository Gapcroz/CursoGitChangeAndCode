document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mostrarCuriosidades').addEventListener('click', function() {
      var curiosidades = document.getElementById('curiosidades');
      if (curiosidades.style.display === 'none' || curiosidades.style.display === '') {
        curiosidades.style.display = 'block';  // Mostrar
      } else {
        curiosidades.style.display = 'none';  // Ocultar
      }
    });
  });