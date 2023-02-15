// window.onresize = fixHeight;
// window.onload = fixHeight;

// function fixHeight() {
//     var h = document.getElementById('text3d-teaser').style.height; /* change this */
//     document.getElementById('layer-teaser').style.height = h*1.2;
// }
function changecaption(mathod) {
    document.getElementById('comparison-caption').innerHTML = method_names[mathod];
    document.getElementById('comparison-caption-our').innerHTML = method_names[mathod+1];
}

/* Application 3 */

let source_options = [
    'swan',
    'horse',
    'cat',
    'burger'
];

let method_options = [
    'source',
    'text2live',
    'base',
    'FM'
];

let method_names = [
    'Latent NeRF',
    'Latent NeRF + Ours',
    'Jacobian NeRF',
    'Jacobian NeRF + Ours'
];

var selected_source = 'swan';
var selected_method = 'text2live';
var img1_path = '';
var img2_path = '';

var prev_img1_path = 'none';
var prev_img2_path = 'none';

function loadImage(is_end) {
    var img1 = document.getElementById('image-player1');
    var img2 = document.getElementById('image-player2');
    
    var width = document.getElementById('container').clientWidth;
    var height = width / 768 * 432;
    img1.style.width = '' + width + 'px';
    img2.style.width = '' + width + 'px';
    img1.style.height = '' + height + 'px';
    img2.style.height = '' + height + 'px';
    
    if(prev_img1_path != img1_path) {
        img1.src = img1_path;
        // img1.load();
    }
    if(prev_img2_path != img2_path) {
        img2.src = img2_path;
        // img2.load();
    }
    prev_img1_path = img1_path;
    prev_img2_path = img2_path;
}

function selectSource(image) {
    selected_source = image;
    selected_method = method_options[1];
    showSelected();
    update_image_source();
}

function selectMethod(index) {
    selected_method = method_options[index];
    showSelected();
    update_image_source();
}

function update_image_source() {
    img1_path = 'figures/' + selected_source + '/source.jpg';
    img2_path = 'figures/' + selected_source + '/' + selected_method + '.png';
    // console.log(video2_path);

    loadImage();
}


function set_inactive(btn) {
    btn.classList.remove('on');
}
function set_active(btn) {
    btn.classList.add('on');
}

function showSelected() {
    var img_btns = document.getElementsByClassName('btn-img');
    for(var i = 0; i < img_btns.length; i++) {
        set_inactive(img_btns[i]);
    }
    selected_index = source_options.indexOf(selected_source);
    // console.log(selected_index);
    set_active(img_btns[selected_index]);

    var mth_btns = document.getElementsByClassName('btn-mth');
    for(var i = 0; i < mth_btns.length; i++) {
        set_inactive(mth_btns[i]);
    }
    selected_index = method_options.indexOf(selected_method);
    // console.log(selected_index);
    set_active(mth_btns[selected_index-1]);


    var comp_video_btns = document.getElementsByClassName('btn-comp-video');
    for(var i = 0; i < comp_video_btns.length; i++) {
        set_inactive(comp_video_btns[i]);
    }
    selected_index = ['duck', 'duck', 'duck', 'duck'].indexOf(selected_compare_video);
    set_active(comp_video_btns[selected_index]);


    var app_btns = document.getElementsByClassName('btn-app-video');
    for(var i = 0; i < app_btns.length; i++) {
        set_inactive(app_btns[i]);
    }
    selected_index = ['human1', 'human2', 'cat1', 'cat2', 'cat3'].indexOf(selected_app_video);
    set_active(app_btns[selected_index]);
}

/* Application 1 */

var selected_compare_video = 'duck';
var comp1_path = '';
var comp2_path = '';

function selectComparisonVideo(video) {
    selected_compare_video = video;
    update_comparison_source();
    showSelected();
}


function update_comparison_source() {
    comp1_path = 'videos/text3D/' + selected_compare_video + '.mp4';
    // need to update
    comp2_path = 'videos/text3D/' + selected_compare_video + '.mp4';

    loadComparison(false);
}

var prev_comp1_path = 'none';
var prev_comp2_path = 'none';
function loadComparison() {
    var video1 = document.getElementById('comparison-player1');
    var video2 = document.getElementById('comparison-player2');
    var video_src1 = document.getElementById('comparison-src1');
    var video_src2 = document.getElementById('comparison-src2');
    
    var width = document.getElementById('container').clientWidth;
    document.getElementById('comparison-video-div').style.height = '' + (width / 768 * 432/1.1) + 'px';
    
    video1.pause();
    video2.pause();
    if(prev_comp1_path != comp1_path) {
        video_src1.setAttribute('src', comp1_path);
        video1.load();
    }
    if(prev_comp2_path != comp2_path) {
        video_src2.setAttribute('src', comp2_path);
        video2.load();
    }
    prev_comp1_path = comp1_path;
    prev_comp2_path = comp2_path;

    video1.currentTime = 0;
    video2.currentTime = 0;

    video1.playbackRate = 1.6;
    video2.playbackRate = 1.6;
    video1.play();
    video2.play();
}

/* Application 3 */

var selected_app_video = 'human1';
var app_path = '';
function selectAppVideo(video) {
    selected_app_video = video;
    update_app_source();
    showSelected();
}

function update_app_source() {
    app_path = 'videos/adaptation/' + selected_app_video + '.mp4';
    loadApp();
}

var prev_app_path = "none";
function loadApp(is_end) {
    var video = document.getElementById('app-player');
    
    var video_src = document.getElementById('app-src');

    var width =document.getElementById('container').clientWidth;
    var height = width / 768 * 232;

    video.style.width = '' + width + 'px';
    video.style.height = '' + height + 'px';


    video.pause();
    if(prev_app_path != app_path) {
        video_src.setAttribute('src', app_path);
        video.load();
    }
    prev_app_path = app_path;
    video.currentTime = 0;
    video.playbackRate = 1.8;
    video.play();
}
