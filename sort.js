const inputFile = process.argv[2]

const prefix = 'onInputData('
const postfix = ')'
const content = require('fs').readFileSync(inputFile, 'utf-8')
const json = JSON.parse(content.slice(prefix.length, -postfix.length))

json.log.entries.sort((a, b) => {
	return a.response.bodySize > b.response.bodySize ? -1 : a.response.bodySize === b.response.bodySize ? 0 : 1
})

require('fs').writeFileSync(inputFile, prefix + JSON.stringify(json, null, 2) + postfix, 'utf-8')