$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('#skills').addClass('dark');
        $('.title-wrapper ').addClass('dark2');
        $('.title-text-wrapper ').addClass('dark2');
        $('.text-wrapper ').addClass('dark2');

    } else {
        $('#skills').removeClass('dark');
        $('.title-wrapper ').removeClass('dark2');
        $('.title-text-wrapper ').removeClass('dark2');
        $('.text-wrapper ').removeClass('dark2');
    }
})


window.onload=function(){
    var btn= document.getElementById("contact");
    var form= document.getElementById("form_contact");
btn.onclick = function(){
    if (form.style.display==="none"){
        form.style.display="flex";
    }
    else{
        form.style.display="none";
    }
    };
};
