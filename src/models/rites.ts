interface Rite {
  define: string;
  exercise: string;
  journal: string;
}

interface ResponseData {
  rite: Rite;
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
  {
    define: "Self-Love",
    exercise: "Stand in front of the mirror and look directly into your refelction's eyes. Say 'I love you'. Take a deep breath, and deep exhale. Repeat 3 times.",
    journal: "How did it feel to look into your own eyes? Did you feel any resistance? What thoughts came up?"
  },
  {
    define: "Gratitude",
    exercise: "Regular meditation is a definite way to streangthen your connection to your intuition. Try to meditate for 5 minutes today.",
    journal: "How did it feel to meditate? What thoughts came up? Did you feel any resistance?"
  },
  {
    define: "Mindfulness",
    exercise: "Write down 3 things you are grateful for. Keep the list in your pocket and read it whenever you feel down.",
    journal: "How did it feel to write down what you are grateful for? Did you feel any resistance? What thoughts came up?"
  },
  {
    define: "appreciate",
    exercise: "Take a walk in nature and take a moment to appreciate the beauty around you.",
    journal: "How did it feel to take a walk in nature? What thoughts came up? Did you feel any resistance?"
  },
  {
    define: "appreciate",
    exercise: "Take a moment to appreciate the beauty of the sky. Look up and take a deep breath.",
    journal: "How did it feel to take a moment to appreciate the sky? What thoughts came up? Did you feel any resistance?"
  }
];

function getRite(): Rite {
  return riteList[Math.floor(Math.random() * riteList.length)];
}

function slackRiteResponse(): RiteSlackResponse {
  return {
    response_type: "in_channel",
    text: "Your Daily Ritual: '" + getRite().exercise + "'",
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
