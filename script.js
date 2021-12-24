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


(function($){
    $(function(){
  
      $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });
      
      $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      });
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
