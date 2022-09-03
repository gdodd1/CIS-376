$(document).ready(function(){
    console.log($('#doge').attr("src"));
    let i = 0;
    const pictures = ["assets/standingDoge.png", "assets/delicious.png", 'https://www.minecraftskins.net/static/preview/doge.png', 'assets/funny.jpg']
    $('#doge').click(function(){
        if(i < 3){
            $('#doge').attr("src", pictures[++i])
        }
        else{
            $('#doge').attr("src", pictures[0])
            i=0
                }
    })
});
