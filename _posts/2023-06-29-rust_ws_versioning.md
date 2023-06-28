---
layout: content
title: Rust WorkSpace Versioning
category: rust
---

# Dependency Installation
`cargo install cargo-edit`

## Base commands
- `cargo set-version --bump major`
- `cargo set-version --bump minor`
- `cargo set-version --bump patch`

## Package Specific
- `cargo set-version --bump major -p {package_name}`
- `cargo set-version --bump minor -p {package_name}`
- `cargo set-version --bump patch -p {package_name}`
