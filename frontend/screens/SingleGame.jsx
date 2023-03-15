import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const TicTacToeGame = ({navigation}) => {
    
      
      
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  
  const handlePress = (index) => {
    if (gameOver || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const nextPlayer = player === 'X' ? 'O' : 'X';
    setPlayer(nextPlayer);

    const newWinner = checkForWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setGameOver(true);
    }
  };

  const checkForWinner = (board) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    if (board.every((square) => square !== null)) {
      return 'Tie';
    }

    return null;
  };

  const renderSquare = (index) => (
    <TouchableOpacity
      style={styles.square}
      onPress={() => handlePress(index)}
      activeOpacity={0.8}
    >
      {board[index] === 'X' && <Icon name="times" size={72} color="#fff" />}
      {board[index] === 'O' && <FontAwesomeIcon icon={faCircle} size={72} color="#fff" />}
    </TouchableOpacity>
  );
  const renderStatus = () => {
    if (winner) {
      return `${winner} wins!`;
    } else if (gameOver) {
      return 'Tie game!';
    } else {
        // console.log(player)
      return `Next player: ${player}`;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      <Text style={styles.status}>{renderStatus()}</Text>
            {gameOver &&
            <TouchableOpacity style={{position: "absolute", top: 40, borderRadius:20, padding:10, backgroundColor:"#377ea5"}}>
                <Text style={{fontSize: 24,
                    fontWeight: 'bold',
                    color: '#fff',}} onPress={()=>{
                    setBoard(Array(9).fill(null))
                    setWinner(null)
                    setPlayer("X")
                    setGameOver(false)
                }}>Play again</Text>
            </TouchableOpacity>

            }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0077b6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff',
    },
    board: {
      borderColor: '##fff',
      width: 304,
      height: 304,
      backgroundColor: '#0077b6',
    },
    row: {
      flexDirection: 'row',
    },
    square: {
      width: 100,
      height: 100,
      borderWidth: 1,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    squareText: {
      fontSize: 72,
      fontWeight: 'bold',
      color: "#fff"
    },
    status: {
      marginTop: 30,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
  
  


  export default TicTacToeGame