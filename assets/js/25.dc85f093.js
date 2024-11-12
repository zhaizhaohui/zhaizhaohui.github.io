(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{312:function(t,a,r){"use strict";r.r(a);var s=r(8),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-2-0新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0新特性"}},[t._v("#")]),t._v(" HTTP 2.0新特性")]),t._v(" "),a("p",[t._v("HTTP 2.0相比之前的版本（如HTTP 1.1）带来了诸多新特性，这些特性显著提升了网络性能和应用的灵活性，以下是其主要新特性介绍：")]),t._v(" "),a("h2",{attrs:{id:"_1、二进制分帧-binary-framing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、二进制分帧-binary-framing"}},[t._v("#")]),t._v(" 1、二进制分帧（Binary Framing）")]),t._v(" "),a("p",[t._v("原理 HTTP 2.0将数据传输格式从HTTP 1.x的文本格式转变为二进制格式，并通过二进制分帧机制对数据进行处理。")]),t._v(" "),a("p",[t._v("它把要传输的信息（包括请求、响应以及它们的头部和数据部分）分割成一个个的帧（Frame），每个帧都有特定的格式和用途，如头部帧（HEADERS Frame）用于传输请求或响应的头部信息，数据帧（DATA Frame）用于传输实际的数据内容等。")]),t._v(" "),a("h3",{attrs:{id:"优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("高效传输")]),t._v("：二进制格式相比文本格式在传输和解析上更加高效，减少了因文本格式带来的解析开销和可能出现的格式错误等问题，能够更快速准确地传输数据。")]),t._v(" "),a("li",[a("strong",[t._v("支持多路复用")]),t._v("：二进制分帧为多路复用提供了基础，使得多个请求和响应的帧可以在同一个TCP连接上交错发送和接收，实现了在一个连接上同时处理多个请求和响应，大大提高了连接的复用率，减少了建立和关闭连接的开销。")])]),t._v(" "),a("h2",{attrs:{id:"_2、多路复用-multiplexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、多路复用-multiplexing"}},[t._v("#")]),t._v(" 2、多路复用（Multiplexing）")]),t._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("基于二进制分帧，HTTP 2.0允许在一个TCP连接上同时发起多个请求，并同时接收多个响应。每个请求和响应被分解成不同的帧，这些帧在TCP连接上混合传输，在接收端再根据帧的标识等信息将它们重新组装成完整的请求和响应。")]),t._v(" "),a("h3",{attrs:{id:"优势-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势-2"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("性能提升")]),t._v("：与HTTP 1.x中每个请求都需要单独建立一个TCP连接不同，多路复用避免了频繁建立和关闭连接的开销，尤其是在请求多个资源（如网页中的图片、CSS文件、JavaScript文件等）时，能显著提高网络传输效率。")]),t._v(" "),a("p",[t._v("例如，对于一个包含多个图片的网页，在HTTP 1.x下可能需要为每张图片建立一个新的TCP连接，而在HTTP 2.0下可以通过一个TCP连接同时获取所有图片。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("优化资源加载顺序")]),t._v("：可以根据资源的重要性和需求灵活安排请求的发送顺序，而不必像HTTP 1.x那样受限于连接建立的先后顺序。")]),t._v(" "),a("p",[t._v("比如，可以先发送关键的JavaScript脚本请求，使其优先得到处理和加载，提高网页的加载速度和运行效果。")])])]),t._v(" "),a("h2",{attrs:{id:"三、头部压缩-header-compression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、头部压缩-header-compression"}},[t._v("#")]),t._v(" 三、头部压缩（Header Compression）")]),t._v(" "),a("h3",{attrs:{id:"原理-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理-2"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("HTTP 2.0采用了HPACK头部压缩算法对请求和响应的头部进行压缩。")]),t._v(" "),a("p",[t._v("该算法基于静态表（Static Table）和动态表（Dynamic Table）的机制，通过对常见的头部字段值进行预定义和编码，以及对重复出现的头部字段进行索引和替换等操作，来实现对头部信息的有效压缩。")]),t._v(" "),a("h3",{attrs:{id:"优势-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势-3"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("节省带宽")]),t._v("：随着网络应用的日益复杂，请求和响应的头部信息往往会变得很长，占用大量的网络带宽。通过头部压缩，能够将头部信息的大小显著减小，通常可减少到原来的几分之一甚至更小，从而节省了大量的网络带宽，提高了数据传输效率。")]),t._v(" "),a("li",[a("strong",[t._v("提高响应速度")]),t._v("：由于头部信息占用的带宽减少，数据传输速度加快，使得整个请求和响应的处理周期缩短，进而提高了网页等应用的响应速度。")])]),t._v(" "),a("h2",{attrs:{id:"四、请求优先级-request-priorities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、请求优先级-request-priorities"}},[t._v("#")]),t._v(" 四、请求优先级（Request Priorities）")]),t._v(" "),a("h3",{attrs:{id:"原理-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理-3"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("HTTP 2.0引入了请求优先级机制，允许客户端为不同的请求设置不同的优先级。在发送请求时，客户端可以通过在请求头中设置相关的优先级标识，告知服务器哪些请求更为重要或紧急，需要优先处理。")]),t._v(" "),a("h3",{attrs:{id:"优势-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势-4"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("优化资源分配")]),t._v("：服务器根据接收到的请求优先级标识，能够合理安排资源处理顺序，优先处理高优先级的请求，确保重要的资源（如关键的JavaScript脚本、首屏显示所需的图片等）能够更快地得到处理和加载，提高网页的加载速度和用户体验。")]),t._v(" "),a("li",[a("strong",[t._v("灵活适应应用需求")]),t._v("：不同的网络应用场景对资源的需求和紧急程度不同，请求优先级机制使得应用能够根据自身特点灵活设置请求优先级，更好地适应各种复杂的应用场景。")])]),t._v(" "),a("h2",{attrs:{id:"五、服务器推送-server-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、服务器推送-server-push"}},[t._v("#")]),t._v(" 五、服务器推送（Server Push）")]),t._v(" "),a("h3",{attrs:{id:"原理-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理-4"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("服务器推送是HTTP 2.0的一项重要创新特性。在客户端请求一个资源（如一个网页）时，服务器除了发送所请求的资源本身外，还可以根据对网页内容的了解以及预定义的推送规则，主动将一些与该资源相关的其他资源（如可能会用到的图片、CSS文件等）推送给客户端，而无需客户端另行发送请求获取这些资源。")]),t._v(" "),a("h3",{attrs:{id:"优势-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势-5"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("加快网页加载速度")]),t._v("：通过服务器主动推送相关资源，减少了客户端后续单独发送请求获取这些资源的时间，使得网页能够更快地完成加载，提高了用户体验。")]),t._v(" "),a("li",[a("strong",[t._v("优化资源获取流程")]),t._v("：避免了因客户端不知道需要哪些相关资源而导致的资源获取延迟，使得资源获取过程更加高效和流畅。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);