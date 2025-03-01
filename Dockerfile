FROM python:2-slim

ENV APP_HOME /app

WORKDIR $APP_HOME

COPY requirements.txt $APP_HOME

RUN pip install -r requirements.txt

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:4000", "manage:app"]
