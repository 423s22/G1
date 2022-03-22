import directory_scanner as scanner
import converter
import json
import directory_controller as directory

def collect_scannable_files():
    acceptable_file_extensions = [".csv"]
    return scanner.remove_invalid_file_types(scanner.retrieve_files("./great_initial_files_for_philip/*.*"), acceptable_file_extensions)
    

PATH = './great_initial_files_for_philip/'

documents = collect_scannable_files()

for files in documents:
    extension = "." + files.split(".")[-1]
    hospital = scanner.strip_path_and_ending(files)
    print("Scanning: ", hospital)
    data_frame = converter.scan_document(hospital, PATH, extension)

    thisisjson = data_frame.to_json(orient='records')

    thisisjson_dict = json.loads(thisisjson)

    directory.generate_directory('json_files')

    with open('./json_files/' + hospital + '.json', 'w') as json_file:
        json.dump(thisisjson_dict, json_file, indent=4, sort_keys=True)
    
    print("Completed")
    print()
