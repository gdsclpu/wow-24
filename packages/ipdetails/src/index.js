export default {
	async fetch(request, env, ctx) {
	  const ip = request.headers.get('CF-Connecting-IP');
	  const resp = await fetch(`http://ip-api.com/json/${ip}`);
	  let data = await resp.json();
	  let response = new Response(JSON.stringify({...data}));
	  response.headers.set("Access-Control-Allow-Origin", "*");
	  return response
	},
  };