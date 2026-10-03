# IVGuard Demo

IVGuard is a hackathon prototype for smart IV-line safety monitoring.

## Current demo
This version is a **rule-based browser simulation**. It does not use AI or machine learning.

Click the test-condition buttons to simulate:
- Normal flow
- Reduced flow
- Tube kink
- Occlusion
- Air detected
- Infusion nearly complete
- Sudden line movement

## Run
Open `index.html` in a browser.

## Safety
This is a demonstration prototype only. It uses simulated conditions and must not be connected to a real patient or clinical IV line.

## Future hardware connection
The same dashboard can later receive real sensor readings from an ESP32 through Wi-Fi/Bluetooth or a local serial bridge.
