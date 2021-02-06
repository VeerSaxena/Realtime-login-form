class Player{
    constructor(){}

    getCount(){
        database.ref('playerCount').on("value", (data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update( {
            'playerCount': count 
         } )
    }

    update(name){
        // player1/name " "
        var playerRef = "/player" + playerCount;
        database.ref(playerRef).update( 
            {
                name: name
            }
        )
    }


}