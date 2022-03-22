import glob


def retrieve_files(pattern):
    return glob.glob(pattern)

def strip_file_endings(files):
    if(type(files) == str):
        if "." in files:
            return '.'.join(files.split(".")[:-1])
        else:
            return files
    elif(type(files) == list):
        return [strip_file_endings(file) for file in files]
    else:
        raise Exception('Invalid Variable Type: Only takes str or list')

def strip_file_path(files):
    if(type(files) == str):
        if '\\' in files:
            files = files.split("\\")[-1]
        if '/' in files:
            files = files.split("/")[-1]
        return files
    elif(type(files) == list):
        return [strip_file_path(file) for file in files]
    else:
        raise Exception('Invalid Variable Type: Only takes str or list')

def strip_path_and_ending(files):
    if(type(files) == str):
        return strip_file_endings(strip_file_path(files))
    elif(type(files) == list):
        return [strip_path_and_ending(file) for file in files]
    else:
        raise Exception('Invalid Variable Type: Only takes str or list' + files)

def remove_invalid_file_types(files, extensions):
    if type(extensions) == str:
        extensions = [extensions]
    elif type(extensions) != list:
        raise Exception('Invalid Variable Type: Only takes str or list')
    if(type(files) == str):
        if "." in files:
            ext = "." + files.split(".")[-1]
        if ext in extensions:
            return files
        return None
    elif(type(files) == list):
        return [item for item in [remove_invalid_file_types(file, extensions) for file in files if file] if item]
    else:
        raise Exception('Invalid Variable Type: Only takes str or list')
    
#For Testing
#x = retrieve_files("./machine_readable_files/*.*")
#print(strip_path_and_ending(x))

#print(remove_invalid_file_types(x, [".xlsx"]))
