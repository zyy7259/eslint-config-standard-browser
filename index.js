/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-26T09:46:25+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-26T11:18:21+08:00
*/

var config = require('eslint-config-standard')

delete config.parserOptions.sourceType

delete config.env.node
config.env.browser = true

config.rules['no-unused-vars'][1].vars = 'local'

module.exports = config
