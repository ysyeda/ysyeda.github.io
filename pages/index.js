import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Header from 'components/Header'
import Work from 'components/Work'
import Projects from 'components/Projects'
import Writings from 'components/Writings'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  // <div>
  //   <Link to={prefixLink('/markdown/')}>Markdown</Link>
  // </div>
  render () {
    const pages = this.props.route.pages;
    console.log(pages);
    const writings = _.sortBy(
        pages.filter((page) => page.file.dirname === 'writings'),
        (page) => (page.data.date)
      ).reverse();

    console.log(writings);
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <Header />
          <Work />
          <Projects />
          <Writings writings={writings} />
        </div>
      </DocumentTitle>
    )
  }
}
