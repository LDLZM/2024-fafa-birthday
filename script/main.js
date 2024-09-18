
// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  //const gift = document.querySelector('.gift')[0];
  var d = new Date();

  const month = d.getMonth() + 1;
  const day = d.getDate();
  console.warn(day == 18);
  if (day == 18 && month == 9) {
    // 获取DIV元素的引用

    // 将DIV元素设置为不可见
    //div.style.display = "none";

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span`;

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    };

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    };

    document.body.style.backgroundColor = 'white';
    const tl = new TimelineMax();
    //gift.addEventListener('click', (e) => {
    //  tl.play()
    //})
    tl
      // .to(".relative"), 0.1, {
      //   duration: 0.1,
      //   autoAlpha: 0

      // }
      .to(".relative", 3, {
        opacity: 0,
        y: 10

      })

      .to(".container", 0.1, {
        visibility: "visible"
      })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10
      })
      .to(
        ".one",
        0.7,
        {
          opacity: 0,
          y: 10
        },
        "+=2.5"
      )
      .to(
        ".two",
        0.7,
        {
          opacity: 0,
          y: 10
        },
        "-=1"
      )
      .from(".three", 0.7, {
        opacity: 0,
        y: 10
        // scale: 0.7
      })
      .to(
        ".three",
        0.7,
        {
          opacity: 0,
          y: 10
        },
        "+=2"
      )
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0
      })
      .staggerTo(
        ".hbd-chatbox span",
        0.5,
        {
          visibility: "visible"
        },
        0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)"
      })
      .to(
        ".four",
        0.5,
        {
          scale: 0.2,
          opacity: 0,
          y: -150
        },
        "+=0.7"
      )
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff"
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
      .from(
        ".idea-5",
        0.7,
        {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0
        },
        "+=0.5"
      )
      .to(
        ".idea-5 .smiley",
        0.7,
        {
          rotation: 90,
          x: 8
        },
        "+=0.4"
      )
      .to(
        ".idea-5",
        0.7,
        {
          scale: 0.2,
          opacity: 0
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeOut
        },
        0.2,
        "+=1"
      )

      .staggerFromTo(
        ".baloons img",
        2.5,
        {
          opacity: 0.9,
          y: 1400
        },
        {
          opacity: 1,
          y: -1000
        },
        0.2
      )
      .from(
        ".lydia-dp",
        0.5,
        {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45
        },
        "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7,
        {
          opacity: 0,
          y: -50,
          // scale: 0.3,
          rotation: 150,
          skewX: "30deg",
          ease: Elastic.easeOut.config(1, 0.5)
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        0.7,
        {
          scale: 1.4,
          rotationY: 150
        },
        {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut
        },
        0.1,
        "party"
      )
      .from(
        ".wish h5",
        0.5,
        {
          opacity: 0,
          y: 10,
          skewX: "-15deg"
        },
        "party"
      )
      .staggerTo(
        ".eight svg",
        1.5,
        {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 1,
          repeatDelay: 1.4
        },
        0.3
      )
      .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1"
      })
      .to(".card", {
        duration: 1,
        autoAlpha: 1
      })
      .to(".bottom-layer", {
        duration: 1,
        autoAlpha: 1
      })
      .to(".middle-layer", {
        duration: 1,
        autoAlpha: 1
      })
      .to(".top-layer", {
        duration: 1,
        autoAlpha: 1
      })
      .to(".candle", {
        duration: 1,
        autoAlpha: 1
      })


    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  } else {
    console.warn(123)
  }
};


// Run fetch and animation in sequence
animationTimeline();