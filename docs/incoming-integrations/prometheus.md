---
sidebar_position: 6
---

# Prometheus

This article will describe how you can connect your monitoring systems to Harp

### How it works

Alert Manager sends alerts to Harp endpoint via webhook receiver

### How to register new integration in Harp

Follow [these steps](../integration.md) to register a new integration in Harp Platform

### How to configure in Prometheus

#### 1. Add severity as a label in your notification and attach it to a specific Environment and Scenario

```
labels:
  severity: warning|critical|urgent
```

Example:

```
- alert: The number of filesystems is high
  expr: count(purefb_filesystems_space_bytes) > 900
  for: 0m
  labels:
    severity: critical
  annotations:
  description: 'The number of filesystems on {{$labels.instance}}'
  summary: 'The number of filesystems is {{ $value }}.'
```

#### 2. Create a webhook receiver in alertmanager.yml

```
- name: harp-webhook
  webhook_configs:
  - send_resolved: true
    http_config: {}
    url: <YOUR_INTEGRATION_URL>
    max_alerts: 0
```

**Note:** `YOUR_INTEGRATION_URL` - you can find it in Harp console when you [register integration](../integration#how-to-find-url-for-integration)

#### 3. Add receiver to AlertManager route

```
route:
  receiver: harp-webhook
  group_by:
  - job
  - alertname
  - namespace
  - type
  - name
```

Example:
```
global:
receivers:
  - name: default-receiver
  - name: harp-webhook
    webhook_configs:
    - send_resolved: true
      http_config: {}
      url: YOUR_INTEGRATION_URL
      max_alerts: 0
route:
  group_wait: 10s
  group_interval: 5m
  receiver: default-receiver
  group_by:
    - job
    - alertname
    - namespace
    - type
    - name
  repeat_interval: 3h
  routes: 
    - receiver: harp-webhook
```

#### 4. You are good to go! Your Prometheus integration is completed, and you can start working with alerts in Harp

#### More details about Alert Manager receivers

- https://prometheus.io/docs/alerting/latest/configuration/#receiver

### Additional info
- [How to register new integration in Harp](../integration.md)
- [List of all integration](../category/incoming-integrations)
- [More details about Prometheus](https://prometheus.io/)