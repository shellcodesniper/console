---
layout: content
title: LINUX SSH KEY 관리
category: linux
---


# PROXY (Jumper) & SSH KNOWN HOST ERROR 해결을위해

그냥 간단하게 ~/.ssh/config 파일을 잘 수정해주면 좋음.

``` bash
# NOTE : bastion is the jump host
Host opc_mx
  HostName server_~~~
  User opc



# ==================== BELOW Section is for the proxy servers && Default Configs ====================

# NOTE : PROXY_ is the prefix for the proxy servers
# NOTE : opc_* is the prefix for the servers behind the proxy
Host BASTION
  HostName IP_ADDRESS
  User opc
  Port 9129391239
  IdentityFile ~/.ssh/id_ed25519


# NOTE : For Multiple Host Matched!
Host proxy_* opc_*
# NOTE : Session Using One Connection
  ControlMaster auto
  ControlPath ~/.ssh/%r@%h:%p

  IdentityFile ~/.ssh/id_ed25519

# NOTE : USE BASTION As Jumper
  ProxyCommand ssh -W %h:%p BASTION

Host *
  UseKeychain yes
# NOTE : Ignore Strict Hostkey Check ( Annoying Warning )
  StrictHostKeyChecking no
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519

```
