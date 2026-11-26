// The Dog Reviews the Mailman — writes one line to /output/entry.txt
// Gate: 111 chars (max 200), one line, no trailing newline.
// A one-star review from a customer who has never once been thrown the ball.
// (Verified: 111 chars, gate max 200.)
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "One star. He comes every",
  "day, leaves paper in the box,",
  "and has never once",
  "thrown the ball. Would",
  "not recommend.",
];

// Join the parts with single spaces into the final line.
const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
