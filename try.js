const canvas = document.querySelector('#canvas');

if (canvas.getContext) {

    // rectangle's width and height
    const width = 150,
        height = 20;

    // canvas center X and Y
    const centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    const ctx = canvas.getContext('2d');

    // a red rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(centerX, centerY, width, height);

    // move the origin to the canvas' center
    ctx.translate(centerX, centerY);

    // add 45 degrees rotation
    ctx.rotate(45 * Math.PI / 180);

    // draw the second rectangle
    ctx.fillStyle = 'rgba(0,0,255,0.5)';
    ctx.fillRect(0, 0, width, height);

}