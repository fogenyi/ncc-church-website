# ----- build stage -----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# ----- runtime stage -----
FROM node:20-alpine
WORKDIR /app

# Non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build /app/node_modules ./node_modules
COPY . .

USER appuser
EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", "server.js"]
