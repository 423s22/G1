import directory_scanner as scanner
import converter
import directory_controller as directory

def collect_scannable_files():
    acceptable_file_extensions = [".xlsx", ".csv"]
    return scanner.remove_invalid_file_types(scanner.retrieve_files("./machine_readable_files/*.*"), acceptable_file_extensions)
    
directory.generate_directory('machine_readable_files')

PATH = './machine_readable_files/'

documents = collect_scannable_files()

for files in documents:
    extension = "." + files.split(".")[-1]
    hospital = scanner.strip_path_and_ending(files)
    print("Scanning: ", hospital)
    converter.output_to_csv(converter.scan_document(hospital, PATH, extension), hospital)
    print("Completed")
    print()
