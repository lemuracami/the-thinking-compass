# syntax=docker/dockerfile:1.7
#
# Локальный контейнер для TanStack Start + Cloudflare Workers через wrangler.
# Для продакшена по-прежнему используй `wrangler deploy`.

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
FROM oven/bun:1 AS runtime
WORKDIR /app

# Ставим wrangler в образ заранее, чтобы рантайм не зависел от bunx и сети
RUN bun add -g wrangler@4.85.0
ENV PATH="/root/.bun/bin:${PATH}"
ENV PORT=8787
ENV CI=1
ENV WRANGLER_SEND_METRICS=false

COPY --from=build /app/dist ./dist

EXPOSE 8787
WORKDIR /app/dist/server

CMD ["wrangler", "dev", "--config", "wrangler.json", "--ip", "0.0.0.0", "--port", "8787"]
