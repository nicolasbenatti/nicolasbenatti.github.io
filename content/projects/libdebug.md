---
title: "Remote GDB session support in libdebug"
date: 2025-05-01
description: "Adding support for remote debugging on a research debugger written in Python."
tags: ["Operating systems", "Architectures", "Python", "QEMU", "GDB"]
github: "https://github.com/nicolasbenatti/libdebug"
demo: ""
---

*libdebug* is a novel debugger presented as a [poster](https://doi.org/10.1145/3658644.3691391) at CCS'24; it is the first debugger for userland binaries which is both fast and fully programmable. In the realm of this research project my contribution has been adding support for remote debugging via the [GDB Remote Serial Protocol](https://sourceware.org/gdb/current/onlinedocs/gdb.html/Remote-Protocol.html). The main use-case would be allowing cross-debugging of ARM and RISC-V binaries emulated on an x64 host via QEMU.
