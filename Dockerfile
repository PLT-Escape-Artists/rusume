# Stage 1: Install dependencies
FROM oven/bun:alpine AS install
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# Stage 2: Build the application
FROM install AS builder
WORKDIR /app

COPY . .
RUN bun run build

# Stage 3: Run the damn thing! :D
FROM node:lts-alpine AS runtime
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# This image is meant to be run with Dokploy
# Thats why I do not set any env vars or expose any ports
# => Dokploy will deal with this!

CMD ["node", "./dist/server/entry.mjs"]
