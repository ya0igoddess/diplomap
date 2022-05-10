export class Api {
    client_id = '394d689d42e44d819e095e2d4d2bc579'; // Your client id
    client_secret = '541e4e44e0a143619ec35912e7e6988e'; // Your secret
    token_url = 'https://accounts.spotify.com/api/token'
    static access_token = null

    authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
      };

    static update_token() {
        fetch(this.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
          },
          body: new URLSearchParams({
            'grant_type': 'client_credentials'
          })
        })
        .then(res => {
          this.auth_token = res.body.access_token
        })
    }

    static get_example() {
      return fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.access_token
        }
      })
      .then(res => res)
    }

    
}