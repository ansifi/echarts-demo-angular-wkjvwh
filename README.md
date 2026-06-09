# echarts-demo-angular-wkjvwh

Angular + Apache eCharts demonstration — chart layer separated from data concerns.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/echarts-demo-angular-wkjvwh)

---

## Design decisions

Architectural reference for the **Enterprise Web Platforms** pattern on [ansifi.github.io](https://ansifi.github.io/#full-stack). Part of the [evidence room](https://ansifi.github.io/#evidence-room) — proof (code), logic (this section), context (audit hub).

| Decision | Rationale |
| :--- | :--- |
| **Angular** | Component model suits operator dashboards — predictable change detection, typed templates, enterprise hiring familiarity |
| **Apache eCharts** | Canvas/SVG charting with rich interaction without binding business logic into the chart library — reporting queries stay on the server in production systems |
| **StackBlitz snapshot** | Frozen reference for chart-component integration — auditable without deployment dependencies |
| **Presentation vs data boundary** | Demo isolates visualisation layer; production CSR Informatics work paired Angular + Spring Boot so SQL/reporting owned the backend |
| **Not a production platform** | Reference for chart-layer patterns; multi-tenant CRM and logistics delivery at [sevendyne.com/case-studies](https://www.sevendyne.com/case-studies/) |

**Audit focus when I build this pattern:** tenant boundaries, API contract clarity, reporting vs transactional separation.

*Principal Architect · [Technical Audit hub](https://ansifi.github.io) · [Sevendyne delivery](https://sevendyne.com)*
