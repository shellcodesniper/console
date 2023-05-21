---
title: Imap Cronjob Parsing bot
layout: content
category: automation
---
```python
#!/usr/bin/env python3
#pip install markdownify
import time, datetime, markdownify, email, imaplib, os
import email.utils
from email.header import decode_header, make_header

server = imaplib.IMAP4_SSL('mx.ql.gl')
server.login('EEEMAIL', 'password')

rv, data = server.select()
recent_no = data[0]

last_parsed = None
if os.path.exists('last_parsed.dat'):
    with open('last.dat', 'rt') as F:
        last_parsed = int(F.readline().trim())

if last_parsed is not None and e
    print("ALREADY PARSED!!!")
    os._exit(0)

rv, fetched = server.fetch(recent_no, '(RFC822)')
message = email.message_from_bytes(fetched[0][1])

fr = make_header(decode_header(message.get('From')))
subject = make_header(decode_header(message.get('Subject')))

if message.is_multipart():
    for part in message.walk():
        ctype = part.get_content_type()
        cdispo = str(part.get('Content-Disposition'))
        if ctype == 'text/plain' and 'attachment' not in cdispo:
            body = part.get_payload(decode=True)
            break
else:
    body = message.get_payload(decode=True)

body = body.decode('utf-8')
body = markdownify.markdownify(body, heading_style="ATX")

print(f"보낸사람:{fr}")
print(f"제목:{subject}")
print(f"내용:{body}")

with open('last_parsed.dat', 'wt') as F:
    F.write(f"{recent_no}")

server.close()
server.logout()
```
