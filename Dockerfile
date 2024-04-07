FROM node:18-alpine

ARG GH_TOKEN
ENV GH_TOKEN=$GH_TOKEN

WORKDIR "/app"

COPY npmrc.sh package.json pnpm-lock.yaml tsconfig.json ./

RUN export GH_TOKEN=$GH_TOKEN

RUN chmod +x ./npmrc.sh && sh npmrc.sh

RUN npm i -g pnpm@8.15.6

RUN pnpm install --frozen-lockfile

COPY . .

CMD [ "pnpm", "run", "start" ]

# Expose the gRPC port
EXPOSE 50051
