import { Api } from './api.js';
import { ItemList } from './ItemList.js';
var mainArea = document.getElementsByClassName('main-area')[0];
Api.get_new_releases()
    .then(function (list) {
    mainArea.appendChild((new ItemList('Недавние релизы', list)).render());
});
//# sourceMappingURL=main.js.map