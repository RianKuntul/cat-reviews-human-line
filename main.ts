import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: Cat Reviews Its Human.
// One funny single-line one-star review from a house cat about its human,
// written to /output/entry.txt. The gate requires UTF-8 text of 1-200
// characters, not only white space, so the line is guarded hard here.
const MAX_CHARS = 200;

const REVIEW =
  "One star. He waits until my bowl shows bottom before refilling it, like I eat on a schedule, then sits in my chair and acts surprised when I sit on his keyboard mid-call.";

if (REVIEW.length < 1 || REVIEW.length > MAX_CHARS) {
  throw new Error(
    `Review must be 1-${MAX_CHARS} characters, got ${REVIEW.length}`,
  );
}
if (REVIEW.includes("\n")) {
  throw new Error("Review must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${join(outDir, "entry.txt")}`);
