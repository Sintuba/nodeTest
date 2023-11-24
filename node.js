const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`${port}`);
});

// ローカルリポジトリの非 main​ ブランチ 
//(testbranch​ など) から Heroku にコードを
//デプロイするには、次の構文を使用して、
//リモートの main​ ブランチにプッシュされるようにします。

// git push heroku testbranch:main