import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const Seo = ({ data }) => {
    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="keywords" content={data.site.siteMetadata.keywords} />
                <meta property="og:title" content={data.site.siteMetadata.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={data.site.siteMetadata.description} />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="PL" />
                <meta name="author" content={data.site.siteMetadata.author} />
                <meta property="og:url" content={data.site.siteMetadata.url} />
                <link rel="cannonical" href={data.site.siteMetadata.url} />
            </Helmet>
        </>
    )
}

export default function MySeo(props) {
    return (
        <StaticQuery
            query={graphql`
            {
                site {
                  siteMetadata {
                    author
                    description
                    keywords
                    title
                    url
                  }
                }
            }
            `}
            render={data => <Seo data={data} {...props} />}
        />
    )
}