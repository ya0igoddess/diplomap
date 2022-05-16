// главный скрипт страницы
import {Api} from './api.js'
import { ItemList } from './ItemList.js';

let mainArea = document.getElementsByClassName('main-area')[0];
Api.get_new_releases()
.then(list => {
    mainArea.appendChild((new ItemList('Недавние релизы', list)).render())
})