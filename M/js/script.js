/*gsap.to('#textone', 1, {y: 450, delay: 1});*/

/*內文1*/

gsap.from("#textone", {
    scrollTrigger: "#one", // start the animation when ".box" enters the viewport (once)
    x: -1000,
    duration: 2

  });

  gsap.from("#onephoto", {
    scrollTrigger: "#one", // start the animation when ".box" enters the viewport (once)
    x: 1000,
    duration: 2
  });


/*內文2*/

gsap.from("#twophoto", {
    scrollTrigger: "#two", // start the animation when ".box" enters the viewport (once)
    x: -1000,
    duration: 2
  });

  gsap.from("#texttwo", {
    scrollTrigger: "#two", // start the animation when ".box" enters the viewport (once)
    x: 1000,
    duration: 2
  });


  /*內文3*/

  gsap.from("#threephoto", {
    scrollTrigger: "#three", // start the animation when ".box" enters the viewport (once)
    x: -1000,
    duration: 3
  });

  gsap.from("#textthree", {
    scrollTrigger: "#three", // start the animation when ".box" enters the viewport (once)
    x: 1000,
    duration: 3
  });


  gsap.to("#bigname", {
    duration: 8,
    text: {
      value: "Welcome to <br>方島R角 RANGLE",
      newClass: "class2",
      delimiter: "",
    },
  });


  /*最上方*/

 