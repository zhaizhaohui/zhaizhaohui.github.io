(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{313:function(_,v,t){"use strict";t.r(v);var o=t(8),e=Object(o.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"http缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[_._v("#")]),_._v(" HTTP缓存")]),_._v(" "),v("p",[_._v("HTTP的缓存是一种用于提高网络性能和减少服务器负载的机制，它允许客户端（如浏览器）和中间代理服务器在一定条件下存储和重复使用之前获取的HTTP资源，而无需再次从源服务器获取相同的资源。以下是对HTTP缓存的详细介绍：")]),_._v(" "),v("h2",{attrs:{id:"_1、缓存的好处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、缓存的好处"}},[_._v("#")]),_._v(" 1、缓存的好处")]),_._v(" "),v("p",[_._v("f - "),v("strong",[_._v("提高性能")]),_._v("：当客户端再次请求相同的资源时，如果可以从缓存中获取，就无需重新建立网络连接、发送请求到服务器以及等待服务器响应，这样可以大大缩短响应时间，提高页面加载速度，提升用户体验。 - "),v("strong",[_._v("减少服务器负载")]),_._v("：大量重复的请求如果都能由缓存来满足，就不需要服务器每次都进行处理和响应，从而减轻了服务器的负担，使其能够更好地处理其他重要任务，如处理新的、不同的请求等。")]),_._v(" "),v("h2",{attrs:{id:"_2、缓存的工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、缓存的工作原理"}},[_._v("#")]),_._v(" 2、缓存的工作原理")]),_._v(" "),v("p",[_._v("HTTP缓存主要基于请求和响应头中的一些特定字段来实现，这些字段用于控制缓存的行为，包括是否缓存、缓存多久以及如何验证缓存是否仍然有效等。")]),_._v(" "),v("h3",{attrs:{id:"_1-缓存的决策流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-缓存的决策流程"}},[_._v("#")]),_._v(" 1. 缓存的决策流程")]),_._v(" "),v("p",[_._v("当客户端发起一个HTTP请求时，缓存机制会按照以下大致流程来决定是否使用缓存以及如何使用缓存：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("检查本地缓存是否存在")]),_._v("：客户端首先会查看自己的本地缓存（如浏览器缓存）中是否已经存储了所请求的资源。")]),_._v(" "),v("li",[v("strong",[_._v("判断缓存是否有效")]),_._v("：如果本地缓存中有该资源，接下来会根据响应头中的缓存相关字段（如 "),v("code",[_._v("Cache-Control")]),_._v("、"),v("code",[_._v("Expires")]),_._v(" 等）以及请求的一些情况（如是否是强制刷新请求等）来判断缓存是否仍然有效。")]),_._v(" "),v("li",[v("strong",[_._v("向服务器验证（如果需要）")]),_._v("：如果缓存被判断为无效或者不存在有效缓存，客户端会向服务器发送请求。服务器收到请求后，可能会根据资源的情况以及请求头中的相关字段（如 "),v("code",[_._v("If-Modified-Since")]),_._v("、"),v("code",[_._v("If-None-Match")]),_._v(" 等）来决定是返回完整的资源还是只返回一个验证信息（如告知客户端资源未修改）。")]),_._v(" "),v("li",[v("strong",[_._v("更新缓存（如果需要）")]),_._v("：当客户端从服务器获取到新的资源或者验证到缓存仍然有效后，会根据情况更新本地缓存，以便下次请求时能够更好地利用缓存。")])]),_._v(" "),v("h3",{attrs:{id:"_2-关键的缓存控制字段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-关键的缓存控制字段"}},[_._v("#")]),_._v(" 2. 关键的缓存控制字段")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Cache-Control")]),_._v("：这是现代HTTP缓存中最重要的一个字段，用于精确控制缓存的行为。它可以包含多个指令，常见的指令如下：")]),_._v(" "),v("li",[v("strong",[_._v("max-age")]),_._v("：指定资源在缓存中可以保存的最长时间（以秒为单位）。例如，"),v("code",[_._v("Cache-Control: max-age=3600")]),_._v(" 表示资源在缓存中最多可保存一小时，在这一小时内，客户端再次请求该资源时，可以直接从缓存中获取，无需向服务器确认。")]),_._v(" "),v("li",[v("strong",[_._v("no-cache")]),_._v("：表示客户端在使用缓存之前必须先向服务器验证缓存的有效性。虽然叫“no-cache”，但并不是不缓存，而是强调需要先验证。")]),_._v(" "),v("li",[v("strong",[_._v("no-store")]),_._v("：明确指示不允许缓存该资源，任何情况下都要从服务器获取新鲜的资源。")]),_._v(" "),v("li",[v("strong",[_._v("public")]),_._v("：表示该资源可以被任何中间代理服务器缓存，而不仅仅是客户端自己的本地缓存。")]),_._v(" "),v("li",[v("strong",[_._v("private")]),_._v("：与“public”相反，该资源只能被客户端自己的本地缓存所缓存，中间代理服务器不能缓存。")]),_._v(" "),v("li",[v("strong",[_._v("Expires")]),_._v("：这是一个比较老式的缓存控制字段，它指定了一个绝对的时间点，在这个时间点之后，缓存的资源将被认为是过期的。例如，"),v("code",[_._v("Expires: Fri, 02 Nov 2024 12:00:00 GMT")]),_._v("，当到达这个指定的时间时，客户端再请求该资源时，就需要向服务器确认缓存是否仍然有效。不过，由于它是基于绝对时间，存在与客户端时钟不一致等问题，现代HTTP中更倾向于使用 "),v("code",[_._v("Cache-Control")]),_._v(" 来控制缓存。")]),_._v(" "),v("li",[v("strong",[_._v("If-Modified-Since")]),_._v(" 和 "),v("strong",[_._v("If-None-Match")]),_._v("：这两个字段是客户端在请求时用于向服务器验证缓存是否有效的手段。")]),_._v(" "),v("li",[v("strong",[_._v("If-Modified-Since")]),_._v("：客户端会在请求头中带上上次获取该资源时服务器响应头中给出的 "),v("code",[_._v("Last-Modified")]),_._v(" 时间戳。服务器收到请求后，如果资源自上次发送给客户端后没有修改过，就会返回一个特殊的状态码（如 "),v("code",[_._v("304 Not Modified")]),_._v("），告知客户端可以继续使用缓存中的资源；如果资源已经修改过，则会返回完整的资源更新。")]),_._v(" "),v("li",[v("strong",[_._v("If-None-Match")]),_._v("：与 "),v("code",[_._v("If-Modified-Since")]),_._v(" 类似，但它是基于资源的实体标签（ETag）来验证的。ETag是服务器为每个资源生成的一个唯一标识符，客户端在请求时带上上次获取该资源时的ETag值。服务器根据这个值来判断资源是否修改过，同样，如果资源未修改，返回 "),v("code",[_._v("304 Not Modified")]),_._v("；如果修改过，返回完整的资源更新。")])]),_._v(" "),v("h2",{attrs:{id:"_3、缓存的类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、缓存的类型"}},[_._v("#")]),_._v(" 3、缓存的类型")]),_._v(" "),v("p",[_._v("HTTP缓存可以分为以下几种类型：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("浏览器缓存")]),_._v("：这是最常见的一种缓存类型，位于客户端浏览器内部。当用户在浏览器中访问网页时，浏览器会根据上述的缓存机制对网页中的各种资源（如HTML文件、图片、CSS样式表、JavaScript脚本等）进行缓存。不同的浏览器可能会有一些细微的差别，但总体的缓存原理是相似的。")]),_._v(" "),v("li",[v("strong",[_._v("代理服务器缓存")]),_._v("：位于客户端和源服务器之间的代理服务器也可以进行缓存。代理服务器会接收来自多个客户端的请求，如果它发现某个请求的资源已经在其缓存中，并且是有效的，就可以直接将缓存中的资源发送给客户端，而无需再向源服务器发送请求。这样不仅可以提高客户端的响应速度，也可以减轻源服务器的负担。")])]),_._v(" "),v("h2",{attrs:{id:"_4、缓存的更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、缓存的更新"}},[_._v("#")]),_._v(" 4、缓存的更新")]),_._v(" "),v("p",[_._v("缓存不是一成不变的，在某些情况下，缓存需要更新以获取最新的资源。以下是一些常见的导致缓存更新的情况：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("资源被修改")]),_._v("：当源服务器上的资源（如网页文件、图片等）被修改后，服务器会在下次客户端请求时，根据客户端请求头中的验证字段（如 "),v("code",[_._v("If-Modified-Since")]),_._v("、"),v("code",[_._v("If-None-Match")]),_._v(" 等）判断是否需要返回完整的资源更新。如果需要更新，客户端会接收新的资源并更新本地缓存。")]),_._v(" "),v("li",[v("strong",[_._v("缓存过期")]),_._v("：根据 "),v("code",[_._v("Cache-Control")]),_._v(" 中的 "),v("code",[_._v("max-age")]),_._v(" 指令或者 "),v("code",[_._v("Expires")]),_._v(" 字段的设定，当缓存时间到达后，客户端再请求该资源时，就需要向服务器确认缓存是否仍然有效。如果服务器判断资源未修改，可能会返回 "),v("code",[_._v("304 Not Modified")]),_._v(" 并让客户端继续使用缓存；如果资源已修改，则会返回完整的资源更新。")]),_._v(" "),v("li",[v("strong",[_._v("用户强制刷新")]),_._v("：用户可以通过浏览器的刷新按钮（通常有普通刷新和强制刷新两种方式）来强制刷新页面。在强制刷新时，浏览器会忽略缓存，直接向服务器发送请求获取最新的资源，并更新本地缓存。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);