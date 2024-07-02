'use strict';

/**
 * Module dependencies.
 */

import _ from 'lodash';
import chalk from 'chalk';
import safeStringify from 'json-stringify-safe';

/**
 * Expose a function that passes in a Vantage
 * object and options.
 */

export default function (vantage) {
  vantage
    .mode('repl', 'Enters REPL mode.')
    .delimiter('repl:')
    .init(function (args, cb) {
      this.log('Entering REPL Mode. To exit, type \'exit\'');
      cb(undefined, 'Entering REPL Mode. To exit, type \'exit\'.');
    })
    .action(function (command, cb) {
      const globalEval = eval;
      try {
        const res = globalEval(command);
        let log = (_.isString(res)) ? chalk.white(res) : res;
        if ((_.isObject(log)) && (!_.isArray(log))) {
          try {
            log = safeStringify(log, null, 2);
          } catch(e) {
            console.log(e.stack);
          }
        }
        this.log(log);
        cb(undefined, res);
      } catch(e) {
        this.log(e);
        cb(e);
      }
    });
};
