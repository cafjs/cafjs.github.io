(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8YbJ":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),o=a("Wbzz"),i=a("7ljp"),r=a("LbRr"),c={Link:o.Link};t.a=function(e){var t=e.children,a=(e.pageInfo,Object(o.useStaticQuery)("2417480334"));return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{components:c},s.a.createElement(r.a,{siteTitle:a.site.siteMetadata.title,isDocs:!1}),s.a.createElement("main",null,s.a.createElement("div",{className:"mdx-article docs-page"},t)),s.a.createElement("footer",null,s.a.createElement("div",{className:"footer-bottom text-center py-5"},s.a.createElement("span",null,"© Copyright ",(new Date).getFullYear()," Caf.js Labs LLC")))))}},jakk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));var n,s=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("8YbJ"),r={},c=(n="Link",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),l={_frontmatter:r},p=i.a;function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)(p,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Collaborative Multi-Tenancy"),Object(o.b)("p",null,Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px",width:"272px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.87116564417178%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"",title:"",src:"/static/cf04124c4d1747a46d8a78d1d9a65aba/c08c5/samuel-sianipar-scUBcasSvbE-unsplash.jpg",srcSet:["/static/cf04124c4d1747a46d8a78d1d9a65aba/d2f63/samuel-sianipar-scUBcasSvbE-unsplash.jpg 163w","/static/cf04124c4d1747a46d8a78d1d9a65aba/c989d/samuel-sianipar-scUBcasSvbE-unsplash.jpg 325w","/static/cf04124c4d1747a46d8a78d1d9a65aba/c08c5/samuel-sianipar-scUBcasSvbE-unsplash.jpg 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"Multi-tenancy is kind of boring. Isolate your customers. Ensure a fair distribution of resources among them. Done."),Object(o.b)("p",null,"But when we add the word ",Object(o.b)("strong",{parentName:"p"},"collaborative"),", everything changes. Bootstrap trust between strangers. Help them to communicate and share. The success of many apps depends on getting this right."),Object(o.b)("p",null,"How to bootstrap trust? Repeatability and control. With repeatability, we can link interactions over time to build a reputation. With control, we create a safe environment that encourages risk-taking."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Caf.js")," provides repeatibility and control for your app with a  ",Object(o.b)(c,{to:"/docs/documentation#trusted-bus",mdxType:"Link"},"Trusted Bus"),". A ",Object(o.b)("em",{parentName:"p"},"Trusted Bus")," mediates interactions between  ",Object(o.b)(c,{to:"/docs/documentation#cloud-assistant",mdxType:"Link"},"Cloud Assistants (CAs)"),", authenticating requests, and enforcing your access control policy."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Caf.js")," implements high level communication services on top of the ",Object(o.b)("em",{parentName:"p"},"Trusted Bus"),". For example, to support a ",Object(o.b)(c,{to:"/docs/documentation#publish-subscribe",mdxType:"Link"},"publish-subscribe")," model, or ",Object(o.b)(c,{to:"/docs/documentation#sharedmap",mdxType:"Link"},"replicate data")," with Distributed Data Structures (DDS)."),Object(o.b)("p",null,"CAs access communication services with ",Object(o.b)("em",{parentName:"p"},"transactional plugins"),". They see replicated data as read-only, internal state. This leads to a simpler programming model, which recovers from failures transparently. See the ",Object(o.b)(c,{to:"/orchestration",mdxType:"Link"},"Reliable Service Orchestration")," section for details."),Object(o.b)("p",null,"Let's describe a use case, and then we dig into the details."),Object(o.b)("hr",null),Object(o.b)("h4",null,"Worldwide coordination of device actions"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Warning: do not use "),"Caf.js",Object(o.b)("em",{parentName:"p"}," for safety critical applications.")),Object(o.b)("p",null,"Bring your own gadget. Register it with a ",Object(o.b)("em",{parentName:"p"},"Caf.js")," app to create a ",Object(o.b)("em",{parentName:"p"},"reverse service worker")," (see the ",Object(o.b)(c,{to:"/permanent",mdxType:"Link"},"Permanent Presence")," section). Decide who can access it. Choose the tags your device subscribes to. Every time one of your friends posts an action using one of these tags your gadget will respond."),Object(o.b)("p",null,"And here comes the fun part. Gadgets can use ",Object(o.b)(c,{to:"/docs/documentation#iot-device",mdxType:"Link"},"Timed Bundles")," to start actions based on Coordinated Universal Time (UTC), not just when the action arrives. An action could also contain a sequence of commands, spaced in time. And the ",Object(o.b)("em",{parentName:"p"},"Caf.js")," ",Object(o.b)(c,{to:"/docs/documentation#client",mdxType:"Link"},"client library")," helps gadgets to synchronize clocks with the Cloud."),Object(o.b)("p",null,"This means that, given a second or two for propagation, we can ",Object(o.b)("strong",{parentName:"p"},"synchronize")," actions, within a hundred milliseconds of each other, on ",Object(o.b)("strong",{parentName:"p"},"hundreds of thousands of devices across the world"),". And soon it will be millions."),Object(o.b)("p",null,"Your next Zoom party will never be the same."),Object(o.b)("p",null,"Moreover, not all posts are created by humans. See the ",Object(o.b)(c,{to:"/autonomous",mdxType:"Link"},"Autonomous Compute")," section to learn how to inject posts with continuous queries."),Object(o.b)("p",null,"And not all endpoints are gadgets. A ",Object(o.b)("em",{parentName:"p"},"reverse service worker")," can also represent other app instances or services. Coordination is not only for the physical world."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cafjs/caf_tweetiot.git"},"TweetIoT")," app puts all these ideas to practice. Hashtags in posts trigger gadget actions. Delegation simplifies access control policies based on groups.  The remarkable part is that the cloud backend is only ",Object(o.b)("strong",{parentName:"p"},"154 lines of JavaScript"),"."),Object(o.b)("hr",null),Object(o.b)("p",null,"How are these experiences implemented with ",Object(o.b)("em",{parentName:"p"},"Caf.js"),"?"),Object(o.b)("h4",null,"Trusted Bus"),Object(o.b)("p",null,"CAs authenticate requests before injecting them in the ",Object(o.b)(c,{to:"/docs/documentation#trusted-bus",mdxType:"Link"},"Trusted Bus"),". Since a CA name contains the name of the CA owner, the true owner of each request is always known."),Object(o.b)("p",null,"When a request reaches a bus endpoint, a check ensures that the request owner is allowed to invoke the request method. A request method can also change behavior depending on who calls it."),Object(o.b)("p",null,"Decentralized authorization systems, such as SDSI, inspired our access control policies. Each owner maintains a local namespace, mapping names to principals. When several principals have the same local name, they form a group. Policy associates methods with allowed principals, or groups of allowed principals."),Object(o.b)("p",null,"Names can also refer to local names in other namespaces, delegating the task of maintaining group membership to other owners. These owners could further delegate to other owners. However, trust is not a transitive property, as Facebook users learned the hard way, and delegation chains tend to be short."),Object(o.b)("p",null,"CAs use ",Object(o.b)("em",{parentName:"p"},"SharedMaps"),", described next, to represent groups. Group updates propagate in milliseconds. The security library handles link traversal between ",Object(o.b)("em",{parentName:"p"},"SharedMaps")," to implement delegation."),Object(o.b)("h4",null,"SharedMap"),Object(o.b)("p",null,"A ",Object(o.b)(c,{to:"/docs/documentation#sharedmap",mdxType:"Link"},"SharedMap")," is a single writer-multiple reader DDS that can efficiently replicate data across many CAs. CAs see this data as internal state. The writer CA is the owner, providing a scoped name for the ",Object(o.b)("em",{parentName:"p"},"SharedMap"),"."),Object(o.b)("p",null,"CAs blend with ",Object(o.b)("em",{parentName:"p"},"SharedMaps")," in a novel way. Adding a ",Object(o.b)("em",{parentName:"p"},"SharedMap")," does not change the semantics of the Actor Model, and it can always be replaced by extra requests. This means that we never introduce deadlocks or data races. The application just scales better and with less memory."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SharedMaps")," can be replicated in the Cloud, in devices, or in the browser. They can also contain serialized methods. They are updated with a ",Object(o.b)("em",{parentName:"p"},"transactional plugin"),", ensuring that changes to both code and data are atomic, and only visible when they respect serialization."),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"SharedMap")," provides a safe mechanism to update code and data everywhere."),Object(o.b)("h4",null,"Publish-Subscribe"),Object(o.b)("p",null,"Our ",Object(o.b)(c,{to:"/docs/documentation#publish-subscribe",mdxType:"Link"},"implementation")," supports two kinds of topics:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Private"),": similar to a blog. There is only one CA that can publish messages, but anybody can subscribe to receive them."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Forum"),": anybody can publish or subscribe, but subscribers can filter publishers by setting ",Object(o.b)("em",{parentName:"li"},"Trusted Bus")," policies.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SharedMap")," and ",Object(o.b)("em",{parentName:"p"},"Publish-Subscribe")," complement each other well. The former provides cheap, silent updates to many CAs. The latter triggers an action on each subscribed CA, and this is more expensive, but needed for external interaction."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-collaborative-mdx-cd58831e6123e5545a5a.js.map