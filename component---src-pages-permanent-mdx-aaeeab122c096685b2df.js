(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8YbJ":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("Wbzz"),r=a("7ljp"),s=a("LbRr"),c={Link:i.Link};t.a=function(e){var t=e.children,a=(e.pageInfo,Object(i.useStaticQuery)("2417480334"));return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{components:c},o.a.createElement(s.a,{siteTitle:a.site.siteMetadata.title,isDocs:!1}),o.a.createElement("main",null,o.a.createElement("div",{className:"mdx-article docs-page"},t)),o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-bottom text-center py-5"},o.a.createElement("span",null,"© Copyright ",(new Date).getFullYear()," Caf.js Labs LLC")))))}},cGou:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n,o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("8YbJ"),s={},c=(n="Link",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:s},p=r.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Permanent Presence"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px",width:"300px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.77914110429448%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"",title:"",src:"/static/6df725c2deafb38dfb9f5651b53dfa9e/c08c5/florian-wehde-yNJ9unY2OnE-unsplash-crop.jpg",srcSet:["/static/6df725c2deafb38dfb9f5651b53dfa9e/d2f63/florian-wehde-yNJ9unY2OnE-unsplash-crop.jpg 163w","/static/6df725c2deafb38dfb9f5651b53dfa9e/c989d/florian-wehde-yNJ9unY2OnE-unsplash-crop.jpg 325w","/static/6df725c2deafb38dfb9f5651b53dfa9e/c08c5/florian-wehde-yNJ9unY2OnE-unsplash-crop.jpg 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"Service workers enable offline experiences for Progressive Web Apps (PWAs)."),Object(i.b)("p",null,"But what happens with external services, clients, and devices that need to interact with your offline app, or your offline IoT devices? They all have to wait."),Object(i.b)("p",null,"And most IoT devices are not directly exposed to the Internet, otherwise they would be compromised in minutes. Connectivity is not always symmetric, making remote interaction even more difficult."),Object(i.b)("p",null,"With ",Object(i.b)("em",{parentName:"p"},"Caf.js"),", devices and web app instances are accessible at any time, from anywhere. Reverse Service Workers (RSWs) keep these interactions safe. A three-way isomorphic framework enables quick prototyping of new sharing experiences."),Object(i.b)("p",null,"Let's look at use cases first, and then describe the technology."),Object(i.b)("hr",null),Object(i.b)("h4",null,"Safe sharing of Bluetooth devices"),Object(i.b)("p",null,"So many Bluetooth devices around us. An indoor exercise bike, a heart rate/ECG monitor, a connected toy, an smart light bulb, a speaker, a temperature sensor, a thermostat, a drone, a fridge, a watch, a battery, a car diagnostics tool..."),Object(i.b)("p",null,"What if you could instantly share them across the Internet? With your doctor, your fitness instructor, your friend in a Zoom session, your colleagues working from home, a remote expert..."),Object(i.b)("p",null,"And do that safely, with no complex setup, with just a browser. E-mail or text a URL to your peer, and with a click on the link they control the device. And you can revoke access at any time, or let the link expire."),Object(i.b)("p",null,"With ",Object(i.b)("em",{parentName:"p"},"Caf.js")," you can do that with a few hundred lines of JavaScript. Some examples in GitHub: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cafjs/caf_healthypi.git"},"HealthyPi"),", a cheap ECG/Body temperature/SPO2 monitor. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cafjs/caf_hellopuckjs.git"},"Puck.js"),", a programmable beacon with many sensors. And it is easy to build your own with our app generator ",Object(i.b)(c,{to:"/docs/documentation#three-way-isomorphic",mdxType:"Link"},"tool"),"."),Object(i.b)("h4",null,"Integration of physical devices in VR/AR"),Object(i.b)("p",null,"When your real home is embedded in a virtual world, an action in VR could switch off the lights of your home, thousands of miles away."),Object(i.b)("p",null,"You can implement this today. Design an avatar for your lamp, and make it forward actions to your home across the Internet."),Object(i.b)("p",null,"But this is hard to get right. Any visible delays, or connectivity issues, will ruin the virtual experience. And directly exposing your lamp to the Internet is risky."),Object(i.b)("p",null,"Instead, ",Object(i.b)("em",{parentName:"p"},"Caf.js")," can take care of the backend for your lamp avatar, ensuring safety and predictable latency. And then you can focus on making the avatar more realistic."),Object(i.b)("p",null,"What about AR? In AR you are likely to share the room with the physical lamp. And when you look fixedly at it, a user interface will pop up to, for example, change its color hue."),Object(i.b)("p",null,"The connectivity challenges with AR are not any easier. What if the lamp is in a vacation rental, or in a shop, or at the office? It would be much easier if the AR client device just needed Internet connectivity, and the access policy was centrally managed. This is what ",Object(i.b)("em",{parentName:"p"},"Caf.js")," enables."),Object(i.b)("p",null,"But the real fun starts with some remote team members in VR, and others local in AR. And they all collaborate in real-time by interacting with shared physical devices. With ",Object(i.b)("em",{parentName:"p"},"Caf.js")," all these user interfaces, and the state of the connected physical devices, are always in sync."),Object(i.b)("p",null,"For example, a remote interior designer can configure the lights at your home using VR. As you see changes in the physical world, you can also make modifications with an AR interface. And your suggestions are immediately visible to the designer in VR."),Object(i.b)("p",null,"A bare bones example to do just that is in GitHub. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cafjs/caf_hellohue.git"},"Hue")," controls a color smart bulb using three interfaces VR, AR, and html, keeping all of them in sync, and in sync with reality."),Object(i.b)("hr",null),Object(i.b)("p",null,"How are these experiences implemented with ",Object(i.b)("em",{parentName:"p"},"Caf.js"),"?"),Object(i.b)("h4",null,"Reverse Service Worker"),Object(i.b)("p",null,"A service worker is a custom script that mediates network access, and caches data, for a Progressive Web App (PWA). When the app is offline, it pretends that the network is still functional by fetching data from the local cache, or delaying sends."),Object(i.b)("p",null,"A Reverse Service Worker (RSW) lives in the Cloud, and has a dual role to a service worker in the browser. It mediates requests from the Internet to an endpoint, such as an IoT device, or an app instance."),Object(i.b)("p",null,"An RSW is implemented with a ",Object(i.b)(c,{to:"/docs/documentation#cloud-assistant",mdxType:"Link"},"Cloud Assistant"),", following the Actor Model, and thousands of them can run on one ",Object(i.b)("em",{parentName:"p"},"Node.js")," process. An RSW has"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"an stable URL that provides a public name for the endpoint,"),Object(i.b)("li",{parentName:"ul"},"some private state,"),Object(i.b)("li",{parentName:"ul"},"a set of methods that can be called remotely,"),Object(i.b)("li",{parentName:"ul"},"and a managed security policy that restricts who can call them.")),Object(i.b)("p",null,"RSWs have two modes of operation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Pass-through"),", when the endpoint is connected with a web socket. In this mode, when it receives a request, it performs security checks, updates local state, and notifies the endpoint and other clients connected with web sockets. Notifications can then trigger actions in the physical world, or keep other user interfaces in sync.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Impersonation"),", when the endpoint is not connected. In this mode it pretends to be the endpoint, making decisions on its behalf based on local state, and helping the rest of the world to move forward."))),Object(i.b)("p",null,"An RSW transparently switches between modes. For example, it could start in impersonation mode, negotiate some actions, and then relay these actions in pass-through mode, when the endpoint eventually connects."),Object(i.b)("p",null,"Clients never have direct access to endpoints. They use short-lived signed credentials for ",Object(i.b)(c,{to:"/docs/documentation#client",mdxType:"Link"},"authentication"),". Access policy is ",Object(i.b)(c,{to:"/docs/documentation#trusted-bus",mdxType:"Link"},"centrally managed"),", and consistent for all your devices. More importantly, only the minimal functionality required by your app is exposed, keeping the endpoint safe."),Object(i.b)("h4",null,"Three-way Isomorphic"),Object(i.b)("p",null,"Most applications in ",Object(i.b)("em",{parentName:"p"},"Caf.js")," are made of three JavaScript programs: front-end, cloud, and device bridging code."),Object(i.b)("p",null,"Why bridging code? It is impractical to modify the firmware of an IoT device, or patch an existing application. Instead, write JavaScript code that interfaces with the real endpoint over Bluetooth, or other local protocol."),Object(i.b)("p",null,"In ",Object(i.b)("em",{parentName:"p"},"Caf.js")," these three programs are developed, debugged, and deployed as a single unit. They also share many software components. In fact, using our ",Object(i.b)(c,{to:"/docs/documentation#add-device",mdxType:"Link"},"tools"),", you can emulate all of them in a laptop. And then, trace a request through the system without leaving the Chrome web developer tools."),Object(i.b)("p",null,"But that's not all. ",Object(i.b)("em",{parentName:"p"},"Caf.js")," is a three-way isomorphic framework. The device bridging code runs in a ",Object(i.b)("em",{parentName:"p"},"Raspberry Pi"),", but it can also run in a browser, or in the Cloud."),Object(i.b)("p",null,"And that opens many doors. You don't need to carry a ",Object(i.b)("em",{parentName:"p"},"Raspberry Pi"),", or a laptop. Your phone, with a browser that supports the Web Bluetooth API, such as ",Object(i.b)("em",{parentName:"p"},"Chrome for Android"),", can also bridge Bluetooth devices."),Object(i.b)("p",null,"Some applications will still require a  dedicated bridging device, but many will benefit from the convenience of the phone. And for Android phones it is even better, the default browser is all you need!"),Object(i.b)("p",null,"What is the benefit of running bridging code in the Cloud?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simplifies endpoint impersonation,"),Object(i.b)("li",{parentName:"ul"},"enables realistic load testing by emulating thousands of devices,"),Object(i.b)("li",{parentName:"ul"},"and dynamically creates interfaces with bridging code introspection.")),Object(i.b)("p",null,"Read our ",Object(i.b)(c,{to:"/docs/documentation",mdxType:"Link"},"technical documentation")," to learn more."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-permanent-mdx-aaeeab122c096685b2df.js.map