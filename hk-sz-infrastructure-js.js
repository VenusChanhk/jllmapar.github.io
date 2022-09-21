document.addEventListener("DOMContentLoaded", function() {
    const poi_apollo = document.querySelector('#poi_apollo');
    const poi_qianhai = document.querySelector('#poi_qianhai');
    
    const info_poi_apollo = document.querySelector('#info_poi_apollo');
    const info_poi_qianhai = document.querySelector('#info_poi_qianhai');

    poi_apollo.addEventListener('click', function () {
      info_poi_apollo.style.display = "block";
      info_poi_qianhai.style.display = "none";
    });
    poi_qianhai.addEventListener('click', function () {
      info_poi_apollo.style.display = "none";
      info_poi_qianhai.style.display = "block";
    });

      document.querySelector("#close-poi_1").addEventListener('click', function () {
              info_poi_apollo.style.display = "none";
    });
      document.querySelector("#close-poi_2").addEventListener('click', function () {
              info_poi_qianhai.style.display = "none";
    });


    
  }

);
  
