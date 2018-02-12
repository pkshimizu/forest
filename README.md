# forest

## 環境設定
python version : 3.6.3
```bash
$ pip install -r requirements.txt
```

## 開発環境設定
forest/local_settings.py
```$xslt
from forest.settings import MIDDLEWARE

# For develop
MIDDLEWARE.append('files.middleware.dev_cors_middleware')
```
