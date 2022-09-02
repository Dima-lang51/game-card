/* Путь до универа */
let goBtn = document.querySelector(".go-btn");
let count = 1;

  goBtn.addEventListener("click", function() {
  if (count > 5) {
    count = 1;
  }
  document.querySelector(".dot").className = "dot";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      let dot = document.querySelector(".dot");
     
      //dot.style.offsetPath = paths[count];
      let level = "level" + count;
      dot.className = "dot animation "+ level;
      count++;
    });
  });
  
});

/* Слайдер иконок друзей */
const sliderArrowLeft = document.querySelector(".slider-arrow-left");
const sliderArrowRight = document.querySelector(".slider-arrow-right")
const startPos = 31;
const endPos = -129;
sliderArrowLeft.addEventListener("click", function() {
  let sliderList = document.querySelector(".slider-list");
  let newX  = sliderList.getBoundingClientRect().x - 60 - startPos;
  if (newX > endPos) {
  sliderList.style.transform = "translate(" + newX + "px)";
  }

});

sliderArrowRight.addEventListener("click", function() {
  let sliderList = document.querySelector(".slider-list");
  let newX  = sliderList.getBoundingClientRect().x + 60 - startPos;
  if (newX < startPos) {
  sliderList.style.transform = "translate("+ newX + "px)";
  }
});










/* Модальное окно рейтинга */
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('.rating-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  let modalTable = document.querySelector('.modal-table');

  data.rating.sort((a, b) => b.points - a.points);

  

  let out = ``;

  for (let i = 0; i <= data.rating.length-1; i++) {
    let isFriends = data.friends.findIndex(element => element.id === data.rating[i].id)
    out += `
    <div class="modal-row ${(isFriends != -1) ? 'is-friends' : ''}">
      <div class="table-place">${i+1}</div>
      <div class="table-name">
        <img src="./images/popup/avatar.png" alt="avatar">
        <span class="name-span">${data.rating[i].name} ${data.rating[i].lastName}</span>
      </div>
      <div class="table-score">${data.rating[i].points}</div>
    </div>
  `
  }

  modalTable.innerHTML = out;


  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
  modal.style.display = 'none';
  }
}


console.log(data);



