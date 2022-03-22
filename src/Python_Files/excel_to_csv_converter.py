import pandas
import directory_scanner as scanner

acceptable_file_extensions = [".xlsx"]

files = scanner.remove_invalid_file_types(scanner.retrieve_files("./machine_readable_files/*.*"), acceptable_file_extensions)

files = scanner.strip_path_and_ending(files)

for hospital in files:
    print("Scanning: ", hospital)

    #Read only first worksheet from files
    excel_data_df = pandas.read_excel('./machine_readable_files/' + hospital + '.xlsx', sheet_name=0)

    excel_data_df['hospital'] = hospital

    thisisjson = excel_data_df.to_csv('./csv_files/' + hospital + '.csv', index = False)

    print("Completed")
    print()
