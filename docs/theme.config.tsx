import React from 'react'

const repo = 'rachelallyson/eslint-config-node-public'

const themeConfig = {
  logo: <b>@rachelallyson/eslint-config-node</b>,
  project: {
    link: `https://github.com/${repo}`
  },
  docsRepositoryBase: `https://github.com/${repo}/blob/main/docs/content`,
  footer: {
    text: `ISC License © ${new Date().getFullYear()} Kuzu Media.`
  }
}

export default themeConfig


