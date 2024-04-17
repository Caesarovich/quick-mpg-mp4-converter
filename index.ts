import { $ } from 'bun';
import chalk from 'chalk';
import { parse } from 'path';

// Get current directory
const currentDir = parse(process.argv0).dir;

// Change to current directory
process.chdir(currentDir);

// List .mpg files in the current directory
let mpgFiles = (await $`ls *.mpg`.quiet().nothrow()).text().trim().split('\n');

// Include files passed as arguments
if (process.argv.length > 2) {
  mpgFiles = process.argv.slice(2);
}

// Filter out empty strings
mpgFiles = mpgFiles.filter((file) => file.trim() !== '');

if (mpgFiles.length === 0) {
  console.error('>> No .mpg files found in the current directory');
  process.exit(0);
}

console.log(
  `>> Found ${chalk.bold(mpgFiles.length)} .mpg files in the current directory`
);

// Create output directory
await $`mkdir -p output`.quiet();

for (const file of mpgFiles) {
  console.log(`> Converting ${chalk.bold(file)} to .mp4`);

  await $`ffmpeg -i ${file} -q:v 0 -c:v libx264 -c:a aac -strict experimental output/${file.replace(
    /\.mpg$/,
    '.mp4'
  )}`
    .quiet()
    .catch((error) => {
      console.error(`> Error converting ${chalk.bold(file)} to .mp4: ${error}`);
    });
}

console.log('>> Done!');
