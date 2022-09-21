document.addEventListener("DOMContentLoaded", function() {
  const poi_apollo = document.querySelector('#poi_apollo');
  const poi_qianhai = document.querySelector('#poi_qianhai');
  
  const info_poi_apollo = document.querySelector('#info_poi_apollo');
  const info_poi_qianhai = document.querySelector('#info_poi_qianhai');
  const container = document.querySelector('#left_container');

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  poi_apollo.addEventListener('click', function () {
    container.style.display = "block";
    info_poi_apollo.style.display = "block";
    info_poi_qianhai.style.display = "none";
  });
  poi_qianhai.addEventListener('click', function () {
    container.style.display = "block";
    info_poi_apollo.style.display = "none";
    info_poi_qianhai.style.display = "block";
    const popup_box_1_num1 = document.querySelector("#popup_box_1_num1");
    const popup_box_3_num1 = document.querySelector("#popup_box_3_num1");
    const popup_box_1_num3 = document.querySelector("#popup_box_1_num3");
    const popup_box_4_num1 = document.querySelector("#popup_box_4_num1");
    animateValue(popup_box_1_num1, 0, 120, 500);
    animateValue(popup_box_1_num3, 0, 56, 500);
    animateValue(popup_box_3_num1, 0, 12000, 500);
    animateValue(popup_box_4_num1, 0, 96, 500);
  });

    document.querySelector("#close-poi_1").addEventListener('click', function () {
            container.style.display = "none";
            info_poi_apollo.style.display = "none";
  });
    document.querySelector("#close-poi_2").addEventListener('click', function () {
      container.style.display = "none";
            info_poi_qianhai.style.display = "none";
  });

}

);
