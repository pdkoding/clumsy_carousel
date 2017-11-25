window.onload = function page() {
    document.getElementById('page1').style.display = "block";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
}
function page1() {
    document.getElementById('page1').style.display = "block";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
}
function page2() {
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block";
    document.getElementById('page3').style.display = "none";
}
function page3() {
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "block";
}