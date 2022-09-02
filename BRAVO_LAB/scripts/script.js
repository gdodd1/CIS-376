$(document).ready(function(){
    console.log($('#doge').attr("src"));
    let i = 0;
    const pictures = ["assets/standingDoge.png", "assets/delicious.png", 'https://www.minecraftskins.net/static/preview/doge.png', 'assets/funny.jpg']
    $('#doge').click(function(){
        if(i === 0){
            $('#doge').attr("src", pictures[1])
            i++
        }
        else if (i === 1){
            $('#doge').attr("src", pictures[2])
            i++
        }
        else if (i ===2){
            $('#doge').attr("src", pictures[3])
            i++
        }
        else{
            $('#doge').attr("src", pictures[0])
            i=0
        }
    })
});
