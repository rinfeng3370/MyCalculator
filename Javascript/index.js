var Num1 = 0;
var tempnum;
var show = "";
var op;
var total;

function showNum(n) {
    if (op == "=") {
        document.getElementById("show").value = " ";
        op = " ";
        show = "";
        document.getElementById("shownum").value = " ";
    }

    document.getElementById("show").value =
        document.getElementById("show").value + n;

}

//清空數字
function clean() {
    document.getElementById("show").value = " ";
    Num1 = 0;
    document.getElementById("shownum").value = " ";
    show = "";
}

function operator(str) {
    
   
    if (op == "=") {

        show = "";
        
    }
     //if 按第一次運算子 else是第二次以後的s運算子
    if(Num1 == 0) {

        Num1 = parseInt(document.getElementById("show").value);

        tempnum = parseInt(document.getElementById("show").value);

        op = str;

        document.getElementById("show").value = " ";


    }
    else {
        tempnum = parseInt(document.getElementById("show").value);

        answer();

        document.getElementById("show").value = total;

        Num1 = parseInt(document.getElementById("show").value);



        op = str;

        document.getElementById("show").value = " ";

    }
    //顯示按=前的計算過程
    if (isNaN(tempnum)) {
        alert("請勿這樣做 請重新計算");
        return clean();
    }

    
    show = show + tempnum + " ";
    show = show + op + " ";
    console.log(tempnum);
    console.log(Num1);
    document.getElementById("shownum").value = show;
}

function answer() {

    //如果沒按下第二個數字 直接按= 會跳出第一個數字
    if (document.getElementById("show").value == " ") {
        document.getElementById("show").value = Num1;
    } else

        switch (op) {

            case "+":

                total = Num1 + parseInt(document.getElementById("show").value);

                document.getElementById("show").value = total;

                break;

            case "-":
                total = Num1 - parseInt(document.getElementById("show").value);

                document.getElementById("show").value = total;

                break;

            case "x":
                console.log(Num1);
                total = Num1 * parseInt(document.getElementById("show").value);

                document.getElementById("show").value = total;

                break;

            case "/":
                total = Num1 / parseInt(document.getElementById("show").value);

                document.getElementById("show").value = total;

                break;

        }

    document.getElementById("shownum").value = "";
    
    op = "=";
    Num1 = 0;



}

