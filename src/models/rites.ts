interface ResponseData {
  message: string;
}

interface ResponseMeta {
  status: number;
}

interface RiteResponse {
  data: ResponseData;
  meta: ResponseMeta;
}

interface RiteSlackResponse {
  response_type: string;
  text: string;
}

const riteList = ["You will make a rite with your friend."];

function getRite(): string {
  return riteList[Math.floor(Math.random() * riteList.length)];
}

function slackRiteResponse(): RiteSlackResponse {
  return {
    response_type: "in_channel",
    text: "Your Daily Ritual: '" + getRite() + "'",
  };
}

function defaultRiteResponse(): RiteResponse {
  return {
    data: {
      message: getRite(),
    },
    meta: {
      status: 200,
    },
  };
}

export {
  getRite,
  defaultRiteResponse,
  slackRiteResponse,
  RiteResponse,
  RiteSlackResponse,
  ResponseData,
  ResponseMeta,
};
