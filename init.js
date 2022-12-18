
function clear () {
    document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#genderOutput').innerText = '';
    document.querySelector('#surnameOutput').innerText = '';
    document.querySelector('#birthYearOutput').innerText = '';
    document.querySelector('#patronymicOutput').innerText = '';
    document.querySelector('#professionOutput').innerText = '';
}

window.onload = clear();

document.querySelector('#btnGenerate').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthday;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
}); 

document.querySelector('#btnClean').addEventListener('click', clear);
