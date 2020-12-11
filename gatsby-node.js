const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const computerPostTemplate = path.resolve('src/layouts/Article/ComputerArticleTemplate.js');
    const mobilePostTemplate = path.resolve('src/layouts/Article/MobileArticleTemplate.js');
    const gamePostTemplate = path.resolve('src/layouts/Article/GameArticleTemplate.js');
    const homePostTemplate = path.resolve('src/layouts/Article/HomeArticleTemplate.js');
    const smartPostTemplate = path.resolve('src/layouts/Article/SmartArticleTemplate.js');
    const computerResult = await graphql(`
    query queryComputerCMS {
        allDatoCmsComputerarticle {
            nodes {
                id
                articleTitle
            }
        }
    }
    `);
    const mobileResult = await graphql(`
query queryMobileCMS {
    allDatoCmsMobilearticle {
        nodes {
            id
            articleTitle
        }
    }
}
`);
    const gameResult = await graphql(`
query queryMobileCMS {
    allDatoCmsGamearticle {
        nodes {
            id
            articleTitle
        }
    }
}
`);
    const smartResult = await graphql(`
query queryMobileCMS {
    allDatoCmsSmartweararticle {
        nodes {
            id
            articleTitle
        }
    }
}
`);
    const homeResult = await graphql(`
query queryMobileCMS {
    allDatoCmsHomearticle {
        nodes {
            id
            articleTitle
        }
    }
}
`);
    homeResult.data.allDatoCmsHomearticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
        });
        createPage({
            path: `dom/${slugifiedTitle}`,
            component: homePostTemplate,
            context: {
                id: post.id
            }
        })
    });


    smartResult.data.allDatoCmsSmartweararticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
        });
        createPage({
            path: `smart-wear/${slugifiedTitle}`,
            component: smartPostTemplate,
            context: {
                id: post.id
            }
        })
    });

    gameResult.data.allDatoCmsGamearticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
        });
        createPage({
            path: `gry/${slugifiedTitle}`,
            component: gamePostTemplate,
            context: {
                id: post.id
            }
        })
    });

    mobileResult.data.allDatoCmsMobilearticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
        });
        createPage({
            path: `mobile/${slugifiedTitle}`,
            component: mobilePostTemplate,
            context: {
                id: post.id
            }
        })
    });
    computerResult.data.allDatoCmsComputerarticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.articleTitle, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
        });
        console.log(slugifiedTitle);
        createPage({
            path: `komputery/${slugifiedTitle}`,
            component: computerPostTemplate,
            context: {
                id: post.id
            }
        })
    })
}