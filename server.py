from bottle import route, run, view
from datetime import datetime as dt
from random import random
from horoscope04 import generate_prophecies


@route("/")
@view("index")
def index():
    now = dt.now()
    x = random()

    return {
        "date": f"{now.year}-{now.month}-{now.day}",
        "predictions": generate_prophecies(6, 2),
        "special_date": x > 0.5,
        "x": x
    }


@route("/api/forecast")
def api_test():
    return {"prophecies": generate_prophecies(6, 2)}


run(
    host="localhost",
    port=8080,
    autoreloaded=True
)
