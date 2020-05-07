var express = require('express') // npm install express --save
var app = express()
var fs = require('fs');
var template = require('./template.js');
var compression = require('compression')//압축 미들웨어 // npm install compression --save
var multer = require('multer');//동영상 업로드 가능케 해주는 미들웨어 // npm install multer --save
var _storage = multer.diskStorage({//업로드한 동영상 관련 미들웨어
  destination: function (req, file, cb) {
// if(파일의 형식이 이미지면)// 이런식으로 원하는 파일만 넣게 해줄수 있음
    cb(null, './src/uploads/')
  },
  filename: function (req, file, cb) {
    //if(이미 파일이 존재한다면)// 이런식으로 못넣게 함
    cb(null, file.originalname);
  }
})
var upload = multer({ storage: _storage});//dest는 데스티네이션의 줄임말 사용자의 업로드가 어디로 저장될지 정해줌 storage로 대체가능

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))

app.set('view engine', 'jade');//jade 라는 view engine를 사용함 // npm install jade --save
app.set('views', './src/views');//views 사용할 파일의 경로 *views는 그냥 약속인듯

//http://localhost:3000/user/blackPink_01.mp4
//밑에 기능으로 인해 업로드한 영상을 바로 볼수 있다.
app.use('/user', express.static('./src/uploads'));

app.use(compression());//압축시켜서 버퍼링을 없애줌.
app.use(express.static('src'));//정적 이미지들 볼수 있게 해줌

app.get('/upload',function(request,response){//파일 업로드 관련 라우터
  response.render('upload');
});

//upload가 뒤에 퍼션 보다 빨리 가능, 파일 업로드하면 파일 가공함
// views/upload.jade의 userfile로 햊어야함
app.post('/upload', upload.single('userfile'), function(request,response){
  var html = template.loading();
  console.log(request.file);
  //response.send('Uploaded : '+request.file.originalname);
  response.send(html);
});

app.get('/', function(request, response) {
    var html = template.home();
    response.send(html);
  });

  app.get('/loading', function(request, response) {
      var html = template.loading();
      response.send(html);
    });
    app.get('/result', function(request, response) {
        var html = template.result();
        response.send(html);
      });

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
