ansible-vaults-encrypt:
	ansible-vault encrypt ansible/production/group_vars/all/vault.yml ansible/development/group_vars/all/vault.yml

ansible-vaults-decrypt:
	ansible-vault decrypt ansible/production/group_vars/all/vault.yml ansible/development/group_vars/all/vault.yml

ansible-vaults-edit:
	ansible-vault edit ansible/production/group_vars/all/vault.yml ansible/development/group_vars/all/vault.yml

ansible-setup-terraform-vars:
	ansible-playbook ansible/terraform.yml -i ansible/production -vv --ask-vault-pass