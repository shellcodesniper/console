---
layout: content
title: OCI VNIC 추가
category: oci
---

# Oracle Cloud 를 이용하여 2개 이상의 VNIC 를 추가할때!

그냥 VNIC 를 추가한다고 해서 바로 인식되는게 아니다..
다음 명령어, 텍스트들을 쭉써보면 됩니당~

``` bash
sudo mkdir /opt/secondary_vnic
cd /opt/secondary_vnic
curl https://ql.gl/assets/oci_multi_vnic.txt -o /tmp/xxxxx

sudo mv /tmp/xxxxx ./secondary_vnic_all_configure.sh
sudo chmod u+x secondary_vnic_all_configure.sh

sudo vi /etc/systemd/system/secondary_vnic_all_configure.service
```


> /etc/systemd/system/secondary_vnic_all_configure.service File
``` txt
[Unit]
Description=Add the secondary VNIC at boot
After=basic.target



[Service]
Type=oneshot
ExecStart=/opt/secondary_vnic/secondary_vnic_all_configure.sh -c



[Install]
WantedBy=default.target
```

``` bash
sudo chmod 664 /etc/systemd/system/secondary_vnic_all_configure.service
sudo systemctl enable /etc/systemd/system/secondary_vnic_all_configure.service
```
