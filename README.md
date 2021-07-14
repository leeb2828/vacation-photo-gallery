## How to use this Project
From your terminal, download the files using
```
$ git clone https://github.com/leeb2828/vacation-photo-gallery
```
A virtual environment is a tool that helps to keep dependencies required by
different projects separate from each other by using isolated virtual environments.
The venv module comes pre installed with Python 3.5 + versions.
Create your virtual environment
```
$ python3 -m venv env
$ source env/bin/activate
```
I created the requirements.txt file using the pip freeze command.
Install all dependencies from the requirements.txt file.
```
$ pip install -r requirements.txt
```
Run the app.py file
```
$ python3 app.py
```
Type in http://localhost:5000 or http://127.0.0.1:5000 into your browser to view the project live.
Type in CTRL-C to stop running the server.

To deactivate your environment:
```
$ deactivate
```
<br />

![Home Page Image](project_screenshots/homepage.png)

Click on one of the vacations.

![Portland Maine photo gallery](project_screenshots/portland_maine_gallery.png)
![Panama City](project_screenshots/panama_city_beach_gallery.png)
