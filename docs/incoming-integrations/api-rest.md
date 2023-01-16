---
sidebar_position: 6
---

# API

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

Note: YOUR_INTEGRATION_URL you can find in [registered integration](../integration#how-to-find-url-for-integration) (or [register new](../integration#how-to-register-new-integration) if you didn`t perform it before)

#### 2. JSON Payload which should be sent out of your code

:::caution

Need to add to the headers - ```Content-Type: application/json```

:::

- To create alert

```json
{
 "alert_name": "Test: REST API alert",
 "alert_severity": "critical",
 "source": "API Source",
 "object": "monitoring-host",
 "notification_output": "notification_output: 0",
 "additional_fields": {
   "description": "Some Desc",
   "script_name": "script.py",
   "owner": "some@gmail.com"
 },
 "additional_urls": {
   "URL1": "http://some_url",
   "URL_NAME": "http://some_url_to_docs"
 }
}
```

- To resolve alert

```json
{
 "alert_name": "Test: REST API alert",
 "alert_severity": "ok",
 "source": "API Source",
 "object": "monitoring-host",
 "notification_output": "notification_output: 0",
 "additional_fields": {
   "description": "Some Desc",
   "script_name": "script.py",
   "owner": "some@gmail.com"
 },
 "additional_urls": {
   "URL1": "http://some_url",
   "URL_NAME": "http://some_url_to_docs"
 }
}
```

Notes:
- `alert_name` – Name of your notification
- `alert_severity` – severity of your notification. Possible values are – ok, information, warning, critical, unknown, urgent
- `source` – unique name of the integration
- `object` – hostname or some other identifier to show where your service is running
- `notification_output` – additional output when notification is triggered
- `additional_fields` – you can create your own additional fields which you can see in Harp once notification will be
- `additional_urls` – you can add list of URLs to external systems which you will see directly in your alert

#### 3. You are good to go! Your API integration is completed, and you can start working with alerts in Harp

### Additional info
- [How to register new integration in Harp](../integration.md)
- [List of all integration](../category/incoming-integrations)
- [More details about Airbrake](https://www.airbrake.io/)



