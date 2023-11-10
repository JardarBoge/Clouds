document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const image = document.querySelector('.image-container img');

    imageContainer.addEventListener('mousemove', function (e) {
        const containerRect = this.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;

        image.style.setProperty('--maskX', x + 'px');
        image.style.setProperty('--maskY', y + 'px');
    });

    imageContainer.addEventListener('mouseleave', function () {
        image.style.removeProperty('--maskX');
        image.style.removeProperty('--maskY');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container2');
    const image = document.querySelector('.image-container2 img');

    imageContainer.addEventListener('mousemove', function (e) {
        const containerRect = this.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;

        image.style.setProperty('--maskX', x + 'px');
        image.style.setProperty('--maskY', y + 'px');
    });

    imageContainer.addEventListener('mouseleave', function () {
        image.style.removeProperty('--maskX');
        image.style.removeProperty('--maskY');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container3');
    const image = document.querySelector('.image-container3 img');

    imageContainer.addEventListener('mousemove', function (e) {
        const containerRect = this.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;

        image.style.setProperty('--maskX', x + 'px');
        image.style.setProperty('--maskY', y + 'px');
    });

    imageContainer.addEventListener('mouseleave', function () {
        image.style.removeProperty('--maskX');
        image.style.removeProperty('--maskY');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container4');
    const image = document.querySelector('.image-container4 img');

    imageContainer.addEventListener('mousemove', function (e) {
        const containerRect = this.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;

        image.style.setProperty('--maskX', x + 'px');
        image.style.setProperty('--maskY', y + 'px');
    });

    imageContainer.addEventListener('mouseleave', function () {
        image.style.removeProperty('--maskX');
        image.style.removeProperty('--maskY');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container5');
    const image = document.querySelector('.image-container5 img');

    imageContainer.addEventListener('mousemove', function (e) {
        const containerRect = this.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;

        image.style.setProperty('--maskX', x + 'px');
        image.style.setProperty('--maskY', y + 'px');
    });

    imageContainer.addEventListener('mouseleave', function () {
        image.style.removeProperty('--maskX');
        image.style.removeProperty('--maskY');
    });
});