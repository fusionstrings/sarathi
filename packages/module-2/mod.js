import jspmResolve from '@jspm/resolve';

const cfPath = `${process.cwd()}/packages/module-1/`;

async function main() {
    console.log(process.cwd());
    try {
        const {
            resolved
        } = await jspmResolve('./lib/mod-2.js', cfPath);
        console.log(resolved);
    } catch (error) {
        console.error(error);
    }
}

main();
