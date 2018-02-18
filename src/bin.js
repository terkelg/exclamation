#!/usr/bin/env node
const exclamations = require('./');

const help = `

    Examples
        $ exclamation'
            Holy Alps
          
        $ exclamation --all'
            Holy Agility
            Holy Almost
            ...
    
    Options
        --all   Get all exclamations instead of a random one'
`;

let args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(help);
  process.exit();
}

if (args.includes('--all')) {
  console.log(exclamations.all.join('\n'));
  process.exit();
}

console.log(exclamations.random());
process.exit();
