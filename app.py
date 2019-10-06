from flask import Flask, render_template
import requests

REQUEST_URI = 'https://sleepy-scrubland-22421.herokuapp.com/property/'
NEXT_REQUEST_URI = ''

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/query', methods=['GET'])
def query():
    global NEXT_REQUEST_URI
    r = requests.get(REQUEST_URI)
    data = r.json()
    NEXT_REQUEST_URI = data['next']
    return data


@app.route('/next-query', methods=['GET'])
def nextquery():
    global NEXT_REQUEST_URI
    r = requests.get(NEXT_REQUEST_URI)
    data = r.json()
    NEXT_REQUEST_URI = data['next']
    return data


if __name__ == '__main__':
    app.run()