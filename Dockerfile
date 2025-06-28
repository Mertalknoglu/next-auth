# 1. Build Stage
FROM node:18-alpine AS builder
WORKDIR /app

# Paket bağımlılıklarını yükle
COPY package.json package-lock.json ./
RUN npm ci

# Uygulama kodunu kopyala ve derle
COPY . .
RUN npm run build

# 2. Production Stage
FROM node:18-alpine AS runner
WORKDIR /app

# Sadece production bağımlılıklarını yükle
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Derlenmiş dosyaları al
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./

# Ortam değişkenleri
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "run", "start"]
