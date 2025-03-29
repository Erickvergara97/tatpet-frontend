FROM node:22.13.1-alpine

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar archivos de package
COPY package*.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto de archivos
COPY . .

# Construir la aplicación
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]
