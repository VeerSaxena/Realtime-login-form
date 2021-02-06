class Game{
    constructor(){}

    // to read gameState value from firebase
    getState(){
        database.ref('gameState').on("value", (data)=>{
            gameState = data.val(); // val() to read value from fb
        })
    }

    // to update value in gameState of firebase
    update(state){
        database.ref('/').update( {
           'gameState': state 
        } )
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }

    }

    play(){

    }

    end(){

    }
}