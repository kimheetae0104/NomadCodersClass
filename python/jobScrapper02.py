import requests
from bs4 import BeautifulSoup

num = 1
URL = "https://stackoverflow.com/jobs?q=python"

def get_last_page():
html = requests.get(URL).text
soup = BeautifulSoup(html,'html.parser')
last_page_text = soup.find_all("a", {"class": "s-pagination--item"})[-2]
last_page = last_page_text.text.strip()
return int(last_page)

def extract_job(html):
title = html.find("a", {"class": "s-link stretched-link"}).attrs['title']
company, location = html.find("h3", {"class":"fc-black-700 fs-body1 mb4"}).find_all("span", recursive=False)

print(company.get_text(strip=True), location.get_text(strip=True))
return {'title': title, 'company': company, }


def extract_jobs(last_page):
jobs = []
#for page in range(last_page):
for page in range(2):
result = requests.get(f"{URL}&pg={page+1}")
soup = BeautifulSoup(result.text, 'html.parser')
results = soup.find_all("div", {"class": "-job"})
for result in results:
job = extract_job(result)
jobs.append(job)
return jobs

extract_jobs(get_last_page())
