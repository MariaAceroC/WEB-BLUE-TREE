'use strict'
var siguienteFoto = function () {
    foto++;
  
    if (foto >= 3) {
      foto = 0;
    }
  
    pasarFoto();
  };
  
  var anteriorFoto = function () {
    if (foto === 0) {
      foto = 3;
    }
  
    foto--;
    pasarFoto();
  };
  
  var pasarFoto = function () {
    slider__img.forEach(function (cadaImg, i) {
      slider__img[i].classList.remove('ver'); // 0,1,2
  
      slider__li[i].classList.remove('ver'); // 0,1,2
    });
    slider__img[foto].classList.add('ver');
    slider__li[foto].classList.add('ver');
  };
  
  var fragmento = document.createDocumentFragment();
  var foto = 0;
  var slider = document.querySelector('.slider');
  var slider__img = document.querySelectorAll('.slider__img');
  var ul = document.createElement('ul');
  ul.classList.add('slider__ul');
  fragmento.appendChild(ul);
  slider.appendChild(fragmento);
  var slider__ul = document.querySelector('.slider__ul');
  slider__img.forEach(function (cadaImg, i) {
    var li = document.createElement('li');
    li.classList.add('slider__li');
  
    if (i === 0) {
      li.classList.add('ver');
    }
  
    fragmento.appendChild(li);
  });
  slider__ul.appendChild(fragmento);
  var slider__li = document.querySelectorAll('.slider__li');
  var siguiente = document.querySelector('.siguiente');
  var anterior = document.querySelector('.anterior');
  slider__li.forEach(function (cadaLi, i) {
    slider__li[i].addEventListener('click', function () {
      foto = i;
      pasarFoto();
    });
  });
  siguiente.addEventListener('click', function () {
    siguienteFoto();
  });
  anterior.addEventListener('click', function () {
    anteriorFoto();
  });