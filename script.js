let counter= 0;
// Form parts
const basicInformation =  document.querySelector('.basic-information');
const gettingToKnowYou = document.querySelector('.getting-to-know-you');
const getPaid = document.querySelector('.get-paid');


//array
const formBits =[basicInformation, gettingToKnowYou, getPaid];
const tabheaders = document.querySelectorAll('.tabheader');
console.log(tabheaders);

// button
const nextButton = document.querySelector('.form-btn');

nextButton.addEventListener('click', e =>{
    e.preventDefault();

   if(counter < formBits.length){
        formBits[counter].classList.add('hide');
        tabheaders[counter].classList.remove('current-tab')
    
        counter++;

        formBits[counter].classList.remove('hide');
        tabheaders[counter].classList.add('current-tab')
    }else{
        counter = 0;
    }

})



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() +' '+  `${today.getHours < 12 ? 'AM' : 'PM'}`;

today = mm + '/' + dd + '/' + yyyy +" "+ time;
document.querySelector('#dateTime').value = `${today}`;
document.querySelector('#endDateTime').value = `${today}`;
console.log(today);
// document.write(today);