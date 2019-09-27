from flask import Flask, render_template
import requests



app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/query')
def query():
    r = requests.get('https://sleepy-scrubland-22421.herokuapp.com/property/')
    return r.text



if __name__ == '__main__':
    app.run()