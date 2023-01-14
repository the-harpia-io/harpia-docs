---
sidebar_position: 2
---

# SMS Bot

:::caution Attention

This integration is based on Twilio, and it will charge you according to their pricing model - https://www.twilio.com/sms/pricing

For new Twilio account you will receive 10$ to test how it works

:::

To receive SMS when alert was triggered you should create Twilio account and connect it to Harp

### Create Twilio account and Configure Harp SMS Bot

1. Go to the [official Twilio website](https://www.twilio.com/), `Sign Up` and follow the steps to register new account

![img_15.png](img_15.png)

2. From `Account info` section you need to copy: `Account SID`, `Auth Token`, `My Twilio phone number` and it will be used in the next steps

![img_16.png](img_16.png)

3. Go to `Menu` and choose `Bots`

![img_5.png](img_5.png)

4. You will see the full list of available Bots

There are two different statuses:
- Yellow: Bot is not configured, and you cannot use it in [Scenarios](../scenarios-overview/scenarios-overview.md)
- Green: Bot is configured

![img_7.png](img_7.png)

5. Choose SMS Bot

![img_20.png](img_20.png)

6. Specify your `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` and `TWILIO_PHONE_NUMBER` from step #2 and press `Save`

![img_21.png](img_21.png)

7. Now you can go to the [Harp Scenarios settings](../scenarios-overview/sms.md), and you can add SMS action to your scenario

### Test SMS Bot

In Bot settings you can specify the phone number that should receive SMS and press the button `Test`

![img_22.png](img_22.png)

