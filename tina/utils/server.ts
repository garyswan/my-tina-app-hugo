import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import toml from '@iarna/toml'

export const getContentData = (filePath: string) => {
  if (!process.cwd) return {}
  const matterEngines = {
    toml: {
      parse: (val: string) => toml.parse(val),
      stringify: (val: any) => toml.stringify(val),
    },
  }
  const fullPath = path.resolve(process.cwd(), 'content', `${filePath}.md`)
  const content = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(content, {
    language: 'toml',
    delimiters: '+++',
    engines: matterEngines,
  })
  return data
}

export const getFilesList = (dir: string) => {
  if (!process.cwd) return []
  const fullPath = path.resolve(process.cwd(), 'content', dir)
  const files = fs.readdirSync(fullPath)
  return files
}

export const saveGeneratedData = () => {
  const { sponsors } = getContentItems()
  const generatedPath = path.resolve(process.cwd(), 'tina', '__generated__')
  if (!fs.existsSync(generatedPath)) {
    fs.mkdirSync(generatedPath)
  }
  const content = `
  export const sponsors = ${JSON.stringify(sponsors)};
  `

  fs.writeFileSync(path.resolve(generatedPath, 'content.ts'), content)
}

export const getContentItems = (): { sponsors: string[] } => {
  const sponsors = getFilesList('sponsors').map((sponsor) => `sponsors/${sponsor}`)
  return { sponsors }
}
