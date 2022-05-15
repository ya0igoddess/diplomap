import { ItemCard } from "./ItemCard.js";
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.update_token = function () {
        var _this = this;
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
            .then(function (res) { return res.json(); })
            .then(function (res) {
            _this.access_token = res.access_token;
            console.log(_this.access_token);
        });
    };
    Api.checkAuth = function () {
        if (this.access_token === null)
            return this.update_token();
        else
            return Promise.resolve();
    };
    Api.get_new_releases = function (limit) {
        var _this = this;
        if (limit === void 0) { limit = 8; }
        return this.checkAuth()
            .then(function () { return fetch("https://api.spotify.com/v1/browse/new-releases?limit=".concat(limit), {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + _this.access_token,
                'Content-type': 'application/json'
            }
        }); })
            .then(function (res) { return res.json(); })
            .then(function (json) { return json.albums.items.map(function (item) {
            return new ItemCard(item.name, item.artists.map(function (artist) { return artist.name; }), item.images[1].url, item.href);
        }); })
            .catch(alert);
    };
    Api.client_id = '394d689d42e44d819e095e2d4d2bc579'; // Your client id
    Api.client_secret = '541e4e44e0a143619ec35912e7e6988e'; // Your secret
    Api.token_url = 'https://accounts.spotify.com/api/token';
    Api.access_token = 'BQDFLn0U3TqcLy8PCUq8lWjaa76yg6eAH51AUaOTq1kRdp82IkxaANqBB3G1LUrFzruXhLetnvc1Lc6PCRQ';
    return Api;
}());
export { Api };
//# sourceMappingURL=api.js.map