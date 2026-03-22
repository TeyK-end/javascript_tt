function upDate(previewPic) {
    console.log("Hover vào ảnh");

    // lấy text alt
    let altText = previewPic.alt;

    // lấy link ảnh
    let imageSrc = previewPic.src;

    // đổi chữ
    document.getElementById("image").innerHTML = altText;

    // đổi hình nền
    document.getElementById("image").style.backgroundImage =
        "url('" + imageSrc + "')";
}

function unDo() {
    console.log("Rời chuột");

    // reset ảnh
    document.getElementById("image").style.backgroundImage = "url('')";

    // reset chữ
    document.getElementById("image").innerHTML =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}