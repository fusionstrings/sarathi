
import jspmResolve from '@jspm/resolve';

const cfPath = `${process.cwd()}/`;

async function start(){
    const cache = {};
    const { resolved, format } = await jspmResolve('./x/x.js', cfPath, { cache });
    console.log(resolved, format);
}

start();