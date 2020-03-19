(window.webpackJsonp = window.webpackJsonp || []).push([
  [2], {
    /***/
    IhKj:
      /***/
      function (e, t, o) {
        "use strict";
        o.r(t);
        /* harmony import */
        o("WMMs");
        /* harmony import */
        var n = o("+Gof");
        window.addEventListener("scroll", function () {
          window.scrollY >= r.contact.offsetTop - 1 ? r.scroller.style.display = "block" : r.scroller.style.display = ""
        }); // currrent language setting to localStorage
        var a = window.location.pathname;
        "/" === a ? (localStorage.setItem("lang", "aze"), document.querySelector("#aze").setAttribute("checked", !0)) : "/en/" !== a && "/en" !== a || (localStorage.setItem("lang", "en"), document.querySelector("#en").setAttribute("checked", !0));
        var r = {
            links: document.querySelectorAll(".item"),
            hamburgerBtn: document.querySelector(".hamburger-btn"),
            headerNav: document.querySelector(".header nav"),
            contact: document.querySelector("#contact"),
            scroller: document.querySelector(".back-to-top-wrapper")
          }
       // Reveal animations
        document.body.classList.contains("has-animations") && (window.sr = Object(n.a)()).reveal(".courses-animation", {
          duration: 1e3,
          distance: "80px",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          interval: 200,
          origin: "bottom",
          viewFactor: .2
        });

        function l(e, t) {
          e.preventDefault();
          var o = this.firstChild.getAttribute("data-id");
          t = document.getElementById(o).offsetTop, window.scroll({
            top: t,
            left: 0,
            behavior: "smooth"
          }), r.headerNav.classList.contains("menu-visible") && (r.headerNav.classList.remove("menu-visible"), r.hamburgerBtn.classList.remove("active"))
        }
        for (var s = 0; s < r.links.length; s++) r.links[s].addEventListener("click", l);
        r.hamburgerBtn.addEventListener("click", function () {
          r.headerNav.classList.toggle("menu-visible"), this.classList.toggle("active"), r.links.forEach(function (e) {
            e.classList.toggle("make-me-animate")
          })
        }), r.scroller.addEventListener("click", function (e) {
            e.preventDefault(), window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth"
            })
          }
          /***/
        )
      },
    /***/
    WMMs:
      /***/
      function (e, t, o) {
        // extracted by mini-css-extract-plugin
        /***/
      }
  },
  [
    ["IhKj", 0, 1]
  ]
]);


document.querySelector('.dropdown > .dropdown-el').addEventListener('click', dropdownTrigger)
console.log(document.querySelector('.dropdown > .dropdown-el'))
function dropdownTrigger(e) {
  console.log('e')
  e.preventDefault();
  e.stopPropagation();
  this.classList.toggle("expanded");
  let selectedLang = document.querySelector(`#${e.target.getAttribute('for')}`);
  let lang = e.target.getAttribute('for');
  let inputs = document.querySelectorAll("input[type='radio']");
  inputs.forEach(element => {
    element.removeAttribute("checked")
  });
  selectedLang.setAttribute("checked", true);
  localStorage.setItem('lang', lang);
  if(!this.classList.contains('expanded')) {
    if(lang === 'aze') {
      window.location.href = '/'
    }
    else if(lang === 'en') {
      window.location.href = '/en/'
    }
  }

}



let elements = {
  headerHeight: document.querySelector('.header').clientHeight
}

let navigation = {
  main: document.querySelector('[data-id="home"]'),
  about: document.querySelector('[data-id="about"]'),
  courses: document.querySelector('[data-id="courses"]'),
  instructors: document.querySelector('[data-id="instructors"]'),
  contact: document.querySelector('[data-id="contact"]'),
}

// define navigation state
let about = document.querySelector('#about').offsetTop - elements.headerHeight;
let courses = document.querySelector('#courses').offsetTop - elements.headerHeight;
let instructors = document.querySelector('#instructors').offsetTop - elements.headerHeight - 5;
let contact = document.querySelector('#contact').offsetTop - elements.headerHeight;
let footer = document.querySelector('#footer').offsetTop - elements.headerHeight;
let navArray = document.querySelectorAll('.nav-menu--item > a');

checkScrollState();
window.addEventListener('scroll', checkScrollState)

function checkScrollState() {
  if (window.scrollY < about && window.scrollY > 0) {
    navArray.forEach(nav => {
      nav.classList.remove('active-nav');
    });
    navigation.main.classList.add('active-nav');
  } else if (window.scrollY < courses && about < window.scrollY) {
    navArray.forEach(nav => {
      nav.classList.remove('active-nav');
      2
    });
    navigation.about.classList.add('active-nav');
  } else if (window.scrollY < instructors && window.scrollY > about) {
    navArray.forEach(nav => {
      nav.classList.remove('active-nav');
    });
    navigation.courses.classList.add('active-nav');
  } else if (window.scrollY < contact && window.scrollY > courses) {
    navArray.forEach(nav => {
      nav.classList.remove('active-nav');
    });
    navigation.instructors.classList.add('active-nav');
  } else if (window.scrollY < contact && window.scrollY > instructors) {
    navArray.forEach(nav => {
      nav.classList.remove('active-nav');
    });
    navigation.contact.classList.add('active-nav');
  } else if (window.scrollY > contact && window.scrollY < footer) {

    navArray.forEach(nav => {
      nav.classList.remove('active-nav');
    });
    navigation.contact.classList.add('active-nav');
  }
}
var map, popup, Popup;
/** Initializes the map and the custom popup. */
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.406053,
      lng: 49.848459
    },
    zoom: 15,
  });

  Popup = createPopupClass();
  popup = new Popup(
    new google.maps.LatLng(40.406053, 49.848459),
    document.getElementById('content'));
  popup.setMap(map);
/**
 * Returns the Popup class.
 *
 * Unfortunately, the Popup class can only be defined after
 * google.maps.OverlayView is defined, when the Maps API is loaded.
 * This function should be called by initMap.
 */
function createPopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content The bubble div.
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  function Popup(position, content) {
    this.position = position;

    content.classList.add('popup-bubble');

    // This zero-height div is positioned at the bottom of the bubble.
    var bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('popup-bubble-anchor');
    bubbleAnchor.appendChild(content);

    // This zero-height div is positioned at the bottom of the tip.
    this.containerDiv = document.createElement('div');
    this.containerDiv.classList.add('popup-container');
    this.containerDiv.appendChild(bubbleAnchor);

    // Optionally stop clicks, etc., from bubbling up to the map.
    google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
  }
  // ES5 magic to extend google.maps.OverlayView.
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.containerDiv);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.containerDiv.parentElement) {
      this.containerDiv.parentElement.removeChild(this.containerDiv);
    }
  };

  /** Called each frame when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

    // Hide the popup when it is far out of view.
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';

    if (display === 'block') {
      this.containerDiv.style.left = divPosition.x + 'px';
      this.containerDiv.style.top = divPosition.y + 'px';
    }
    if (this.containerDiv.style.display !== display) {
      this.containerDiv.style.display = display;
    }
  };

  return Popup;

  
}
