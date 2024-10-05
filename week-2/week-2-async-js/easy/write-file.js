import fs from 'fs'

fs.writeFile('writeFileDemo.md','## this is output from the write file task', (err)=>{
    console.log(err)
})

// completed