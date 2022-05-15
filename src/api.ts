import { ItemCard } from "./ItemCard.js";

export class Api {
    static client_id = '394d689d42e44d819e095e2d4d2bc579'; // Your client id
    static client_secret = '541e4e44e0a143619ec35912e7e6988e'; // Your secret
    static token_url = 'https://accounts.spotify.com/api/token'
    static access_token = 'BQDFLn0U3TqcLy8PCUq8lWjaa76yg6eAH51AUaOTq1kRdp82IkxaANqBB3G1LUrFzruXhLetnvc1Lc6PCRQ'

    private static update_token() {
       return fetch(this.token_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(this.client_id + ':' + this.client_secret)
          },
          body: new URLSearchParams({
            'grant_type': 'client_credentials'
          })
        })
        .then(res => res.json()
        )
        .then(res => {
          this.access_token = res.access_token;
          console.log(this.access_token);
        })
    }

    private static checkAuth() : Promise<any> {
      if (this.access_token === null)
        return this.update_token();
      else
        return Promise.resolve();
    }

    static get_new_releases(limit:number = 8) : Promise<ItemCard[]> {
      return this.checkAuth()
      .then(() => fetch(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.access_token,
          'Content-type': 'application/json'
        }
      }))
      .then(res => res.json())
      .then(json => json.albums.items.map(item => 
        new ItemCard(item.name, 
          item.artists.map(artist => artist.name), 
          item.images[1].url, 
          item.href)))
      .catch(alert);
    }
}