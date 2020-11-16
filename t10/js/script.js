  let divPhoto = document.getElementById('photo');
  let superman = 'superman';
  let batman = 'batman';
  let spider = 'spider';
  let heroMassiv = [superman, batman, spider];
  let banner;
  let i = 0;

  function makeBannerAgain() {
      banner = setInterval(function() {
          divPhoto.innerHTML = `<img class="img" src="assets/images/${heroMassiv[i]}.jpg" alt="superhero">`;
          if (i == 2) {
              i = -1;
          }
          i++;
      }, 3000);

  }

  makeBannerAgain();

  function nextOrPrevious() {
      let target = event.target;
      clearInterval(banner);
      if (target.getAttribute('data-elemnt') == 'next') {
          if (divPhoto.innerHTML == `<img class="img" src="assets/images/superman.jpg" alt="superhero">`) {
              divPhoto.innerHTML = `<img class="img" src="assets/images/batman.jpg" alt="superhero">`;
              makeBannerAgain();
          } else if (divPhoto.innerHTML == `<img class="img" src="assets/images/batman.jpg" alt="superhero">`) {
              divPhoto.innerHTML = `<img class="img" src="assets/images/spider.jpg" alt="superhero">`;
              makeBannerAgain();
          } else if (divPhoto.innerHTML == `<img class="img" src="assets/images/spider.jpg" alt="superhero">`) {
              divPhoto.innerHTML = `<img class="img" src="assets/images/superman.jpg" alt="superhero">`;
              makeBannerAgain();
          }
      }
      if (target.getAttribute('data-elemnt') == 'previous') {
          if (divPhoto.innerHTML == `<img class="img" src="assets/images/spider.jpg" alt="superhero">`) {
              divPhoto.innerHTML = `<img class="img" src="assets/images/batman.jpg" alt="superhero">`;
              makeBannerAgain();
          } else if (divPhoto.innerHTML == `<img class="img" src="assets/images/batman.jpg" alt="superhero">`) {
              divPhoto.innerHTML = `<img class="img" src="assets/images/superman.jpg" alt="superhero">`;
              makeBannerAgain();
          } else if (divPhoto.innerHTML == `<img class="img" src="assets/images/superman.jpg" alt="superhero">`) {
              divPhoto.innerHTML = `<img class="img" src="assets/images/spider.jpg" alt="superhero">`;
              makeBannerAgain();
          }
      }
  }