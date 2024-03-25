module.exports = ({ env }) => ({
  'open-ai': {
    enabled: true,
    config: {
      API_TOKEN: env('OPENAI_API_KEY'),
    },
  },
});
