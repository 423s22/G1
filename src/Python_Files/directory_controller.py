import os

def generate_directory(folder_name):
    path = "./" + folder_name
    if not os.path.exists(path):
        os.makedirs(path)

#Testing Implementation
#generate_directory("test")
