export default {
  async fetch(request: any, env: any) {
    console.log('request', request);
    console.log('env', env);
    return new Response(env.GA_TAG_ID);
  },
};
