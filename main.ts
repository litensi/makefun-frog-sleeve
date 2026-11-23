import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.txt", import.meta.url);

mkdirSync(outputDir || ".", { recursive: true });
copyFileSync(source, join(outputDir, "entry.txt"));
