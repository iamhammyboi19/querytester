"use strict";

import {
  updateUserData,
  updateUserPassword,
  logoutUser,
} from "../auths/allaxios";

const header = document.querySelector(".container");
const hiddenSection = document.querySelector(".first-sec");
const imgOptionsCon = document.querySelector(".options-con");
const hiddenOptionsp = document.querySelectorAll(".options-p");
const options = document.querySelectorAll(".options");
const secFourImgs = document.querySelectorAll(".imgsec-4");
const onlineResumeBuilder = document.querySelector(".sec-2-online-resume");
const twoPercentPeople = document.querySelector(".sec-2-word");
const lastWordSecTwo = document.querySelector(".words");
const secondSec = document.querySelector(".second-sec");
const headerNav = document.querySelector(".header-nav");

// login signup account btn
const homeaccountlinkbtn = document.querySelector(".accountlink");
const homeloginbtn = document.querySelector(".loginlink");
const homesignupbtn = document.querySelector(".signup-li");
const mqaccountlink = document.querySelector(".accountlink2");
const mqalogin = document.querySelector(".loginlink2");
const mqasignup = document.querySelector(".signup-li2");

// update user data section
const updateuserdataForm = document.querySelector(".updateuserdataForm");

updateuserdataForm?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const updatedaccFullname = document.querySelector(
    ".updatedaccFullname"
  ).value;
  const updatedaccEmail = document.querySelector(".updatedaccEmail").value;
  const updatedaccUsername = document.querySelector(
    ".updatedaccUsername"
  ).value;

  await updateUserData(updatedaccFullname, updatedaccEmail, updatedaccUsername);
});

// update user password section
const updateuserpasswordForm = document.querySelector(
  ".updateuserpasswordForm"
);

updateuserpasswordForm?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const updatedaccCurrpass = document.querySelector(
    ".updatedaccCurrpass"
  ).value;
  const updatedaccNewpass = document.querySelector(".updatedaccNewpass").value;
  const updatedaccConfirmNewpass = document.querySelector(
    ".updatedaccConfirmNewpass"
  ).value;

  await updateUserPassword(
    updatedaccCurrpass,
    updatedaccNewpass,
    updatedaccConfirmNewpass
  );
});
// updateUserSaveBtn updateuserdataForm

// signup login route
homeaccountlinkbtn?.addEventListener("click", function (e) {
  const href = e.target.getAttribute("href");
  window.location.assign(href);
});

homeloginbtn?.addEventListener("click", function (e) {
  const href = e.target.getAttribute("href");
  window.location.assign(href);
});

homesignupbtn?.addEventListener("click", function (e) {
  const href = e.target.getAttribute("href");
  window.location.assign(href);
});

const gotopage = function (e) {
  const href = e.target.closest(".listlinksandicon").getAttribute("href");
  window.location.assign(href);
};

mqaccountlink?.addEventListener("click", gotopage);
mqalogin?.addEventListener("click", gotopage);
mqasignup?.addEventListener("click", gotopage);

// resumeIconLogo
const resumeIconLogo = document.querySelector(".first-nav-li");
resumeIconLogo?.addEventListener("click", function (e) {
  if (e.target.closest(".first-nav-li")) {
    window.location.assign("/");
  }
});

// showaccount
const showaccount = document.querySelector(".showaccount");
showaccount?.addEventListener("click", function (e) {
  if (e.target.closest(".showaccount")) {
    window.location.assign("/account");
  }
});

// logout
const logout = document.querySelector(".logout");
logout?.addEventListener("click", async function (e) {
  try {
    console.log("logout");
    await logoutUser();
  } catch (err) {
    console.log("");
  }
});

//----------------- load first header text --------------------------- //
let onlineResumeText = "ONLINE RESUME BUILDER ";

const mystr = "ONLINE RESUME BUILDER ";

let textlength = 0;
let textLengthForRemoval = onlineResumeText.length;

const loadText = function () {
  if (onlineResumeBuilder) {
    onlineResumeBuilder.innerHTML =
      onlineResumeText.substring(0, textlength++) + "<span>&nbsp;</span>";

    if (
      textlength++ <= onlineResumeText.length &&
      onlineResumeBuilder.textContent.length !== 0
    )
      setTimeout(loadText, 400);

    if (textlength === onlineResumeText.length) {
      const thisInterval = setInterval(() => {
        onlineResumeBuilder.innerHTML =
          onlineResumeText.slice(0, textlength--) + "<span>&nbsp;</span>";

        if (textlength === 0) {
          clearInterval(thisInterval);
          setTimeout(loadText, 400);
        }
      }, 400);
    }
  }
};
loadText();

//----------------- observer to make sticky header --------------------------- //

// const callback = function (entry) {
//   const [event] = entry;
//   if (event.isIntersecting === false) headerNav?.classList.add("sticky");
//   else headerNav?.classList.remove("sticky");
// };

// let theOptions = {
//   root: null,
//   threshold: 0.0,
// };
// const observer = new IntersectionObserver(callback, theOptions);

// if (header) {
//   observer.observe(header);
// }

const showHiddenSection = function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".show-first-sec");
  if (!clicked) return;
  hiddenSection?.classList.toggle("hidden");
};

const hidHiddenSection = function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".show-first-sec");
  if (!clicked) return;
  hiddenSection?.classList.add("hidden");
};

const switchImgs = function (event) {
  const othersClicked = event.target.closest(".options");

  if (!othersClicked) return;

  const dataSet = othersClicked.getAttribute("data-set");

  [...hiddenOptionsp].forEach((e) => {
    e.classList.add("hidden-p");
  });

  [...options].forEach((e) => {
    e.classList.add("options-background");
    e.classList.remove("options-background-2");
  });

  [...secFourImgs].forEach((e) => e.classList.add("hid-img"));

  document.querySelector(`.sec-4-img-${dataSet}`).classList.remove("hid-img");

  othersClicked.classList.remove("options-background");
  othersClicked.classList.add("options-background-2");
  othersClicked.querySelector(".options-p").classList.remove("hidden-p");
};

//----------- call functions ---------------------------- //
headerNav?.addEventListener("click", showHiddenSection);
// headerNav.addEventListener("click", hidHiddenSection);
// hiddenSection.addEventListener("mouseover", showHiddenSection);

imgOptionsCon?.addEventListener("click", switchImgs);

// hide and show nav bar
const menuicon = document.querySelector(".menu-opt");
const hidemenuicon = document.querySelector(".hide-menu-opt");

function disableScroll() {
  window.scroll(0, 0);
}

menuicon?.addEventListener("click", function (e) {
  header.classList.add("showasidenav");
  if (header.classList.contains("showasidenav")) {
    // window.addEventListener("scroll", disableScroll);
    // window.scroll(0, 0);
  }
  // document.body.style.position = "fixed";
});

hidemenuicon?.addEventListener("click", function (e) {
  header.classList.remove("showasidenav");
  // document.body.style.position = "static";
});
// hide-menu-opt
