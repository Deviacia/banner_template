const loop = 1;
const timeline = gsap.timeline({ repeat: loop, delay: 0 })

// const onComplete=(loop)=>{
//     if (loop >= 2) {
//         timeline.pause();
//         console.log(loop)
//     } else {
//         for (let i = 0; i <= loop; i++) {
//             console.log(i)
//             break;
//         }
//     }
// }

timeline.from('.button', {duration: 2.0, x: -400});