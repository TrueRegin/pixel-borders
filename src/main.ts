/**
 * Handles adding the initial images to the screen
 * TODO (just kidding it won't happen because it's unimportant)
 */
const INITIAL_AMT = 5

/**
 * Handles adding items to the screen.
 * Also adds press down + up animations to the add button.
 */
const $ItemContainer = document.querySelector('div#container-fader') as HTMLDivElement;
const $AddButton = document.querySelector('div#add-item') as HTMLDivElement;
$AddButton.addEventListener('click', () => {
    let item = _gen_item();
    let len = $ItemContainer.childNodes.length
    let children = $ItemContainer.appendChild(item)
})

$AddButton.addEventListener('mousedown', () => {
    $AddButton.classList.add('active')
})

document.body.addEventListener('mouseup', () => {
    $AddButton.classList.remove('active')
})

$AddButton.addEventListener('mouseup', () => {
    document.body.classList.remove('active')
    setTimeout(() => {
        document.body.classList.add('active')
    }, 0);
})

/**
 * Creates an HTML item to be added to the screen.
 */
function _gen_item() {
    const image = document.createElement('img')
    image.src = get_random_image()
    const pixelFrame = document.createElement('div')
    pixelFrame.classList.add('pixel-frame')
    const frameContainer = document.createElement('div')
    frameContainer.classList.add('frame-container')
    const hoverable = document.createElement('div')
    hoverable.classList.add('hoverable', 'item')

    hoverable.appendChild(frameContainer)
    frameContainer.appendChild(pixelFrame)
    pixelFrame.appendChild(image);
    _initialize_item(hoverable);
    return hoverable;
}

/**
 * Currently used code for .hoverable elements getting animated on mouseup + mousedown.
 */
let hoverables = document.querySelectorAll<HTMLDivElement>('.hoverable.item');
hoverables.forEach((item) => {
    _initialize_item(item);
});
function _initialize_item(item: HTMLDivElement) {
    item.addEventListener('mousedown', (event) => {
        item.classList.add('active');
        let image: HTMLImageElement = item.children[0]
            .children[0].children[0] as HTMLImageElement;
        image.src = get_random_image(image.src);
    });

    item.addEventListener('mouseup', (event) => {
        item.classList.remove('active');
    });
}

/**
 * Generates a url to a pixel art sprite in /public/items
 * This method makes sure we don't repeat images (hence why we accept the old iamge url of an image)
 */
const IMAGE_LEN = 7;
function get_random_image(old_src: string = "") {
    let new_src = old_src
    while(old_src.includes(new_src)) {
        const random_num = Math.floor(Math.random() * IMAGE_LEN) + 1;
        new_src = get_image(random_num)
    }
    return new_src;
}
function get_image(i: number) {
    return `/items/${i}.png`;
}
