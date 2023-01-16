---
sidebar_position: 6
---

# NewRelic

New Relic is dedicated to making it easier for software engineers to instrument everything and better understand their digital systems

### How it works
NewRelic uses Webhook to send alerts to Harp endpoint

### How to register new integration in Harp

Follow [these steps](../integration.md) to register a new integration in Harp Platform

### How to configure in New Relic

#### 1. Go to “Notifications channels”

![img_45.png](img_45.png)

#### 2. Create new channel

**Channel Type:** `Webhook`
**Channel Name:** `Harp`
**URL:** [How to find URL](../integration#how-to-find-url-for-integration)

![img_46.png](img_46.png)

#### 3. Connect “Alert Policies” to Notification Channel

![img_47.png](img_47.png)

#### 4. Create new alert policy

![img_48.png](img_48.png)

#### 5. Add recently created Harp notification channel to new alert policy

![img_49.png](img_49.png)

#### 6. Choose Webhook as a channel type

![img_50.png](img_50.png)

#### 7. Choose Harp channel and update the policy

![img_51.png](img_51.png)

#### 8. You should see 1 notification channel in your policy

![img_52.png](img_52.png)

#### 9. All alerts which were pointed to that Alert Policy should be sent to Harp

#### 10. You are good to go! Your New Relic integration is completed, and you can start working with alerts in Harp

### Additional info
- [How to register new integration in Harp](../integration.md)
- [List of all integration](../category/incoming-integrations)
- [More details about NewRelic](https://newrelic.com/)



