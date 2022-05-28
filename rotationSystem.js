pieces = {
	I: [
		[
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
	],
	L: [
		[
			[0, 0, 0, 0],
			[0, 0, 1, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[1, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
	],
	J: [
		[
			[0, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
		],
	],
	Z: [
		[
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 1, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
		],
	],
	T: [
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 1, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
		],
	],
	S: [
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[1, 1, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
		],
	],
	O: [
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
	],
};

kicksets = {
	'SRS+': {
		// Kicks
		'N0-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N1-0': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N1-2': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N2-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N2-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],
		'N3-2': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N3-0': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N0-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],

		// 180 Kicks
		'N0-2': [
			[0, 0],
			[0, 1],
			[1, 1],
			[-1, 1],
			[1, 0],
			[-1, 0],
		],
		'N1-3': [
			[0, 0],
			[1, 0],
			[1, 2],
			[1, 1],
			[0, 2],
			[0, 1],
		],
		'N2-0': [
			[0, 0],
			[0, -1],
			[-1, -1],
			[1, -1],
			[-1, 0],
			[1, 0],
		],
		'N3-1': [
			[0, 0],
			[-1, 0],
			[-1, 2],
			[-1, 1],
			[0, 2],
			[0, 1],
		],

		// I Piece Kicks
		'I0-1': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[-2, -1],
			[1, 2],
		],
		'I1-0': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[-1, -2],
			[2, 1],
		],
		'I1-2': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[-1, 2],
			[2, -1],
		],
		'I2-1': [
			[0, 0],
			[-2, 0],
			[1, 0],
			[-2, 1],
			[1, -2],
		],
		'I2-3': [
			[0, 0],
			[2, 0],
			[-1, 0],
			[2, 1],
			[-1, -2],
		],
		'I3-2': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, 2],
			[-2, -1],
		],
		'I3-0': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, -2],
			[-2, 1],
		],
		'I0-3': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[2, -1],
			[-1, 2],
		],

		// I Piece 180 Kicks
		'I0-2': [
			[0, 0],
			[0, 1],
		],
		'I1-3': [
			[0, 0],
			[1, 0],
		],
		'I2-0': [
			[0, 0],
			[0, -1],
		],
		'I3-1': [
			[0, 0],
			[-1, 0],
		],
	},
	SRS: {
		// Kicks
		'N0-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N1-0': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N1-2': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N2-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N2-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],
		'N3-2': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N3-0': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N0-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],

		// 180 Kicks
		'N0-2': [
			[0, 0],
			[0, 1],
			[1, 1],
			[-1, 1],
			[1, 0],
			[-1, 0],
		],
		'N1-3': [
			[0, 0],
			[1, 0],
			[1, 2],
			[1, 1],
			[0, 2],
			[0, 1],
		],
		'N2-0': [
			[0, 0],
			[0, -1],
			[-1, -1],
			[1, -1],
			[-1, 0],
			[1, 0],
		],
		'N3-1': [
			[0, 0],
			[-1, 0],
			[-1, 2],
			[-1, 1],
			[0, 2],
			[0, 1],
		],

		// I Piece Kicks
		'I0-1': [
			[0, 0],
			[-2, 0],
			[1, 0],
			[-2, -1],
			[1, 2],
		],
		'I1-0': [
			[0, 0],
			[2, 0],
			[-1, 0],
			[2, 1],
			[-1, -2],
		],
		'I1-2': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[-1, 2],
			[2, -1],
		],
		'I2-1': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, -2],
			[-2, 1],
		],
		'I2-3': [
			[0, 0],
			[2, 0],
			[-1, 0],
			[2, 1],
			[-1, -2],
		],
		'I3-2': [
			[0, 0],
			[-2, 0],
			[1, 0],
			[-2, -1],
			[1, 2],
		],
		'I3-0': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, -2],
			[-2, 1],
		],
		'I0-3': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[-1, 2],
			[2, -1],
		],

		// I Piece 180 Kicks
		'I0-2': [
			[0, 0],
			[0, 1],
		],
		'I1-3': [
			[0, 0],
			[1, 0],
		],
		'I2-0': [
			[0, 0],
			[0, -1],
		],
		'I3-1': [
			[0, 0],
			[-1, 0],
		],
	},
	'SRS-X': {
		// Kicks
		'N0-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N1-0': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N1-2': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N2-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N2-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],
		'N3-2': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N3-0': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N0-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],

		// 180 Kicks
		'N0-2': [
			[0, 0],
			[1, 0],
			[2, 0],
			[1, -1],
			[2, -1],
			[-1, 0],
			[-2, 0],
			[-1, -1],
			[-2, -1],
			[0, 1],
			[3, 0],
			[-3, 0],
		],
		'N1-3': [
			[0, 0],
			[0, -1],
			[0, -2],
			[-1, -1],
			[-1, -2],
			[0, 1],
			[0, 2],
			[-1, 1],
			[-1, 2],
			[1, 0],
			[0, -3],
			[0, 3],
		],
		'N2-0': [
			[0, 0],
			[-1, 0],
			[-2, 0],
			[-1, 1],
			[-2, 1],
			[1, 0],
			[2, 0],
			[1, 1],
			[2, 1],
			[0, -1],
			[-3, 0],
			[3, 0],
		],
		'N3-1': [
			[0, 0],
			[0, -1],
			[0, -2],
			[1, -1],
			[1, -2],
			[0, 1],
			[0, 2],
			[1, 1],
			[1, 2],
			[-1, 0],
			[0, -3],
			[0, 3],
		],

		// I Piece Kicks
		'I0-1': [
			[0, 0],
			[-2, 0],
			[1, 0],
			[-2, -1],
			[1, 2],
		],
		'I1-0': [
			[0, 0],
			[2, 0],
			[-1, 0],
			[2, 1],
			[-1, -2],
		],
		'I1-2': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[-1, 2],
			[2, -1],
		],
		'I2-1': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, -2],
			[-2, 1],
		],
		'I2-3': [
			[0, 0],
			[2, 0],
			[-1, 0],
			[2, 1],
			[-1, -2],
		],
		'I3-2': [
			[0, 0],
			[-2, 0],
			[1, 0],
			[-2, -1],
			[1, 2],
		],
		'I3-0': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, -2],
			[-2, 1],
		],
		'I0-3': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[-1, 2],
			[2, -1],
		],

		// I Piece 180 Kicks
		'I0-2': [
			[0, 0],
			[-1, 0],
			[-2, 0],
			[1, 0],
			[2, 0],
			[0, -1],
		],
		'I1-3': [
			[0, 0],
			[0, -1],
			[0, -2],
			[0, 1],
			[0, 2],
			[-1, 0],
		],
		'I2-0': [
			[0, 0],
			[1, 0],
			[2, 0],
			[-1, 0],
			[-2, 0],
			[0, 1],
		],
		'I3-1': [
			[0, 0],
			[0, -1],
			[0, -2],
			[0, 1],
			[0, 2],
			[1, 0],
		],
    },
    "Tetra-Online": {
		// Kicks
		'N0-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N1-0': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N1-2': [
			[0, 0],
			[1, 0],
			[1, -1],
			[0, 2],
			[1, 2],
		],
		'N2-1': [
			[0, 0],
			[-1, 0],
			[-1, 1],
			[0, -2],
			[-1, -2],
		],
		'N2-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],
		'N3-2': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N3-0': [
			[0, 0],
			[-1, 0],
			[-1, -1],
			[0, 2],
			[-1, 2],
		],
		'N0-3': [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, -2],
			[1, -2],
		],

		// 180 Kicks
		'N0-2': [
			[0, 0],
			[0, 1],
			[1, 1],
			[-1, 1],
			[1, 0],
			[-1, 0],
		],
		'N1-3': [
			[0, 0],
			[1, 0],
			[1, 2],
			[1, 1],
			[0, 2],
			[0, 1],
		],
		'N2-0': [
			[0, 0],
			[0, -1],
			[-1, -1],
			[1, -1],
			[-1, 0],
			[1, 0],
		],
		'N3-1': [
			[0, 0],
			[-1, 0],
			[-1, 2],
			[-1, 1],
			[0, 2],
			[0, 1],
		],

		// I Piece Kicks
		'I0-1': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, 2],
			[-2, -1],
		],
		'I1-0': [
			[0, 0],
			[-2, 0],
			[1, 0],
			[-2, -1],
			[1, 2],
		],
		'I1-2': [
			[0, 0],
			[2, 0],
			[-1, 0],
			[2, -1],
			[-1, 2],
		],
		'I2-1': [
			[0, 0],
			[1, 0],
			[-2, 0],
			[1, -2],
			[-2, 1],
		],
		'I2-3': [
			[0, 0],
			[-1, 0],
			[2, 0],
            [-1, -2],
            [2, 1],
		],
		'I3-2': [
			[0, 0],
			[2, 0],
			[-1, 0],
			[2, 1],
			[-1, -2],
		],
		'I3-0': [
			[0, 0],
			[-2, 0],
			[1, 0],
            [-2, 1],
			[1, -2],
		],
		'I0-3': [
			[0, 0],
			[-1, 0],
			[2, 0],
			[-1, 2],
			[2, -1],
		],

		// I Piece 180 Kicks
		'I0-2': [
			[0, 0],
			[0, 1],
		],
		'I1-3': [
			[0, 0],
			[1, 0],
		],
		'I2-0': [
			[0, 0],
			[0, -1],
		],
		'I3-1': [
			[0, 0],
			[-1, 0],
		],
	},
	ASC: {
		// Kicks
		'N0-1': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'N1-0': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],
		'N1-2': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'N2-1': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],
		'N2-3': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'N3-2': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],
		'N3-0': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'N0-3': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],

		// 180 Kicks
		'N0-2': [[0, 0]],
		'N1-3': [[0, 0]],
		'N2-0': [[0, 0]],
		'N3-1': [[0, 0]],

		// I Piece Kicks
		'I0-1': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'I1-0': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],
		'I1-2': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'I2-1': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],
		'I2-3': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'I3-2': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],
		'I3-0': [
			[0, 0],
			[-1, 0],
			[0, -1],
			[-1, -1],
			[0, -2],
			[-1, -2],
			[-2, 0],
			[-2, -1],
			[-2, -2],
			[1, 0],
			[1, -1],
			[0, 1],
			[-1, 1],
			[-2, 1],
			[1, -2],
			[2, 0],
			[0, 2],
			[-1, 2],
			[-2, 2],
			[2, -1],
			[2, -2],
			[1, 1],
		],
		'I0-3': [
			[0, 0],
			[1, 0],
			[0, -1],
			[1, -1],
			[0, -2],
			[1, -2],
			[2, 0],
			[2, -1],
			[2, -2],
			[-1, 0],
			[-1, -1],
			[0, 1],
			[1, 1],
			[2, 1],
			[-1, -2],
			[-2, 0],
			[0, 2],
			[1, 2],
			[2, 2],
			[-2, -1],
			[-2, -2],
			[-1, 1],
		],

		// I Piece 180 Kicks
		'I0-2': [[0, 0]],
		'I1-3': [[0, 0]],
		'I2-0': [[0, 0]],
		'I3-1': [[0, 0]],
	},
	none: {
		// Kicks
		'N0-1': [
			[0, 0]
		],
		'N1-0': [
			[0, 0]
		],
		'N1-2': [
			[0, 0]
		],
		'N2-1': [
			[0, 0]
		],
		'N2-3': [
			[0, 0]
		],
		'N3-2': [
			[0, 0]
		],
		'N3-0': [
			[0, 0]
		],
		'N0-3': [
			[0, 0]
		],

		// 180 Kicks
		'N0-2': [
			[0, 0]
		],
		'N1-3': [
			[0, 0]
		],
		'N2-0': [
			[0, 0]
		],
		'N3-1': [
			[0, 0]
		],

		// I Piece Kicks
		'I0-1': [
			[0, 0]
		],
		'I1-0': [
			[0, 0]
		],
		'I1-2': [
			[0, 0]
		],
		'I2-1': [
			[0, 0]
		],
		'I2-3': [
			[0, 0]
		],
		'I3-2': [
			[0, 0]
		],
		'I3-0': [
			[0, 0]
		],
		'I0-3': [
			[0, 0]
		],

		// I Piece 180 Kicks
		'I0-2': [
			[0, 0]
		],
		'I1-3': [
			[0, 0]
		],
		'I2-0': [
			[0, 0]
		],
		'I3-1': [
			[0, 0]
		],
	},
};

// source: https://i.imgur.com/G76TJ.gif
res_3 = [
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
    ],
    [
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 0, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[0, 0, 1, 1],
    ],
    [
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[1, 0, 0, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 1],
    ],
    [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
    ],
    [
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[0, 1, 0, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 0, 1, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 1, 1],
    ],
    [
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 1, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[0, 1, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[1, 0, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[1, 0, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[1, 1, 0, 0],
    ],
    [
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 1, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[0, 1, 1, 0],
    ],
    [
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 0, 0, 1],
		[1, 0, 1, 0],
    ],
    [
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 0, 1],
    ],
    [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 0],
    ],
    [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
	],
];