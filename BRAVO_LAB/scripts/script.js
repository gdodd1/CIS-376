
$(document).ready(function(){
    $("#output").hide()
    let lastClicked = null
    
    // What is commented below was the original concept i made, when the image was clicked, the next image would appear
    // and the images would cycle infinitely 

    // console.log($('#doge').attr("src"));
    // let i = 0;
    // const pictures = ["assets/standingDoge.png", "assets/delicious.png", 'https://www.minecraftskins.net/static/preview/doge.png', 'assets/funny.jpg']
    // $('#doge').click(function(){
    //     if(i < 3){
    //         $('#doge').attr("src", pictures[++i])
    //     }
    //     else{
    //         $('#doge').attr("src", pictures[0])
    //         i=0
    //             }
    // })

    $('#standingDoge').click(function(){
        lastClicked = clickedFunction(lastClicked, 0)
        $('#output').text('You win!')
    })
    $('#deliciousDoge').click(function(){
        lastClicked = clickedFunction(lastClicked, 1)
        $('#output').text('You lose!')
    })

});

const clickedFunction  = (lastClicked, clicked) => {
    if (lastClicked != 1 && lastClicked != 0){
        lastClicked = clicked
        $('#output').show()
        console.log(lastClicked)
    }
    else if (lastClicked === clicked){
        $('#output').toggle()
    }
    else if (lastClicked != clicked){
        $('#output').show()
    }
    return clicked;
};