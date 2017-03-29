import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as fallback from 'express-history-api-fallback';
import * as dotenv from 'dotenv';

// Load .env vars
dotenv.config({ path: path.resolve('./.env') });

const { APP_PORT, NODE_ENV } = process.env;
const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack/webpack.development.config');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true },
  }));

  app.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) return next(err);

      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  const root = path.join(__dirname, '../dist');

  app.use(express.static(root));
  app.use(fallback('index.html', { root }));
}

// START THE SERVER
app.listen(APP_PORT, () => console.log(`Server started on port ${APP_PORT}`));

export default app;
