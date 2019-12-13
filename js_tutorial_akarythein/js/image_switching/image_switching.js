$(document).ready(function(){
var windowWidth = $(window).outerWidth();
$('.switch_sp').each(function(){
if (windowWidth <= 767) {
var msrc=$(this).attr('src');
msrc=msrc.split('.');     
var lastelem = msrc.pop(); 
msrc.push('_sp.');     
msrc.push(lastelem); 
msrc=msrc.join('');
$(this).attr('src', msrc);
}
});   
$(window).resize(function() {
location.reload();
});
});