(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8YbJ":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("Wbzz"),o=a("LbRr");t.a=function(e){var t=e.children,a=(e.pageInfo,Object(s.c)("2417480334"));return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{siteTitle:a.site.siteMetadata.title,isDocs:!1}),i.a.createElement("main",null,i.a.createElement("div",{className:"mdx-article docs-page"},t)),i.a.createElement("footer",null,i.a.createElement("div",{className:"footer-bottom text-center py-5"},i.a.createElement("span",null,"© Copyright ",(new Date).getFullYear()," Caf.js Labs LLC"))))}},yz65:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("8YbJ"),o=a("Wbzz"),r={},l={_frontmatter:r},c=s.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Autonomous Computation"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px",width:"272px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.87116564417178%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"",title:"",src:"/static/89b6429b040b66445771bdbaf200a4ef/c08c5/randy-fath-KyreMg96fuA-unsplash.jpg",srcSet:["/static/89b6429b040b66445771bdbaf200a4ef/d2f63/randy-fath-KyreMg96fuA-unsplash.jpg 163w","/static/89b6429b040b66445771bdbaf200a4ef/c989d/randy-fath-KyreMg96fuA-unsplash.jpg 325w","/static/89b6429b040b66445771bdbaf200a4ef/c08c5/randy-fath-KyreMg96fuA-unsplash.jpg 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"The Web was built with a request-response model. Servers were expensive and slow, and that model was a very good fit for the compute resources available at the time."),Object(i.b)("p",null,"Many years later, and now we live in the land of milk and honey in terms of compute resources."),Object(i.b)("p",null,"What else can we do with all that power?"),Object(i.b)("p",null,"One obvious candidate is to enable web clients to launch long term activities in the Cloud, where long term could mean years. These activities are a good complement to a request-response model. For example, they could warn you, or take some action, if something critical to you has happened on the Web. And that would not be spam, after all you were the one setting up the continuous query."),Object(i.b)("p",null,"It is unreasonable to assume that anybody should be able to launch an ",Object(i.b)("strong",{parentName:"p"},"arbitrary")," activity in any site. Someone has to pay for it. Denial of service becomes trivial. Running untrusted code is unsafe. We need a bit more structure to make it happen."),Object(i.b)("p",null,"And that's when ",Object(i.b)("strong",{parentName:"p"},"Caf.js")," comes into play. Make it easier to write applications that create ",Object(i.b)("strong",{parentName:"p"},"specific")," long-term activities on behalf of subscribed customers. As long as the end customer maintains the app subscription, the activities continue. The application guarantees that end customers do not abuse the system. The platform provider hosting the app (could be ",Object(i.b)(o.a,{to:"/hosting",mdxType:"Link"},"us!"),") ultimately guarantees that the app does not abuse the system."),Object(i.b)("hr",null),Object(i.b)("p",null,"Let's look at a few use cases."),Object(i.b)("h4",null,"Cloud-based Multi-tasking"),Object(i.b)("p",null,"Modern browsers throttle background tabs, making them unusable for running tasks. Service workers of web apps that are not explicitly installed (most of them) can be garbage collected at any time. AFAIK, without browser extensions, there are no reliable methods in the browser to keep background tasks active long term."),Object(i.b)("p",null,"And this is all for a good reason. The last thing you want is a website that you visited three months ago is still draining your phone battery."),Object(i.b)("p",null,"But to recreate a more desktop-like experience in the browser we need reliable background tasks. If we cannot run them in the phone, can we do it in the Cloud?"),Object(i.b)("p",null,"The critical part is the context switch between activities. We want to convince the user that background tasks are running in the phone, but they are not, they are running in the Cloud. When we swap a visible ",Object(i.b)("em",{parentName:"p"},"iframe")," of one activity by another one, we need to show progress, and the transition needs to be smooth."),Object(i.b)("p",null,"In ",Object(i.b)("strong",{parentName:"p"},"Caf.js")," cloud-based multi-tasking is implemented by some trickery in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cafjs/caf_launcher.git"},"Launcher")," app, and enabling ",Object(i.b)("strong",{parentName:"p"},"proactive server side rendering")," in most of our apps. We describe this technique below."),Object(i.b)("h4",null,"Continuous GraphQL Queries"),Object(i.b)("p",null,"Many front-ends configure React components with GraphQL queries and a request-response model. The client describes in a single request what its components need, and the server evaluates the query and returns the configuration."),Object(i.b)("p",null,"What happens when the configuration changes? The server could notify the client using a web socket, and then the client reloads. Or the client could repeat the query every so often."),Object(i.b)("p",null,"But we can do better. The previous approaches add latency and force unnecessary reloads. Instead, the client could install a continuous query in the Cloud and, when the configuration changes, receive a new configuration from a web socket. There is no false alarms, the server knows exactly what the client needs. There is no extra delay, the notification is the new configuration."),Object(i.b)("p",null,"But we can do even better. The server could regularly interact with many external services to gather configuration data, and cache it locally. And now all the continuous GraphQL queries evaluate on local data, reused for the benefit of thousands of clients."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cafjs/caf_hellographql.git"},"HelloGraphQL")," weather app is an example of these ideas. Clients obtain weather information by installing a continuous query in the Cloud. The backend periodically polls the ",Object(i.b)("em",{parentName:"p"},"OpenWeather")," API. Queries evaluate on local data. When the weather changes, a registered IoT device gets a notification."),Object(i.b)("hr",null),Object(i.b)("p",null,"How are these experiences implemented with ",Object(i.b)("strong",{parentName:"p"},"Caf.js"),"? Let's start with a few new concepts."),Object(i.b)("h4",null,"Proactive Server Side Rendering (PSSR)"),Object(i.b)("p",null,"Traditional Server Side Rendering (SSR) uses a request-response model. When a page request hits the server, the server renders and returns the html."),Object(i.b)("p",null,"Proactive Server Side Rendering (PSSR) does not wait for a page request. Whenever there is a change that affects the page, the server renders and pushes the html to an external cache, using an unguessable key known by the client."),Object(i.b)("p",null,"Two simple optimizations make PSSR practical:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do not render when the page is likely to change again before the client reads it. Set expire time in cache to handle estimation errors."),Object(i.b)("li",{parentName:"ul"},"Pick a target cache that is close to the client.")),Object(i.b)("p",null,"With PSSR a page request is first looked up in a cache close by. If found, the html page is displayed, and then it continues with hydration, similar to SSR. If missing, the request is forwarded to the server."),Object(i.b)("p",null,"Why PSSR? Manage a cache inside the network of a 5G mobile provider with, for example, ",Object(i.b)("em",{parentName:"p"},"AWS Wavelength"),", and 5G clients will load a page instantly, in low tens of milliseconds. No differences between static and dynamic content. And with much less complexity than distributed rendering."),Object(i.b)("h4",null,"Pulse Requests"),Object(i.b)("p",null,"A cloud assistant is made autonomous by implementing the ",Object(i.b)("code",{parentName:"p",className:"language-text"},"__ca_pulse__")," method.\nThis method will be called periodically by the framework."),Object(i.b)("h4",null,"Notifications"),Object(i.b)("p",null,"The client library combines a request-response style with events triggered by notifications. Notifications are created in the Cloud with the ",Object(i.b)("code",{parentName:"p",className:"language-text"},"session")," plugin."),Object(i.b)("p",null,"When clients are offline, the notifications created by autonomous computations queue in the Cloud. Queues are managed by application code to avoid running out of memory."),Object(i.b)("p",null,"When a client connects, notifications are delivered in real-time using a web socket."),Object(i.b)("p",null,"A cloud assistant can have multiple notification queues, identified by names chosen by its clients. This allows steering notifications to a client device, or swapping devices without losing notifications. A client session can always target a particular queue."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-autonomous-mdx-bbdae5e5633dee73075b.js.map