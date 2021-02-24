import 'core-js/stable'
import 'regenerator-runtime/runtime'

import app from './app'
import {PORT} from './config'

app.listen(PORT, () => {
    console.log(`🚀 Server ready at port: ${PORT} `);
  });