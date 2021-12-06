import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express";
import * as Path from "path";

export const rootDir = Path.resolve(__dirname);

@Configuration({
    rootDir,
    port: 5000
})
export class Server {
    @Inject()
    app: PlatformApplication;

    public $beforeRoutesInit() {
        const cookieParser = require('cookie-parser'),
            bodyParser = require('body-parser'),
            compress = require('compression'),
            methodOverride = require('method-override'),
            cors = require('cors');

        this.app
            .use(cors())
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));
    }
}
