//task 1
let arr=['mango','banana','apple','strawberry'];
for(value of arr)
{
    console.log(value);
}
//task 2
num=prompt("enter a number")
for(let i=1;i<=10;i++)
{
    console.log(num,"X",i,"=",num*i);
}
//task 3
let num1=prompt("enter first number");
let num2=prompt("enter 2nd number");
for(let i=num1;i<=num2;i++)
{
    let count=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            count++;
        }
    }
    if(i>1 && count==0)
    {
        console.log(i);
    }
}
//task 4
let sum=0;
for(let i=1;i<=50;i++)
{
    let count=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            count++;
        }
    }
    if(i>1 && count==0)
    {
        sum=sum+i;
    }
}
console.log("sum of prime numbers from 1 to 50 is " ,sum);