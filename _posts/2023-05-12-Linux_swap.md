---
layout: content
title: Linux Swap Creation Script
category: linux
---

# Linux Create Swap

``` bash
  sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 # NOTE : 4GB

  sudo chmod 600 /swapfile

  sudo mkswap /swapfile

  sudo swapon /swapfile

  sudo swapon -s

  sudo echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
```
