import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const site = process.env.SITE_URL;
if (!site) {
	console.error("SITE_URL env var not set");
	process.exit(1);
}

const content = [
	"# robots.txt",
	`# ${site}`,
	"",
	"User-agent: *",
	"Allow: /",
	"",
].join("\n");

writeFileSync(resolve(root, "public", "robots.txt"), content, "utf-8");
console.log(`robots.txt generated for ${site}`);
