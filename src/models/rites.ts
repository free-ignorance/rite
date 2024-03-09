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

const riteList = [
  "Exercise: Stand in front of the mirror and look directly into your refelction's eyes. Say 'I love you'. Take a deep breath, and deep exhale. Repeat 3 times.",
  "Exercise: Regular meditation is a definite way to streangthen your connection to your intuition. Try to meditate for 5 minutes today.",
  "Exercise: Write down 3 things you are grateful for. Keep the list in your pocket and read it whenever you feel down.",
  "Exercise: Take a walk in nature and take a moment to appreciate the beauty around you.",
  "Exercise: Take a moment to appreciate the beauty of the sky. Look up and take a deep breath.",
];

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
