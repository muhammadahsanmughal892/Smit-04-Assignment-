let percentage = Number(prompt("Marksheet"));


if(percentage < 0 || percentage > 100){
    alert("Invalid Percentage");
}else if(percentage>=90){
    alert("A+");
}else if(percentage>=80){
    alert("A");
}else if(percentage>=70){
    alert("B");
}else if(percentage>=60){
    alert("C");
}else if(percentage>=50){
    alert("D");
}else {
    alert("Fail");
}