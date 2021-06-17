let target = undefined as HTMLDivElement;
/**
 * More efficient code for .hoverable elements getting animated on mouseup + mousedown.
 */
// TODO More efficient code.
// window.addEventListener('mousedown', function (event) {
//     let temp_target = this as HTMLDivElement;
//     console.log(event.target)

//     if(temp_target && temp_target.classList && temp_target.classList.contains("hoverable")) {
//         console.log(temp_target)
//         target = temp_target;
//         target.classList.add('active')
//         event.stopPropagation()
//     }
// }, true)
// window.addEventListener('mouseup', () => {
//     if(target) target.classList.remove('active')
// })

/**
 * Currently used code for .hoverable elements getting animated on mouseup + mousedown.
 */
let hoverables = document.querySelectorAll<HTMLDivElement>('.hoverable');
hoverables.forEach((item) => {
    item.addEventListener('mousedown', (event) => {
        item.classList.add('active');
        let image: HTMLImageElement = item.children[0].children[0] as HTMLImageElement
        image.src = get_random_image();
    });

    item.addEventListener('mouseup', (event) => {
        item.classList.remove('active');
    });
});

/**
 * Generates a url to a pixel art sprite in /public/items
 */
const IMAGE_LEN = 4;
function get_random_image() {
    const random_num = Math.floor(Math.random() * IMAGE_LEN) + 1
    return `./items/${random_num}.png`
}