import requests
from bs4 import BeautifulSoup

def basic_scanner():
    
    URL = "http://search.hospitalpriceindex.com/hpi2/hospital/bozemanhealthdeaconesshospital/8102or"
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")

    
    items = soup.find_all("a")
    print(len(items))
    for item in items:
        print(item.text)

basic_scanner()

print("Scan Completed")
