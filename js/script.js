// gsap.timeline({
//   onComplete: myFunction,
//   repeat: 2,
//   repeatDelay: 1,
//   yoyo: true,
// });

function firstS() {
    gsap.from('.left-to-right', {
        scrollTrigger: {
            trigger: '.left-to-right',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
            // scrub: 1,
        },
        x: 400,
        duration: 1,
    });

    gsap.from('.right-to-left', {
        scrollTrigger: {
            trigger: '.right-to-left',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
        },
        x: -400,
        duration: 1,
    });
}
firstS();

function secondS() {
    gsap.from('.skill-right', {
        scrollTrigger: {
            trigger: '.skill-right',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
            // scrub: 1,
        },
        x: 400,
        duration: 1,
    });

    gsap.from('.skill-left', {
        scrollTrigger: {
            trigger: '.skill-left',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
        },
        x: -400,
        duration: 1,
    });
}
secondS();

function thrdS() {
    gsap.from('.thrdS-r', {
        scrollTrigger: {
            trigger: '.thrdS-r',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
            // scrub: 1,
        },
        x: 400,
        duration: 1,
    });

    gsap.from('.thrdS-l', {
        scrollTrigger: {
            trigger: '.thrdS-l',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
            // scrub: 1,
        },
        x: -400,
        duration: 1,
    });
}
thrdS();

function forthS() {
    gsap.from('.forthS-r', {
        scrollTrigger: {
            trigger: '.forthS-r',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
            // scrub: 1,
        },
        x: 400,
        duration: 1,
    });

    gsap.from('.forthS-l', {
        scrollTrigger: {
            trigger: '.forthS-l',
            // markers: true,
            start: 'top bottom',
            toggleActions: 'restart none  none none',
            // scrub: 1,
        },
        x: -400,
        duration: 1,
    });
}
forthS();


gsap.from('.hanuskill', {
    scrollTrigger: {
        trigger: '.hanumanProject',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    y: 300,
    duration: 1,
})

gsap.from('.hanumanProject', {
    scrollTrigger: {
        trigger: '.hanumanProject',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    x: -300,
    duration: 1,
})

gsap.from('.openskill', {
    scrollTrigger: {
        trigger: '.openabstractP',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    x: 300,
    duration: 1,
})

gsap.from('.openabstractP', {
    scrollTrigger: {
        trigger: '.openabstractP',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    y: -300,
    duration: 1,
})

gsap.from('.journalskill', {
    scrollTrigger: {
        trigger: '.journalP',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    x: 300,
    duration: 1,
})

gsap.from('.journalP', {
    scrollTrigger: {
        trigger: '.journalP',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    x: -300,
    duration: 1,
})

gsap.from('.completep', {
    scrollTrigger: {
        trigger: '.completep',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    x: -300,
    duration: 1,
})

gsap.from('.customers', {
    scrollTrigger: {
        trigger: '.completep',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    x: 300,
    duration: 1,
})

gsap.from('.happyc', {
    scrollTrigger: {
        trigger: '.completep',
        start: 'top bottom',
        toggleActions: 'restart none none none',
    },
    y: -300,
    duration: 1,
})