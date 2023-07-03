---
layout: content
title: Rust Build Splitted Build
category: rust
---

# Not Only ./a.out, But Also .dylib, .so, ~~~


## WorkSpace Cargo.toml


### WorkSpace
``` toml
[workspace]
# authors: KuuwangE <root@ql.gl>
# author repo https://github.com/shellcodesniper

resolver = "2"

members = [
  "entry",                          # NOTE : Entry point
]

default-members = [
  "entry",
]

[profile.dev]
prefer-dynamic = false # NOTE : Prefer dynamic linking
opt-level = 0
debug = true

[profile.release]
prefer-dynamic = true # NOTE : Prefer dynamic linking
opt-level = 3
debug = false
lto = true
# split-debuginfo = "unpacked"
```

-> Result Will be

![SC_ 2023-07-03 오후 8.49.13](https://bdev-s3.s3.ap-northeast-2.amazonaws.com/pics/20230703205219wBPppt_SC_%202023-07-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.49.13.jpg)


# Prevent "Could not found libstd-~~~.so"

##### ADD THIS to binary module Cargo.toml

``` toml

[dependencies]
prefer-dynamic = "0"

[dev-dependencies]
prefer-dynamic = { version = "0", features = ["link-test"] }


```

## But... If Error Still Occurs,

> Try this
>

### MAC OS X
``` bash
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$PWD"
sudo ldconfig
./a.out
```


### LINUX
``` bash
export DYLD_LIBRARY_PATH="$DYLD_LIBRARY_PATH:$PWD"
./a.out

```
