FROM node:lts-alpine3.22 AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine3.22 AS runner
WORKDIR /app
COPY package*.json .
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production
ENV TZ=UTC

CMD ["node", "dist/main.js"]
