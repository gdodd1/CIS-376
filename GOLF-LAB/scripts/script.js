const data = [
    {
        "author": "Alec Moore",
        "url" : "https://alecmo26.github.io/CharlieLab/",
        "appName" : "Charlie Lab",
        "source" : "https://github.com/alecmo26/CharlieLab"
    },
    {
        "author": "Alex Strickland",
        "url" : "https://astricklandd.github.io/echo-lab/",
        "appName" : "Echo Lab",
        "source" : "https://github.com/astricklandd/echo-lab"
    },
    {
        "author": "Ashlyn Paruzynski",
        "url" : "https://ashmcflash.github.io/echo-lab/",
        "appName" : "Echo Lab",
        "source" : "https://github.com/ashmcflash/echo-lab"
    },
    {
        "author": "Chhavi Chhavi",
        "url" : "https://viii21.github.io/dob-facts/",
        "appName" : "DOB Facts",
        "source" : "https://github.com/viii21/dob-facts"
    },
    {
        "author": "Cody Mcdonald",
        "url" : "https://nutenjoyer.github.io/miniature-winner",
        "appName" : "Miniature Winner",
        "source" : "https://github.com/nutenjoyer/miniature-winner"
    },
    {
        "author": "Elijah Aday",
        "url" : "https://eaday22.github.io/delta_Lab/",
        "appName" : "Delta Lab",
        "source" : "https://github.com/EAday22/delta_Lab"
    },
    {
        "author": "Emily Tinnon",
        "url" : "https://etinnon.github.io/cis376-delta/",
        "appName" : "Delta Lab",
        "source" : "https://github.com/etinnon/cis376-delta"
    },
    {
        "author": "Ethan Criddle",
        "url" : "https://stalewhitebread.github.io/urban-invention/",
        "appName" : "Urban Invention",
        "source" : "https://github.com/stalewhitebread/urban-invention"
    },
    {
        "author": "Ethan Hubbard",
        "url" : "https://hubbbabubbba.github.io/Delta-Lab-Name-Wow/",
        "appName" : "Delta Lab Name Wow",
        "source" : "https://github.com/HubbbaBubbba/Delta-Lab-Name-Wow"
    },
    {
        "author": "Ethan Rinke",
        "url" : "https://crimsonhog.github.io/probable-octo-carnival/",
        "appName" : "Probable Octo Carnival",
        "source" : "https://github.com/CrimsonHog/probable-octo-carnival"
    },
    {
        "author": "Garrett Dodd",
        "url" : "https://garrettdodd.tech/CIS-376/BRAVO_LAB/index.html",
        "appName" : "Bravo Lab",
        "source" : "https://github.com/gdodd1/CIS-376/tree/main/BRAVO_LAB"
    },
    {
        "author": "Hardik Gupta",
        "url" : "",
        "appName" : ""
    },
    {
        "author": "Hau Huynh",
        "url" : "https://hauhuynh90.github.io/Delta/",
        "appName" : "Delta Lab",
        "source" : "https://github.com/HauHuynh90/Delta"
    },
    {
        "author": "Hunter McGriff",
        "url" : "https://hunter-mcgriff.github.io/dev-lab-charlie/",
        "appName" : "Charlie Lab",
        "source" : "https://github.com/hunter-mcgriff/dev-lab-charlie"
    },
    {
        "author": "Katheryn Grant",
        "url" : "https://codepen.io/katherynisabell/full/WNzWGNd",
        "appName" : "Alpha Lab",
        "source" : "https://codepen.io/katherynisabell/full/WNzWGNd"
    },
    {
        "author": "Kevin Salgado",
        "url" : "https://hkbrian5.github.io/solid-octo-happiness/",
        "appName" : "Solid Octo Happiness",
        "source" : ""
    },
    {
        "author": "Kristina Williams",
        "url" : "https://kwilliams31.github.io/Echo-Cool-Games/",
        "appName" : "Delta Lab",
        "source" : "https://github.com/kwilliams31/Echo-Cool-Games"
    },
    {
        "author": "Lane Schmidt",
        "url" : "https://lane30schmidt.github.io/echo-376/",
        "appName" : "Echo Lab",
        "source" : "https://github.com/lane30schmidt/echo-376"
    },
    {
        "author": "Maggie Little",
        "url" : "",
        "appName" : ""
    },
    {
        "author": "Meghan Skelton",
        "url" : "mskel1.github.io/sturdy-rotary-phone/",
        "appName" : "Sturdy Rotary Phone",
        "source" : "https://github.com/mskel1/sturdy-rotary-phone"
    },
    {
        "author": "Nicole Reilly    ",
        "url" : "https://nicolereilly.github.io/echo-lab/",
        "appName" : "Echo Lab",
        "source" : "https://github.com/nicolereilly/echo-lab"
    },
    {
        "author": "Omonegho",
        "url" : "https://ougheoke.github.io/echo-lab/",
        "appName" : "Echo Lab",
        "source" : "https://github.com/ougheoke/echo-lab"
    },
    {
        "author": "Rachel Thompson",
        "url" : "",
        "appName" : ""
    },
    {
        "author": "Rishi Doreswamy",
        "url" : "https://rish4863.github.io/doge-game/",
        "appName" : "Doge Game",
        "source" : "https://github.com/rish4863/doge-game"
    },
    {
        "author": "Tychicus Thomas",
        "url" : "",
        "appName" : ""
    },
    {
        "author": "Wes Wallace",
        "url" : "https://westyler28.github.io/Echo-Lab/",
        "appName" : "Echo Lab",
        "source" : "https://github.com/westyler28/Echo-Lab"
    },
    {
        "author": "Zachary Newell",
        "url" : "",
        "appName" : ""
    }
]

$( document ).ready(function() {
    console.log(data[0])
    $( ".cross" ).hide();
    $( ".menu" ).hide();

    $( ".hamburger" ).click(function() {
        $('.cody').hide()
            $( ".menu" ).slideToggle( "fast", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
    });

    });
    
    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "fast", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
            $('.cody').show()
    });

    });
    

    for (let i = 0; i < data.length; i++){
        if (data[i].appName === "" || data[i].author === "" || data[i].url === "" || data[i].source === ""){
            continue;
        }
        else{
            $('#list').append('<div class="card" style="width: 25%; margin: auto;"> <h5 class="card-title">' + data[i].author + '</h5> <p class="card-text">' + data[i].appName + '</p> <ul style="list-style:none; display: inline;"><li><a href="' + data[i].url + '" target="_blank" class="btn btn-primary">Deployment</a><a href="' + data[i].source + '" target="_blank" class="btn btn-primary">Source Code</a></li></ul> </div>')
        }
    }
    // console.log(myJson[0])

    });


    /*
        
    */