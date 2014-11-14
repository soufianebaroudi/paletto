'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {

    var game = new paletto();
    assertTrue (game.isColor()== 0);

};
