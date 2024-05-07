<img src="logo.svg" width="70" />

### medienhaus/

Customizable modular free and open-source environment for decentralized, distributed communication and collaboration.

[Website](https://medienhaus.dev/) — [Fediverse](https://chaos.social/@medienhaus)

<br>

# medienhaus-ansible

This repository contains our Ansible roles and playbook for an automated installation of matrix-synapse and dependencies, our customized element-web, our [medienhaus-backend](https://github.com/medienhaus/medienhaus-backend), and our [medienhaus-frontend](https://github.com/medienhaus/medienhaus-frontend).

**Note:** Tested and working in Ubuntu 20.04 LTS unprivileged Linux containers (LXC).

**TODO:** finalize and then add [medienhaus-cms](https://github.com/medienhaus/medienhaus-cms) …

## Development

### Installation

* see: [Install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) from the official Ansible docs

### Configuration

* Ansible is configured via [ansible.cfg](ansible.cfg.example)
* Hosts are defined in [inventories/example/inventory.yml](inventories/example/inventory.yml.example)
* Host variables are defined in [inventories/example/host_vars/](inventories/example/host_vars/)
* Roles are defined in [roles/](roles/)
* Playbooks are defined in [playbooks/](playbooks/)

**Note:** Make sure the `private_key` and `vault_password` files are referenced correctly and put in place.

### Running the Ansible playbook

```bash
# after configuring Ansible via ansible.cfg, your host(s) via inventory.yml,
# the host variables via host_vars/your_host/*, and playbooks/medienhaus.yml

ansible-playbook playbooks/medienhaus.yml
```

**Note:** Make sure the `hosts` are referenced correctly in [playbooks/medienhaus.yml](playbooks/medienhaus.yml#L3) and the inventory file.

### Registering a user

* see: [Registering a user](https://matrix-org.github.io/synapse/latest/setup/installation.html#registering-a-user) from the official Matrix-Synapse docs
* if registration is [enabled](inventories/example/host_vars/example/main.yml#L33): `https://{{ synapse_server_name }}/classroom/#/register`
