# Pixel Borders
Check out a working demo at [https://pixel-borders.netlify.app/](https://pixel-borders.netlify.app/)
I initally made this site to finally learn how to use CSS borders, something I'd been wanting to learn for a while that was rather intimidating.

Recently I learned pixel art and realized I misewell learn how to use css borders with pixel art borders.

Thus, the main premise of the site is to show off some 16x16 pixel art sprites I made, the rest of the stuff is just cosmetic.

I definitely made this responsibly.

## Notable Features
1. Sprite tiles with a custom border.
2. Animated checkerboard background.
3. Staggering sprites on page load.

## Feature Implementation (Overview)
1. For the sprite tiles I used the `border-image` property in CSS.
2. For the animated checkerboard background I animated the `background-position property` to move the same size in pixels as the background. You can use percents but I used pixel values since that was causing some stuttering with the effect.
3. For the staggering sprites I ran a for loop for each image I had and used setTimeout with a varying timeout amount.