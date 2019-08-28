const name = document.getElementById('firstName');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');

const sub = document.getElementById('btn');

sub.addEventListener('click', function (e) {
  //  e.preventDefault();

    if(name.value === '' || name.value.length < 3 || name.value > 10 || mail.value === '' || pass.value === '' || pass.value.length < 6 ){
        e.preventDefault();
        name.style.borderBottom = '3px solid rgba(205, 0, 0, .3)';
        mail.style.borderBottom = '3px solid rgba(205, 0, 0, .3)';
        pass.style.borderBottom = '3px solid rgba(205, 0, 0, .3)';
        
    } else if (name.value.length > 3  || mail.value !== '' || pass.value !== '' || pass.value.length > 6){
        name.style.borderBottom = '3px solid lightgray';
        mail.style.borderBottom = '3px solid lightgray';
        pass.style.borderBottom = '3px solid lightgray';
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