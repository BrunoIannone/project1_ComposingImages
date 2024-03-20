// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.

// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.

function composite(bgImg, fgImg, fgOpac, fgPos) {
    
    for (var y = fgPos.y; y < fgImg.height + fgPos.y; y++) {
        for (var x = fgPos.x; x < fgImg.width + fgPos.x; x++) {

            if (x >= bgImg.width || y >= bgImg.height || (x < 0 && y >= 0)) { // Rough border check for ignoring foreground pixels outside the background image.
                
                var bgIndex = (y) * (bgImg.width) * 4 + (x) * 4; // computation of background index

                //Keep the background pixels unchanged
                bgImg.data[bgIndex + 0] = bgImg.data[bgIndex];
                bgImg.data[bgIndex + 1] = bgImg.data[bgIndex + 1];
                bgImg.data[bgIndex + 2] = bgImg.data[bgIndex + 2];
                bgImg.data[bgIndex + 3] = bgImg.data[bgIndex + 3];
                
                

            }
            else {
                
                var fgIndex = (y - fgPos.y) * (fgImg.width) * 4 + (x - fgPos.x) * 4; // computation of foreground index 
                var bgIndex = (y) * (bgImg.width) * 4 + (x) * 4;// computation of background index
                
                var front_scaled_alpha = (fgImg.data[fgIndex + 3] * fgOpac) / 255; //Normalization of the alpha value


                // Application of Alpha Blending formula 
                bgImg.data[bgIndex + 0] = front_scaled_alpha * fgImg.data[fgIndex] + (1 - front_scaled_alpha) * bgImg.data[bgIndex];
                bgImg.data[bgIndex + 1] = front_scaled_alpha * fgImg.data[fgIndex + 1] + (1 - front_scaled_alpha) * bgImg.data[bgIndex + 1];
                bgImg.data[bgIndex + 2] = front_scaled_alpha * fgImg.data[fgIndex + 2] + (1 - front_scaled_alpha) * bgImg.data[bgIndex + 2];
                bgImg.data[bgIndex + 3] = front_scaled_alpha * fgImg.data[fgIndex + 3] + (1 - front_scaled_alpha) * bgImg.data[bgIndex + 3];



            }

        }
    }
    return
}

