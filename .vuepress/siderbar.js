const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/JavaScript'
const CSS_PATH = '/blogs/css'
const ALGORITHM_PATH = '/blogs/algorithm'
const GIT_PATH = '/blogs/git'
const OTHER_PATH = '/blogs/other'

module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('js基础', JAVASCRIPT_PATH)],
  [CSS_PATH]: [createSideBarConfig('CSS基础', CSS_PATH)],
  [ALGORITHM_PATH]: [createSideBarConfig('算法', ALGORITHM_PATH)],
  [GIT_PATH]: [createSideBarConfig('git', GIT_PATH)],
  [OTHER_PATH]: [createSideBarConfig('工具', OTHER_PATH)]
}
