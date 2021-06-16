import jspmResolve from '@jspm/resolve';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const winSepRegEx = /\\/g;
const fixturesPath = path.resolve(__dirname, 'packages').replace(winSepRegEx, '/') + '/';

const sfPath = `${fixturesPath}module-1/`;
async function main() {
    try {
        const { resolved, format } = await jspmResolve(
            './mod-2',
            sfPath + 'lib/'
        );
        console.log(resolved, format);
    } catch (error) {
        console.error(error);
    }
}

main();
