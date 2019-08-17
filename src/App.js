import React from 'react';
import GithubCorner from 'react-github-corner';
import Tetris from './components/Tetris';

export default () => (
	<div className="App">
		<Tetris />
		<GithubCorner href="https://github.com/estebansolo/TetrisGame" />
	</div>
);
