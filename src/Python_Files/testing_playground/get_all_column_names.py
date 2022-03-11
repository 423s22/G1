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
    output = list(excel_data_df.columns)

    with open("columns.txt", "w") as file:
        for item in output:
            file.write(item + "\n")

    print("Completed")
    print()

#Test Successful
#Awaiting Implementation
