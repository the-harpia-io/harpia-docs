---
sidebar_position: 6
---

# Icinga2

Icinga is a monitoring system which checks the availability of your network resources, notifies users of outages, and generates performance data for reporting

### How it works
You should install Harp agent on server which has access to your Icinga environment. Agent will pull active alerts from Icinga and forward them to Harp system

### How to register new integration in Harp

Follow [these steps](../integration.md) to register a new integration in Harp Platform

### How to configure in Icinga

:::caution Prerequisite

Docker daemon should be installed and running on your server – https://docs.docker.com/engine/install/

Docker Compose should be installed – https://docs.docker.com/compose/install/

:::

#### 1. Run the agent using Docker Compose

```shell
curl -sSL https://raw.githubusercontent.com/the-harpia-io/harp-agent/master/docker-compose.yml > docker-compose.yml
curl -sSL https://raw.githubusercontent.com/the-harpia-io/harp-agent/master/config.yaml > config.yaml
```

#### 2. Get API user and password

```shell
cat /etc/icinga2/conf.d/api-users.conf

/**
 * The ApiUser objects are used for authentication against the API.
 */
object ApiUser "root" {
  password = "a08101bfd30ae35d"
  // client_cn = ""

  permissions = [ "*" ]
}
```

#### 3. Specify details about your Icinga instance in config.yaml which was downloaded

```yaml
icinga:
  - integration_name: "icinga_test"
    url: <URL to Harp Endpoint>
    user: "root"
    password: "a08101bfd30ae35d"
```

**Note:** [How to find URL to Harp Endpoint](../integration#how-to-find-url-for-integration)

#### 4. Start agent

```shell
docker-compose up -d
```

#### 5. Attache notification to scenario and environment

Add environment_id and scenario_id on integration level in config.yaml. All alerts from monitoring system will be attached to that Env and Scenario

```shell
icinga:
  - integration_name: "icinga_test"
    url: <URL to Harp Endpoint>
    user: "root"
    password: "a08101bfd30ae35d"
    environment_id: 10
    scenario_id: 20
```

**Note:** [How to find URL to Harp Endpoint](../integration#how-to-find-url-for-integration)

#### 6. You are good to go! Your Icinga2 integration is completed, and you can start working with alerts in Harp

### Additional info
- [How to register new integration in Harp](../integration.md)
- [List of all integration](../category/incoming-integrations)
- [More details about Icinga2](https://icinga.com/docs/icinga-2/latest/doc/01-about/)



