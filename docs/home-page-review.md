---
sidebar_position: 2
---

# Home page overview

Main page will allow you to review and manage your alerts

### Environments
On the left side your will see the list of the logical folders that help you to separate alerts according to different criteria. For example alerts from Grafana should go to one environment and alert from Prometheus to another

How to configure [Environments](environments-overview.md)

![img_12.png](img_12.png)

### Notification channels
It allows to review the list of active alerts

The list of channels you can specify in [Scenarios](scenarios-overview)

![img_13.png](img_13.png)

### Alert state
In this section you can filter alerts by different states:

- **Active** - alert was triggered
- **Handle** - someone started working with this alert
- **Snooze** - alert was snooze for some period of time
- **Acknowledged** - alert was acknowledged and will appear in active tab once alert disappear and appear again

![img_14.png](img_14.png)

### Alert badges
Badges will help you to identify the importance of the alert:

- **Urgent** - contain `URGENT` word in alert name
- **Flapping** - appears more than 5 times per hour
- **New** - first time appear in Harp
- **Test** - contain `TEST` word in alert name

![img_15.png](img_15.png)

### Quick filter by severity

Display alerts with specific severity

![img_16.png](img_16.png)

### User custom filters
Filter your alerts according to specific conditions

![img_17.png](img_17.png)

You can save your filters and make it **private** (only you can see it) or **public** (all your users will be able to use it)

![img_18.png](img_18.png)

### Assigned to me

Show only alerts that were assigned to you

![img_19.png](img_19.png)


### Sort alerts by time

By default, the newest alerts will appear on top. But you can make it vise versa

![img_20.png](img_20.png)

### Search

On top of each column you have the search field, and you can use it to find the specific alert

![img_21.png](img_21.png)

### Add / Delete columns

You can add or remove columns from the main view. All columns will be automatically registered in the system

![img_22.png](img_22.png)

### Group alerts by specific columns

Alerts with the same column(s) name will be grouped together

![img_23.png](img_23.png)

### Resize column width

You can specify the width of each column

![img_24.png](img_24.png)

### Hide side panel

You can hide the left side panel with Environments

![img_25.png](img_25.png)