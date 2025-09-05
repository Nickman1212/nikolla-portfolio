
import os
import requests
import time
import json
import base64
from dotenv import load_dotenv
from datetime import datetime, timezone

# === Load API Key from .env ===
load_dotenv()
API_KEY = os.getenv("VT_API_KEY")
API_URL = "https://www.virustotal.com/api/v3/urls"
HEADERS = {"x-apikey": API_KEY}

# === Submit URL for scanning ===
def submit_url(url):
    response = requests.post(API_URL, headers=HEADERS, data={"url": url})
    if response.status_code == 200:
        print("[+] URL submitted successfully.")
    else:
        raise Exception(f"Error submitting URL: {response.status_code}\n{response.text}")

# === Encode URL to match VirusTotal's format ===
def encode_url_id(url):
    url_bytes = url.encode("utf-8")
    b64_bytes = base64.urlsafe_b64encode(url_bytes)
    return b64_bytes.decode("utf-8").strip("=")  # VT requires no padding

# === Fetch analysis report ===
def fetch_analysis(url_id):
    response = requests.get(f"{API_URL}/{url_id}", headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Error fetching analysis: {response.status_code}\n{response.text}")

# === Print summary of scan ===
def print_summary(data):
    stats = data['data']['attributes']['last_analysis_stats']
    print("\n🧪 Threat Intelligence Summary:")
    for category, count in stats.items():
        print(f"  - {category.capitalize()}: {count}")

    print("\n🚨 Notable Detections:")
    for engine, result in data['data']['attributes']['last_analysis_results'].items():
        if result['category'] != "undetected":
            print(f"  {engine}: {result['category']} - {result['result']}")

# === Save results to log file ===
def save_log(data, filename="scan_log.json"):
    entry = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "result": data
    }

    if os.path.exists(filename):
        with open(filename, "r+") as f:
            logs = json.load(f)
            logs.append(entry)
            f.seek(0)
            json.dump(logs, f, indent=2)
    else:
        with open(filename, "w") as f:
            json.dump([entry], f, indent=2)

# === Main Program ===
if __name__ == "__main__":
    url = input("🔍 Enter a URL to scan: ").strip()

    try:
        print("[*] Submitting URL to VirusTotal...")
        submit_url(url)

        print("[*] Waiting for scan to complete...")
        time.sleep(15)

        print("[*] Fetching analysis results...")
        url_id = encode_url_id(url)
        data = fetch_analysis(url_id)

        print_summary(data)
        save_log(data)

        print("\n✅ Scan complete. Results saved to 'scan_log.json'.")
    except Exception as e:
        print(f"❌ Error: {e}")
