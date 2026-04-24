# syntax=docker/dockerfile:1.7
#
# Локальный контейнер для TanStack Start + Cloudflare Workers через wrangler.
# Для продакшена используй `wrangler deploy`.

# ---- Этап 1: сборка ----
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json ./
COPY bun.lockb* package-lock.json* ./
RUN bun install

COPY . .
ENV NODE_ENV=production
RUN bun run build

# Делаем сгенерированный wrangler.json самодостаточным для контейнера:
# - убираем ссылки на исходный wrangler.jsonc с хоста
# - фиксируем bind на 0.0.0.0, чтобы сервер был доступен извне контейнера
RUN node -e "const fs=require('fs');const p='dist/server/wrangler.json';const c=JSON.parse(fs.readFileSync(p,'utf8'));delete c.configPath;delete c.userConfigPath;c.dev=Object.assign({},c.dev,{ip:'0.0.0.0'});fs.writeFileSync(p,JSON.stringify(c));"

# ---- Этап 2: рантайм ----
# Wrangler нужно запускать на Node, а не на Bun: у Bun есть известные проблемы
# с wrangler/miniflare, особенно в контейнерных сценариях.
FROM node:20-slim AS runtime
WORKDIR /app

ENV PORT=8787 \
    CI=1 \
    WRANGLER_SEND_METRICS=false \
    npm_config_update_notifier=false

RUN npm install -g wrangler@4.85.0

COPY --from=build /app/dist ./dist

EXPOSE 8787
WORKDIR /app/dist/server

CMD ["wrangler", "dev", "--config", "wrangler.json", "--ip", "0.0.0.0", "--port", "8787"]
