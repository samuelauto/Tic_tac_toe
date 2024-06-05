function Gameboard(){
    //Crear matriz de 3 con 3 para el tablero de juego
    const row = 3;
    const column = 3;
    const board = [[],[],[]];

    
    const getBoard = () => board; //Funcion para obtener el tablero

    //Funcion para actualizar el tablero con la casilla marcada
    const refreshBoard = (nrow,ncolumn,valueCell) => {
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


function GameControlling(){
    const board = Gameboard()
    const players = [Players("Samuel","X"),Players("La pura","0")];
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

    const roundPlay = () =>{
        //console.log(activePlayer);
        let row = parseInt(prompt("Introduce fila: "),10);
        let column = parseInt(prompt("Introduce columna: "),10);
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
            playAgain = board.refreshBoard(row,column,valueCell); //Se sale de este ciclo cdo el jugador juege bien
            //esto es temporal,solo para demostrar que funciona bien
            if(playAgain===0){
                row = prompt("Introduce fila nuevamente sanaco:")
                column = prompt("Introduce columna nuevamente sanaco: ")
            }
        }while( playAgain===0)
        if (countRounds >= 3){
            const winner = finishGame();
            if(winner===1){
                console.log("Empate");
                console.log(board.getBoard());
            }
            else if(winner!==0){
                if(winner === "X"){
                    console.log(players[0].name);
                    console.log(board.getBoard());
                }
                else{
                    console.log(players[1].name);
                    console.log(board.getBoard());
                }
            }
            else{
                switchPlayer();
                roundPlay();
            }
        }
        else{
            switchPlayer();
            roundPlay();
        }        
    }
    
    roundPlay();
}

//GameControlling();

function ScreenControlling(){
    //Funcion para manipular el DOM, recibir entradas de cada jugador(nombre y seleccion)
    //Obtener coordenada de cada boton, y pasarlo por el GameControlling
    //Elaborar mensaje de jugador ganador o empate una vez terminado el GameControlling,respetando el funcionamiento de este game controlling
    
}