
// Animation Timeline
const animationTimeline = () => {
  const tl = new TimelineMax();
  tl
    .to(".pic", {
      opacity: 1,
      y: 10,
      rotation: 360,
      duration: 3,
    })

    .to(".hello", 3, {
      opacity: 0,
      y: 10,
      duration: 3,
    })


}

// Run fetch and animation in sequence
animationTimeline();