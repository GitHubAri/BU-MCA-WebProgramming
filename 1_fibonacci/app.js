function fibonacci(){
    var i, next_value;
    var t1 = 0, t2 = 1;
    var arr = [];
    arr[0] = 0;

    for(i = 0; i<10; i++){
        arr[i] = t1;
        next_value = t1+t2;
        t1 = t2;
        t2 = next_value;
    }
    document.getElementById("print-list").innerHTML = "Seris: "+arr;
    alert("Fibonacci Seris genrated.");
}