import math

def calculate_iron_condor_price(ticker, expiry, long_put, short_put, short_call, long_call, option_chain):
    try:
        short_put_credit = (option_chain["puts"][short_put]["bid"] + option_chain["puts"][short_put]["ask"]) / 2
        long_put_debit = (option_chain["puts"][long_put]["bid"] + option_chain["puts"][long_put]["ask"]) / 2
        short_call_credit = (option_chain["calls"][short_call]["bid"] + option_chain["calls"][short_call]["ask"]) / 2
        long_call_debit = (option_chain["calls"][long_call]["bid"] + option_chain["calls"][long_call]["ask"]) / 2
    except KeyError as e:
        raise ValueError(f"Missing price data for strike: {e}")
    total_credit = (short_put_credit - long_put_debit) + (short_call_credit - long_call_debit)
    return round(total_credit, 2)

def calculate_expected_move(price, iv, days_to_expiry):
    time_in_years = days_to_expiry / 365
    move = price * iv * math.sqrt(time_in_years)
    return round(move, 2)