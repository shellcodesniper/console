---
layout: content
title: DBEAVER PASSWORD Reveal
category: hack
---

# Decrypt Password plain text from dbeaver stored data

### require
- python3
- pycryptodome pip installed


### script

> place this file at `~/Library/DBeaverData/workspace6`

``` python3
  #!/usr/bin/env python3
  # NOTE : pip3 install pycryptodome

  import sys
  import base64
  import os
  import json
  from Crypto.Cipher import AES
  import glob

  config_file_paths = glob.glob('./**/.dbeaver/credentials-config.json', recursive=True)

  for filepath in config_file_paths:
    print(filepath)

#PASSWORD_DECRYPTION_KEY = bytes([-70, -69, 74, -97, 119, 74, -72, 83, -55, 108, 45, 101, 61, -2, 84, 74])
    PASSWORD_DECRYPTION_KEY = bytes([186, 187, 74, 159, 119, 74, 184, 83, 201, 108, 45, 101, 61, 254, 84, 74])

    data = open(filepath, 'rb').read()

    decryptor = AES.new(PASSWORD_DECRYPTION_KEY, AES.MODE_CBC, data[:16])
    padded_output = decryptor.decrypt(data[16:])
    output = padded_output.rstrip(padded_output[-1:])

    try:
      print(json.dumps(json.loads(output), indent=4, sort_keys=True))
    except:
      print(output)

```

