import json

def fetch_vacations_items():
    opened_file = open('vacations.json') 
    all_vacations = json.load(opened_file) 

    the_list = all_vacations['vacations'] 

    
    list_of_items = []

    for item in the_list:
        _dict = {}
        location_name = item['location']
        folder_name = item['folder']

        _dict['location'] = location_name 
        _dict['folder'] = folder_name
        # add the new dictionary to list of items
        list_of_items.append(_dict)

    return list_of_items