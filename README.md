# Moscow FreeCodeCamp Website

> Небольшой сайт сообщества FreeCodeCamp Moscow.

[![Build Status](https://travis-ci.org/moscow-freecodecamp/website.svg?branch=master)](https://travis-ci.org/moscow-freecodecamp/website)
[![Maintainability](https://api.codeclimate.com/v1/badges/1886fdce2deec4c2caf3/maintainability)](https://codeclimate.com/github/moscow-freecodecamp/website/maintainability)
![David](https://img.shields.io/david/moscow-freecodecamp/website.svg)
![David Dev](https://img.shields.io/david/dev/moscow-freecodecamp/website.svg)

**Ссылка:** [moscow-freecodecamp](http://moscow-freecodecamp.github.io/)

## Немного о стеке

Cайт использует такие технологии, как Gatsby и Semantic UI.

**[Gatsby](https://www.gatsbyjs.org/)** - генератор статичных сайтов, который использует Webpack и React. Документация реакта построена на этой технологии.

**[Semantic UI](http://react.semantic-ui.com/)** - один из популярных CSS фреймворков. Почему именно он, а не Bootstrap или Foundation? Я считаю, что это самый приятных в эксплуатации фреймворк, а также самый недооцененный. [Проект нуждается в контрибьюторах](https://github.com/Semantic-Org/Semantic-UI/issues) и хорошо подходит для того, чтобы внести свой вклад в Open Source проект, который использует тысячи людей.

## Приступая к работе
Для работы вам понадобится установленный [Node.JS](https://nodejs.org/en/download/) желательно последней LTS версии.

Для Mac можно установить через brew

```bash
brew install node
```

## Установка

Для Unix-подобных операционных систем

```bash
1. git clone https://github.com/moscow-freecodecamp/website.git
2. cd website
3. npm install или yarn install
3. npm run sui:build
4. npm run dev

Подождите пока закончится процесс сборки и откройте в браузере: http://localhost:8000/
```

## Деплой
Деплой происходит автоматически в репозиторий [moscow-freecodecamp/moscow-freecodecamp.github.io
](https://github.com/moscow-freecodecamp/moscow-freecodecamp.github.io) после сборки в [Travis CI](https://travis-ci.org/moscow-freecodecamp/website). Потом данные, загруженные в мастер ветку репозитория становятся доступны по url: https://moscow-freecodecamp.github.io/

Также планируется админка при помощи [Netify-CMS](https://www.netlifycms.org/)

## Как создать пост в блоге?

Посты из блога лежат в ```src/pages```, чтобы написать что-то в блог вам нужно будет создать отдельную папку и Markdown файл, открыть пулл реквест и дождаться мерджа.

Эти посты подвержены специальной именной конвенции, поэтому вручную их создавать проблематично. Я рекомендую воспользоваться данной утилитой [DSchau/create-gatsby-blog-post](https://github.com/DSchau/create-gatsby-blog-post)

## Вклад

Непосредственно разработка ведется в ветке #develop. Все изменения в #master доступны на сайте. Вы можете помочь с кодом, текстом и идеями.

Стиль кода:

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Чтобы использовать линтер запустите:

```bash
npm run lint
```

