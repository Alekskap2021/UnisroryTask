# О проекте

## [Live Demo](https://alekskap2021.github.io/UnisroryTask/)

## Техническое задание

- **Сверстать 2 страницы в соответствии с [дизайном](https://www.figma.com/file/ATvmQ5ieU3r5LleCxpeqk9/Unistory-frontend-test?node-id=20%3A117&t=BMPKyEd5ZfGhu81w-1)**
  **Страницы:**

1. Главная страница

2. Страница участника

- **Подключить функционал к страницам:**

1. При открытии страницы, уведомить пользователя о том, что потребуется расширение для браузера.

2. Выполнить подключение криптокошелька (Metamask) при нажатии на кнопку CONNECT METAMASK в хэдере. После подключения необходимо отображать адрес подключенного кошелька вместо кнопки.

3. При заполнении формы, BETA TEST REGISTRATION загрузить данные для таблицы PARTICIPATION LISTING и отобразить ее, введенные данные добавить в начало таблицы. Новая запись должна содержать введенные name, email и адрес подключенного криптокошелька.

4. Сделать удаление созданной записи из таблицы (**другие не должны удаляться!**).

5. Добавить открытие страницы записи (кроме созданной пользователем, сделать ее некликабельной) при нажатии на нее в таблице.

6. Отображать на странице записи ее данные полученные с [api](https://new-backend.unistory.app/api) бекенда.

## Опционально реализовано

1. Динамическая подгрузка данных с бэкенда при скролле в таблице

2. Архитектура приложкния согласно [FSD](https://feature-sliced.design/ru/)

3. Использование [RTKQuery](https://redux-toolkit.js.org/)

4. Деплой приложения на GithubPages

### Слабые места проекта

#### _Хардкод отступов и размерностей, при потенциальном переезде на мобилки могут быть проблемы_

##### Как можно решить?

    - При указании размерностей можно использовать scss mixins и отталкиваться от ширины viewport

##### Почему я этого не сделал?

    - В ТЗ разрешено этим пренебречь

#### _При слишком медленном скролле в нижней части таблицы с пользователями есть риск получить не следующую страницу, а страницу через одну_

Это связано с тем, что в нижней части таблицы есть ренж пикселей, внутри которого отрабатывает запрос на данные.
Соответсвенно, запросов может уйти несколько и мы получим не то, что ожидали.

##### Как можно решить?

    - Можно поиграться с настройками throttle, почитать исходные коды других решений и выбрать оптимальное

##### Почему я этого не сделал?

    - Я ввел в проект самописный trottle, стало ощутимо лучше, редко есть скачки на страницу через одну.
    Счел этот баг не настолько существенным, чтобы затягивать сроки сдачи

## При разработке испольовались

- [CRA](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [RTKQuery](https://redux-toolkit.js.org/)
- [ReactRouter](https://reactrouter.com/en/main)
- [FSD](https://feature-sliced.design/ru/)
- [useDapp](https://usedapp.io/)
- [FramerMotion](https://www.framer.com/motion/)