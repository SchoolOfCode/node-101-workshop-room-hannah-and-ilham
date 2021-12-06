
import {myCollection} from "./collection.js"

import chalk from 'chalk';

// let myCollection = [
//     {
//       name: "School of Code mug",
//       count: 1,
//       whatILike: "It has my cute pixel character on it!"
//     },
//     {
//       name: "School of Code hat",
//       count: 2,
//       whatILike: "An often overlooked fashion accessory"
//     },
//     {
//       name: "School of Code pillow",
//       count: 1,
//       whatILike: "Eat. Sleep. Code. Repeat :)"
//     }
//   ];

//   console.log(myCollection);

  function describeItem(item) {
    if (item.count > 1) {
      console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan.bold.underline(item.name)}s. Here's what I like about them: ${chalk.green.italic(item.whatILike)}`)
      } else {
      console.log(chalk.bgGrey(`I have a ${chalk.cyan.bold.underline(item.name)}. Here's what I like about it: ${chalk.green.italic(item.whatILike)}`))
      }
  };

//   describeItem(myCollection[1]);

  function describeCollection(array){
    array.forEach(describeItem)
  }
describeCollection(myCollection)