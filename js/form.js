class Form{

    constructor(){

    }

    display(){
        var title = createElement('h2', 'Multiplayer Car Racing Game');
        title.position(50, 0);

        var input = createInput().attribute('placeholder', 'Name');
        input.position(150, 180);

        var button = createButton('Play');
        button.position(220, 220);

        button.mousePressed(
            function (){
                input.hide ();
                button.hide ();

                var name = input.value(); // to read from html text box
                playerCount = playerCount+1
                player.update(name);
                player.updateCount(playerCount);
                // increased playerCount by 1 
                // update in db

                var greeting = createElement('h3', 'Hello ' + name);
                greeting.position(130, 100);
            }
        )

    }

}



