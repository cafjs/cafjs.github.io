(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8YbJ":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),s=a("LbRr");t.a=function(e){var t=e.children,a=(e.pageInfo,Object(r.c)("2417480334"));return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{siteTitle:a.site.siteMetadata.title,isDocs:!1}),o.a.createElement("main",null,o.a.createElement("div",{className:"mdx-article docs-page"},t)),o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-bottom text-center py-5"},o.a.createElement("span",null,"© Copyright ",(new Date).getFullYear()," Caf.js Labs LLC"))))}},ylct:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("8YbJ"),s={},i={_frontmatter:s},c=r.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Caf.js Cloud"),Object(o.b)("p",null,"Currently in beta, only for the adventurous."),Object(o.b)("h4",null,"Profit-as-you-go"),Object(o.b)("p",null,"Serverless computing platforms flex resources based on load, and you pay for what you use. A ",Object(o.b)("em",{parentName:"p"},"pay-as-you-go")," model."),Object(o.b)("p",null,"How much do you pay? Who knows, a bug can cost you thousands of dollars if the app goes wild."),Object(o.b)("p",null,"We flex resources based on the number of subscribed customers, manage payment, take a cut to pay for the infrastructure, and give you the rest. A ",Object(o.b)("em",{parentName:"p"},"profit-as-you-go")," model."),Object(o.b)("p",null,"With ",Object(o.b)("em",{parentName:"p"},"profit-as-you-go"),", you know exactly how much profit an extra subscriber gives you. Similar to an app store, but flexing and managing your complex backend."),Object(o.b)("h4",null,"You Are in Control"),Object(o.b)("p",null,"You decide what percentage of the revenue will be profit. From zero, or even negative, to ninety per cent."),Object(o.b)("p",null,"What we make is not based on what you make. What we make is based on the infrastructure costs. By increasing the price of your app, you get a bigger cut."),Object(o.b)("p",null,"We don't care what you do in your app, as long as it is legal. You can run your own in-app purchase infrastructure. Or link to your website to manage subscriptions. Or make money from adds."),Object(o.b)("p",null,'In fact, we anticipate that many developers will make their apps "free", by paying infrastructure costs themselves, and use other mechanisms to monetize their apps.'),Object(o.b)("p",null,"And you can decide what incremental resources are added for a newly subscribed customer. We give you feedback on whether you are wasting resources, or starving your app. But whether to change the plan is up to you, and you can change it at anytime."),Object(o.b)("h4",null,"Domain-Specific PaaS"),Object(o.b)("p",null,"Every second, a busy cloud assistant uses less than one millisecond of compute, and checkpoints less than 500 bytes of state. A new cloud assistant increases the memory footprint by 200 KB, and allocates 1.75 GB of extra egress traffic per year. This is our ",Object(o.b)("em",{parentName:"p"},"Gold Plan"),"."),Object(o.b)("p",null,"Assume a DIY hosting of this cloud assistant. How much does it cost per year in the Google Cloud?"),Object(o.b)("p",null,"A serverless platform like ",Object(o.b)("em",{parentName:"p"},"Google Cloud Run")," would cost $88/year (CPU+request for 31,536K invocations: 31536","*","0.1","*","$0.024+ 31.536","*","$0.4), and a fast database for checkpointing, such as ",Object(o.b)("em",{parentName:"p"},"Google Cloud Firestore"),", costs $56/year (writes: 315.36","*","$0.18). A total of ",Object(o.b)("strong",{parentName:"p"},"$144 per year"),", and that ignores networking costs."),Object(o.b)("p",null,"What is the price of our ",Object(o.b)("em",{parentName:"p"},"Gold Plan"),"? ",Object(o.b)("strong",{parentName:"p"},"$0.85 per year")),Object(o.b)("p",null,"Yep, this is not a typo. It is two orders of magnitude cheaper."),Object(o.b)("p",null,"How can this be possible?"),Object(o.b)("p",null,"We built a ",Object(o.b)("strong",{parentName:"p"},"Domain-Specific PaaS")," on top of Kubernetes for running ",Object(o.b)("strong",{parentName:"p"},"Caf.js")," apps, and nothing else. We made strong assumptions on how these apps behave, and that simplified the problem. By designing the framework and the runtime together, we can optimize beyond what is possible today in a general-purpose platform."),Object(o.b)("h4",null,"Getting Started"),Object(o.b)("p",null,"You can sign up for the beta service ",Object(o.b)("a",{parentName:"p",href:"https://root-launcher.cafjs.com"},"here"),", with no credit card, and we will give you a few units to get started."),Object(o.b)("p",null,"When you deploy your app using ",Object(o.b)("strong",{parentName:"p"},"Turtles"),", it starts in ",Object(o.b)("strong",{parentName:"p"},"Incubator")," mode. In that mode resources are minimal, but they will grow when other users subscribe to your app."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Incubator")," mode enables a very low maintenance cost for your new app. Currently less than ",Object(o.b)("strong",{parentName:"p"},"$6 per year")," (one unit a week)."),Object(o.b)("p",null,"With the free units you could keep your app running for several weeks. If during that time a few people subscribe, you could achieve orbital velocity, paying baseline costs with subscriptions, and then keep growing..."),Object(o.b)("p",null,"A kid in Nigeria, with no bank account or credit card, can bootstrap a very profitable business with no upfront investment, purely based on talent. And units are transferable, with a reasonably safe mechanism to exchange them for real money using any peer-to-peer payment system."),Object(o.b)("p",null,"And this is the ultimate goal for us. Create a meritocratic platform in which it does not matter your race, age, sex, sexual orientation, where you live, which school you went to, or whether you have lunch with M. Zuckerberg once a month."),Object(o.b)("p",null,"What matters is what you are capable of doing."),Object(o.b)("p",null,"What will you build today?"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-hosting-mdx-166cd2a190aa7dfb16e0.js.map