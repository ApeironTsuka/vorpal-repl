# vorpal-repl

REPL extension for [Vorpal.js](https://github.com/ApeironTsuka/vorpal). Installs the `repl` command, which drops you into a REPL session within the context of the application. Built in to Vantage.js by default.

##### Installation

```bash
npm install @ApeironTsuka/vorpal-repl
npm install @ApeironTsuka/vorpal
```

##### Programmatic use

```js
// index.js
import Vorpal from '@ApeironTsuka/vorpal';
import repl from '@ApeironTsuka/vorpal-repl';

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(repl)
  .show();
```

### License

MIT

