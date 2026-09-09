export const examples = {
  pull: {
    name: "bash",
    code: "docker pull enzzo657/airflow-git-sync:latest",
  },
  compose: {
    name: "docker-compose.yml",
    code: 'services:\n  airflow-git-sync:\n    image: enzzo657/airflow-git-sync:latest\n    container_name: airflow-git-sync\n    environment:\n      REPO_URL: ${REPO_URL:?Set REPO_URL}\n      GIT_BRANCH: ${GIT_BRANCH:-master}\n      SYNC_ROOT: /opt/sync\n      AIRFLOW_RESTART_SERVICES: ${AIRFLOW_RESTART_SERVICES:?Set container names}\n      SYNC_INTERVAL: 20\n    volumes:\n      - ./repo:/opt/sync\n      - /var/run/docker.sock:/var/run/docker.sock\n    healthcheck:\n      test: ["CMD", "test", "-f", "/opt/sync/.git/HEAD"]\n      interval: 5s\n      timeout: 5s\n      retries: 12\n      start_period: 10s\n    restart: unless-stopped',
  },
  environment: {
    name: ".env",
    code: "REPO_URL=https://github.com/your-org/your-airflow-dags.git\nGIT_BRANCH=main\nAIRFLOW_RESTART_SERVICES=airflow-airflow-scheduler-1 airflow-airflow-worker-1",
  },
  dependency: {
    name: "docker-compose.yml · Airflow",
    code: "depends_on:\n  airflow-git-sync:\n    condition: service_healthy",
  },
  start: {
    name: "bash",
    code: "docker compose up -d",
  },
} as const;
