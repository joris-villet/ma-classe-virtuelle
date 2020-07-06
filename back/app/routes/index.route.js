

module.exports = {
  name: "home page",
  register: server => {

    server.route({
      method: 'GET',
      path: '/',
      config: {
        description: 'home page',
        tags: ['api', 'v1', 'home page'],
      },
      handler: _ => "home page"
    });
  }
}