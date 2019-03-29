U :=root

production-setup:
	ansible-playbook ansible/site.yml -i ansible/production -u $U -vv --ask-vault-pass

production-deploy:
	ansible-playbook ansible/deploy.yml -i ansible/production -u $U -vv --ask-vault-pass
