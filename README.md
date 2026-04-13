# ShiftLeft-K6

k6 load tests for CI, with optional [Grafana k6 Cloud](https://grafana.com/docs/grafana-cloud/testing/k6/) execution.

## Scripts

| File | Purpose |
|------|---------|
| `load_k6_test.js` | Staged load against `https://quickpizza.grafana.com` (used by the cloud workflow). |
| `load_test.js` | Same target; used by the local workflow with JSON output. |

## GitHub Actions

| Workflow | Trigger | Notes |
|----------|---------|--------|
| [k6-performance.yml](.github/workflows/k6-performance.yml) | Push to `main` | Local run via `grafana/k6-action`, writes `test_results.json`. |
| [k6-performance-cloud.yml](.github/workflows/k6-performance-cloud.yml) | Push to `main` | Cloud run via `grafana/k6-action` with `cloud: true`. Requires repo secret `K6_CLOUD_TOKEN`. |

## Grafana references (example run)

Fixed time-range dashboard view and the matching k6 Cloud run:

| Resource | Link |
|----------|------|
| **Dashboard** (2026-04-13 16:19:36–16:20:18 UTC) | [Open in Grafana](https://heera53.grafana.net/d/19988320-d56b-4c86-97a2-32c7efcd0721/load-k6-test-js-13-apr-213a-49?orgId=1&from=2026-04-13T16:19:36%2B00:00&to=2026-04-13T16:20:18%2B00:00&timezone=browser&refresh=25s) |
| **k6 Cloud run** | [Run #7265396](https://heera53.grafana.net/a/k6-app/runs/7265396) |

The dashboard URL uses `from` / `to` query parameters to pin the time window for that run. For an immutable Grafana snapshot object, create one from **Share → Snapshot** in Grafana and add that URL here.

## Local run

```bash
k6 run load_k6_test.js
```
<img width="1214" height="956" alt="Screenshot 2026-04-13 at 9 56 43 PM" src="https://github.com/user-attachments/assets/c1804cfb-02dd-4c78-b904-072afb363928" />
<img width="1280" height="952" alt="Screenshot 2026-04-13 at 9 53 12 PM" src="https://github.com/user-attachments/assets/deae3004-76af-4260-933c-615f3a526da6" />

Requires [k6](https://k6.io/docs/get-started/installation/) installed locally.
