
module.exports = {};
module.exports.zipFiles = zipFiles;



function zipFiles([...args])
{
    console.log(args, args.length);
    if (args.length < 1) //If no Command Line arguments passed
        throw new Error("No file or directory provided to zip.");    
}