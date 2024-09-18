const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.company-container',
    triggerHook: 'onEnter',
    reverse: false
})
.setTween(
    TweenMax.to('.contadora-img', 1, { y: 50, ease: Power1.easeOut })
)
.addTo(controller);