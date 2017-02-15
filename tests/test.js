const markdown = require(`${process.cwd()}`);

markdown.h1('Test');
markdown.h2('Test2');
markdown.orderedList(['First', 'Second']);
markdown.unorderedList(['First', 'Second']);

markdown.link('Google', 'http://www.google.com');
markdown.link('Github', 'http://www.github.com');

markdown.table({
    columns: ['Name', 'Type', 'Default'],
    data: [['hidden', 'boolean', 'false']]
});

markdown.toFile(`${__dirname}/markdown.md`);
