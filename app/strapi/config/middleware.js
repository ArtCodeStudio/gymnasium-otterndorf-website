module.exports = ({ env }) => {
  return {
    settings: {
      // To allow download audio file from podlove player iframe
      xframe: {
        enabled: true,
        value: "gym.artandcode.de gymnasium-otterndorf.de localhost",
      },
    },
  };
};
