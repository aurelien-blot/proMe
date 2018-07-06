$('nav').hide();
$('nav').fadeIn(1500);
$('.content').hide();
$('#homeContent').show();

$('#homeNav').on("click", function(){
    $('.content').hide();
    $('#homeContent').show();
})

$('#devNav').on("click", function(){
    $('.content').hide();
    $('#devContent').show();
})

$('#resumeNav').on("click", function(){
    $('.content').hide();
    $('#resumeContent').show();
});


$('#mailNav').on("click", function(){
    $('.content').hide();
    $('#mailContent').show();
});

$('#pdfNav').on("click", function(){
    $('.content').hide();
    $('#pdfContent').show();
});