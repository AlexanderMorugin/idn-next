<h1 align="center">Слайдер Next.js SSR</h1>

Проект задеплоен на Vercel: https://idn-next-jswp.vercel.app/

![IND-NEXT Demo](/idn-next-promo.png)

## О проекте

- Проект реализован на Next.js 15 (App Router) - TypeScript, с использованием Tailwind в качестве стилизации.

- Состоит из фонтенд и бекенд частей, где бекенд сделан также в Next.js и хостится на сервере Vercel в виде реляционной PostgreSQL базы данных. Там же располагается и фронт часть. Связь Бека с Фронтом осуществляет Prisma.

- Чтобы посмотреть базу бекенд части, нужно запустить команду npm run prisma studio.

- Приложение адаптировано для различных разрешений экрана и браузеров.

- Реализован слайдер с пагинацией, выполненный на лёгкой карусельной библиотеке Embla Carousel. Слайдер пререндерится на сервере. При первичном запросе бекенд отдает статический html с семантической версткой слайдера и контентом.

## Как запустить проект:

Клонирование репозитория

```
git clone https://github.com/AlexanderMorugin/idn-next
```

Установка зависимостей

```
npm i
```

Запуск проекта

```
npm run dev
```

---

Александр Моругин\
февраль 2025г
