 [deploy: react-app](http://react-app-dk.surge.sh/)
 -
[![linc](https://clck.ru/Ry6TY)](http://react-app-dk.surge.sh/)

**_Данное приложение включает в себя следующие элементы:_**

- форма для создания товаров
- форма для поиска товаров
- секция для хранения и отображения добавленных товаров

---

**1. Форма для создания товаров включает в себя следующие обязательные поля ввода:**

![linc](https://clck.ru/Rx5BG)

- название
- артикул
- стоимость
- радиопереключатель сегмента товара (эконом, оптимальный, премиум)
- количество
- дату добавления

  **Необязательные поля ввода:**

- описание товара;
- ссылку на фотографию товара;

---

**2. Форма поиска товаров cодержит следующие секции:**

![linc](https://clck.ru/Rx6Vj)

- строку поиска
- секцию фильтрации товаров по ценовому сегменту
- секцию сортировки поисковой выдачи

  **Строка поиска.**
  При вводе в строку поиска текста, товар фильтруется на основании
  совпадения первого символа.

  **Секция фильтрации товаров по ценовому сегменту:**
  содержит три чекбокса ("Эконом", "Оптимальный", "Премиум"), по умолчанию выбраны все. Нажатие любого из чебоксов мгновенно фильтрует текущий массив товаров,
  оставляя только товары выбранной ценовой категории.

  ***

**3. Карточка товара cодержит следующие данные:**

![linc](https://clck.ru/Ry7gW) ![linc](https://clck.ru/Ry7iS) ![linc](https://clck.ru/Ry7js)

- фотографию (если не добавлена, то отображает "заглушку", надпись "no image" )
- название
- артикул
- стоимость
- количество единиц в наличии
- дату добавления (день, месяц, год будет) достаточно;
- кнопку "Редактировать"
- сообщение "Последний экземпляр!", если текущее количество товара равно 1;
- серую рамку, если товар при создании отнесен к категории "Эконом";
- зеленую рамку, если товар при создании отнесен к категории "Оптимальный";
- желтую рамку, если товар при создании отнесен к категории "Премиум";
- кнопку показать/скрыть описание, если соответствующее поле было добавлено при
  создании товара. По нажатии кнопки в карточке открывается/закрывается секция,
  содержащая информацию о товаре

---

**Режим редактирования.**

![linc](https://clck.ru/Ry7eA) ![linc](https://clck.ru/Ry889) ![linc](https://clck.ru/Ry7xA)

По нажатии кнопки "Редактировать", карточка переходит в режим редактирования, в котором можно изменить следующие значения:

- название
- артикул
- стоимость
- количество единиц в наличии
- адрес ссылки на фотографию.

  Данные, введенные в поля ввода, проверяются также, как при создании товара и не
  сохраняются, пока они не введены корректно. После успешного завершения
  процесса редактирования дата обновления сохраняется автоматически, исходя из
  реальной текущей даты.
  Карточку можно удалить из списка в режиме редактирования, нажав кнопку удалить.

  ***

**4. Валидация данных формы создания товара.**

![linc](https://clck.ru/Rx4nk)

- данные не сохранятся, если не все обязательные поля заполнены;
- поле "Название" должно включать не менее 5 символов
- поле "Артикул" должно начинаться с одной заглавной латинской буквы и далее содержать не менее двух цифр.
- поле "Стоимость" не должно содержать текстовые символы
- поле "Количество" не должно содержать текстовые символы, не должно быть дробным, и должно иметь значение меньше единицы;
  Если поле не валидно, то об этом пользователя уведомляют сообщением рядом с полем ввода, которое поясняет, почему данные не корректны.

  ***

  [![LincedIn](https://clck.ru/RxB7W)](https://www.linkedin.com/in/kaporski/)
