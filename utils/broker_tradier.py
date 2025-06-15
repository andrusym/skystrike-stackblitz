import os
import requests

TRADIER_BASE_URL = os.getenv("TRADIER_BASE_URL", "https://api.tradier.com/v1")
TRADIER_ACCESS_TOKEN = os.getenv("TRADIER_ACCESS_TOKEN")
TRADIER_ACCOUNT_ID = os.getenv("TRADIER_ACCOUNT_ID")

HEADERS = {
    "Authorization": f"Bearer {TRADIER_ACCESS_TOKEN}",
    "Accept": "application/json"
}

def get_account_balances():
    url = f"{TRADIER_BASE_URL}/user/balances"
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return response.json().get("balances", {})

def get_open_positions():
    url = f"{TRADIER_BASE_URL}/accounts/{TRADIER_ACCOUNT_ID}/positions"
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return response.json().get("positions", {}).get("position", [])

def get_open_orders():
    url = f"{TRADIER_BASE_URL}/accounts/{TRADIER_ACCOUNT_ID}/orders"
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return response.json().get("orders", {}).get("order", [])
