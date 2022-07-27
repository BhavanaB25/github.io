window.onscroll = function() {myFunction1(),myFunction2(),myFunction3(),myFunction4(),myFunction5()};
            
function myFunction1() {
  if (document.documentElement.scrollTop > 800) {
    document.getElementById("Project-head").className = "slideUp2";
  }
}

function myFunction2() {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("Aboutme-head").className = "slideUp2";
  }
}
function myFunction3() {
  if (document.documentElement.scrollTop > 1500) {
    document.getElementById("Skill-head").className = "slideUp2";
  }
}
function myFunction4() {
  if (document.documentElement.scrollTop > 2000) {
    document.getElementById("Achievement-head").className = "slideUp2";
  }
}
function myFunction5() {
  if (document.documentElement.scrollTop > 3300) {
    document.getElementById("Contact-head").className = "slideUp2";
  }
}

