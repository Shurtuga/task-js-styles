/*
Создайте функции:
   hasClass(elem, elemСlass),
   addClass(elem, elemСlass),
   removeClass(elem, elemСlass),
   toggleClass(elem, elemСlass),
которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему CSS-класс, удалить CSS-класс и переключить CSS-класс.

В функции передаются 2 параметра:
   elem - DOM-элемент, который проверяется,
   elemСlass - название класса, которое проверяется.
*/

export function hasClass(elem, elemClass) {
    let item = elem;
    if (item.classList == null || item.classList == undefined) return false;
    return item.classList.contains(elemClass);
}

export function addClass(elem, elemClass) {
    let item = elem;
    if (!hasClass(elem, elemClass)) item.classList.add(elemClass);
}

export function removeClass(elem, elemClass) {
    let item = elem;
    if (hasClass(elem, elemClass)) item.classList.remove(elemClass);
}

export function toggleClass(elem, elemClass) {
    let item = document.body;
    item = elem;
    item.classList.toggle(elemClass);
}
