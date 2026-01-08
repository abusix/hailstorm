import { readdir, rename } from 'node:fs/promises'

const imageDirUrl = new URL('../assets/icons/', import.meta.url)
const files = await readdir(imageDirUrl)

await Promise.all(
  files
    .filter((file) => file.endsWith('.svg') && !file.endsWith('-icon.svg'))
    .map((file) => {
      const newFileName = file.replace(/\.svg$/, '-icon.svg')
      return rename(
        new URL(file, imageDirUrl),
        new URL(newFileName, imageDirUrl),
      )
    }),
)
