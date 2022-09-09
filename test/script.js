document.getElementById("setOrange").addEventListener("click", () => {
    document.getElementById("setOrange").style.backgroundColor = "orange";
    setTimeout(() => {
        document.getElementById("setOrange").style.backgroundColor = "grey";
    }, 250);
});
