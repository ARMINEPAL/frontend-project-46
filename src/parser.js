import yaml from 'js-yaml'

export const parse = (data, format) => {
  if (format === '.json') {
    return JSON.parse(data)
  }
  else if (format === '.yaml' || format === '.yml') {
    return yaml.load(data)
  }
  throw new Error(`unknown format: ${format}`)
}
