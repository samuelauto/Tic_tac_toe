function Gameboard(){
    //Crear matriz de 3 con 3 para el tablero de juego
    const row = 3;
    const column = 3;
    const board = [[],[],[]];

    
    const getBoard = () => board; //Funcion para obtener el tablero

    //Funcion para actualizar el tablero con la casilla marcada
    const refreshBoard = (nrow,ncolumn,valueCell,id) => {
        //Asegurar de que la casilla seleccionada no este llena
        for(let i=0;i<row;i++){
            for(let j=0;j<column;j++){
                if( board[nrow][ncolumn] === "X" || board[nrow][ncolumn] === "0"){
                    //return console.log("Casilla llena, no es seleccionable");
                    return 0;
                }
            }
        }
        board[nrow][ncolumn] = valueCell;
        //Colocar el texto valueCell dentro de la casilla que se escribio
        const button = document.getElementById(id);
        button.textContent = valueCell;

        return 1;
    }

    //Funcion para obtener la imagen del board
    const printBoard = ()=>{
        for(let i=0;i<row;i++){
            for(let j=0;j<column;j++){
                console.log(board[i][j]);
            }
            console.log("\n");
        }
    }

    return{getBoard,refreshBoard,printBoard}
}

//Objeto jugadores
function Players(name,choise){
    return{name,choise} //Nombre del jugador y si va a jugar con 0 o X
}


function GameControlling(name1,name2){
    const board = Gameboard()
    const players = [Players(name1,"X"),Players(name2,"0")];
    let countRounds = 0;
    //Usar cero para designar jugador con cerito y 1 para seleccionar jugador con X
    //Empezar con el jugador de las cruces
    let activePlayer = 1; 

    //Crear funcion para el cambio de turno de jugador 
    //Crear logica para saber si se termino el juego -- Completo
    //Preguntar en cada jugada si la casilla esta ocupada, de estar ocupada, el jugador tiene q volver a jugar

    const switchPlayer = () => {
        if (activePlayer === 1){
            activePlayer = 0;//Se cambia para el jugador de las cruces
        }
        else{
            activePlayer = 1;
        }
    }

    //A partir de haberse jugado 3 veces empezar a llamar a esta funcion
    const finishGame = () => {
        //Logica de final del juego, gana el que tenga 3 seguidos igual, en forma vertical,horizontal o transversa
        const playBoard = board.getBoard()
        
        //Primera Linea Vertical
        if(playBoard[0][0]===playBoard[1][0] && playBoard[0][0]===playBoard[2][0] && playBoard[0][0] === "X" || playBoard[0][0]===playBoard[1][0] && playBoard[0][0]===playBoard[2][0] && playBoard[0][0] === "0" ){
            console.log("columna 0 todo igual")//Borrar estos console.log al final del proyecto
            return playBoard[0][0];//Para saber si gano el cero o la cruz
        }
        //Segunda Linea Vertical
        else if(playBoard[0][1]===playBoard[1][1] && playBoard[0][1]===playBoard[2][1] && playBoard[0][1] === "X" || playBoard[0][1]===playBoard[1][1] && playBoard[0][1]===playBoard[2][1] && playBoard[0][1] === "0"){
            console.log("columna 1 todo igual")
            return playBoard[0][1];
        }
        //Tercera Linea Vertical
        else if(playBoard[0][2]===playBoard[1][2] && playBoard[0][2]===playBoard[2][2] && playBoard[0][2] === "X" || playBoard[0][2]===playBoard[1][2] && playBoard[0][2]===playBoard[2][2] && playBoard[0][2] === "0"){
            console.log("columna 2 todo igual")
            return playBoard[0][2];
        }
        //Primera Linea Horizontal
        else if(playBoard[0][0]===playBoard[0][1] && playBoard[0][0]===playBoard[0][2] && playBoard[0][0] === "X" || playBoard[0][0]===playBoard[0][1] && playBoard[0][0]===playBoard[0][2] && playBoard[0][0] === "0"){
            console.log("fila 0 todo igual")
            return playBoard[0][0];
        }
        //Segunda linea Horizontal
        else if(playBoard[1][0]===playBoard[1][1] && playBoard[1][0]===playBoard[1][2] && playBoard[1][0] === "X" || playBoard[1][0]===playBoard[1][1] && playBoard[1][0]===playBoard[1][2] && playBoard[1][0] === "0"){
            console.log("fila 1 todo igual")
            return playBoard[1][0];
        }
        //Tercera Linea Horizontal
        else if(playBoard[2][0]===playBoard[2][1] && playBoard[2][0]===playBoard[2][2] && playBoard[2][0] === "X" || playBoard[2][0]===playBoard[2][1] && playBoard[2][0]===playBoard[2][2] && playBoard[2][0] === "0"){
            console.log("fila 2 todo igual")
            return playBoard[2][0];
        }
        //Linea Diagonal desde la primera casilla,primera fila
        else if(playBoard[0][0]===playBoard[1][1] && playBoard[0][0]===playBoard[2][2] && playBoard[0][0] === "X" || playBoard[0][0]===playBoard[1][1] && playBoard[0][0]===playBoard[2][2] && playBoard[0][0] === "0"){
            return playBoard[0][0];
        }
        //Linea Diagonal desde la ultima casilla, primera fila
        else if(playBoard[0][2]===playBoard[1][1] && playBoard[0][2]===playBoard[2][0] && playBoard[0][2] === "X" || playBoard[0][2]===playBoard[1][1] && playBoard[0][2]===playBoard[2][0] && playBoard[0][2] === "0"){
            return playBoard[0][0];
        }
        // //En este punto falta la comprobacion de las tablas
        // //Variable contadora para saber que se jugo el tablero completo,luego de 9 jugadas el tablero va a encontrarse lleno y sin ganador
        if (countRounds === 9){
             return 1;
        }
        else{
            return 0; //no se cumplio con ninguna de las jugadas anterior
        }
    }

    const roundPlay = (row,column,id) =>{
        //switchPlayer();//Cambio de jugador al empezar la ronda
        let valueCell = ''
        //Si acivePlayer se encuentra en 0 juegan los ceritos, si esta en 1 juegan las cruces
        if(activePlayer === 1){
            valueCell = 'X';
        }
        else{
            valueCell = "0";
        }
        //Para saber donde colocar hay que obtener del html el id del boton, establecer una relacion entre el id
        //y la posicion dentro del tablero que ocupa ese casilla, para asi poder llamar a la funcion refresh board
        //Para la comprobacion por consola, llenar directamente desde el codigo
        //Variable countRounds para saber cdo se llegue a 8(empieza en 0)
        countRounds++;
        let playAgain = 0
        do{ //se devuelve cero cdo el jugador juega mal
            playAgain = board.refreshBoard(row,column,valueCell,id); //Se sale de este ciclo cdo el jugador juege bien
            //esto es temporal,solo para demostrar que funciona bien
            if(playAgain===0){
                return 0;
            }
        }while( playAgain===0)
        if (countRounds >= 3){
            const winner = finishGame();
            if(winner===1){ //empate
                return "Empate"
            }
            else if(winner!==0){
                if(winner === "X"){
                    return players[0].name
                }
                else{
                    return players[1].name
                }
            }
            // else{
            //     switchPlayer();
            //     roundPlay();
            // }
        }
        switchPlayer();
        // else{
        //     switchPlayer();
        //     roundPlay();
        // }        
    }

    

    return {roundPlay}
}

//GameControlling();

function ScreenControlling(){
    //Funcion para manipular el DOM, recibir entradas de cada jugador(nombre y seleccion)
    //Obtener coordenada de cada boton, y pasarlo por el GameControlling
    //Elaborar mensaje de jugador ganador o empate una vez terminado el GameControlling,respetando el funcionamiento de este game controlling
    const namePlayer1 = document.querySelector('#name1').value;
    const namePlayer2 = document.querySelector('#name2').value;
    
    const boardPlayers = document.querySelector('.players');//Aqui es a donde va a ir el append child de que se jugo mal,esto debe durar un pequeño tiempo
    const containerBoard = document.querySelector('.container-board');
    const winDiv = document.createElement('div');
    winDiv.className = 'winDiv';

   const game = GameControlling(namePlayer1,namePlayer2);

   const updateScreen = () => {
        const options = document.querySelectorAll('.board-item');

        options.forEach((button) => {
            button.addEventListener('click',function(){
                switch (button.id) {
                    case '1': console.log("lee aqui")
                             documentRefresh(0,0,'1');
                             break;
                    case '2': documentRefresh(0,1,'2');
                            break;
                    case '3': documentRefresh(0,2,'3');
                            break;
                    case '4': documentRefresh(1,0,'4');
                            break;
                    case '5': documentRefresh(1,1,'5');
                            break;
                    case '6': documentRefresh(1,2,'6');
                            break;
                    case '7': documentRefresh(2,0,'7');
                            break;
                    case '8': documentRefresh(2,1,'8');
                            break;
                    case '9': documentRefresh(2,2,'9');

                    default: break;

                }
            })
        }) 
   }

    const documentRefresh = (row,column,id) => {
        if(game.roundPlay(row,column,id)===0){//Casilla LLena
            const warningBox = document.createElement("div");
            warningBox.className = "warning";
            warningBox.textContent = "Esa casilla ya se encuentra ocupada,juegue otra";

            if (document.body.contains(warningBox)) {
                clearTimeout(warningTimeout);
                } else {
                boardPlayers.appendChild(warningBox);
                }
        
            warningTimeout = setTimeout(() => {
            warningBox.parentNode.removeChild(warningBox);
            warningTimeout = -1;
            },2000);
        }
        else if(game.roundPlay(row,column,id)==="X"){
            winDiv.textContent = "El ganador es: " + namePlayer1;
            winDiv.appendChild(containerBoard);
        }
        else if(game.roundPlay(row,column,id)==="0"){
            winDiv.textContent = "El ganador es: " + namePlayer2;
            winDiv.appendChild(containerBoard);
        }
        else if(game.roundPlay(row,column,id) === 1){
            winDiv.textContent = "Empate";
            winDiv.appendChild(containerBoard);
        }
    }

   updateScreen();

}

const initPlay = document.querySelector('.submit').addEventListener('click',function(){
    ScreenControlling();
})

const resetPlay = document.querySelector('.reset').addEventListener('click',function(){
    boardItem = document.querySelectorAll('.board-item')
    name1 = document.getElementById('name1')
    name2 = document.getElementById('name2')

    boardItem.forEach((item)=>{
        item.textContent = ""
    })
    name1.textContent = "";
    name2.textContent = "";
})