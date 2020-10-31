let images = [
    '../img/P_Charge3_Lilac.png',
    '../img/P_HR_White.png',
    '../img/P_HR_Black.png',
    '../img/P_Versa_Pink.png',
];
let num = 0;
function next(){
    let slider = document.querySelector('.slider_img');
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}
function prev(){
    let slider = document.querySelector('.slider_img');
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];

}