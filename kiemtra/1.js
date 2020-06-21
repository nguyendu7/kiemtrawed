window.onscroll=function(){
    var diemcong = document.getElementById("dc");
    var kc = document.documentElement.scrollTop;
    if (kc > 120) {
        diemcong.style.left="0px";
    }
    else{
        diemcong.style.left="-340px";
    } 
};
function opensearch() {
    var input = document.getElementById("1");
        input.style.width = '0px';
        input.style.left = '100px';
}
