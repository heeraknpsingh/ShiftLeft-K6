import http from "k6/http";
import { check, sleep } from "k6";

// Define test options
export let options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "1m", target: 50 },
    { duration: "30s", target: 0 },
  ],
};

export default function () {
  let res = http.get("https://quickpizza.grafana.com/");
  check(res, {
    "response status is 200": (r) => r.status === 200,
    "response time is < 500ms": (r) => r.timings.duration < 500,
  });
  sleep(1);
}
