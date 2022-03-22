import pandas
import directory_scanner as scanner

files = scanner.strip_path_and_ending(scanner.retrieve_files("./machine_readable_files/*.*"))

for hospital in files:
    print("Scanning: ", hospital)

    #Read only first worksheet from files
    excel_data_df = pandas.read_excel('./machine_readable_files/' + hospital + '.xlsx', sheet_name=0)

    excel_data_df['hospital'] = hospital

    thisisjson = excel_data_df.to_csv('./csv_files/' + hospital + '.csv', index = False)

    print("Completed")
    print()
