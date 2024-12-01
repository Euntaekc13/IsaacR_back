const express = require('express');
const path = require('path');
const morgan = require('morgan');
const indexRouter = require('./routes');
const { sequelize } = require('./models');
const create = require("./controllers/create")
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");
const { corsConfig } = require("./config/corsConfig");
const bodyParser = require('body-parser')
const mysql = require("./models/mysql")

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.NODE_ENV_PORT;
app.set("port", PORT);



//시퀄라이즈_MYsqlDB
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
    create.auth() //로그인 계정 생성
    // create.machine() // 기기 TEST 데이터 생성
  })
  .catch((err) => {
    console.error(err) ;
  })
  // .finally(() =>{
  //   mysql.connect()
  //   console.log("retry connect DB");
    
  // })

  //body_parser
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //CORS처리
  app.use(cors(corsConfig));
  
  app.use(bodyParser.json())
  //cookie_parser
  app.use(cookieParser());

// session
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views',path.join(__dirname,'views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine','html')

app.use("/", indexRouter);


app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});