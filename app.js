const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJock();
});

const fetchDadJock = async () => {
  try {
    result.textContent = 'Loading ...';
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-agent': 'app',
      },
    });
    if (!response.ok) {
      throw new Error('Error ... ');
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'There was an error ...';
  }
};

fetchDadJock();
