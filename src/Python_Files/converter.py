import pandas
import directory_controller as directory

def scan_document(hospital, path, extension):
    if extension == ".xlsx":
        return scan_excel(hospital, path)
    elif extension == ".csv":
        return scan_csv(hospital, path)
    else:
        raise Exception('Invalid Document Type: ' + extension)

def scan_excel(hospital, path):
    #Read only first worksheet from files
    excel_data_df = pandas.read_excel(path + hospital + '.xlsx', sheet_name=0)
    return excel_data_df

def scan_csv(hospital, path):
    csv_data_df = pandas.read_csv(path + hospital + '.csv')
    return csv_data_df

def output_to_csv(frame, hospital):
    directory.generate_directory('csv_files')
    frame['hospital'] = hospital
    frame.to_csv('./csv_files/' + hospital + '.csv', index = False)
