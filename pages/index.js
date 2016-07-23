import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Header from 'components/Header'
import Work from 'components/Work'
import Projects from 'components/Projects'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  // <div>
  //   <Link to={prefixLink('/markdown/')}>Markdown</Link>
  // </div>
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <Header />
          <Work />
          <Projects />
        </div>
      </DocumentTitle>
    )
  }
}
