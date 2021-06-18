/**
 * Handles adding the initial "N" images to the screen
 */
const TOTAL_IMAGES = 7;
const WAIT_AMT = 90 // Stagger amount in ms
const STAGGER_AMT = 27 // Stagger amount in ms
for(let i = 0; i <  TOTAL_IMAGES; i++) {
    let item = _gen_item(i + 1);
    setTimeout(() => {
        $ItemContainer.append(item);
    }, WAIT_AMT + i * STAGGER_AMT);
}

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
function _gen_item(i = -1) {
    const image = document.createElement('img')
    if(i === -1) image.src = get_random_image()
    else image.src = get_image(i);
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
function get_random_image(old_src: string = "") {
    let new_src = old_src
    while(old_src.includes(new_src)) {
        const random_num = Math.floor(Math.random() * TOTAL_IMAGES) + 1;
        new_src = get_image(random_num)
    }
    return new_src;
}
function get_image(i: number) {
    return `/items/${i}.png`;
}
