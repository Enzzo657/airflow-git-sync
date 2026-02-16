FROM alpine:3.19

RUN apk add --no-cache \
    git \
    bash \
    coreutils \
    findutils \
    util-linux \
    docker-cli

WORKDIR /opt/sync

COPY entrypoint.sh /entrypoint.sh
COPY redeploy.sh /opt/git-sync/redeploy.sh

RUN chmod +x /entrypoint.sh /opt/git-sync/redeploy.sh

ENTRYPOINT ["/entrypoint.sh"]