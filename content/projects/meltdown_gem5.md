---
title: "Porting the Meltdown attack on the gem5 architecture simulator"
date: 2022-06-01
description: "I supported a research project on microarchitectural side-channel detection by adapting the original Meltdown PoC to work on gem5."
tags: ["C", "Gem5", "Side-channel attacks", "Linux kernel", "Cryptographic engineering", "BSc Thesis"]
github: ""
demo: ""
---

Ported the original source code for the Meltdown attack on a non-mitigated Linux 4.19 kernel, running on the gem5 architecture simulator. This helped further research on Microarchitectural Side-Channel attacks (\emph{e.g.}, evaluation of side-channel resistance of common cryptography implementations). The project required a fair amount of kernel configuration, syscall tracing and memory inspection.
