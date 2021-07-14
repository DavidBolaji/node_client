const inputFname = document.querySelector('.fname');
const inputLname = document.querySelector('.lname');
const inputAddress = document.querySelector('.address');
const inputHobbies = document.querySelectorAll('.hobbies');

const form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    let selectArr = [];

    var checked = document.querySelectorAll('.hobbies :checked');
    checked.forEach(check => {
        selectArr.push(check.value);
        check.value = "";
    })

    const fname = inputFname.value;
    inputFname.value = "";
    const lname = inputLname.value;
    inputLname.value = "";
    const address = inputAddress.value;
    inputAddress.value = "";
    


    fetch(`http://localhost:3000/?fname=${fname}&lname=${lname}&address=${address}&hobbies=${selectArr}`, {
        method: 'POST'
    }).then(res => {
        res.json().then(data => {
            console.log(data);
        })
    })

    // console.log(formObj);
})