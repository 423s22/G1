import directory_scanner as scanner
import converter
import directory_controller as directory

def collect_scannable_files():
    acceptable_file_extensions = [".xlsx", ".csv"]
    return scanner.remove_invalid_file_types(scanner.retrieve_files("./data_files/machine_readable_files/*.*"), acceptable_file_extensions)

PATH = './data_files/machine_readable_files/'

documents = collect_scannable_files()

for files in documents:
    extension = "." + files.split(".")[-1]
    hospital = scanner.strip_path_and_ending(files)
    print("Scanning: ", hospital)
    try:
        converter.output_to_csv(converter.scan_document(hospital, PATH, extension), hospital)
    except Exception as e:
        directory.generate_directory("logs")
        print("Error scanning", hospital)
        print("Item aded to log")
        with open("./logs/error_log.txt", "a") as file:
            file.write("Error Processing: " + hospital + " ")
            file.write(str(e))
    print("Completed")
    print()
