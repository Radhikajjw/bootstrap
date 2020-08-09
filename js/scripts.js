$(document).ready(function(){
    $("#mycarousel").carousel({interval:1000});
    $("#carousel-btn").click(function(){
        if($("#carousel-btn").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');  
            $("#carousel-btn").children("span").removeClass('fa-pause');
            $("#carousel-btn").children("span").addClass('fa-play');
        }
        else if($("#carousel-btn").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');  
            $("#carousel-btn").children("span").removeClass('fa-play');
            $("#carousel-btn").children("span").addClass('fa-pause');
        }

    });
});