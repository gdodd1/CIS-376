$(document).ready(function(){
    $("#output").hide()
    let lastClicked = null

    // What is commented below was the original concept i made, when the image was clicked, the next image would appear
    // and the images would cycle infinitely 

    // console.log($('#doge').attr("src"));
    let i = 0;
    const pics = ['assets/delicious.png', 'assets/standingDoge.png', 'assets/doge2.png']
    const words = ['Negative wow, go seee doctr', 'Amazin wow!', 'your amount of wow has surpassed even the most extreme capacities of wow']
    $('#bigOleButton').click(function(){
        $("#output").text(words[i]).show()
        lastClicked = clickedFunction(lastClicked, i)
    })

    $('#right').click(function(){
        $('#output').hide()
        if(i < 2){
            $('#doge').attr("src", pics[++i])
        }
        else{
            $('#doge').attr("src", pics[0])
            i=0
                }

    })
    $('#left').click(function(){
        $('#output').hide()
        if(i > 0){
            $('#doge').attr("src", pics[--i])
        }
        else{
            $('#doge').attr("src", pics[pics.length - 1])
            i=pics.length-1
                }

    })

    // $('#standingDoge').click(function(){
    //     lastClicked = clickedFunction(lastClicked, 0)
    //     $('#output').text('So much wow!')
    // })
    // $('#deliciousDoge').click(function(){
    //     lastClicked = clickedFunction(lastClicked, 1)
    //     $('#output').text('Negative wow loser!')
    // })

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