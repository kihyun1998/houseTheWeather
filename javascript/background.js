const images=[
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const choseImage = images[Math.floor(Math.random() * images.length)];
const img = document.createElement("img");
img.className='image'

img.src=`./background/${choseImage}`;
document.body.appendChild(img);
