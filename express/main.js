
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

    .to(".express", 3), {
    opacity: 0,
    y: 10
  }

}

// Run fetch and animation in sequence
animationTimeline();