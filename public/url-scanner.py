import requests, csv, time

API_KEY = "YOUR_API_KEY_HERE"
API_URL = "https://www.virustotal.com/api/v3/urls"

def scan_url(url):
    headers = {"x-apikey": API_KEY}
    resp = requests.post(API_URL, data={"url": url}, headers=headers)
    if resp.status_code == 200:
        print(f"Submitted {url} for analysis.")
    else:
        print(f"Error scanning {url}: {resp.text}")

if __name__ == "__main__":
    urls = ["http://example.com/malware", "http://test.com/phishing"]
    for u in urls:
        scan_url(u)
        time.sleep(15)  # avoid rate limits
