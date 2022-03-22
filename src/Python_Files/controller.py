import directory_scanner as scanner
import  converter

def collect_scannable_files():
    acceptable_file_extensions = [".xlsx"]
    files = scanner.remove_invalid_file_types(scanner.retrieve_files("./machine_readable_files/*.*"), acceptable_file_extensions)
    return scanner.strip_path_and_ending(files)

PATH = './machine_readable_files/'

documents = collect_scannable_files()

for hospital in documents:
    print("Scanning: ", hospital)
    converter.scan_excel(hospital, PATH)
    print("Completed")
    print()
