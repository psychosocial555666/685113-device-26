var contactUs = document.querySelector(".сontact-us-button");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-tab")
var userName = popup.querySelector("[name=user]");
var userMail = popup.querySelector("[name=mail]");
var userMessage = popup.querySelector("[name=message]");
var form = popup.querySelector("form");

var nameStorage = localStorage.getItem("userName");
var mailStorage = localStorage.getItem("userMail");

    contactUs.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");


      if (nameStorage) {
        userName.value = nameStorage;
        userMail.focus();
      } else {
        if (mailStorage) {
          userMail.value = mailStorage;
          userMessage.focus();
        } else {
        userName.focus();
         }
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
          evt.preventDefault();
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });

    form.addEventListener("submit", function (evt) {
      if (!userName.value || !userMail.value || !userMessage.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userMail", userMail.value);
      }
    });

    /*--------------------------------------------------------------------*/

    var mapLink = document.querySelector(".map");

    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".close-tab");

    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
        }
      }
    });

    mapPopup.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
        }
      }
    });

    var slideOne = document.querySelector(".slide-one");
    var slideTwo = document.querySelector(".slide-two");
    var slideThree = document.querySelector(".slide-three");

    var slideBtnOne = document.querySelector(".btn-one");
    var slideBtnTwo = document.querySelector(".btn-two");
    var slideBtnThree = document.querySelector(".btn-three");

    slideBtnOne.addEventListener("click", function (evt) {
      evt.preventDefault();
      slideOne.classList.remove("visually-hidden");
      slideBtnOne.classList.add("slide-checked");

      slideTwo.classList.add("visually-hidden");
      slideBtnTwo.classList.remove("slide-checked");

      slideThree.classList.add("visually-hidden");
      slideBtnThree.classList.remove("slide-checked");
    });

    slideBtnTwo.addEventListener("click", function (evt) {
      evt.preventDefault();
      slideOne.classList.add("visually-hidden");
      slideBtnOne.classList.remove("slide-checked");

      slideTwo.classList.remove("visually-hidden");
      slideBtnTwo.classList.add("slide-checked");

      slideThree.classList.add("visually-hidden");
      slideBtnThree.classList.remove("slide-checked");
    });

    slideBtnThree.addEventListener("click", function (evt) {
      evt.preventDefault();
      slideOne.classList.add("visually-hidden");
      slideBtnOne.classList.remove("slide-checked");

      slideTwo.classList.add("visually-hidden");
      slideBtnTwo.classList.remove("slide-checked");

      slideThree.classList.remove("visually-hidden");
      slideBtnThree.classList.add("slide-checked");
    });
