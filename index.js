//N1
console.log('N1_______________________');
for (let i = 5; i <=100; i++)
{
    console.log(i);
}
//N2
console.log('N2_______________________');
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(let i=0; i<array1.length; i++)
{
    if(array1[i]>0 && array1[i]<10){
        console.log(array1[i]);
    }
    else{}
}
//N3
console.log('N3_______________________');
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i<array1.length; i++){
    if(array2[i]==5){
        console.log('არის');
        break;
    }
    else{}
}

//N4
console.log('N4_______________________');
let array3= [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i<array3.length; i++){
    sum = sum + array3[i];
}
console.log(sum);

//N5
console.log('N5_______________________');
let array4 = [1, 2, 3, 7, 6, 9];
let sum2 = 0;
for(let i = 0; i<array4.length; i++){
    sum2 = sum2 + array4[i];
}
console.log(sum2/array4.length);

//N6
console.log('N6_______________________');
let array5 = [1, 2, 3, 7, 6, 9];
for(let i = 0; i<array5.length; i++){
    if(array5[i]==7){
        continue;
    }
    else{
        console.log(array5[i]);
    }
}
//N7
console.log('N7_______________________');
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
  
  console.log(user.studentstatus);
  //N8
  console.log('N8_______________________');
  let user2 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
    if(user2.age<20 && user2.studentstatus == "active"){
        console.log('hello');
    }
    else if(user2.name == 'levani'){
        console.log('hello levani');
    }
    else if(user2.studentstatus == "active" || user2.age < 25){
        console.log('hello world');
    }
    else{
        console.log('error');
    }
    //N9
  console.log('N9_______________________');
  let array6 = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];
    for(let i =0; i<array6.length; i++){
        for(j=0; j<array6[i].length; j++){
            if(array6[i][j]>0){
                console.log(array6[i][j]);
            }
            else{}
        }
    }
    //N10-1
    console.log('N10-1_______________________');
    let numbers = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
     for(i=0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            console.log(numbers[i]);
        }
        else{}
     }
    //N10-2
    console.log('N10-2_______________________');
    let numbers2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
     for(i=0; i<numbers2.length; i++){
        if(numbers2[i]%2==1){
            console.log(numbers2[i]);
        }
        else{}
     }
     //N11
    console.log('N11_______________________');
    let users = [
        {username: 'giorgi', status: false},
        {username: 'levani', status: false},
        {username: 'anna', status: true}
    ]
    for(let i = 0; i<users.length; i++){
        if(users[i].status==true){
            console.log(users[i]);
        }
    }