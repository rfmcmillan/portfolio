const PORT = process.env.PORT || 8080;
const app = require('./app');

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
