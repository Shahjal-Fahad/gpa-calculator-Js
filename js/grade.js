var number=prompt("Enter your number: ");
number=parseInt(number);
var grade;
if(number>=33 && number<=100){
    if(number>=33 && number<=39){
        grade="D";
    }else if(number>=40 && number<=49){
        grade="C";
    }else if(number>=50 && number<=59){
        grade="B";
    }else if(number>=60 && number<=69){
        grade="A-";
    }else if(number>=70 && number<=79){
        grade="A";
    }else{
        grade="A+";
    }

}else if(number<0 || number>100){
    grade="Invalid number!\nPlease enter a number between 0 to 100.\nThank you!";
}else{
    grade="F";
}
console.log("Your number is : ",number);
console.log("Your GPA is : ",grade);

