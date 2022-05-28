function garbageHeight() {
	for (row = 0; row < board.length; row++) {
		for (col = 0; col < board[0].length; col++) {
			if (board[row][col].c == 'X') return board.length - row;
		}
	}
	return 0;
}

function aboutPopup() {
	window.alert(`START BY ADJUSTING KEYBINDS AND SETTINGS
zztetris
a tetris client with a name that starts with zz so you can type zz and have it autocomplete
forked from aznguy's schoolteto, a number of features added
inspired by fio's four-tris
---
Import/Export works through your clipboard.
Undo/redo is a thing. It keeps track of your board state history.
*Full* fumen import/export sets your board state history as the fumen pages and vice versa.
Drawing on the board is a thing.`);
}

function restart() {
	if (board[board.length - 1].filter((c) => c.t == 0).length == boardSize[0]) {
		// lazy check, will have false positives, but whatever
		if (queue[6] == '|' && holdP == '') {
			// if they reset after resetting, just restart hist
			hist = [
				{
					board: JSON.stringify(board),
					queue: JSON.stringify(queue),
					hold: holdP,
					piece: piece,
				},
			];
			histPos = 0;
		}
	}
	board = [];
	for (let i = 0; i < boardSize[1]; i++) {
		board.push(aRow());
	}

	curCol = Math.floor(Math.random() * 10);
	while (garbageHeight() < 10) {
		while (curCol == lastCol) {
			curCol = Math.floor(Math.random() * 10);
		}
		garbage(curCol);
		lastCol = curCol;
	}

	queue = [];
	rot = 0;
	piece = '';
	holdP = '';
	held = false;
	xPOS = spawn[0];
	yPOS = spawn[1];
	xGHO = spawn[0];
    yGHO = spawn[1];

    combo = -1;
    b2b = -1;
	newPiece();
}

function updateQueue() {
	temp = false;
	ctxN.clearRect(0, 0, 90, 360);
	ctxH.clearRect(0, 0, 90, 60);
	for (let i = 0; i < 7; i++) {
		if (queue[i] == '|') {
			ctxN.beginPath();
			ctxN.moveTo(0, i * 60);
			ctxN.lineTo(90, i * 60);
			ctxN.stroke();
			temp = true;
		} else {
			j = i;
			if (temp) j--;
			ctxN.drawImage(imgs[queue[i]], 0, j * 60);
		}
	}
	if (holdP) ctxH.drawImage(imgs[holdP], 0, 0);
}

function shuffleQueue() {
	// locate bag separator
	index = 0;
	while (index < queue.length && queue[index] != '|') index++;

	tempQueue = queue.slice(0, index).concat(piece).shuffle().concat('|');
	// the queue before the bag separator (the current bag), plus active piece; shuffle it; add bag separator to end
	piece = tempQueue.shift();
	queue = tempQueue;

	while (queue.length < 10) {
		var shuf = names.shuffle();
		shuf.map((p) => queue.push(p));
		queue.push('|');
	}
	xPOS = spawn[0];
	yPOS = spawn[1];
	rot = 0;
	clearActive();
	checkTopOut();
	updateQueue();
	updateGhost();
	setShape();
	updateHistory();
}

function shuffleQueuePlusHold() {
	if (!holdP) {
		shuffleQueue();
		return;
	}

	index = 0;
	while (index < queue.length && queue[index] != '|') index++;

	tempQueue = queue.slice(0, index).concat(piece, holdP).shuffle().concat('|');
	holdP = tempQueue.shift();
	piece = tempQueue.shift();
	queue = tempQueue;

	while (queue.length < 10) {
		var shuf = names.shuffle();
		shuf.map((p) => queue.push(p));
		queue.push('|');
	}
	xPOS = spawn[0];
	yPOS = spawn[1];
	rot = 0;
	clearActive();
	checkTopOut();
	updateQueue();
	updateGhost();
	setShape();
	updateHistory();
}

function updateKickTable() {
	kicks = kicksets[document.getElementById('kickset').value];
}

function game() {
	callback(undefined, true, true);
}
