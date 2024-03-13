// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.

// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.

function composite(bgImg, fgImg, fgOpac,fgPos) {
    for (var y = 0  ; y < fgImg.height; y++) {
        for (var x = 0; x < fgImg.width; x++) {
            var fgIndex = y * fgImg.width * 4 + x * 4;
            var bgIndex = y * bgImg.width * 4 + x * 4;

            var front_scaled_alpha = (fgImg.data[fgIndex + 3] * fgOpac)/255;

            bgImg.data[bgIndex + 0] = front_scaled_alpha * fgImg.data[fgIndex] + (1 - front_scaled_alpha) * bgImg.data[bgIndex];
            bgImg.data[bgIndex + 1] = front_scaled_alpha * fgImg.data[fgIndex + 1] + (1 - front_scaled_alpha) * bgImg.data[bgIndex + 1];
            bgImg.data[bgIndex + 2] = front_scaled_alpha * fgImg.data[fgIndex + 2] + (1 - front_scaled_alpha) * bgImg.data[bgIndex + 2];
            bgImg.data[bgIndex + 3] = front_scaled_alpha * fgImg.data[fgIndex + 3] + (1 - front_scaled_alpha) * bgImg.data[bgIndex + 3];
        }
    }
}

