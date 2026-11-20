document.addEventListener("DOMContentLoaded", function() {
    let jugador = 0;
    const tablero = [
        [null, null, null],
        [null, null, null],
        [null, null, null]];
    
    const columnas = document.querySelectorAll("[data-col]");
    columnas.forEach((columna) => {
        const fila = columna.closest("[data-row]").dataset.row;
        const col = columna.dataset.col;
        columna.addEventListener("click", () => {
            if (jugador === 0) {
                columna.textContent = "X";
                tablero[fila][col] = 1;
                jugador = 1;
            } else {
                columna.textContent = "O";
                tablero[fila][col] = 0;
                jugador = 0;
            }
            // const termino = validandoCeldas();
            // if (termino) {
            //     console.info("Se ha llenado el tablero");
            // }
            calculandoGanador();
        });
    });

    function validandoCeldas() {
        const todosLosValores = tablero.flat();
        return todosLosValores.every(valor => valor !== null);
    }

    function ganadorFila() {
        for (let i = 0; i < 3; i++) {
            const primerValor = tablero[i][0];
            if (tablero[i][0] === primerValor && tablero[i][1] === primerValor && tablero[i][2] === primerValor) {
                return primerValor;
            }
        }
        return null;
    }

    function ganadorColumna() {
        for (let i = 0; i < 3; i++) {
            const primerValor = tablero[0][i];
            if (tablero[0][i] === primerValor && tablero[1][i] === primerValor && tablero[2][i] === primerValor) {
                return primerValor;
            }
        }
        return null;
    }

    function ganadorDiagonal() {
        const primerValorDiagonal1 = tablero[0][0];
        if (tablero[0][0] === primerValorDiagonal1 && tablero[1][1] === primerValorDiagonal1 && tablero[2][2] === primerValorDiagonal1) {
            return primerValorDiagonal1;
        }

        const primerValorDiagonal2 = tablero[0][2];
        if (tablero[0][2] === primerValorDiagonal2 && tablero[1][1] === primerValorDiagonal2 && tablero[2][0] === primerValorDiagonal2) {
            return primerValorDiagonal2;
        }

        return null;
    }

    function limpiarTablero() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                tablero[i][j] = null;
                const celda = document.getElementById(`${i}${j}`);
                console.log(celda);
                if (celda) {
                    celda.textContent = "";
                }
            }
        }
    }


    function calculandoGanador() {
        console.log("ejecutando calculandoGanador()");
        const ganadorXFila = ganadorFila();
        if (ganadorXFila !== null) {
            console.info(`Ganador por fila: ${ganadorXFila === 1 ? "X" : "O"}`);
            limpiarTablero();
            alert(`Ganador: ${ganadorXFila === 1 ? "X" : "O"}`);
        }

        const ganadorXColumna = ganadorColumna();
        if (ganadorXColumna !== null) {
            console.info(`Ganador por columna: ${ganadorXColumna === 1 ? "X" : "O"}`);
            limpiarTablero();
            alert(`Ganador: ${ganadorXColumna === 1 ? "X" : "O"}`);
        }

        const ganadorXDiagonal = ganadorDiagonal();
        if (ganadorXDiagonal !== null) {
            console.info(`Ganador por diagonal: ${ganadorXDiagonal === 1 ? "X" : "O"}`);
            limpiarTablero();
            alert(`Ganador: ${ganadorXDiagonal === 1 ? "X" : "O"}`);
        }
    }    
});

// board[1][1]; // "0"


// Analisis
// const demo = [1, [6, 7], 3, 4, 5];

// demo[1][0]; // 6
// demo[2];