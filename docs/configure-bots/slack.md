---
sidebar_position: 2
---

# Slack Bot

Slack Bot will send auto notification to the channel once the alert will be triggered

### 1. Create Slack Bot

1. Open slack API console. (https://api.slack.com/)
2. Click on “Your apps”

![img_23.png](img_23.png)

3. Click on “Create New App”

![img_24.png](img_24.png)

4. Click on “From scratch”

![img_25.png](img_25.png)

5. Now give your app name and select workspace then click on the “Create App” button.

![img_26.png](img_26.png)

6. Click on the “App Home” button and click on “Review Scopes to Add”.

![img_27.png](img_27.png)

7. After clicking on the “Review Scope to Add” button, scroll down and find the Scope section. Then click on the “Add an OAuth Scopes” Button and add “chat: write” as shown in the below image.

![img_28.png](img_28.png)

8. Now click on “Install to Workspace” and press on “Allow” to generate an OAuth token. You need this token to configure Slack Harp Bot

![img_29.png](img_29.png)

9. Now we create the channel in slack and add our app to it. To open your Slack account go to the channel bar and click on the “+” sign. Then click on “Create a new channel”.

![img_30.png](img_30.png)

10. Now type your channel name and click on the “Create” Button.

![img_31.png](img_31.png)

11. Now Add your app to the channel by just typing “/invite @Your_App_Name” (use the app name that you want to connect with the channel) in channel chat.

![img_32.png](img_32.png)

12. Copy Token from step #8 and go to the Harp Platform to configure Slack Bot

### 2. Configure Harp Slack Bot

1. Go to `Menu` and choose `Bots`

![img_5.png](img_5.png)

2. You will see the full list of available Bots

There are two different statuses:
- Yellow: Bot is not configured, and you cannot use it in [Scenarios](../scenarios-overview/scenarios-overview.md)
- Green: Bot is configured

![img_7.png](img_7.png)

3. Choose Slack Bot

![img_33.png](img_33.png)

4. Specify `Slack Bot Token` that was created in the previous section and press `Save`

![img_34.png](img_34.png)

5. Now you can go to the [Harp Scenarios settings](../scenarios-overview/slack.md), and you can add Slack action to your scenario

### Test Slack Bot

In Bot settings you can specify the name of the Slack Channel (should be started with #) that should receive test notification and press the button `Test`

![img_35.png](img_35.png)