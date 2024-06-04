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
                    return console.log("Casilla llena, no es seleccionable");
                }
            }
        }
        board[nrow][ncolumn] = valueCell;
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

const board = Gameboard();

board.refreshBoard(0,0,"X");
//board.printBoard();
board.refreshBoard(0,0,"X");
//board.printBoard();
board.refreshBoard(0,2,"X");
//board.printBoard();
board.refreshBoard(1,0,"0");
//board.printBoard();
board.refreshBoard(1,1,"0");
//board.printBoard();
board.refreshBoard(1,2,"0");
//board.printBoard();
board.refreshBoard(2,0,"X");
//board.printBoard();
board.refreshBoard(2,1,"X");
//board.printBoard();
board.refreshBoard(2,2,"X");

board.printBoard();