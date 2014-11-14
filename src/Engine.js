'use strict';

var paletto = function () {

    var board;


        var init=function (){
            board = new Array(6);
            for(var i=0; i<6; i++){
                board[i]=new Array(6);
            for(var j=0;j<6;j++){
                board[i][j]= " Black ";
            }
        }

    };

    this.isColor = function() {
        var test = 0;
        for (var i = 0; i < 6; i++)
        {
            for (var j = 0; j < 6; j++)
            {

                if (board[i][j] = board [i][j + 1] ||
                    (board [i][j] = board[i][j - 1]) ||
                    (board[i][j] = board [i + 1][j]) || (board [i][j] = board [i - 1][j])
                    )
                {
                    test = 0;
                }

                else (test = 1);

            }
         }
        return test;
     };

    init()

};
