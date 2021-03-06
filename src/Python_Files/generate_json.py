import directory_scanner as scanner
import converter
import json
import directory_controller as directory

PATH = './data_files/'

def collect_scannable_files():
    acceptable_file_extensions = [".csv"]
    return scanner.remove_invalid_file_types(scanner.retrieve_files(PATH +"csv_files/*.*"), acceptable_file_extensions)
    

documents = collect_scannable_files()

for files in documents:
    extension = "." + files.split(".")[-1]
    hospital = scanner.strip_path_and_ending(files)
    print("Scanning: ", hospital)
    data_frame = converter.scan_document(hospital, PATH + "csv_files/", extension)

    thisisjson = data_frame.to_json(orient='records')

    thisisjson_dict = json.loads(thisisjson)

    directory.generate_directory(PATH + 'json_files')

    with open(PATH + 'json_files/' + hospital + '.json', 'w') as json_file:
        json.dump(thisisjson_dict, json_file, indent=4, sort_keys=True)
    
    print("Completed")
    print()
