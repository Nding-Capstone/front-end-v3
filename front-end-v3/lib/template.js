module.exports = {
  home:function(){
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Dancearch</title>

          <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
          <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css">
          <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap" rel="stylesheet">
          <script src="https://kit.fontawesome.com/d0eabeffbc.js" crossorigin="anonymous"></script>
          <script type="text/javascript" src="script/home.js"></script>
          <style lang="css">
              @import "home.css";
              @import "animation.css";
          </style>
      </head>

      <body>
      <div class="home bg-pan-bl">
          <div class="header flicker-4" >
              DANCEARCH
          </div>
          <div class="content">
              <div class="searchMent text-focus-in">
                  당신의 안무를 검색하세요!
              </div>
              <div class="fileUpload">
                 <!-- <i class="fas fa-arrow-down"></i>-->
                  <div id="fileUpload">
                      <label for="file"><i class="far fa-file-video"></i></label>
                      <input type="file"
                             id="file"
                             accept="video/mp4"
                             onchange="checkVideo(event)"
                      />
                  </div>

                  <div id="fileCheck" style="display: none">

                          <video id="video" controls autoplay></video>
                          <div class="btnWrap">
                                  <button type="reset">RELOAD</button>
                              <form action="/loading" method="post">
                                  <button type="submit" id="nextBtn" name="video">NEXT</button>
                              </form>
                          </div>
                  </div>
              </div>

          </div>

      </div>


      </body>

      </html>
    `;
  },loading:function(){
    return `
          <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dancearch</title>

        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css">
        <style>
            @import './loading.css';
        </style>
    </head>
    <body>
        <div class="loading">
            <div class="header flicker-4" >
                DANCEARCH
            </div> <!--header-->
            <div class="content">

                <div class="loadIconWrap">
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
                <div class="loadingMent">
                    잠시만 기다려주세요,  안무를 검색중입니다!
                </div>
            </div>
        </div>

    </body>
    </html>
    `;
  },result:function(){

    return `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Dancearch</title>
            <style lang="css">
                @import "./result.css";
                @import "./animation.css";
            </style>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap" rel="stylesheet">

            <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css">
        </head>
        <body>
            <div class="result">
                <div class="header flicker-4" >
                DANCEARCH
            </div> <!--header-->

                <div class="content">
                    <div class="resultMent">
                        이 춤과 비슷하네요!
                    </div>

                    <div class="resultWrap">
                        <div class="resultBoxWrap">
                            <div class="rank">1st</div>
                            <div class="resultBox">
                                <div class="imgWrap">
                                    <img src="image/gangnam.png">
                                </div>
                                <div class="imgInfo">
                                    <div class="title">
                                        강남스타일
                                    </div>
                                    <div class="singer">
                                        싸이
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="resultBoxWrap">
                            <div class="rank">2nd</div>
                            <div class="resultBox">
                                <div class="imgWrap">
                                    <img src="image/anysong.png">
                                </div>
                                <div class="imgInfo">
                                    <div class="title">
                                        아무노래
                                    </div>
                                    <div class="singer">
                                        지코
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="resultBoxWrap">
                            <div class="rank">3rd</div>
                            <div class="resultBox">
                                <div class="imgWrap">
                                    <img src="./image/boyhood.png">
                                </div>
                                <div class="imgInfo">
                                    <div class="title">
                                        빌었어
                                    </div>
                                    <div class="singer">
                                        창모
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div> <!--result-->

        </body>
        </html>
    `;}
}
