import sys
import os

# Add the directory containing your Flask app to the Python path
sys.path.insert(0, os.path.dirname(__file__))

# Import the app variable from your app.py
from app import app as application