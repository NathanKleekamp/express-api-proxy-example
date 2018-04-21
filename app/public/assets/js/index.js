(function(window, document, undefined) {
  const form = document.getElementById('search');
  form.addEventListener('submit', onSubmit);

  function onSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username');

    if (username.value) {
      return getUsername(username.value);
    }
  }

  function getUsername(username) {
    const API = '/api';
    const frag = document.createDocumentFragment();
    const app = document.getElementById('app');
    app.textContent = null;

    axios.get(`${API}/users/${username}`)
      .then(response => {
        const title = document.createElement('h2');
        const name = document.createElement('p');
        const profile = document.createElement('a');
        const image = document.createElement('img');
        const username = response.data.login;

        title.textContent = 'Github API Response';
        name.textContent = `Username: ${username}`;
        profile.href = response.data.html_url;
        profile.textContent = `${username}'s Github Profile`;
        profile.classList = 'profile-link';
        image.src = response.data.avatar_url;
        image.alt = `${username}'s Github profile pic`;
        image.width = 200;
        image.height = 200;

        frag.appendChild(title);
        frag.appendChild(name);
        frag.appendChild(image);
        frag.appendChild(profile);

        if (response.data.plan) {
          const plan = document.createElement('p');
          const planDesc = document.createElement('span');
          planDesc.classList = 'plan';
          planDesc.textContent = response.data.plan.name;
          plan.textContent = 'Paid Plan: ';
          plan.appendChild(planDesc);
          frag.appendChild(plan);
        }

        app.appendChild(frag);
      })
      .catch(error => {
        const htmlErrorMessage = document.createElement('p');
        htmlErrorMessage.style = 'color: red;';
        htmlErrorMessage.textContent = `Ajax Errro: ${error.data.message}`;
        console.error('ajax error', error.data);
      });
  }
}(window, document, undefined));
