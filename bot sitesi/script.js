/* particles.js ile Partikül Efektlerini Başlatma */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // Partikül sayısı
      "density": {
        "enable": true,
        "value_area": 800 // Yoğunluk alanı
      }
    },
    "color": {
      "value": "#5865F2" // Discord Mavisi
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#5865F2", // Bağlantı çizgisi rengi
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // Mouse üzerine gelince partiküller dağılır
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Tıklayınca partikül ekler
      },
      "resize": true
    }
  },
  "retina_detect": true
});

// WOW.js için özel bir başlatıcıya gerek yok,
// çünkü script.js'ten sonra <script>new WOW().init();</script> ile zaten çağrılıyor.