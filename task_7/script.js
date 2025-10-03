const userContainer = document.getElementById('userContainer');
const errorMessage = document.getElementById('errorMessage');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUsers() {
  userContainer.innerHTML = '';
  errorMessage.classList.add('hidden');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(users => {
      users.forEach((user, index) => {
        const card = document.createElement('div');
        card.className = 'userCard';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
      errorMessage.classList.remove('hidden');
    });
}

reloadBtn.addEventListener('click', fetchUsers);

fetchUsers();
