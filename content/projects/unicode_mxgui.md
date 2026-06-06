---
title: "Unicode support for mxgui"
date: 2024-04-01
description: "Adding support for Unicode text rendering in an embedded OS."
tags: ["C++", "operating systems", "embedded systems", "font rendering"]
github: "https://github.com/nicolasbenatti/mxgui"
demo: ""
---

[*mxgui*](https://github.com/fedetft/mxgui) is a GUI library developed at Politecnico di Milano, part of the [*Miosix*](https://doi.org/10.4230/artifacts.25582) embedded OS kernel. My task has been developing adding library support for Unicode character encoding, designing suitable data structures for ROM-based storage of glyphs.
I had to deal with font rendering algorithms and system-level programming, allowing the creation of much richer and internationalised embedded UIs.