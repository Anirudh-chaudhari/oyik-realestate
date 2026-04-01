import os, json, requests, urllib.request

API_KEY = "1nfsh-1p4vnjnm5dn8azb3b6prgawtvd"
BASE_PATH = r"c:\Oyik - AI - Real Estate\oyik-ai-site\public\media"

def generate_veo_video():
    print("Generating Hero Video via Veo 3.1 Fast...")
    headers = {"Authorization": f"Bearer " + API_KEY, "Content-Type": "application/json"}
    payload = {
        "app": "google/veo-3-1-fast",
        "input": {
            "prompt": "Ultra-realistic, 8k cinematic architectural photography of a pristine luxury smart mansion at twilight, glowing with subtle warm interior lights. Slow cinematic drone tracking shot. Sleek, minimal, premium."
        }
    }
    
    resp = requests.post("https://api.inference.sh/v1/apps", json=payload, headers=headers)
    if resp.status_code == 200:
        result = resp.json()
        if "output" in result and "video" in result["output"]:
            url = result["output"]["video"]
            urllib.request.urlretrieve(url, os.path.join(BASE_PATH, "hero_bg_loop.mp4"))
            print("Successfully saved hero_bg_loop.mp4")
        else:
            print("Failed parsing video output:", result)
    else:
        print(f"API Error {resp.status_code}: {resp.text}")

if __name__ == "__main__":
    generate_veo_video()

