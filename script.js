function openViewer(modelName) {
    const viewer = document.getElementById("modelViewer");
    viewer.src = "models/" + modelName;

    viewer.style.setProperty("--poster-color", "#87CEFA"); // 天蓝色

    document.getElementById("viewerModal").style.display = "block";
}

function closeViewer() {
    document.getElementById("viewerModal").style.display = "none";
}