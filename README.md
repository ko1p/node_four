## node.projectFour

Ссылка на проект: [node.projectFour](https://github.com/ko1p/node_four "REST API проекта Mesto")

Текущая версия: **v0.0.1**

## Что это за проект?

Выполняю задание по созданию REST API проекта Mesto. В данном проекте валидирую запросы на сервер, делаю логирование ошибок и запросов, создаю и настраиваю облачный сервер Яндекс.Облако, подключаю свой домен, выпускаю сертификаты для работы по HTTPS  .:floppy_disk:

## Ссылки:

Фронтенд проекта:

`mestoapp.cf`

`www.mestoapp.cf`

Бэкенд проекта:

`api.mestoapp.cf`

`www.api.mestoapp.cf`

`84.201.165.252`

***Доступ возможен по протоколам http и https, лицензия - Let's Encrypt.***

## Запуск и настройка:

#### Клонируем приложение:

    https://github.com/ko1p/node_four.git

#### Настройка:

Проект работает с MongoDB, по умолчанию подключение происходит по адресу:

_mongodb://localhost:27017/mestodb_

поменять настройки можно в конфигурационном файле **config.js**, находящемся в корне проекта.

При запуске проекта в режиме production предварительно необходимо создать файл формата .env и указать ключ для шифрования): 
```
  NODE_ENV=production
  JWT_SECRET=some_key
```
Сгенерировать ключ автоматически можно введя следующую команду в консоль:

    node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

#### Установка необходимых модулей
Введите в терминале следующие команды:

    npm install
#### Запуск MongoDB
    mongod
#### Запуск приложения
В режиме production (необходима предварительная настройка)

    node run start
    
или в режиме разработки с функцией "Hot Reload"

    node run dev 

### Список возможных запросов:

Перед началом работы необходима предварительная регистрация (POST/signup) и аутентификации (POST/signin).

**POST /signup**

Регистрация нового пользователя. В теле POST-запроса передаётся JSON-объект с именем пользователя, адресом электронной почты, паролем, краткой информацией о себе и ссылкой на аватар:
```json
// JSON
{
  "name": "userName",
  "email": "awesome@mail.net",
  "password": "123456789",
  "about": "A few words about me",
  "avatar": "https://images.domain.ru/awesome_image.jpg"
}
```
**POST /signin**

Авторизация пользователя после регистрации. В теле POST-запроса передаётся JSON-объект с информацией указанной при регистрации:
```json
// JSON
{
	"email": "awesome@mail.net",
	"password": "123456789"
}
```

**GET /users**

Сервер вернёт список всех созданных пользователей.

**GET /cards** 

Сервер вернёт список всех созданных карточек.

**GET /users/userId**

Сервер вернёт информацию о пользователе с указанным id.

**POST /cards** 

Создание карточки. В теле POST-запроса передаётся JSON-объект с названием карточки и ссылкой на её изображение:
```json
// JSON
{
	"name": "cardName",
	"link": "https://images.domain.ru/card_image.jpg"
}
```

**DELETE /cards/cardId**

Сервер удалит карточку по её cardID и в случае успеха вернёт её данные.


###  Используемые технологии:

- JS
- Git
- Node.js (express)
- MongoDB

###  Используемые модули:

- body-parser
- helmet
- dotenv
- jsonwebtoken
- bcryptjs
- validator
- cookieParser
- rateLimit
- celebrate
