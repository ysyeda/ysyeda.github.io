exports.rewritePath = (parsedFilePath, metadata) => {
  // To convert paths in writngs to 'writings/title-of-blog-post/'
  if (parsedFilePath.dirname === "writings") {
    return `${parsedFilePath.dirname}/${parsedFilePath.name.split('---')[1]}/`
  }
}
