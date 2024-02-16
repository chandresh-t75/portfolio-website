function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }
  
  function clickhandler(){
	var y=document.querySelectorAll(".navho");
	var z= document.getElementById('myLinks');
     z.style.display="none";
	
  }

 
//   window.addEventListener('load', AOS.refresh);
	



const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop -80; // Adjust this value for better accuracy
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
      // Remove active class from all links
      navLinks.forEach(navLink => navLink.classList.remove("active"));
      
      // Add active class to the corresponding link
      const targetLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (targetLink) {
        targetLink.classList.add("active");
      }
    }
  });
});

// counter


const counters = document.querySelectorAll('.value');
const speed = 200;

const anime=()=>{
	// console.log("ni");
counters.forEach( counter => {
	
   const animate= () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
		// console.log("hi");
     
   }
   
   animate();
});
}
particlesJS("particles-js", {
	"particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#0081c2"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#0081c2"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#eaeaea",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
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
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 40,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.6
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 3
        }
      }
    },
    "retina_detect": true
  });
  


  
  
  /* ---- stats.js config ---- */
  
  // particlesJS.load('particles-js', 'particles.json', function() {
	// console.log('callback - particles.js config loaded');
  // });



  // function sendemail() {
  //   var userid = "3uYfDf-gUvMMCNj63";
  //   emailjs.init(userid);
  //   var thename = document.getElementById('thename').value;
  //   var themail = document.getElementById('themail').value;
  //   var thesub = document.getElementById('thesub').value;
  //   var themsg = document.getElementById('themsg').value;
  //   var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  //   if (thename == "") {
  //     alert("Please Enter Name");
  //   }
  //   else if (themail == "" || themail.match(!validmail)) {
  //     alert("Please Enter Valid Email");
  //   }
  //   else if (thesub == "") {
  //     alert("Please Enter Subject");
  //   }

  //   else if (themsg == "") {
  //     alert("Please Enter Message");
  //   }
    
  //   else {
  //     var contactdetail = {
  //       from_email:themail,
  //       message:themsg,
  //       subject:thesub,
  //       from_name:thename
  //     };

  //     // emailjs.send("service_gu6bf0f","template_s9biizw",{
  //     //   from_email: themail,
  //     //   message: themsg,
  //     //   subject:thesub,
  //     //   from_name:thename
  //     //   });
      
  //     emailjs.send("service_gu6bf0f", "template_s9biizw", contactdetail).then(function (res) {
  //       alert("Email Sent Successfully");
  //       console.log("hii");
  //     },
  //       reason=> {
  //         alert("Error Occur");
  //       })
  //   }
  // }


const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

  

   const serviceID = 'service_gu6bf0f';
   const templateID = 'template_s9biizw';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      
      alert('Sent Successfully!');
       
      // document.querySelectorAll('.formfield').value=" ";
      document.getElementById("contact-form").reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// var btnClear = document.querySelector('#button');
// var inputs = document.querySelectorAll('.formfield');
 
// btnClear.addEventListener('click', () => {
//     inputs.forEach(input =>  input.value = '');
// });