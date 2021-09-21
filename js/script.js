'use strict'

window.onload = function() {
    const paralax = document.querySelector('.header');

    if (paralax) {
        const bird = document.querySelector('.bird');
        const threeBird = document.querySelector('.three_bird');
        const grayCould = document.querySelector('.gray_could');
        const opacityCould  = document.querySelector('.opacity_could');
        const could3 = document.querySelector('.could_3');
        const moon = document.querySelector('.moon');
        const plain = document.querySelector('.plain');
        const man = document.querySelector('.man');
        const woman = document.querySelector('.woman');
        const navLink = document.querySelector('.nav');
        const headerBg = document.querySelector('.header_bg')

        const birdFor = 1;
        const threeBirdFor  = 7;
        const grayCouldFor = 8;
        const opacityCouldFor = 10;
        const could3For = 15;
        const moonFor = 8;
        const plainFor = 3;
        const manFor = 60;
        const womanFor = 30;
        const navLinkFor = 100;
        const headerBgFor = 20;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParalaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);


            bird.style.cssText = `transform: translate(${positionX / birdFor}%, ${positionY / birdFor}%)`;
            threeBird.style.cssText = `transform: translate(${positionX / threeBirdFor}%, ${positionY / threeBirdFor}%)`;
            grayCould.style.cssText = `transform: translate(${positionX / grayCouldFor}%, ${positionY / grayCouldFor}%)`;
            opacityCould.style.cssText = `transform: translate(${positionX / opacityCouldFor}%, ${positionY / opacityCouldFor}%)`;
            man.style.cssText = `transform: translate(${positionX / manFor}%, ${positionY / manFor}%)`;
            woman.style.cssText = `transform: translate(${positionX / womanFor}%, ${positionY / womanFor}%)`;
            could3.style.cssText = `transform: translate(${positionX / could3For}%, ${positionY / could3For}%)`;
            moon.style.cssText = `transform: translate(${positionX / moonFor}%, ${positionY / moonFor}%)`;
            plain.style.cssText = `transform: translate(${positionX / plainFor}%, ${positionY / plainFor}%)`;
            headerBg.style.cssText = `transform: translate(${positionX / headerBgFor}%, ${positionY / headerBgFor}%)`;
            navLink.style.cssText = `transform: translate(${positionX / navLinkFor}%, ${positionY / navLinkFor}%)`;
            

            requestAnimationFrame(setMouseParalaxStyle);
        }
        setMouseParalaxStyle();

        paralax.addEventListener('mousemove', function(e) {
            const paralaxWidth = paralax.offsetWidth;
            const paralaxHeight = paralax.offsetHeight;

            const coordX = e.pageX - paralaxWidth / 2;
            const coordY = e.pageY - paralaxHeight / 2;

            coordXprocent = coordX / paralaxWidth * 100;
            coordYprocent = coordY / paralaxHeight * 100;
        });

    }

}
