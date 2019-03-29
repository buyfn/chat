# Configure the DigitalOcean Provider
provider "digitalocean" {
  token = "${var.do_token}"
}

resource "digitalocean_ssh_key" "default" {
  name       = "pro pubkey"
  public_key = "${file("./files/id_rsa.pub")}"
}

resource "digitalocean_droplet" "web" {
  image  = "docker-18-04"
  name   = "web-1"
  region = "ams3"
  size   = "s-1vcpu-1gb"
  ssh_keys = ["${digitalocean_ssh_key.default.fingerprint}"]
}
