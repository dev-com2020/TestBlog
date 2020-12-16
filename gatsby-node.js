const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const computerPostTemplate = path.resolve('src/layouts/Article/ComputerArticleTemplate.js');
    const mobilePostTemplate = path.resolve('src/layouts/Article/MobileArticleTemplate.js');
    const gamePostTemplate = path.resolve('src/layouts/Article/GameArticleTemplate.js');
    const homePostTemplate = path.resolve('src/layouts/Article/HomeArticleTemplate.js');
    const smartPostTemplate = path.resolve('src/layouts/Article/SmartArticleTemplate.js');
    const result = await graphql(`
    query queryCMS {
        allDatoCmsComputerarticle {
            nodes {
                id
                articleTitle
            }
        }
        allDatoCmsMobilearticle {
            nodes {
                id
                articleTitle
            }
        }
        allDatoCmsGamearticle {
            nodes {
                id
                articleTitle
            }
        }
        allDatoCmsSmartweararticle {
            nodes {
                id
                articleTitle
            }
        }
        allDatoCmsHomearticle {
            nodes {
                id
                articleTitle
            }
        }
    }
    `);
    // const slugifiedTitle = slugify(text, { lower: true, remove: /[*+~.()'"!:@]/g, });
    result.data.allDatoCmsHomearticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@,?]/g,
        });
        createPage({
            path: `dom/${slugifiedTitle}`,
            component: homePostTemplate,
            context: {
                id: post.id,
            }
        })
    });


    result.data.allDatoCmsSmartweararticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@,?]/g,
        });
        createPage({
            path: `smart-wear/${slugifiedTitle}`,
            component: smartPostTemplate,
            context: {
                id: post.id,
            }
        })
    });

    result.data.allDatoCmsGamearticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@,?]/g,
        });
        createPage({
            path: `gry/${slugifiedTitle}`,
            component: gamePostTemplate,
            context: {
                id: post.id,
            }
        })
    });

    result.data.allDatoCmsMobilearticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@,?]/g,
        });
        createPage({
            path: `mobile/${slugifiedTitle}`,
            component: mobilePostTemplate,
            context: {
                id: post.id,
            }
        })
    });
    result.data.allDatoCmsComputerarticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@,?]/g,
        });
        createPage({
            path: `komputery/${slugifiedTitle}`,
            component: computerPostTemplate,
            context: {
                id: post.id,
            }
        })
    })
}