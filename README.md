# ENDURIX

Современный многостраничный сайт для бренда ENDURIX: эндуро-тренировки и hard enduro coaching в Московской области, Осеченки.

## Запуск

Установите Node.js LTS с сайта https://nodejs.org, если `npm` еще не установлен.

Откройте PowerShell в папке проекта и выполните:

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:3000`.

Если PowerShell пишет, что `npm` не найден, закройте окно терминала после установки Node.js и откройте заново.

## Фото и логотип

Положите изображения в `public/assets`.

Рекомендуемые файлы:

- `logo-endurix.png`
- `hero-rider.jpg`
- `zakhar-forest.jpg`
- `enduro-view.jpg`
- `gallery-training.jpg`
- `gallery-race.jpg`
- `gallery-ride.jpg`
- `gallery-community.jpg`
- `gallery-travel.jpg`

Если хотите использовать другие названия, замените пути в `data/site.ts`.

## Контакты

Все ссылки и контакты находятся в `data/site.ts`:

- телефон
- Telegram
- TikTok
- локация
- ссылки на изображения

## Деплой на Vercel

1. Загрузите проект в GitHub.
2. В Vercel нажмите `Add New Project`.
3. Выберите репозиторий.
4. Framework Preset: `Next.js`.
5. Нажмите `Deploy`.

Дополнительная настройка не нужна.
