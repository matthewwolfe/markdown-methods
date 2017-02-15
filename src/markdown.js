const fs = require('fs');


const markdown = [];

exports.toString = () => markdown.join('  \n');

exports.toFile = (path, callback) => {
    fs.writeFile(path, exports.toString(markdown), (error) => {
        if(error) {
            return console.error(error);
        }

        if (callback) {
            callback();
        }
    });
};

exports.h1 = string => markdown.push(`# ${string}\n`);
exports.h2 = string => markdown.push(`## ${string}\n`);
exports.h3 = string => markdown.push(`### ${string}\n`);
exports.h4 = string => markdown.push(`#### ${string}\n`);
exports.h5 = string => markdown.push(`##### ${string}\n`);
exports.h6 = string => markdown.push(`###### ${string}\n`);

exports.blockQuote = string => markdown.push(`> ${string}`);
exports.paragraph = string => markdown.push(string);
exports.link = (text, url) => markdown.push(`[${text}](${url})`);
exports.image = (altText, url, description) => markdown.push(`![${altText}](${url}) "${description}"`);

exports.orderedList = array => markdown.push(
    `${array.map((element, index) => `${index + 1}. ${element}`).join('\n')}\n\n`
);

exports.unorderedList = array => markdown.push(`${array.map(element => `- ${element}`).join('\n')}\n\n`);

exports.table = object => {
    if (!object.hasOwnProperty('columns') || !object.columns.length) {
        console.error('No columns specified');
    }

    if (!object.hasOwnProperty('data') || !object.data.length) {
        console.error('No data specified');
    }

    const columns = `\n${object.columns.map(column => `| ${column} `).join('')}|\n`;
    const separator = `${object.columns.map(column => '| - ').join('')}|\n`;
    const data = object.data.map(row => `| ${row.join(' | ')} |\n`);

    markdown.push(columns + separator + data);
};
