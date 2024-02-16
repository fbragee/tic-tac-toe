// IIFE
const Gameboard = (() => {
	let gameBoard = ['', '', '', '', '', '', '', '', ''];

	const render = () => {
		let boardHTML = '';
		gameBoard.forEach((square, index) => {
			boardHTML += `<div class='square' id='square-${index}> ${square} </div>`;
		});
	};
	document.querySelector('#board').innerHTML = boardHTML;

	return { render };
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
	//Game.start();
});
