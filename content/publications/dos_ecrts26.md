---
title: "On DoS Attacks Exploiting Input Representativeness in Mixed-Criticality Systems"
authors:
  - "Nicolas Benatti"
  - "Federico Reghenzani"
  - "Vittorio Zaccaria"
venue: "38th European Conference on Real-Time Systems (ECRTS)"
year: 2026
pdf: "publications/dos_ecrts26.pdf"
arxiv: ""
doi: "https://doi.org/10.4230/LIPIcs.ECRTS.2026.11"
abstract: "In order to satisfy power, area and cost constraints, modern Cyber-Physical Systems (CPSs) often consolidate tasks with vastly different assurance requirements onto a shared platform. Mixed-Criticality Systems (MCSs) enable this consolidation while maintaining timing guarantees on complex hardware through probabilistic timing analysis. Among these techniques, Measurement-Based Probabilistic Timing Analysis (MBPTA) has gained popularity in recent years; it works by deriving Worst-Case Execution Time (WCET) estimates from input samples collected at design time. The impossibility of fully covering tasks' input space during MBPTA can pave the way for Denial-of-Service (DoS) attacks: adversaries can, for example, craft data-oriented and sensor spoofing attacks that force execution along unobserved paths, inducing WCET overruns and deadline violations.
This work demonstrates that temporal DoS attacks exploiting insufficient input representativeness pose a credible threat to MCSs, showing substantial impact on availability and criticality mode transitions through comprehensive simulations. Next, rather than pursuing unattainable perfect input coverage at design time, we investigate runtime detection via monitoring of execution-time distributions and propose a novel Goodness-of-Fit-based detection mechanism.
Our detection approach exhibits improved accuracy and reduced variance compared to existing iid-based methods, offering more stable performance across heterogeneous workloads. The trade-off is higher detection latency, necessitating careful analysis of system-specific tolerance windows before deployment. Evaluation demonstrates both the practical threat posed by timing-based attacks and the viability of distribution-based anomaly detection, while acknowledging that synthetic evaluation cannot alone validate real-world applicability."
---

## Abstract

In order to satisfy power, area and cost constraints, modern Cyber-Physical Systems (CPSs) often consolidate tasks with vastly different assurance requirements onto a shared platform. Mixed-Criticality Systems (MCSs) enable this consolidation while maintaining timing guarantees on complex hardware through probabilistic timing analysis. Among these techniques, Measurement-Based Probabilistic Timing Analysis (MBPTA) has gained popularity in recent years; it works by deriving Worst-Case Execution Time (WCET) estimates from input samples collected at design time. The impossibility of fully covering tasks' input space during MBPTA can pave the way for Denial-of-Service (DoS) attacks: adversaries can, for example, craft data-oriented and sensor spoofing attacks that force execution along unobserved paths, inducing WCET overruns and deadline violations.
This work demonstrates that temporal DoS attacks exploiting insufficient input representativeness pose a credible threat to MCSs, showing substantial impact on availability and criticality mode transitions through comprehensive simulations. Next, rather than pursuing unattainable perfect input coverage at design time, we investigate runtime detection via monitoring of execution-time distributions and propose a novel Goodness-of-Fit-based detection mechanism.
Our detection approach exhibits improved accuracy and reduced variance compared to existing iid-based methods, offering more stable performance across heterogeneous workloads. The trade-off is higher detection latency, necessitating careful analysis of system-specific tolerance windows before deployment. Evaluation demonstrates both the practical threat posed by timing-based attacks and the viability of distribution-based anomaly detection, while acknowledging that synthetic evaluation cannot alone validate real-world applicability.

## Key Contributions

1. 
## Citation

The paper is still to appear.

```bibtex
```
