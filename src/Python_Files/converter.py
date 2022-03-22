import pandas

def scan_excel(hospital, path):
    #Read only first worksheet from files
    excel_data_df = pandas.read_excel(path + hospital + '.xlsx', sheet_name=0)
    excel_data_df['hospital'] = hospital
    excel_data_df.to_csv('./csv_files/' + hospital + '.csv', index = False)
