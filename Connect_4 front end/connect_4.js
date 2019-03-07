var playerOne = prompt("Player one : Enter your name, you will be blue");
var playerTwo = prompt("Player two : Enter your name, you will be red");
var dots = $('table tr');
var col = $('table td');
var count = 0;
var arr = [];
var rows = dots.length;
var cols = parseInt(col.length/rows);
function autoRefreshPage(){
       window.location = window.location.href;
}
function printState(count1,flag){
  if(!flag){
    if((count1%2 == 0) && (count1!=42)){
      $('h3').text(playerOne+" : it is your turn, please pick a column to drop your blue chip.");
    }
    else if(count1 == 42){
      $('h2').remove();
      $('h3').remove();
      $('h1').text('Its a tie! The game will auto restart in 10 seconds!');
    }
    else{
      $('h3').text(playerTwo+" : it is your turn, please pick a column to drop your red chip.");
    }
  }
    else if(flag){
      if((count1%2 == 0) && (count1!=42)){
        $('h2').remove();
        $('h3').remove();
        $('h1').text("Congratulations "+playerTwo+" you win! The game will auto restart in 10 seconds!");
        setInterval('autoRefreshPage()', 10000);
      }
      else if(count1 == 42){
        $('h2').remove();
        $('h3').remove();
        $('h1').text('Its a tie!The game will auto restart in 10 seconds!');
        setInterval('autoRefreshPage()', 10000);
      }
      else{
        $('h2').remove();
        $('h3').remove();
        $('h1').text("Congratulations "+playerOne+" you win! The game will auto restart in 10 seconds!");
        setInterval('autoRefreshPage()', 10000);
      }
    }
}
col.click(function(){
    var myCol = $(this).index();
    var rowNum = 5;
    for(var i = 0;i<arr.length;i++){
      if(parseInt(myCol) === parseInt(arr[i])){
        rowNum = rowNum-1;
        if(rowNum === -1){
          alert("All the values of this column are filled! Please try another column!");
          rowNum = 5;
          break;
        }
      }
    }
    arr.push(myCol);
    var color = dots.eq(rowNum).find('td').eq(myCol).find('button').css('background-color');
    if((parseInt(count)%2) == 0){
      if(color == 'rgb(128, 128, 128)'){
        dots.eq(rowNum).find('td').eq(myCol).find('button').css('background-color','#00BFFF');
        count++;
      }
    }
    else{
      if(color == 'rgb(128, 128, 128)'){
        dots.eq(rowNum).find('td').eq(myCol).find('button').css('background-color','#DC143C');
        count++;
      }
    }
    var flag = 0;
    var colorsV = [];
    // var rowNum4 = rowNum;
   if((rowNum<3) && (rowNum>=0)){
       var limit1 = rowNum+4;
       while(rowNum!=limit1){
           colorsV.push(dots.eq(rowNum).find('td').eq(myCol).find('button').css('background-color'));
           rowNum++;
         }
    //   // }
    //   // if(flag1){
         var colors = colorsV[0];
         for(var i = 0; i<colorsV.length; i++){
           if(colorsV[i]!=colors){
             flag = 0;
             break;
           }
           else{
             flag = 1;
           }
        }
         if(flag){
         printState(count,flag);
         return 0;
       }
     }
     if((myCol<3) && (myCol>=0)){
       var colorsH = [];
       var limit2 = myCol+4;
       while(myCol!=limit2){
          colorsH.push(dots.eq(rowNum).find('td').eq(myCol).find('button').css('background-color'));
          myCol++;
        }
        var colors1 = colorsH[0];
       //   for(var i = 0; i<colorsH.length; i++){
       //     if(colorsH[i]!=colors1){
       //       flag = 0;
       //       break;
       //     }
       //     else{
       //       flag = 1;
       //     }
       //  }
       //   if(flag){
       //   printState(count,flag);
       //   return 0;
       // }
     }
    //   printState(count,flag);
    // }
   // else if((rowNum>=3) && (rowNum<rows)){
   //     var colorsV1 = [];
   //  //   var colorsV2 = [];
   //     // var rowNum1 = rowNum;
   //     var limit2 = rowNum-4;
   //     while(rowNum!=limit2){
   //       colorsV1.push(dots.eq(rowNum).find('td').eq(myCol).find('button').css('background-color'));
   //       rowNum--;
   //     }
   //     var colors1 = colorsV1[0];
   //         for(var i = 0; i<colorsV1.length; i++){
   //           if(colorsV1[i]!=colors1){
   //             flag = 0;
   //             break;
   //           }
   //           else{
   //             flag = 1;
   //           }
   //         }
   //    printState(count,flag);
   //  }
    //   var rowNum2 = rowNum;
    //   var limit2 = rowNum+3;
    //   while(limit2<rows){
    //     var rowNum3 = rowNum1;
    //     while(rowNum3!=limit2){
    //         colorsV1.push(dots.eq(rowNum3).find('td').eq(myCol).find('button').css('background-color'));
    //         rowNum3++;
    //     }
    //     var colors1 = colorsV1[0];
    //     for(var i = 0; i<colorsV1.length; i++){
    //       if(colorsV1[i]!=colors1){
    //         flag = 0;
    //         break;
    //       }
    //       else{
    //         flag = 1;
    //       }
    //     }
    //     colorsV1 = [];
    //     limit2++;
    //     rowNum1++;
    //   }
    //   if(flag){
    //     printState(count,flag);
    //   }
    //   else{
    //   while(rowNum2<rows){
    //     var limit3 = rowNum2-3;
    //     while(rowNum2!=limit3){
    //       colorsV2.push(dots.eq(rowNum2).find('td').eq(myCol).find('button').css('background-color'));
    //       rowNum2--;
    //     }
    //     var colors2 = colorsV2[0];
    //     for(var i = 0; i<colorsV2.length; i++){
    //       if(colorsV2[i]!=colors2){
    //         flag = 0;
    //         break;
    //       }
    //       else{
    //         flag = 1;
    //       }
    //     }
    //     rowNum2++;
    //   }
    // }
    //   printState(count,flag);
    // }
      printState(count,flag);
});
