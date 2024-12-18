exports.resStatus = {
  success: {
    code: 200,
    message: "success",
  },
  notenough: {
    code: 206,
    message: "notenough", // 원하는 data가 param이나 req에 아예 없거나 부족할 때
  },
  invalid: {
    code: 206,
    message: "invalid", // req로 받은 data가 유효하지 않을 때
  },
  insufficient: {
    code: 206,
    message: "insufficient", // 보낼 data가 없거나 부족할 때
  },
  same: {
    code: 206,
    message: "same", // 보낼 data가 없거나 부족할 때
  },
  notadmin: {
    code: 206,
    message: "notadmin", // 관리자가 아님
  },

  expired: {
    code: 401,
    message: "expired", // token 만료
  },

  notaccept: {
    code: 406,
    message: "notaccept", // not acceptable (이 응답은 서버가 서버 주도 콘텐츠 협상을 수행한 후, 사용자 에이전트에서 정해준 규격에 따른 어떠한 콘텐츠도 찾지 않았을 때, 웹서버가 보냅니다.)
  },

  invalidt: {
    code: 498,
    message: "invalidt", // invalid token
  },
};
