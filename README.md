# Airflow Git Sync

🎉 What if you could instantly sync DAG changes from **Git** to **Airflow** without manually restarting the airflow services?

<p align=center>
    <img src="images/git_sync.jpg" width="450" height="200" alt="airflow git sync"/>
</p>


## Table of Contents 🏗️

- [Airflow Git Sync](#airflow-git-sync)
  - [Table of Contents 🏗️](#table-of-contents-️)
  - [Project Description 🌱](#project-description-)
  - [Project Usage 🧑‍💻](#project-usage-)
  - [License 📄](#license-)

## Project Description 🌱

The airflow-git-sync script ensures that the local repo is identical to the remote one, updates are independent of commit history, and can work with squash, rebase, and git push --force. It also has a trigger: when the plugins directory in the repository changes, it restarts the airflow services.


## Project Usage 🧑‍💻

1. Pull image:
```bash
sudo docker pull enzzo657/airflow-git-sync:latest
```

2. Healtcheck in compose is mandatory with the addition of airflow services:
```yml
depends_on:
    airflow-git-sync:
      condition: service_healthy
```
so that git-sync has time to pick up the repository

3. Run container
```bash
sudo docker compose up -d
```
With the required variables:

    | Variable | Description |
    | --- | --- |
    | `REPO_URL` | The URL of the Git repository to sync |
    | `SYNC_ROOT` | A directory inside the container for storing the repository |
    | `GIT_BRANCH` | The Git branch to sync |
    | `SYNC_INTERVAL` | The interval (in seconds) to sync the repository |
    | `AIRFLOW_RESTART_SERVICES` |  list of container names to restart when changing plugins (airflow-airflow-scheduler-1 or airflow-airflow-worker-1) |


## License 📄

This repository is licensed under the MIT License, which is a permissive open-source license that allows for reuse and modification of the code with few restrictions. You can find the full text of the license in [this](LICENSE) file.
