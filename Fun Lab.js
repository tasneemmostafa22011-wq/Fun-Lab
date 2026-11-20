$(document).ready(function(){
    $("#big").click(function(){
        $("#box").animate({
            width: "+=30",
            height: "+=20"
        });
        $(".text").text("The box is getting bigger!")
    })
    $("#small").click(function(){
        $("#box").animate({
            width: "-=30",
            height: "-=20"
        });
        $(".text").text("The box is getting smaller!")
    })
    $("#stop").click(function(){
        $("#box").stop()
        $(".text").text("Animation stopped!")
    })
    $("#reset").click(function(){
        $("#box").css("backgroundColor","white")
        $("#box").css("border","6px solid palevioletred")
        $("#box").css("width","180px")
        $("#box").css("height","120px")
        $("#box").css("margin","20px auto")
        $("#box").css("padding","35px")
        $("#box").removeClass("glow")
        $("#box").removeClass("color1")
        $(".text").text("Your box is ready!")
    })
    $("#color").click(function(){
        $("#box").css("backgroundColor","palevioletred")
        $("#box").css("borderColor","white")
    })
    $("#tt").click(function(){
        $("#box").addClass("tas")
    })
    $("#remove").click(function(){
        $("#box").removeClass("color1")
    })
    $("#toggle").click(function(){
        $("#box").toggleClass("glow")
    })
    $("#hide").click(function(){
        $("#box").hide(600)
    })
    $("#show").click(function(){
        $("#box").show(600)
    })
    $("#fade").click(function(){
        $("#box").fadeToggle(600)
    })
    $("#slide").click(function(){
        $("#box").slideToggle(600)
    })
    $("#callback").click(function(){
        $("#box").fadeOut(600, function(){
            $(".text").text("The magic box disappeared!")
            $("#box").fadeIn(600)
        })
    })
    $("#chaining").click(function(){
        $("#box")
        .slideUp(600)
        .slideDown(600)
        .fadeTo(600,0.20)
        .fadeTo(600,1)
    })
    $("#set").click(function(){
        var change= $("#input").val()
        $("#box").text(change)
    })
    $("#html").click(function(){
        $("#box").html("Tasneemty")
    })
    $("#get").click(function(){
        var name= $("#box").text()
        $(".text").text("Box text : "+ name)
    })
    $("#text").click(function(){
        var name= $("#box").text()
        $(".text").text("Html : "+ name)
    })
    $("#value").click(function(){
        var inp= $("#input").val()
        $(".text").text("Your input : "+ inp)
    })
    $("#title").click(function(){
        $("#box").attr("title","You found the Magic Box!")
        $(".text").text("Move your mouse over the box!")
    })
    $("#append").click(function(){
        $("#lest").append('<li class="star2">New Star</li>')
    })
    $("#prepend").click(function(){
        $("#lest").prepend('<li class="star2">First Star</li>')
        
    })
    $("#before").click(function(){
        $("#lest").before("<p>Before the list!</p>")
    })
    $("#after").click(function(){
        $("#lest").after("<p>After the list!</p>")
    })
    $("#remove2").click(function() {
        $("#lest li:last").remove()
    })
    $("#empty").click(function() {
        $("#lest").empty()
    })
    $("#star").click(function() {
        $(".text").text("Found the stars!")
        $("#lest").children(".star2").css("backgroundColor","rgba(255, 255, 0, 0.664)")
    })
    $("#measure").click(function(){
        $("#text2").hide()
        $("#secret").show()
        $("#w").text(
            $("#box").width()
        );
        $("#h").text(
            $("#box").height()
        );
        $("#inw").text(
            $("#box").innerWidth()
        );
        $("#inh").text(
            $("#box").innerHeight()
        );
        $("#ouw").text(
            $("#box").outerWidth()
        );
        $("#ouh").text(
            $("#box").outerHeight()
        );
        $("#tw").text(
            $("#box").outerWidth(true)
        );
        $("#th").text(
            $("#box").outerHeight(true)
        );
    })
})