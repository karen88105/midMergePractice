/*window.onload = function(){
    document.write("Hello JavaScript");
};*/

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var listNumber = $("li").length;
        var randomClickNumber = Math.floor(Math.random() * listNumber);

        while($("h1").text() == $("li").eq(randomClickNumber).text())
            randomClickNumber = Math.floor(Math.random() * listNumber);
        
        $("h1").text($("li").eq(randomClickNumber).text())
        
        if(randomClickNumber == 0)
            $("#outImg").attr("src","https://pic.pimg.tw/ofeyhong/1601970703-3777845449-g.jpg");
        else if(randomClickNumber == 1)
            $("#outImg").attr("src","https://www.examservice.com.tw/Content/images/Product/img_product/toeic_t.jpg");
        else if(randomClickNumber == 2)
            $("#outImg").attr("src","https://onlinejudge.org/templates/hm_yaml_2_5/img/ojlogo2.svg.png");
    });
});