const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault(); 

    
    document.querySelector('.theform').style.background = 'red';

    
    document.querySelector('body').classList.add('bg-dark');


    document.querySelector('.school').lastElementChild.innerHTML = '<h1>Hello</h1>';

    btn.style.backgroundColor = 'green';
});
