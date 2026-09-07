export const translations = {
  en: {
    codeExample: "Code example",
    environment: "ENVIRONMENT",
    navOverview: "Overview",
    navHow: "How it works",
    navStart: "Quick Start",
    navConfig: "Configuration",
    skip: "Skip to content",
    menu: "Menu",
    eyebrow: "GIT → AIRFLOW. AUTOMATED.",
    headline1: "Your DAGs.",
    headline2: "Your Git.",
    headline3: "Always in sync.",
    heroText:
      "Keep Airflow DAGs and plugins in sync with Git. Deliver repository updates automatically, with service restarts when plugins change.",
    getStarted: "Get started",
    viewGithub: "View on GitHub",
    openSource: "Open source",
    syncFlow: "SYNC FLOW",
    gitRepository: "Git repository",
    dockerCompanion: "Your Docker sync companion",
    repoUpdates: "Repository updates",
    restartOnChange: "Restart on change",
    intervalLabel: "Repeat every SYNC_INTERVAL seconds",
    copy: "Copy",
    heroNote: "One container. One branch. A repeatable sync loop.",
    overviewLabel: "01 / OVERVIEW",
    lessTitle: "Less manual work. More flow.",
    lessText:
      "A Git push should move your code forward. Let a dedicated container handle the repository sync.",
    manualWorkflow: "A manual workflow",
    manualUpdate: "Manual DAG update",
    manualSync: "Manual synchronization",
    withSync: "With Airflow Git Sync",
    featureTitle0: "Automatic Git sync",
    featureText0:
      "Fetch the remote branch on a configurable interval. Keep tracked files aligned with Git.",
    featureTitle1: "Your history. Your workflow.",
    featureText1:
      "Hard reset to the remote branch supports regular commits, squash, rebase, and force-push.",
    featureTitle2: "Plugin change detection",
    featureText2:
      "Compare hashes of the plugins directory before and after synchronization.",
    featureTitle3: "Targeted container restarts",
    featureText3:
      "Restart the configured Airflow containers when the plugin directory hash changes.",
    featureTitle4: "At home in Docker",
    featureText4:
      "Run alongside Airflow with a shared repository mount and a Compose healthcheck.",
    featureTitle5: "Five environment variables",
    featureText5:
      "Set the repository, branch, local path, polling interval, and containers to restart.",
    howLabel: "02 / UNDER THE HOOD",
    howTitle: "A small loop.\nA clear pipeline.",
    howText:
      "Clone on the first run. Fetch, reset, and clean on each pass. Then compare the plugin hashes and restart containers if needed.",
    readScript: "Read the sync script",
    periodicSync: "periodic sync",
    sharedFiles: "shared files",
    ifChanged: "if changed → restart",
    airflowServices: "Airflow containers",
    startLabel: "03 / QUICK START",
    startTitle: "From Git to DAGs.",
    startIntro: "Add a sync companion to your existing Airflow stack.",
    composeSource: "Original Compose example",
    pullTitle: "Pull the image",
    pullText:
      "Use the published Docker image from the project README. Docker with Compose is required.",
    composeTitle: "Add the sync service",
    composeText:
      "Merge this service into your Airflow Compose file. This adapts the repository example to read your settings from a local .env file.",
    socketNote:
      "The Docker socket mount lets the container restart other containers on the host. Mount ./repo into Airflow too, with DAG and plugin paths matching your repository layout.",
    envTitle: "Set your environment",
    envText:
      "Create .env next to the Compose file. Replace the URL, branch, and container names with your values. AIRFLOW_RESTART_SERVICES uses space-separated Docker container names, not Compose service keys.",
    authNote:
      "For a private repository, provide a URL with credentials as in the upstream example. Keep credentials out of version control.",
    runTitle: "Wait for Git. Start Airflow.",
    runText:
      "Add this dependency to each Airflow service that reads the repository. Preserve its existing dependencies. The healthcheck waits for .git/HEAD; it does not validate DAGs. Then start the stack.",
    syncCaution:
      "Use a dedicated checkout: synchronization resets tracked files and removes untracked and ignored files, with Python cache exclusions in the script. Keep local work outside SYNC_ROOT.",
    configLabel: "04 / CONFIGURATION",
    configTitle: "Small config. Full control.",
    configIntro: "Four required values. One optional polling interval.",
    configCaption: "Environment variable reference",
    variable: "Variable",
    default: "Default",
    description: "Description",
    required: "Required",
    variable0:
      "Git repository URL. Must be accessible from the sync container.",
    variable1:
      "Checkout directory inside the container. The Compose example uses /opt/sync, mounted from ./repo.",
    variable2:
      "Remote branch to synchronize. The Compose example uses master; set your actual branch.",
    variable3:
      "Seconds to sleep after each sync completes. Optional; the Compose example sets 20 seconds.",
    variable4:
      "Space-separated Docker container names to restart when the plugins directory hash changes.",
    workflowLabel: "05 / THE EVERYDAY WORKFLOW",
    workflowTitle: "Push your code. The loop takes it from here.",
    workflowName0: "Developer",
    workflowDesc0: "git push",
    workflowName1: "Git repository",
    workflowDesc1: "Remote branch updated",
    workflowName2: "Airflow Git Sync",
    workflowDesc2: "Next poll fetches changes",
    workflowName3: "Airflow",
    workflowDesc3: "Reads the synchronized DAGs",
    workflowBranch:
      "Plugins changed? The configured Airflow containers restart after sync.",
    communityLabel: "OPEN SOURCE, FROM THE START",
    communityTitle: "Small tool. Open possibilities.",
    communityText:
      "Read the code, report a bug, or contribute a change. Airflow Git Sync is open source under the MIT license.",
    viewSource: "View source",
    reportIssue: "Report an issue",
    contribute: "Contribute",
    footerLicense: "Open source · MIT License",
    license: "License",
    copied: "Copied!",
    copyFailed: "Could not copy. Select and copy the code manually.",
    pageTitle: "Airflow Git Sync — Keep your DAGs in sync",
    metaDescription:
      "Automatically sync Airflow DAGs from Git. A lightweight Docker companion with history-independent updates and plugin-triggered container restarts.",
    mainNavigation: "Main navigation",
  },
  ru: {
    codeExample: "Пример кода",
    environment: "ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ",
    navOverview: "Обзор",
    navHow: "Как работает",
    navStart: "Быстрый старт",
    navConfig: "Настройки",
    skip: "Перейти к содержимому",
    menu: "Меню",
    eyebrow: "GIT → AIRFLOW. АВТОМАТИЧЕСКИ.",
    headline1: "Ваши DAG’и.",
    headline2: "Ваш Git.",
    headline3: "Всегда в такт.",
    heroText:
      "Синхронизируйте DAG’и и плагины Airflow с Git. Обновления репозитория доставляются автоматически, а изменения плагинов запускают перезапуск сервисов.",
    getStarted: "Начать",
    viewGithub: "Смотреть на GitHub",
    openSource: "Открытый код",
    syncFlow: "СХЕМА СИНХРОНИЗАЦИИ",
    gitRepository: "Git-репозиторий",
    dockerCompanion: "Контейнер синхронизации",
    repoUpdates: "Обновления из Git",
    restartOnChange: "Перезапуск при изменении",
    intervalLabel: "Повтор каждые SYNC_INTERVAL секунд",
    copy: "Копировать",
    heroNote: "Один контейнер. Одна ветка. Регулярная синхронизация.",
    overviewLabel: "01 / ОБЗОР",
    lessTitle: "Меньше ручной работы. Больше порядка.",
    lessText:
      "Git push отправляет код вперёд. Отдайте синхронизацию репозитория отдельному контейнеру.",
    manualWorkflow: "Ручной процесс",
    manualUpdate: "Обновить DAG’и вручную",
    manualSync: "Синхронизировать вручную",
    withSync: "С Airflow Git Sync",
    featureTitle0: "Автоматическая синхронизация",
    featureText0:
      "Проверяйте удалённую ветку с заданным интервалом. Поддерживайте отслеживаемые файлы в соответствии с Git.",
    featureTitle1: "Любая история коммитов",
    featureText1:
      "Сброс к удалённой ветке поддерживает обычные коммиты, squash, rebase и force-push.",
    featureTitle2: "Отслеживание плагинов",
    featureText2: "Сравнивайте хеши каталога plugins до и после синхронизации.",
    featureTitle3: "Перезапуск нужных контейнеров",
    featureText3:
      "Перезапускайте указанные контейнеры Airflow при изменении хеша каталога плагинов.",
    featureTitle4: "Всё в Docker",
    featureText4:
      "Запускайте рядом с Airflow, используя общий каталог репозитория и healthcheck в Compose.",
    featureTitle5: "Пять переменных окружения",
    featureText5:
      "Задайте репозиторий, ветку, локальный путь, интервал проверки и контейнеры для перезапуска.",
    howLabel: "02 / ПОД КАПОТОМ",
    howTitle: "Простой цикл.\nПонятный процесс.",
    howText:
      "Клонирование при первом запуске. Затем fetch, reset и clean на каждом проходе. После — сравнение хешей плагинов и перезапуск контейнеров при необходимости.",
    readScript: "Открыть скрипт синхронизации",
    periodicSync: "регулярная синхронизация",
    sharedFiles: "общие файлы",
    ifChanged: "при изменении → перезапуск",
    airflowServices: "Контейнеры Airflow",
    startLabel: "03 / БЫСТРЫЙ СТАРТ",
    startTitle: "От Git к DAG’ам.",
    startIntro: "Добавьте контейнер синхронизации в существующий стек Airflow.",
    composeSource: "Исходный пример Compose",
    pullTitle: "Скачайте образ",
    pullText:
      "Используйте опубликованный Docker-образ из README проекта. Понадобится Docker с Compose.",
    composeTitle: "Добавьте сервис синхронизации",
    composeText:
      "Добавьте сервис в Compose-файл Airflow. Пример из репозитория адаптирован для чтения ваших настроек из локального файла .env.",
    socketNote:
      "Доступ к Docker socket позволяет перезапускать другие контейнеры хоста. Подключите ./repo и к Airflow, настроив пути DAG’ов и плагинов под структуру репозитория.",
    envTitle: "Задайте окружение",
    envText:
      "Создайте .env рядом с Compose-файлом. Укажите свои URL, ветку и имена контейнеров. AIRFLOW_RESTART_SERVICES принимает имена Docker-контейнеров через пробел, а не ключи сервисов Compose.",
    authNote:
      "Для закрытого репозитория укажите URL с учётными данными, как в исходном примере. Не добавляйте секреты в Git.",
    runTitle: "Дождитесь Git. Запустите Airflow.",
    runText:
      "Добавьте эту зависимость каждому сервису Airflow, который читает репозиторий, сохранив существующие зависимости. Healthcheck ожидает .git/HEAD, но не проверяет DAG’и. Затем запустите стек.",
    syncCaution:
      "Используйте отдельный рабочий каталог: синхронизация сбрасывает отслеживаемые файлы и удаляет неотслеживаемые и игнорируемые, с исключениями для кеша Python в скрипте. Храните локальные изменения вне SYNC_ROOT.",
    configLabel: "04 / НАСТРОЙКИ",
    configTitle: "Короткий конфиг. Всё под контролем.",
    configIntro: "Четыре обязательных значения. Один необязательный интервал.",
    configCaption: "Справочник переменных окружения",
    variable: "Переменная",
    default: "По умолчанию",
    description: "Описание",
    required: "Обязательно",
    variable0: "URL Git-репозитория, доступного из контейнера синхронизации.",
    variable1:
      "Каталог репозитория внутри контейнера. В Compose-примере — /opt/sync, подключённый из ./repo.",
    variable2:
      "Удалённая ветка для синхронизации. В Compose-примере — master; укажите свою ветку.",
    variable3:
      "Пауза в секундах после завершения синхронизации. Необязательно; в Compose-примере — 20 секунд.",
    variable4:
      "Имена Docker-контейнеров через пробел для перезапуска при изменении хеша каталога plugins.",
    workflowLabel: "05 / ЕЖЕДНЕВНЫЙ ПРОЦЕСС",
    workflowTitle: "Отправьте код. Дальше — цикл синхронизации.",
    workflowName0: "Разработчик",
    workflowDesc0: "git push",
    workflowName1: "Git-репозиторий",
    workflowDesc1: "Удалённая ветка обновлена",
    workflowName2: "Airflow Git Sync",
    workflowDesc2: "Следующая проверка получает изменения",
    workflowName3: "Airflow",
    workflowDesc3: "Читает синхронизированные DAG’и",
    workflowBranch:
      "Плагины изменились? После синхронизации указанные контейнеры Airflow перезапустятся.",
    communityLabel: "ОТКРЫТЫЙ КОД С ПЕРВОГО ДНЯ",
    communityTitle: "Небольшой инструмент. Открытые возможности.",
    communityText:
      "Изучайте код, сообщайте об ошибках и предлагайте изменения. Airflow Git Sync — проект с открытым кодом под лицензией MIT.",
    viewSource: "Исходный код",
    reportIssue: "Сообщить об ошибке",
    contribute: "Внести вклад",
    footerLicense: "Открытый код · Лицензия MIT",
    license: "Лицензия",
    copied: "Скопировано!",
    copyFailed: "Не удалось скопировать. Выделите и скопируйте код вручную.",
    pageTitle: "Airflow Git Sync — Синхронизация DAG’ов с Git",
    metaDescription:
      "Автоматическая синхронизация DAG’ов Airflow с Git. Docker-контейнер с обновлениями независимо от истории и перезапуском при изменении плагинов.",
    mainNavigation: "Основная навигация",
  },
} as const;
export type Language = keyof typeof translations;
