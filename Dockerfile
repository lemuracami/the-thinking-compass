# syntax=docker/dockerfile:1.7
#
# Контейнер для локального запуска приложения как Cloudflare Worker
# через wrangler (workerd). Для продакшена используй `wrangler deploy`.

# ---- Этап 1: сборка ----
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json ./
COPY bun.lockb* package-lock.json* ./
RUN bun install

COPY . .
ENV NODE_ENV=production
RUN bun run build

# Патчим сгенерированный wrangler.json: убираем dev.ip=localhost,
# иначе wrangler внутри контейнера слушает только loopback
# и снаружи запросы «висят» без ответа.
RUN node -e "const f='dist/server/wrangler.json';const c=JSON.parse(require('fs').readFileSync(f,'utf8'));c.dev=Object.assign({},c.dev,{ip:'0.0.0.0'});require('fs').writeFileSync(f,JSON.stringify(c));"

# ---- Этап 2: рантайм ----
FROM oven/bun:1 AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

ENV PORT=8787
EXPOSE 8787

WORKDIR /app/dist/server

CMD ["bunx", "wrangler", "dev", "--config", "wrangler.json", "--ip", "0.0.0.0", "--port", "8787"]
