# syntax=docker/dockerfile:1.7
#
# Контейнер для локального запуска приложения как Cloudflare Worker
# через wrangler (workerd). Для продакшена используй `wrangler deploy`.

# ---- Этап 1: сборка ----
FROM oven/bun:1 AS build
WORKDIR /app

# Манифест и лок (звёздочка не падает, если файла нет)
COPY package.json ./
COPY bun.lockb* package-lock.json* ./
RUN bun install

# Исходники и сборка
COPY . .
ENV NODE_ENV=production
RUN bun run build

# ---- Этап 2: рантайм ----
FROM oven/bun:1 AS runtime
WORKDIR /app

# Берём готовый бандл целиком: dist/server содержит сгенерированный
# wrangler.json с корректным main: "index.js" и ссылкой на ../client.
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

ENV PORT=8787
EXPOSE 8787

WORKDIR /app/dist/server

# Запускаем wrangler из dist/server, чтобы он подхватил сгенерированный
# wrangler.json (там main=index.js — реальный собранный воркер).
CMD ["bunx", "wrangler", "dev", "--config", "wrangler.json", "--ip", "0.0.0.0", "--port", "8787"]
