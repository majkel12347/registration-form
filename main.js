const name = document.getElementById('firstName');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');

const sub = document.getElementById('btn');

const enterName = document.querySelector('.enterName');
const enterMail = document.querySelector('.enterMail');
const enterPass = document.querySelector('.enterPass');


sub.addEventListener('click', function (e) {
  //  e.preventDefault();

    if(name.value === '' || name.value.length < 3 || name.value > 10){
        e.preventDefault();
        name.style.borderBottom = '3px solid rgba(205, 0, 0, .3)';
       
      
        enterName.style.color = 'red'; 
        enterName.innerHTML = 'Please Enter Your Name';
        
    }
    else if( mail.value === ''){
        e.preventDefault();
       
           mail.style.borderBottom = '3px solid rgba(205, 0, 0, .3)';
       
           enterMail.style.color = 'red'; 
           enterMail.innerHTML = 'Please Enter Your Email';

    }
    else if(pass.value === '' || pass.value.length < 6){
        e.preventDefault();

         pass.style.borderBottom = '3px solid rgba(205, 0, 0, .3)';
         enterPass.style.color = 'red'; 
         enterPass.innerHTML = 'Please Enter Your Password';
    }
    
    else if (name.value.length > 3  || mail.value !== '' || pass.value !== '' || pass.value.length > 6){
        name.style.borderBottom = '3px solid lightgray';
        mail.style.borderBottom = '3px solid lightgray';
        pass.style.borderBottom = '3px solid lightgray';
    
        enterName.innerHTML = '';
        enterMail.innerHTML = '';
        enterPass.innerHTML = '';
    
    }
    
});

name.addEventListener('click', ev => {
        ico1.classList.add('play');

});

mail.addEventListener('click', ev => {
    ico2.classList.add('play');
})

pass.addEventListener('click', ev => {
     ico3.classList.add('play');
})

// ok all done