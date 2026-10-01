function upDate(previewPic) {

    // Kiểm tra event có hoạt động hay không
    console.log("Event triggered!");

    // Hiển thị thông tin của ảnh
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Lấy phần tử có id là image
    var image = document.getElementById("image");

    // Thay đổi nội dung chữ
    image.innerHTML = previewPic.alt;

    // Thay đổi background image
    image.style.backgroundImage = "url('" + previewPic.src + "')";
}


function undo() {

    // Lấy phần tử có id là image
    var image = document.getElementById("image");

    // Xóa background image
    image.style.backgroundImage = "url('')";

    // Khôi phục nội dung ban đầu
    image.innerHTML = "Hover over an image below to display here.";
}