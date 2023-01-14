---
sidebar_position: 6
---

# API REST

REST API is a simple HTTP endpoint to generate alerts directly from your services or jobs

### How it works

You can send alerts directly from your code. Need just to specify Harp Endpoint which should receive notification and JSON Payload which should be sent.

### How to register new integration in Harp

Follow [these steps](../integration.md) to register a new integration in Harp Platform

### How to configure in your script or service

#### 1. Specify Harp Endpoint

```
POST https://<YOUR_INTEGRATION_URL>
```

Note: YOUR_INTEGRATION_URL you can find in registered integration (or register new if you didn`t perform it before)

#### 2. JSON Payload which should be sent out of your code

- To create alert

```json
{
 "name": "Auto Test: New alert",
 "severity": "critical",
 "source": "API Source",
 "object": "monitoring-host",
 "output": "notification_output: 0",
 "extra_tags": {
   "description": "Some Desc",
   "script_name": "script.py",
   "owner": "some@gmail.com"
 },
 "extra_urls": {
   "URL1": "http://some_url",
   "URL_NAME": "http://some_url_to_docs"
 }
}
```

- To resolve alert

```json
{
 "name": "Auto Test: New alert",
 "severity": "ok",
 "source": "API Source",
 "object": "monitoring-host",
 "output": "notification_output: 0",
 "extra_tags": {
   "description": "Some Desc",
   "script_name": "script.py",
   "owner": "some@gmail.com"
 },
 "extra_urls": {
   "URL1": "http://some_url",
   "URL_NAME": "http://some_url_to_docs"
 }
}
```

Notes:
- `name` – Name of your notification
- `severity` – severity of your notification. Possible values are – ok, information, warning, critical, unknown, urgent
- `source` – unique name of the integration
- `object` – hostname or some other identifier to show where your service is running
- `output` – additional output when notification is triggered
- `extra_tags` – you can create your own additional fields which you can see in Harp once notification will be
- `extra_urls` – you can add list of URLs to external systems which you will see directly in your alert

#### 3. You are good to go! Your API integration is completed, and you can start working with alerts in Harp

### Additional info
- [How to register new integration in Harp](../integration.md)
- [List of all integration](../category/incoming-integrations)
- [More details about Airbrake](https://www.airbrake.io/)



