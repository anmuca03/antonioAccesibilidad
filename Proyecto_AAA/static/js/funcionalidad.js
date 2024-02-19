'use strict';

window.addEventListener("hashchange", function(event) {
  // Previene el comportamiento predeterminado de desplazarse hacia el elemento de destino
  event.preventDefault();
  // Puedes agregar otro código aquí si es necesario
});
// cuando se cargue el DOM, a los enlaces del header si son presionados
// se pone la clase seleccionado al correspondiente y se quita la clase en el resto
// la clase seleccionado otorga el estilo de 3 puntos azules debajo de los enlaces
document.addEventListener('DOMContentLoaded', function() {
  const enlaces = document.querySelectorAll('header nav a');

  enlaces.forEach((enlace) => {
    enlace.addEventListener('click', function() {
      enlaces.forEach((otroEnlace) => {
        otroEnlace.classList.remove('seleccionado');
      });

      this.classList.add('seleccionado');
    });
  });
});

// cuando se cargue el DOM, a los enlaces de la sección recent-work si son presionados
// se pone la clase seleccionado al correspondiente y se quita la clase en el resto
// la clase seleccionado otorga el estilo de 3 puntos azules debajo de los enlaces
document.addEventListener('DOMContentLoaded', function() {
  const enlaces = document.querySelectorAll('.recent-work nav a');

  enlaces.forEach((enlace) => {
    enlace.addEventListener('click', function() {
      enlaces.forEach((otroEnlace) => {
        otroEnlace.classList.remove('seleccionado');
      });

      this.classList.add('seleccionado');
    });
  }); enlaces[0].click();
});

// cuando se hace click en punto1 se muestra la paginacliente1 y vicebersa
// también se pone el estilo correspondiente en ese punto y se quita en el otro
document.addEventListener('DOMContentLoaded', function() {
  const punto1 = document.querySelector('.puntoscarrusel div:nth-child(1)');
  const punto2 = document.querySelector('.puntoscarrusel div:nth-child(2)');
  const pagina1cliente = document.querySelector(
    '.client-testimonials ul li:nth-child(1)'
  );
  const pagina2cliente = document.querySelector(
    '.client-testimonials ul li:nth-child(2)'
  );

  punto1.addEventListener('click', function() {
    pagina1cliente.style.display = 'block';
    pagina2cliente.style.display = 'none';
    punto1.style.border = 'none';
    punto1.style.backgroundColor = '#6ecab2';
    punto2.style.backgroundColor = 'white';
    punto2.style.border = '2px solid #6ecab2';
  });

  punto2.addEventListener('click', function() {
    pagina1cliente.style.display = 'none';
    pagina2cliente.style.display = 'block';
    punto2.style.border = 'none';
    punto2.style.backgroundColor = '#6ecab2';
    punto1.style.backgroundColor = 'white';
    punto1.style.border = '2px solid #6ecab2';
  });
});
