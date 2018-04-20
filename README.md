# Express API Proxy Example

Use Express to proxy requests to a 3rd party API. Useful for making CORS and authenticated requests.

To use this for making authenticated requests to Github, you'll need to get a [personal API token](https://blog.github.com/2013-05-16-personal-api-tokens/) from Github, and save it in a `.env`:

```
TOKEN='<your token here>'
```

```bash
$ npm install && npm start
```

Then visit [localhost:3000](http://localhost:3000).

To see the proxied `GET: /users/:username` response from Github, visit [http://localhost:3000/api/users/octocat](http://localhost:3000/api/users/octocat)
