---
sidebar_position: 3
---

# Work with Alerts

On this article we will describe how you can manage your alert

Once you click on the alert - you can discover more details about it and perform the different actions

## Main info
On this section you can see the alert details from original monitoring system and direct URL to the system

![img_26.png](img_26.png)

## History

### Alert activities

You can discover the next alert activities:
- when it was created, closed, updated
- when notifications was sent and to which channel (according to the [Scenario](scenarios-overview))
- when and who snoozed, resolved, acknowledge and handle alert

![img_27.png](img_27.png)

### Actions by users

Hide system actions (close/open alert) and show only actions that were done by users (handle, snooze etc..)

![img_39.png](img_39.png)

### Add comment

You can add comment without performing any actions. It will be visible in alert history for other users

![img_40.png](img_40.png)

### Quick statistics

How much time alert was reopened and snoozed for the whole period of time

![img_41.png](img_41.png)

## Main actions with alert

Different actions will allow you to better manage the alerts

![img_28.png](img_28.png)

### Handle alert

Alert will be assigned to you, and it indicates that you started working with this alert.

You can specify:
- how long you are going to work with it. Other users won`t see this alert during that period of time
- to which person this alert should be assigned. By default, it will be assigned to the user who performs this action

![img_29.png](img_29.png)

Once alert will be handled - it will disappear from `Active tab` and appear in `Handled tab`

![img_31.png](img_31.png)

### Resolve alert

If for some reason, monitoring system didn`t send the resolve state to Harp, you can resolve it manually

You can add:
- comment that will be visiable in the alert history

![img_30.png](img_30.png)

Once alert will be resolved - it will disappear from `Active tab`

### Snooze alert

Snooze alert for specific period of time and don\`t show it in `Active tab` for other users

You can specify:
- `duration`: for how long alert should be snoozed
- `comment`: that will be visible in alert history
- `sticky severity`: if not selected - snooze will be canceled if alert severity was changed
- `sticky output`: if not selected - snooze will be canceled if alert output was changed

![img_32.png](img_32.png)

### Acknowledge alert

Remove alert from `active` tab and show it again once alert disappear and appear again

You should specify:
- `comment`: that will be visible in alert history

![img_33.png](img_33.png)

## Additional actions

### Assign alert

If you don`t want to show the alert in UI for your team who is handling them 24/7 - you can assign email address of the responsible person and he/she will receive it during specific period of time.

You can specify:
- `duration`: for how long alert should be assigned
- `sticky severity`: if not selected - assign will be canceled if alert severity was changed
- `sticky output`: if not selected - assign will be canceled if alert output was changed

![img_34.png](img_34.png)

### Copy direct link to the alert

You can share the direct link to the alert with your colleagues

![img_35.png](img_35.png)

### Copy main alert info

You can perform a quick copy of main alert info to your buffer

![img_36.png](img_36.png)

### Show alert statistics

You can discover all the actions that was done with the alert over the specific period of time

![img_37.png](img_37.png)

![img_38.png](img_38.png)

## Alert scenario

Display quick info about scenario to which alert is attached with possibility to modify it

![img_42.png](img_42.png)
