import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.mjs';

const game = new Game();
game.start();