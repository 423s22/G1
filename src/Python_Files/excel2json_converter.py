import pandas
import json

#excel_data_df = pandas.read_excel('./machine_readable_files/Central-Montana-Medical-Center-Charge-Sheet.xlsx', sheet_name='237169043_central-montana-medic')
#excel_data_df = pandas.read_excel('./machine_readable_files/CMS_Pricing_CCMSC_122321.xlsx', sheet_name='CMS_Pricing_CCMSC_Procedure')
excel_data_df = pandas.read_excel('./machine_readable_files/St_Vincent_Healthcare.xlsx', sheet_name='St_Vincent_Healthcare')

thisisjson = excel_data_df.to_json(orient='records')

#print('Excel Sheet to JSON:\n', thisisjson)

thisisjson_dict = json.loads(thisisjson)

#with open('./json_files/Community_Medical_Center.json', 'w') as json_file:
#with open('./json_files/Shodair_Children_Hospital.json', 'w') as json_file:
with open('./json_files/St_Vincent_Healthcare2.json', 'w') as json_file:
    json.dump(thisisjson_dict, json_file)

print("Completed")
