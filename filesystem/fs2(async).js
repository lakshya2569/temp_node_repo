const { readFile , writeFile } = require('fs')
console.log('start');
readFile('./modules2/file/first.txt','utf8',(err,result)=>
    {
    if(err)
        {
            console.log(err)
            return
        }
        const first = result;
        readFile('./modules2/file/second.txt','utf8',(err,result)=>
            {
                if(err)
                    {
                        console.log(err)
                        return
                    }
                    const second = result
                    writeFile('./modules2/file/result-async.txt',`here is the result mahnigga:\n'${first}\n${second}`,
                        (err,result)=>
                        {
                            if(err)
                                {
                                    console.log(err)
                                    return
                                }
                                console.log('done with this task')
                        }
                    )
            })

            console.log("starting the next task")

         
}
)
