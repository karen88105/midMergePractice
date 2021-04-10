$(function(){
    $("#border").on("click",function(){
        $("html").css("background-color", $("#colorNow").val());
        console.log($("html").css("background-color", $("#colorNow").val()));
    });
});