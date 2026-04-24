# syntax=docker/dockerfile:1.7
#
# Контейнер для запуска приложения локально как Cloudflare Worker
# через wrangler (workerd). Для продакшена используй `wrangler deploy`,
# а не этот образ.

# ---- Этап 1: сборка ----
FROM oven/bun:1 AS build
WORKDIR /app

# Копируем манифест и лок (звёздочка не падает, если файла нет)
COPY package.json ./
COPY bun.lockb* package-lock.json* ./
RUN bun install

# Копируем исходники и собираем
COPY . .
ENV NODE_ENV=production
RUN bun run build

# ---- Этап 2: рантайм ----
FROM oven/bun:1 AS runtime
WORKDIR /app

# Бандл воркера + конфиг wrangler + зависимости (нужны для bunx wrangler)
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/wrangler.jsonc ./wrangler.jsonc

ENV PORT=8787
EXPOSE 8787

# wrangler поднимает workerd и обслуживает собранный бандл
CMD ["bunx", "wrangler", "dev", "--ip", "0.0.0.0", "--port", "8787"]
