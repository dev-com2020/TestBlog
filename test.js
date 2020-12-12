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
    const queries = [result.data.allDatoCmsComputerarticle.nodes, result.data.allDatoCmsMobilearticle.nodes, result.data.allDatoCmsGamearticle.nodes, result.data.allDatoCmsSmartweararticle.nodes, result.data.allDatoCmsHomearticle.nodes];
    const components = [computerPostTemplate, mobilePostTemplate, gamePostTemplate, smartPostTemplate, homePostTemplate];
    const paths = ['komputery', 'mobile', 'gry', 'smart', 'dom'];

    for (let i = 0; i < result.length - 1; i++) {
        let component = components[i];
        let path = paths[i];
        queries[i].forEach(post => {
            const slugifiedTitle = slugify(post.articleTitle, {
                lower: true,
                remove: /[*+~.()'"!:@]/g,
            });
            createPage({
                path: `${path}/${slugifiedTitle}`,
                component: component,
                context: {
                    id: post.id
                }
            })
        })
    };
}