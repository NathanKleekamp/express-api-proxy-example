(function(window, document, undefined) {
  const API = '/api';
  const app = document.getElementById('app');
  const frag = document.createDocumentFragment();

  axios.get(`${API}/users/octocat`)
    .then(response => {
      const title = document.createElement('h2');
      const name = document.createElement('p');
      const profile = document.createElement('a');
      const image = document.createElement('img');
      const username = response.data.login;

      title.textContent = 'Github API Response:';
      name.textContent = `Username: ${username}`;
      profile.href = response.data.html_url;
      profile.textContent = `${username}'s Github Profile`;
      profile.style = 'display: block;';
      image.src = response.data.avatar_url;
      image.alt = `${username}'s Github profile pic`;
      image.width = 200;
      image.height = 200;

      frag.appendChild(title);
      frag.appendChild(name);
      frag.appendChild(image);
      frag.appendChild(profile);
      app.appendChild(frag);
    })
    .catch(error => console.error('ajax error', error));
}(window, document, undefined));
