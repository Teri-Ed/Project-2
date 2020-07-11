// Sets up the ajax call to allow user to 

$(document).ready(()=>{
    $("submit").click(()=>{
        var userInput = $("search").val()
        alert(userInput)
        $.ajax({
            url:"http://api.giphy.com/v1/gifs/search?q=$(userInput)&api_key=GQM8Th8FqZBposgacK9kDCZGcEZVITbZ"
        })
        .done((res)=> {
            console.log("res", res);
        })
    });
    //$.ajax({
    //    url:"http://api.giphy.com/v1/gifs/search?q=&api_key=GQM8Th8FqZBposgacK9kDCZGcEZVITbZ",
    //    context:document.body
    //}).done(function (){
    //    $(this).addClass("done");
    //});

})