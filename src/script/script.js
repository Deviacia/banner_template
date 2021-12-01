// Animation
    var loops = 0;
    var tl = new TimelineMax({ repeat: -1, delay: 0 })

    // 1 key
        .from('.people', 0.75, { opacity: '1', onComplete: function () { if (loops >= 2) { tl.pause() } else { loops++ }} })
        .from('.t1', 0.75, { x: -900 }, '-=0.75')
        .from('.cta', 0.75, { opacity: "0" }, '-=1.00')
        .to('.btn', 0.25,{ opacity: '0' }, '+=4.00')
        .to('.people', 0.25, { opacity: '0' }, '-=0.5')
        .to('.t1', 0.25, { opacity: '0' }, '-=0.5')
        .to('.cta', 0.25, { opacity: "0" }, '-=0.5')
    // 2 key

        .from('.cards', 0.75, { x: 500 })
        .from('.t2', 0.75, { x: 1000 })
        .to('.t2', 0.75, { x: -1000, opacity: '0' }, '+=3.00')
        .to('.cards', 0.55, { x: 500, ease: "slow(0.7, 0.7, false)"})