Say you want to know info about a website.

Let's say our website is ssi.hypermine.in

## Use nslookup to find the IP

```bash

vishwas@vishwas-13-7353:~$ nslookup ssi.hypermine.in
Server:		127.0.0.53
Address:	127.0.0.53#53

Non-authoritative answer:
Name:	ssi.hypermine.in
Address: 13.235.18.210
```

As you can see our IP is  13.235.18.210

## Use nmap to find info about this IP

### -ST


### -sS

```bash
vishwas@vishwas-13-7353:~$ sudo nmap -sS 13.235.18.210

Starting Nmap 7.60 ( https://nmap.org ) at 2021-02-10 23:02 IST
Nmap scan report for ec2-13-235-18-210.ap-south-1.compute.amazonaws.com (13.235.18.210)
Host is up (0.084s latency).
Not shown: 995 filtered ports
PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https
5000/tcp open  upnp
5001/tcp open  commplex-link
9001/tcp open  tor-orport

Nmap done: 1 IP address (1 host up) scanned in 7.88 seconds
```

As you can see informations about what all ports are open on the server.

### -D 

### -A

Aggresive scan


### Zenmap tool


### Metasploit

https://www.metasploit.com/get-started

