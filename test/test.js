'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {

    var game = new paletto();
    assertTrue(game.isColor() == 0);

};

PalettoTestCase.prototype.testStory2 = function () {

    var game = new paletto();
    assertTrue(game.isYellow() == "yellow");
};

PalettoTestCase.prototype.testStory3 = function () {

    var game = new paletto();
    game.RemovePiece();
    assertTrue(game.getNumberPiece() == 35);
};

PalettoTestCase.prototype.testStory4 = function () {

    var game = new paletto();
    game.RemovePiece();
    game.RemovePiece();
    assertTrue(game.getNumberPiece() == 33);
};