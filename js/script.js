let arr = [
    [-1, -1, -1, -1, 'dr', 'dkn', 'db', 'dq', 'dk', 'db', 'dkn', 'dr', -1, -1, -1, -1],
    [-1, -1, -1, -1, 'dp', 'dp', 'dp', 'dp', 'dp', 'dp', 'dp', 'dp', -1, -1, -1, -1],
    [-1, -1, -1, -1, '0', '0', '0', '0', '0', '0', '0', '0', -1, -1, -1, -1],
    [-1, -1, -1, -1, '0', '0', '0', '0', '0', '0', '0', '0', -1, -1, -1, -1],
    ['gr', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rr'],
    ['gkn', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rkn'],
    ['gb', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rb'],
    ['gq', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rq'],
    ['gk', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rk'],
    ['gb', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rb'],
    ['gkn', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rkn'],
    ['gr', 'gp', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rp', 'rr'],
    [-1, -1, -1, -1, '0', '0', '0', '0', '0', '0', '0', '0', -1, -1, -1, -1],
    [-1, -1, -1, -1, '0', '0', '0', '0', '0', '0', '0', '0', -1, -1, -1, -1],
    [-1, -1, -1, -1, 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', -1, -1, -1, -1],
    [-1, -1, -1, -1, 'wr', 'wkn', 'wb', 'wq', 'wk', 'wb', 'wkn', 'wr', -1, -1, -1, -1]

]

let figurePos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, // darc
                 47, 63, 79, 95, 111, 127, 143, 159, 46, 62, 78, 94, 110, 126, 142, 158, //red
                 184, 185, 186, 187, 188, 189, 190, 191, 176, 177, 178, 179, 180, 181, 182, 183, //white
                32, 48, 64, 80, 96, 112, 128, 144, 33, 49, 65, 81, 97, 113, 129, 145 // green
                ]

$(function () {

    //     розстановка фігур//////////////////////////////////////////
    let startPos = 181;
    let step = 45;
    for (let i = 0; i < $('.pawn_white').length; i++) {
        $('.pawn_white').eq(i).css({
            left: (startPos + step * (i)) + 'px',
        })
    }
    for (let i = 0; i < $('.pawn_dark').length; i++) {
        $('.pawn_dark').eq(i).css({
            left: (startPos + step * (i)) + 'px',
        })
    }
    for (let i = 0; i < $('.main_dark').length; i++) {
        $('.main_dark').eq(i).css({
            left: (startPos + step * (i)) + 'px',
        })
    }
    for (let i = 0; i < $('.main_white').length; i++) {
        $('.main_white').eq(i).css({
            left: (startPos + step * (i)) + 'px',
        })
    }
    for (let i = 0; i < $('.main_green').length; i++) {
        $('.main_green').eq(i).css({
            top: (startPos + step * (i)) + 'px',
        })
    }
    for (let i = 0; i < $('.pawn_green').length; i++) {
        $('.pawn_green').eq(i).css({
            top: (startPos + step * (i)) + 'px',
        })
    }
    for (let i = 0; i < $('.main_red').length; i++) {
        $('.main_red').eq(i).css({
            top: (startPos + step * (i)) + 'px',
            left: '676px'
        })
    }
    for (let i = 0; i < $('.pawn_red').length; i++) {
        $('.pawn_red').eq(i).css({
            top: (startPos + step * (i)) + 'px',
        })
    }
    //////////////////// розстановка фігур//////////////////////////
    $('#btn_menu').click(function () {
        $('.container').css({
            display: 'none'
        })
        $('.menu').css({
            display: 'flex'
        })
    })


    $('#play').click(function () {
        $('.container').css({
            display: 'flex'
        })
        $('.menu').css({
            display: 'none'
        })
    })

    function Check(i, j) {

        if (i < 16)
            if (i > 0)
                if (j < 16)
                    if (j > 0)
                        if (arr[i][j] != '-1')
                            if (arr[i][j] == '0')
                                return true;
        return false;
    } // пустої клітинки ігрового поля 
    function CheckColor(i, j, x, y) {
        if (arr[i][j][0] == arr[y][x][0])
            return true
        return false
    }

    function CheckFigure(i, j) {
        if (i < 16)
            if (i >= 0)
                if (j < 16)
                    if (j >= 0)
                        if (arr[i][j] != '-1')
                            return true;
        return false;
    } // обмеження ігрового поля


    let arrFunction = [
        function (y, x) { //move rook

            let tempArr = [];
            let i, j;
            for (i = y + 1, j = x; Check(i, j); i++) {
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y - 1, j = x; Check(i, j); i--) {
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y, j = x + 1; Check(i, j); j++) {
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y, j = x - 1; Check(i, j); j--) {
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {

                tempArr.push({
                    i,
                    j
                })
            }
            return tempArr;


        },
        function (y, x) { // move knight

            let tempArr = []
            let cell = [
                {
                    i: y - 1,
                    j: x - 2
                },
                {
                    i: y - 2,
                    j: x - 1
                },
                {
                    i: y - 2,
                    j: x + 1
                },
                {
                    i: y - 1,
                    j: x + 2
                },
                {
                    i: y + 1,
                    j: x + 2
                },
                {
                    i: y + 2,
                    j: x + 1
                },
                {
                    i: y + 2,
                    j: x - 1
                },
                {
                    i: y + 1,
                    j: x - 2
                }
            ]
            for (let k = 0; k < cell.length; k++) {
                if (CheckFigure(cell[k].i, cell[k].j)) {
                    let i = cell[k].i
                    let j = cell[k].j
                    if (arr[cell[k].i][cell[k].j] != '0') {
                        if (!CheckColor(cell[k].i, cell[k].j, x, y))
                            tempArr.push({
                                i,
                                j

                            })
                    } else {
                        tempArr.push({
                            i,
                            j

                        })
                    }
                }
            }
            //            console.log(tempArr)
            return tempArr;
                    },
        function (y, x) { //move bishop
            //            console.log("x=" + x)
            //            console.log("y=" + y)
            let tempArr = [];
            let i, j;
            for (i = y + 1, j = x + 1; Check(i, j); i++, j++) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y - 1, j = x - 1; Check(i, j); i--, j--) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y - 1, j = x + 1; Check(i, j); i--, j++) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y + 1, j = x - 1; Check(i, j); i++, j--) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            //            console.log(tempArr)
            return tempArr;


        },
        function (y, x) { //move king
            //            console.log("x=" + x)
            //            console.log("y=" + y)
            let tempArr = []
            let cell = [
                {
                    i: y - 1,
                    j: x - 1
                }, {
                    i: y - 1,
                    j: x
                }, {
                    i: y - 1,
                    j: x + 1
                }, {
                    i: y,
                    j: x - 1
                }, {
                    i: y,
                    j: x + 1
                }, {
                    i: y + 1,
                    j: x - 1
                }, {
                    i: y + 1,
                    j: x
                }, {
                    i: y + 1,
                    j: x + 1
                }
            ]
            for (let k = 0; k < cell.length; k++) {
                if (CheckFigure(cell[k].i, cell[k].j)) {
                    let i = cell[k].i
                    let j = cell[k].j
                    if (arr[cell[k].i][cell[k].j] != '0') {
                        if (!CheckColor(cell[k].i, cell[k].j, x, y))
                            tempArr.push({
                                i,
                                j

                            })
                    } else {
                        tempArr.push({
                            i,
                            j

                        })
                    }
                }
            }
            //            console.log(tempArr)
            return tempArr;
                    },
        function (y, x) { //move queen
            //            console.log("x=" + x)
            //            console.log("y=" + y)
            let tempArr = [];
            let i, j;
            for (i = y + 1, j = x; Check(i, j); i++) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y - 1, j = x; Check(i, j); i--) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y, j = x + 1; Check(i, j); j++) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y, j = x - 1; Check(i, j); j--) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            for (i = y + 1, j = x + 1; Check(i, j); i++, j++) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y - 1, j = x - 1; Check(i, j); i--, j--) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y - 1, j = x + 1; Check(i, j); i--, j++) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            for (i = y + 1, j = x - 1; Check(i, j); i++, j--) {
                //                console.log(arr[i][j])
                tempArr.push({
                    i,
                    j
                })
            }
            if (CheckFigure(i, j) && !CheckColor(i, j, x, y)) {
                tempArr.push({
                    i,
                    j
                })
            }

            //            console.log(tempArr)
            return tempArr;
                    },
        function (y, x) { //move pawn
            let tempArr = [];
            //red pawn
            if (arr[y][x][0] == 'r') {
                let j = x - 1;
                let i = y
                tempArr.push({i,j})
                if (x == 14) {
                    --j
                    tempArr.push({i,j})
                }
                i = y - 1
                j = x - 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})
                i = y + 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})

            }
            //green pawn
            if (arr[y][x][0] == 'g') {
                let j = x + 1
                let i = y
                tempArr.push({i,j})
                if (x == 1) {
                    ++j
                    tempArr.push({i,j})
                }
                i = y + 1
                j = x + 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})
                i = y - 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})

            }
            //darc pawn  
            if (arr[y][x][0] == 'd') {
                let j = x
                let i = y + 1
                tempArr.push({i,j})
                if (y == 1) {
                    ++i
                    tempArr.push({i,j})
                }
                i = y + 1
                j = x + 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})
                j = x - 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})

            }
            //white pawn
            if (arr[y][x][0] == 'w') {
                let j = x
                let i = y - 1
                tempArr.push({i,j})
                if (y == 14) {
                    --i
                    tempArr.push({i,j})
                }
                i = y - 1
                j = x + 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})
                j = x - 1
                if (arr[i][j] != '0' && CheckFigure(i, j) && !CheckColor(i, j, x, y))
                    tempArr.push({i,j})

            }
            return tempArr;


            //            console.log(tempArr);
    }

    ]


    function GetPositionI(index) {
        let i;
        if (index < 32) {
            i = Math.floor(index / 8)

        }
        if (index > 32 && index < 160) {
            i = Math.floor((index - 32) / 16) + 4
        }
        if (index > 159) {
            i = Math.floor((index - 160) / 8) + 12
        }
        return i;
    }

    function GetPositionJ(index) {
        let j;
        if (index < 32) {
            j = Math.floor(index % 8) + 4

        }
        if (index > 32 && index < 160) {
            j = Math.floor((index - 32) % 16)
        }
        if (index > 159) {
            j = Math.floor((index - 160) % 8) + 4
        }
        return j;
    }


    let colorFigure = 'w'
    let figureColorIndex = 1;

    function ChangeColor() {
        let colors = ['w', 'g', 'd', 'r']
        let col = ['white', 'green', 'dack', 'red']
        figureColorIndex++;
        while ($('.' + col[figureColorIndex - 1] + '_king').css('display') == 'none') {
            if (figureColorIndex > 3)
                figureColorIndex = 0
            figureColorIndex++;
        }
        colorFigure = colors[figureColorIndex - 1]
        if (figureColorIndex > 3)
            figureColorIndex = 0

        $('p').css({
            color: 'black',
            fontSize: '32px',
            fontWeight: '400'
        })
        $('p').eq(figureColorIndex - 1).css({
            color: 'red',
            fontSize: '36px',
            fontWeight: '900'
        })
    }

    function CheckColorMove(i, j) {
        if (arr[i][j][0] == colorFigure)
            return true
        return false

    }

    function CounterPoints(figureColorIndex, i, j) {
        let points = [{
            'figure': "p",
            'points': 1

        }, {
            'figure': "r",
            'points': 5
        }, {
            'figure': "b",
            'points': 5
        }, {
            'figure': "q",
            'points': 9
        }, {
            'figure': "k",
            'points': 20
        }]
        let temp = 0;
        for (let k = 0; k < points.length; k++) {
            if (arr[i][j][1] == points[k].figure && arr[i][j][2] == undefined) {
                temp = parseInt($('.player').eq(figureColorIndex - 1).text()) + points[k].points
                $('.player').eq(figureColorIndex - 1).text(temp)
            }
        }
        if (arr[i][j][1] == 'k' && arr[i][j][2] == 'n') {
            temp = parseInt($('.player').eq(figureColorIndex - 1).text()) + 5
            $('.player').eq(figureColorIndex - 1).text(temp)
        }

    }


    function DeleteFigures(color) {

        let col;
        if (color == 'w')
            col = 'white'
        if (color == 'g')
            col = 'green'
        if (color == 'd')
            col = 'dark'
        if (color == 'r')
            col = 'red'

        $('.pawn_' + col).css({
            display: 'none'
        })
        $('.main_' + col).css({
            display: 'none'
        })
        for (let i = 0; i < 16; i++)
            for (let j = 0; j < 16; j++)
                if (arr[i][j][0] == color)
                    arr[i][j] = '0'

    }

    function CheckChach(mas) {

        for (let k = 0; k < mas.length; k++) {
            if (arr[mas[k].i][mas[k].j][1] == 'k' && arr[mas[k].i][mas[k].j][2] == undefined) {
                return true
            }
        }
        return false
    }
    let indexFigure;
    // отримуємо індекс фігури
    let moveGameCell; //клітинка на яку можна походити
    let tempArr

    function MoveGameCell(index) {
        let i = GetPositionI(figurePos[index])
        let j = GetPositionJ(figurePos[index])

        let mas;

        //        let figure = arr[i][j][1];
        if (arr[i][j][1] == 'r') {
            mas = arrFunction[0](i, j)
        }
        if (arr[i][j][1] == 'b') {
            mas = arrFunction[2](i, j)
        }
        if (arr[i][j][1] == 'k') {
            mas = arrFunction[3](i, j)
        }
        if (arr[i][j][1] == 'k' && arr[i][j][2] == 'n') {
            mas = arrFunction[1](i, j)
        }
        if (arr[i][j][1] == 'q') {
            mas = arrFunction[4](i, j)
        }
        if (arr[i][j][1] == 'p') {
            mas = arrFunction[5](i, j)
        }
        //        console.log(mas)
        return mas;
    }

    let figure
    $('.figure').each(function (index, element) {
        $(element).click(function () {

            let i = GetPositionI(figurePos[index])
            let j = GetPositionJ(figurePos[index])
            //            figure = arr[i][j][1]

            moveGameCell = MoveGameCell(index) //отримуємо клітинки на які можна походити  

            let y = GetPositionI(indexFigure);
            let x = GetPositionJ(indexFigure);
            //                console.log(arr[i][j][1])
            if (indexFigure != undefined && indexFigure != index) {

                if (SearhInArr(i, j, tempArr)) {


                    SwapFigure(index, indexFigure)
                    figurePos[indexFigure] = figurePos[index];
                    DeleteFigure(index)
                    indexFigure = undefined
                } else {

                    $('.figure').eq(indexFigure).animate({
                            backgroundColor: 'red'
                        }, 1000)
                        ('.figure').eq(indexFigure).animate({
                            backgroundColor: 'white'
                        }, 1000)
                }

            } else {


                if (CheckColorMove(i, j)) {
                    indexFigure = index;
                    tempArr = moveGameCell

                }
            }

        })
    })
    //видалення побитої фігри
    function DeleteFigure(indexFigure) {

        $('.figure').eq(indexFigure).css({
            display: "none"
        })
    }

    //відстежування ходів фігур
    function SwapPos(index, indexFigure) {

        let t = GetPositionI(index);
        let l = GetPositionJ(index);
        let i = GetPositionI(indexFigure);
        let j = GetPositionJ(indexFigure);

        let temp = arr[t][l];
        arr[t][l] = arr[i][j];
        arr[i][j] = temp;

        ChangeColor()

    }

    function SwapFigure(index, indexFigure) {
        let t = GetPositionI(figurePos[index]);
        let l = GetPositionJ(figurePos[index]);
        let i = GetPositionI(figurePos[indexFigure]);
        let j = GetPositionJ(figurePos[indexFigure]);

        console.log('arr=' + arr[t][l])
        if (arr[t][l][1] == 'k' && arr[t][l][2] == undefined) {
            CounterPoints(figureColorIndex, t, l)
            DeleteFigures(arr[t][l][0])
        }
        $('.figure').eq(indexFigure).css({
            left: l * 45 + 'px',
            top: t * 45 + 'px'

        })
        CounterPoints(figureColorIndex, t, l)

        arr[t][l] = arr[i][j];
        arr[i][j] = "0";

        figurePos[indexFigure] = index;
        //        CheckChach(MoveGameCell(indexFigure))
        ChangeColor()
    }
    // перевірка чи точка знаходитьсчя в масиві

    function SearhInArr(i, j, move) {
        if (move === undefined)
            return false
        for (let k = 0; k < move.length; k++) {
            if (move[k].i == i)
                if (move[k].j == j)
                    return true;
        }


        return false;
    }

    function failMove(i, j) {
        console.log(i);
        console.log(j);

        let indexMoveFail = 0;
        if (i < 4) {
            indexMoveFail = i * 8 + (j - 4);
        }
        if (i < 12 && i > 3) {
            indexMoveFail = (i - 4) * 16 + 32 + j;
        }
        if (i > 11) {
            indexMoveFail = (i - 12) * 8 + 160 + (j - 4);
        }

        console.log(figurePos)
        console.log(indexMoveFail)
        for (let k = 0; k < figurePos.length; k++) {
            if (indexMoveFail == figurePos[k]) {
                indexMoveFail = k;
                break;
            }
        }
    }
    //ставимо фігуру на клітинку
    $('.gamecell').each(function (index, elem) {
        $(elem).click(function () {
            let t = GetPositionI(index);
            let l = GetPositionJ(index);



            if (SearhInArr(t, l, moveGameCell)) {

                SwapPos(index, figurePos[indexFigure])
                figurePos[indexFigure] = index;
                console.log(CheckChach(MoveGameCell(indexFigure)))
                $('.figure').eq(indexFigure).css({
                    left: l * 45 + 'px',
                    top: t * 45 + 'px'

                })
                $('.figure').css({
                    transition: '0.7s'
                })
            } else {
                $('.figure').css({
                    transition: 'none'
                })
                $('.figure').eq(indexFigure).animate({
                    left: '+=10px',
                    top: '-=10px'

                }, 200)
                $('.figure').eq(indexFigure).animate({
                    left: '-=10px',
                    top: '+=10px'
                }, 200)


            }


            indexFigure = undefined;

        })
    })



})