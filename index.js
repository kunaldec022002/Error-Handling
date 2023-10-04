console.log('Statement 1')
console.log('Statement 2')

try
{
    throw new Error("File Not Found")
}

catch(err)
{
    console.log(err.name);
}
console.log("statement 3")