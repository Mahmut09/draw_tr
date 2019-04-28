
//В классе 
function draw_triangle(symbol,height,step=1){
    let str= '',symbol_str = '';
    for(let j=0;j< step;j++){
        symbol_str+= symbol;
    }
    for(let i=0;i< height;i++){
        str+=symbol_str;
        console.log(str);
    }
}
draw_triangle('*',5)



// С инета
function buildPyramid(tiers, symb) {
    let arr = new Array(tiers).
    fill(' ');
    arr[tiers - 1] = symb;                //Центр елки
    console.log(arr.join(''));
    for(let i = ; i <= tiers; i++){
        arr[arr.length] = symb;      //  Правая часть елки
        arr[tiers - i] = symb;      //  Левая часть елки
        console.log(arr.join(''));
    }
}
buildPyramid(8, '#'); 







/*                  Решить как будут реализованы пробелы
                    Сделать возможность выбора кол-ва уровений пирамиды
                    Сделать возможность переворота пирамиды



    *
   ***
  *****
 *******
*********
*/
//Алгорит Евклида
// нод(a;b) = нод (a-b;b)
/*Нод 45  160
        (45: 115)
        (45:70)
        (45:25)
        (25:20)
        (20:5)
        (5:15)
        (5:10)
    нод(5:5)  
    
    */






   function draw_tree(symbol,space,height,step,final) {
    if(!final){
        return;
    }
}
draw_tree('*',' ',2);
draw_tree('#','-',1);
function draw_tree(space,symbol,height,step=1){
    let str= '',symbol_str = '';
    for(let j=0; step;j++){
        symbol_str+= symbol;
    }
    for(let i=0;i< height;i++){
        str+=symbol_str;
        console.log(str);
    }
}
draw_tree('*',5)

/* 1. Сделать ф-цию чтобы были пробелы, каждый раз на один пробел  меньше
2. Сделать ф-цию для выбора кол-ва уровней у пирамидки
3. Сделать ф-цию для выбора каким символом отрисовывать
4. Сделать ф-цию для переворота пирамидки */


function draw_triangle(space,symbol,height,step=1){
    let str= '',symbol_str = '';
    for(let j=0;j< step;j++){
        symbol_str+= symbol;
    }
    for(let i=0;i< height;i++){
        str+=symbol_str;
        console.log(str);
    }
    for(let g=0;g< space;g++){
        symbol_str+space+=space;
        console.log(str)
    }
}
draw_triangle('*',5)