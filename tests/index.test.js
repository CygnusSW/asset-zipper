const chai = require("chai");
const expect = chai.expect;
const app = require("../src/app");

const fs = require('fs');
const testImgFile = fs.readFileSync("./tests/test-assets/test-asset.jpg");
const testHtmlFile = fs.readFileSync("./tests/test-assets/test-asset.html");
const testCssFile = fs.readFileSync("./tests/test-assets/test-asset.css");

const mock = require('mock-fs');




describe("asset-zipper", () => {
    before(() => {        
        mock({
            "path/to/fake/directory": {
                "test-asset.jpg": testImgFile,
                "test-asset.html": testHtmlFile,
                "test-asset.css": testCssFile
            }
        })
    })

    beforeEach(() => {
        mock.restore();
    })

    it("throws an error if no command line arguments are provided.", () => {
        const simulatedArgs = [];
        expect(app.zipFiles.bind(app, simulatedArgs)).to.throw("No file or directory provided to zip.");
    });

    it("accepts a file as the first command-line argument and zips the file as a .zip file.", () => {
        const simulatedArgs = ["path/to/fake/directory/test-asset.css"];
        app.zipFiles(simulatedArgs);
        var zipFileCreated = mock.existsSync(simulatedArgs[0]);
        expect(zipFileCreated).to.equal(true);
        
    }),
    
    afterEach(() => {
        mock.restore();
    })



})



