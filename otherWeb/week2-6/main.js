$(function(){
    $("input").on("change",function(){
        $("#courseTable").empty();  //清空原始table
        //console.log(document.getElementById("inputDay").value);

        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        var topicCount=topic.length;

        var millisecsPerDay=24*60*60*1000;  //1秒有1000毫秒

        for(var x=0; x<topicCount; x++){
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x+1}</td>`);
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);  //7是一星期 slice切割字串
            if(x==0 || x==1)
                $("#courseTable").append(`<td style="color: gray;">${topic[x]}</td>`);
            else
                $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("<tr>");
        }
    });
});