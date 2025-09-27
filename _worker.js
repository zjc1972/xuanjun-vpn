// ==== 完全混淆版 _worker.js ====
(function(){
  const _0x1a2b=['init','initHttp','initWs','globalConfig','handlePanel','handleSubscriptions','handleLogin','logout','renderSecrets','serveIcon','fallback','handleError','handleWebsocket','Upgrade','websocket','startsWith'];

  const globalConfig={pathName:''};

  async function init(request, env){globalConfig.pathName=new URL(request.url).pathname;}
  async function initHttp(request, env){}
  async function initWs(env){}
  async function handlePanel(request, env){return new Response('panel page');}
  async function handleSubscriptions(request, env){return new Response('subscriptions page');}
  async function handleLogin(request, env){return new Response('login page');}
  async function logout(request, env){return new Response('logout page');}
  async function renderSecrets(){return new Response('secrets page');}
  async function serveIcon(){return new Response('favicon');}
  async function fallback(request){return new Response('fallback');}
  async function handleError(err){return new Response('error: '+err);}
  async function handleWebsocket(request){return new Response('websocket');}

  function _0x3f2a(_0x1c7a,_0x2a6d){_0x1c7a=_0x1c7a-0x0;return _0x1a2b[_0x1c7a];}

  export default {
    async fetch(request, env){
      try{
        const upgradeHeader=request.headers.get(_0x3f2a('0xD'));
        await init(request, env);

        if(upgradeHeader===_0x3f2a('0xE')){
          await initWs(env);
          return await handleWebsocket(request);
        } else {
          await initHttp(request, env);
          const path=globalConfig[_0x3f2a('0x3')];
          if(path[_0x3f2a('0xF')]('/panel')) return await handlePanel(request, env);
          if(path[_0x3f2a('0xF')]('/sub')) return await handleSubscriptions(request, env);
          if(path[_0x3f2a('0xF')]('/login')) return await handleLogin(request, env);
          if(path[_0x3f2a('0xF')]('/logout')) return await logout(request, env);
          if(path[_0x3f2a('0xF')]('/secrets')) return await renderSecrets();
          if(path[_0x3f2a('0xF')]('/favicon.ico')) return await serveIcon();
          return await fallback(request);
        }
      } catch(err){
        return await handleError(err);
      }
    }
  }
})();
