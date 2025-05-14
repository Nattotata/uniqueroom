import { rm } from 'node:fs/promises';

const paths = ['./node_modules', './.svelte-kit'];

paths.forEach(async (path) => {
  try {
    await rm(path, { recursive: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.info(`Directory on ${path} doesn't exist.`);
    }
  }
});
