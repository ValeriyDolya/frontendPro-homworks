const pageElement = document.querySelector('.homework');

const titleElement = document.createElement('h1');
titleElement.innerHTML = `Valeriy Dolya`;
pageElement.before(titleElement);


pageElement.insertAdjacentText('beforebegin' , `Задача: создать страницу с элементами <h1>,
<p>, <input> и <button> без использования html, а лишь используя
методы объекта window.document. В заголовке <h1> должны быть 
ваше имя и фамилия, в <p> - текст задания, которое вы сейчас
выполняете. В <input> можно что-то ввести, если нажать
на кнопку то будет выведен alert c введенным в поле 
значением и после закрытия alert'а пояле будет очищатьс.`); 
  

const input = document.createElement('input');
pageElement.before(input);

const button = document.createElement('button');
button.innerHTML = `Go`;
pageElement.before(button);
button.onclick = function () {
    alert(input.value);
    input.value = '';
}