---
title: SSH Reverse Proxy
layout: content
category: linux
---

# SSH Reverse Proxy


## -L Option

`ssh -L 8888:remote1:8899 hacker@server1`

- `8888` : It will be Listen on localhost:8888
- `remote1:8899` : Remote Address & Port
- `hacker@server1` : Remote SSH Server Information


-> It will be Listen on `localhost:8888` and `localhost:8888` will be proxied to `remote1:8899`

