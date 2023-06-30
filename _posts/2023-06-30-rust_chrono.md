---
layout: content
title: Rust Chrono & Chrono-tz Cheatsheet
category: rust
---

# 자주 헷갈림~

## DateTime Conversion Utils

``` rust
use chrono::{
  TimeZone, DateTime,
  Date, Utc,
};
use chrono_tz::{
  Tz, Asia::Seoul,
};

pub type KstDate = Date<Tz>;
pub type KstDateTime = DateTime<Tz>;

pub fn now_utc() -> DateTime<Utc> {
  Utc::now()
}

pub fn now_kst() -> DateTime<Tz> {
  chrono::Local::now().with_timezone(&Seoul)
}

pub fn anything_to_utc<T: TimeZone>(t: DateTime<T>) -> Result<DateTime<Utc>, Box<dyn std::error::Error>> {
  let utc: DateTime<Utc> = t.with_timezone(&Utc);
  Ok(utc)
}

pub fn anything_to_kst<T: TimeZone>(t: DateTime<T>) -> Result<DateTime<Tz>, Box<dyn std::error::Error>> {
  let kst: DateTime<Tz> = t.with_timezone(&Seoul);
  Ok(kst)
}

```
