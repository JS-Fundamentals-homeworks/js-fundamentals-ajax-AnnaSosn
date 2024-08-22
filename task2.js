// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
// Додаємо обробник події на кнопку



document.getElementById('getUserButton').addEventListener('click', function() {
    const userName = document.getElementById('userNameInput').value.trim(); 

    if (userName === '') {
        alert('Please enter a user name');
        return;
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => {
            const user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());
            const userCitySpan = document.getElementById('userCity');

            if (user) {
                userCitySpan.textContent = `City: ${user.address.city}`;
            } else {
                userCitySpan.textContent = 'User not found';
            }
        })
        .catch(error => {
            console.error('Error fetching users:', error); 
            document.getElementById('userCity').textContent = 'Error fetching user data';
        });
});
