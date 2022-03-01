import requests
from bs4 import BeautifulSoup
import datetime

#Create Beautifulsoup Object from URL
def get_soup(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    return soup

#POC Direct access example
for item in get_soup("https://www.montanaaleworks.com/beer").find_all("div", "menu-item"):
    print(item.text.strip())

print("Scan Completed")
