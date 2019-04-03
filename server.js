const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// 불러온 비트 값을 인코딩해서 보여줌. 스트링 버퍼로 온 것도 완료된 형태로.

// 미들웨어!

app.use(bodyParser());

app.use('/hello', function(req, res, next){
    res.send('안녕!');
});

app.get('/add', function(req, res, next){
    fs.readFile('./calculator.html', 'utf-8', function(a, html){
        console.log(html);
        res.send(html);
    });
});

app.post('/add', function(req, res, next){
    console.log('요청 들어옴', req.body);
    res.status(200).json({message : '안녕!'});
});

app.use('/', function(req, res, next){
    res.send('대문');
});

//80ㅇㅣ 기본 8080
app.listen(8080, function(){
    console.log('프로그램 시작...8080');
});