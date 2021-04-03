<img src="logo.svg" width="70" />

### medienhaus/

Berlin University of the Arts’ free and open-source environment for digital learning, teaching, and collaboration.

[Concept Paper](https://medienhaus.dev/) | [Twitter](https://twitter.com/medienhaus_)

<br>

# medienhaus-ansible

This repository contains our Ansible roles and playbook for an automated installation of matrix-synapse and dependencies, our customized element-web, our [medienhaus-backend](https://github.com/medienhaus/medienhaus-backend), and our [medienhaus-frontend](https://github.com/medienhaus/medienhaus-frontend).

## Development

### Installation

* see: [Install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) from the official Ansible docs

### Configuration

* Ansible is configured via [ansible.cfg](ansible.cfg)
* Hosts are defined in [inventory.yml](inventory.yml)
* Host variables are defined in [host_vars/](host_vars/)
* Roles are defined in [roles/](roles/)
* Playbooks are defined in [playbooks/](playbooks/)

**Make sure the private key and vault password files are referenced correctly and/or put in place.**

### Running the Ansible playbook

```bash
# after configuring Ansible, your host, the host variables, and playbooks/medienhaus.yml …
$ ansible-playbook playbooks/medienhaus
```

### Registering a user

* via web: visit https://{{ synapse_server_name}}/classroom/#/register
* via cli: [Registering a user](https://github.com/matrix-org/synapse/blob/develop/INSTALL.md#registering-a-user) from the official Matrix-Synapse docs
