from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('aboutus.html')

@app.route('/about-brenda')
def bp_about():
    return render_template('about-brenda.html')

@app.route('/about-jake')
def jake_about():
    return render_template('about-jake.html')

@app.route('/about-laine')
def laine_about():
    return render_template('about-laine.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/jobs')
def jobs():
    return render_template('jobs.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')


@app.route('/blog1')
def blog1():
    return render_template('blog1.html')

@app.route('/blog2')
def blog2():
    return render_template('blog2.html')

@app.route('/blog3')
def blog3():
    return render_template('blog3.html')

@app.route('/norest')
def norest():
    return render_template('norest.html')

@app.route('/can_contact')
def can_contact():
    return render_template('candidate-contact.html')

@app.route('/cli_contact')
def cli_contact():
    return render_template('client-contact.html')


if __name__ == '__main__':
    app.run(debug=True)
