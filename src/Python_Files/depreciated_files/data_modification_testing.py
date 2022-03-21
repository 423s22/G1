import pandas
import json

files = [
    "Central_Montana_Medical_Center"
]

for item in files:
    print("Scanning: ", item)
    
    excel_data_df = pandas.read_excel(item + '.xlsx', sheet_name=item)

    #Add hospital name to each row
    excel_data_df["Hospital"] = item.replace("_", " ")
    print(excel_data_df)

    thisisjson = excel_data_df.to_json(orient='records')


    thisisjson_dict = json.loads(thisisjson)

    with open(item + '.json', 'w') as json_file:
        json.dump(thisisjson_dict, json_file)

    print("Completed")
    print()

#Test Successful
#Awaiting Determination of Necessity
