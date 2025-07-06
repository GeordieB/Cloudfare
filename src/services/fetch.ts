export async function fetch(request: any, env: any) {
  console.log(request);
  return new Response(env.GA_TAG_ID);
}
