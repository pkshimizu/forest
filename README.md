# forest

## 環境設定
python version : 3.6.3
```bash
python -m venv forest-env
source forest-env/bin/activate
pip3 install pipenv
pipenv install

## 開発環境設定
forest/local_settings.py
```$xslt
from forest.settings import MIDDLEWARE

# For develop
MIDDLEWARE.append('files.middleware.dev_cors_middleware')
``````

