from flask import Flask, render_template, url_for
from vacations import fetch_vacations_items

vacation_folders = fetch_vacations_items()

app = Flask(__name__)


@app.route('/')
def home_route():
    return render_template('index.html', rows=vacation_folders)


@app.route('/view_gallery<name>/<folder>')
def view_gallery(name, folder):
    import glob # fetching photos from correct folder
    import re # regular expressions
    pathname = "static/images/{x}/*".format(x=folder)
    globbed_photos = glob.glob(pathname)

    final_photos = []
    for pic in globbed_photos:
        x = re.split("/", pic)
        path = "{images_folder}/{vac_name}/{img}".format(images_folder=x[1], vac_name=x[2], img=x[3])
        image_file = url_for('static', filename=path)
        final_photos.append(image_file)

    return render_template('photo_gallery.html', name=name, photos=final_photos)


if __name__ == '__main__':
    app.run(debug=True)