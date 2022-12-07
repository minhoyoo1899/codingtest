// 행렬??? 어쩌면 도움이 될 수도?
const lineOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineTwo1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineThr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFiv1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const player1Arr = [lineOne1, lineTwo1, lineThr1, lineFou1, lineFiv1];

const lineOne2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineTwo2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineThr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFou2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFiv2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const player2Arr = [lineOne2, lineTwo2, lineThr2, lineFou2, lineFiv2];

function lengthCount(arr: Array<any>) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
  }
}

lengthCount(player1Arr);

function bingo(bgCnt1: number, bgCnt2: number, player1: Array<any>, player2: Array<any>) {
  
  while (bgCnt1 === bgCnt2) {
    
  }
}