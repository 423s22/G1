import pandas
import json

files = [
    "Central_Montana_Medical_Center",
    "Shodair_Childrens_Hospital",
    "St_Vincent_Healthcare",
    "Great_Falls_Clinic_Hospital",
    "Holy_Rosary_Healthcare",
    "St_Luke_Community_Hospital",
    "Roundup_Memorial_Healthcare",
    "Daniels_Memorial_Hospital",
    "Granite_County_Medical_Center",
    "Poplar_Community_Hospital",
    "St_James_Healthcare",
    "Livingston_Healthcare",
    "Barrett_Hospital_and_Healthcare"
]

for hospital in files:
    print("Scanning: ", hospital)
    
    excel_data_df = pandas.read_excel('./machine_readable_files/' + hospital + '.xlsx', sheet_name=hospital)

    excel_data_df['hospital'] = hospital

    thisisjson = excel_data_df.to_json('./json_files/' + hospital + '.json')

    

    thisisjson_dict = json.loads(thisisjson)

    with open('./json_files/' + hospital + '.json', 'w') as json_file:
        json.dump(thisisjson_dict, json_file)

    print("Completed")
    print()
