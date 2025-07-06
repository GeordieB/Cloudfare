export default {
  async fetch(request, env) {
    console.log('request', request);
    console.log('env', env);
    return new Response(env.GA_TAG_ID);
  },
};
