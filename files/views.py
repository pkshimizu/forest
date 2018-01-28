import logging
import os

from django.http import HttpResponse

from forest import settings


def index():
    try:
        with open(os.path.join(settings.WEB_BASE_DIR, 'build', 'index.html')) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        logging.exception('Production build of app not found')
        return HttpResponse(
            """
            This URL is only used when you have built the production
            version of the app. Visit http://localhost:3000/ instead, or
            run `yarn run build` to test the production version.
            """,
            status=500,
        )
