// Animation Timeline
const animationTimeline = () => {

  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 15, ease: Power2.easeOut }, 0)
    .from(".two", 0.5, { opacity: 0, y: 12, ease: Power2.easeOut }, "-=0.3")

    .to(".one", 0.6, { opacity: 0, y: 15, ease: Power2.easeIn }, "+=2.3")
    .to(".two", 0.6, { opacity: 0, y: 12, ease: Power2.easeIn }, "-=0.8")

    .from(".three", 0.7, { opacity: 0, y: 15, ease: Power2.easeOut })
    .to(".three", 0.6, { opacity: 0, y: 15, ease: Power2.easeIn }, "+=1.8")

    .from(".four", 0.7, { scale: 0.2, opacity: 0, ease: Back.easeOut })

    .staggerTo(".hbd-chatbox span", 0.4, { visibility: "visible", ease: Power2.easeOut }, 0.04)

    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -120, ease: Power2.easeIn }, "+=0.5")

    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-5", 0.7, {
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      opacity: 0,
    })
    .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=0.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")

    .staggerFrom(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: Expo.easeOut,
    }, 0.2)

    .staggerTo(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: -15,
      ease: Expo.easeOut,
    }, 0.2, "+=1")

    // фото
    .from(".girl-dp", 0.7, {
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45,
    })

    .from(".wish", 0.7, { opacity: 0, y: 30 }, "-=0.3")

    // шары
    .add(function () {
      const baloons = document.querySelectorAll(".baloons img");
      TweenMax.staggerFromTo(
        baloons,
        4.2,
        { y: 700, opacity: 0.6 },
        { 
          y: -window.innerHeight - 120, 
          opacity: 1, 
          ease: Power1.easeInOut,
          rotation: Math.random() * 20 - 10
        },
        0.15
      );
    })

    .from(".wish-hbd span", 0.6, {
      opacity: 0,
      y: -40,
      rotation: 120,
      skewX: "25deg",
      ease: Elastic.easeOut.config(1, 0.5),
    }, 0.08)

    .from(".wish h5", 0.5, {
      opacity: 0,
      y: 10,
      skewX: "-15deg",
    });

  document.getElementById("replay").addEventListener("click", () => {
    tl.restart();
  });
};

// запуск
fetch("customize.json")
  .then((data) => data.json())
  .then(() => animationTimeline());
