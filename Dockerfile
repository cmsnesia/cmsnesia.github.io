from node:lts-alpine AS builder

WORKDIR /workspace

COPY package.json package.json
RUN npm install

COPY public public/
COPY src src/
COPY babel.config.js babel.config.js
COPY .browserslistrc .browserslistrc
COPY .env.production .env.production
COPY .eslintrc.js .eslintrc.js
COPY .editorconfig .editorconfig
RUN npm run build-prod

FROM nginx:stable-alpine as production-stage

COPY --from=builder /workspace/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
