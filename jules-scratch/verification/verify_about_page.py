from playwright.sync_api import sync_playwright
import os

def run():
    print("Starting playwright script...")
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            print("Navigating to http://localhost:5173/about...")
            page.goto("http://localhost:5173/about")
            print("Waiting for network idle...")
            page.wait_for_load_state("networkidle")
            screenshot_path = "/tmp/about-page.png"
            print(f"Taking screenshot to {screenshot_path}...")
            page.screenshot(path=screenshot_path, full_page=True)
            browser.close()
            print("Screenshot taken successfully.")
            print(f"Checking if file exists at {screenshot_path}...")
            if os.path.exists(screenshot_path):
                print("File exists.")
            else:
                print("File does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    run()
