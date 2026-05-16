function changeImage() {
    let img = document.getElementById("myImage"); // fixed ID

    if (img.src.includes("image1.jpg")) {
        img.src=" image2.jpg"; // fixed image path
    } else {
        img.src = "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=";
    }
}