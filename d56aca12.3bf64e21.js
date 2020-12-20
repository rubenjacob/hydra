(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),i=(n(0),n(243)),o={id:"optuna_sweeper",title:"Optuna Sweeper plugin",sidebar_label:"Optuna Sweeper plugin"},p={unversionedId:"plugins/optuna_sweeper",id:"plugins/optuna_sweeper",isDocsHomePage:!1,title:"Optuna Sweeper plugin",description:"PyPI",source:"@site/docs/plugins/optuna_sweeper.md",slug:"/plugins/optuna_sweeper",permalink:"/docs/next/plugins/optuna_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/optuna_sweeper.md",version:"current",lastUpdatedBy:"Olivier Delalleau",lastUpdatedAt:1608443846,sidebar_label:"Optuna Sweeper plugin",sidebar:"docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"},next:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]},{value:"Search space configuration",id:"search-space-configuration",children:[{value:"Configuring through commandline override",id:"configuring-through-commandline-override",children:[]},{value:"Configuring through config file",id:"configuring-through-config-file",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://img.shields.io/pypi/v/hydra-optuna-sweeper"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-optuna-sweeper",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-optuna-sweeper",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-optuna-sweeper",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-optuna-sweeper"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-optuna-sweeper.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_optuna_sweeper/example"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_optuna_sweeper"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"This plugin enables Hydra applications to utilize ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.org"}),"Optuna")," for the optimization of the parameters of experiments."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-optuna-sweeper --upgrade\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Please set ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," to ",Object(i.b)("inlineCode",{parentName:"p"},"optuna")," in your config file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/sweeper: optuna\n")),Object(i.b)("p",null,"Alternatively, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper=optuna")," option to your command line."),Object(i.b)("p",null,"The default configuration is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_optuna_sweeper/hydra_plugins/hydra_optuna_sweeper/config.py"}),"here"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"We include an example in this directory. ",Object(i.b)("inlineCode",{parentName:"p"},"example/sphere.py")," implements a simple benchmark function to be minimized."),Object(i.b)("p",null,"You can discover the Optuna sweeper parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="python example/sphere.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper"',title:'"python',"example/sphere.py":!0,"hydra/sweeper":"optuna","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0}),"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\noptuna_config:\n  direction: minimize\n  storage: null\n  study_name: sphere\n  n_trials: 20\n  n_jobs: 1\n  sampler: TPESampler\n  seed: 123\nsearch_space:\n  x:\n    type: float\n    low: -5.5\n    high: 5.5\n    step: 0.5\n  y:\n    type: categorical\n    choices:\n    - -5\n    - 0\n    - 5\n")),Object(i.b)("p",null,"The function decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"x: 0\ny: 0\n")),Object(i.b)("p",null,"To run optimization, clone the code and run the following command in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun\n")),Object(i.b)("p",null,"You can also override the search space parametrization:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=interval(-5.0, 5.0)' 'y=interval(0, 10)'\n")),Object(i.b)("h2",{id:"search-space-configuration"},"Search space configuration"),Object(i.b)("p",null,"This plugin supports Optuna's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/distributions.html"}),"distributions")," to configure search spaces. They can be defined either through commandline override or config file."),Object(i.b)("h3",{id:"configuring-through-commandline-override"},"Configuring through commandline override"),Object(i.b)("p",null,"Hydra provides a override parser that support rich syntax. Please refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/override_grammar/basic"}),"OverrideGrammer/Basic")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/override_grammar/extended"}),"OverrideGrammer/Extended")," for details."),Object(i.b)("h4",{id:"interval-override"},"Interval override"),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"interval")," is converted to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"UniformDistribution")),". You can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"LogUniformDistribution"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntLogUniformDistribution"))," by casting the interval to ",Object(i.b)("inlineCode",{parentName:"p"},"int")," and tagging it with ",Object(i.b)("inlineCode",{parentName:"p"},"log"),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example for interval override"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=int(interval(-5.0, 5.0))' 'y=tag(log, interval(1, 10))'\n")),Object(i.b)("p",null,"The output is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Direction: minimize\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #0 : x=-3 y=1.6859762540733367\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #1 : x=1 y=5.237816870668193\n...\n[HYDRA] Best parameters: {'x': 0, 'y': 1.0929184723430116}\n[HYDRA] Best value: 1.1944707871885822\n"))),Object(i.b)("h4",{id:"range-override"},"Range override"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"range")," is converted to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". If you apply ",Object(i.b)("inlineCode",{parentName:"p"},"shuffle")," to ",Object(i.b)("inlineCode",{parentName:"p"},"range"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"CategoricalDistribution"))," is used instead."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example for range override"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=range(-5.0, 5.0)' 'y=shuffle(range(-5, 5))'\n")),Object(i.b)("p",null,"The output is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Direction: minimize\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #0 : x=-3 y=-1\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #1 : x=1 y=0\n...\n[HYDRA] Best parameters: {'x': 1, 'y': 0}\n[HYDRA] Best value: 1\n"))),Object(i.b)("h4",{id:"choice-override"},"Choice override"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"choice")," is converted to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example for choice override"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=choice(-5.0, 0.0, 5.0)' 'y=choice(0, 1, 2, 3, 4, 5)'\n")),Object(i.b)("p",null,"The output is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Direction: minimize\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #0 : x=5.0 y=5\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #1 : x=5.0 y=2\n...\n[HYDRA] Best parameters: {'x': 0.0, 'y': 0}\n[HYDRA] Best value: 0.0\n"))),Object(i.b)("h3",{id:"configuring-through-config-file"},"Configuring through config file"),Object(i.b)("h4",{id:"int-parameters"},"Int parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"int")," parameters can be defined with the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": ",Object(i.b)("inlineCode",{parentName:"li"},"int")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"low"),": lower bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"high"),": upper bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": discretization step (optional)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log"),": if ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"log")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". Otherwise, the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntLogUniformDistribution")),". Please note that ",Object(i.b)("inlineCode",{parentName:"p"},"step")," can not be set if ",Object(i.b)("inlineCode",{parentName:"p"},"log=true"),"."),Object(i.b)("h4",{id:"float-parameters"},"Float parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"float")," parameters can be defined with the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": ",Object(i.b)("inlineCode",{parentName:"li"},"float")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"low"),": lower bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"high"),": upper bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": discretization step"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log"),": if ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"log")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"UniformDistribution"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.DiscreteUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"DiscreteUniformDistribution"))," depending on the presence or absence of the ",Object(i.b)("inlineCode",{parentName:"p"},"step")," field, respectively. Otherwise, the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"LogUniformDistribution")),". Please note that ",Object(i.b)("inlineCode",{parentName:"p"},"step")," can not be set if ",Object(i.b)("inlineCode",{parentName:"p"},"log=true"),"."),Object(i.b)("h4",{id:"categorical-parameters"},"Categorical parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"categorical")," parameters can be defined with the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": ",Object(i.b)("inlineCode",{parentName:"li"},"categorical")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"choices"),": a list of parameter value candidates")),Object(i.b)("p",null,"The parameters are mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."))}b.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,p(p({ref:t},c),{},{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);