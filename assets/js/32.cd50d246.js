(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{319:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),s("p",[t._v("BFC（Block Formatting Context，块级格式化上下文）是CSS中的一个重要概念，它对页面布局和元素的显示方式有着重要影响。以下是对BFC的详细讲解：")]),t._v(" "),s("h2",{attrs:{id:"_1、bfc的定义与创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、bfc的定义与创建"}},[t._v("#")]),t._v(" 1、BFC的定义与创建")]),t._v(" "),s("h3",{attrs:{id:"_1-定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[t._v("#")]),t._v(" 1. 定义")]),t._v(" "),s("p",[t._v("BFC是Web页面中一块独立的渲染区域，在这个区域内，元素按照一定的规则进行布局和渲染，并且它与外部区域相互隔离，不会受到外部元素布局的影响，同时也不会影响到外部区域的布局（除了一些特定情况，如占据空间等）。")]),t._v(" "),s("h3",{attrs:{id:"_2-创建bfc的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建bfc的方式"}},[t._v("#")]),t._v(" 2. 创建BFC的方式")]),t._v(" "),s("p",[t._v("以下几种常见的情况会创建一个BFC：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("根元素")]),t._v("：HTML页面中的根元素（"),s("code",[t._v("<html>")]),t._v("）本身就处于一个BFC中，它为整个页面的布局奠定了基础。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("浮动元素")]),t._v("：当一个元素设置为浮动（"),s("code",[t._v("float: left")]),t._v("或"),s("code",[t._v("float: right")]),t._v("）时，它会创建一个BFC。例如：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".float-element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("在上述代码中，任何带有"),s("code",[t._v("float-element")]),t._v("类名的元素，当应用到HTML元素上时，该元素就会创建一个BFC。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("绝对定位元素")]),t._v("：设置为绝对定位（"),s("code",[t._v("position: absolute")]),t._v("）的元素也会创建一个BFC。比如：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".absolute-element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("这样的元素会形成自己的BFC。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("display属性值为inline-block、table-cell、table-caption等")]),t._v("：当一个元素的"),s("code",[t._v("display")]),t._v("属性设置为这些值时，也会创建一个BFC。例如：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inline-block-element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("带有"),s("code",[t._v("inline-block-element")]),t._v("类名的元素会创建一个BFC。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("overflow属性值不为visible")]),t._v("：当一个元素的"),s("code",[t._v("overflow")]),t._v("属性设置为除"),s("code",[t._v("visible")]),t._v("之外的其他值（如"),s("code",[t._v("overflow: hidden")]),t._v("、"),s("code",[t._v("overflow: auto")]),t._v("、"),s("code",[t._v("overflow: scroll")]),t._v("）时，会创建一个BFC。例如：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".overflow-element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("该元素就会创建一个BFC。")])])]),t._v(" "),s("h2",{attrs:{id:"_2、bfc的布局规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、bfc的布局规则"}},[t._v("#")]),t._v(" 2、BFC的布局规则")]),t._v(" "),s("p",[t._v("一旦一个元素创建了BFC，那么在这个BFC内的元素布局遵循以下规则：")]),t._v(" "),s("h3",{attrs:{id:"_1-内部元素的排列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-内部元素的排列"}},[t._v("#")]),t._v(" 1. 内部元素的排列")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("块级元素")]),t._v("：在BFC内，块级元素会按照从上到下的顺序依次排列，每个块级元素都会占据一行，就像在普通的文档流中一样。例如，有多个"),s("code",[t._v("<div>")]),t._v("块级元素在一个创建了BFC的容器内，它们会垂直排列。")]),t._v(" "),s("li",[s("strong",[t._v("行内元素和行内块元素")]),t._v("：行内元素和行内块元素在BFC内会按照从左到右的顺序依次排列，直到一行排满，然后再换行继续排列，类似于普通的文本排版方式。")])]),t._v(" "),s("h3",{attrs:{id:"_2-外边距折叠-margin-collapse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-外边距折叠-margin-collapse"}},[t._v("#")]),t._v(" 2. 外边距折叠（Margin Collapse）")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("不发生外边距折叠")]),t._v("：在BFC内，相邻的块级元素之间的外边距不会发生折叠现象。通常情况下，在普通文档流中，如果两个相邻的块级元素都设置了外边距，那么它们之间的外边距会发生折叠，只取较大的那个外边距值。但在BFC内，这种情况不会出现，每个块级元素的外边距都能独立发挥作用。 例如，假设有两个块级元素在一个创建了BFC的容器内：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bfc-container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("block-element-1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("元素1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("block-element-2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("元素2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("在CSS中：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bfc-container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block-element-1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block-element-2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("在上述代码中，因为"),s("code",[t._v("bfc-container")]),t._v("创建了一个BFC，所以"),s("code",[t._v("block-element-1")]),t._v("的"),s("code",[t._v("margin-bottom")]),t._v("和"),s("code",[t._v("block-element-2")]),t._v("的"),s("code",[t._v("margin-top")]),t._v("不会发生折叠，它们之间的间距就是"),s("code",[t._v("20px + 30px = 50px")]),t._v("。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-包含浮动元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-包含浮动元素"}},[t._v("#")]),t._v(" 3. 包含浮动元素")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("清除浮动影响")]),t._v("：BFC可以包含浮动元素，使其不会对外部元素的布局产生影响。在没有创建BFC的情况下，浮动元素会脱离文档流，可能导致后续元素的布局出现混乱，比如后续的块级元素会向上移动，占据浮动元素原本应该占据的空间。但当有一个元素创建了BFC后，它可以将浮动元素“包含”在里面，保持自身内部布局的相对稳定。 例如，有如下HTML结构：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("float-child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("浮动子元素"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("normal-child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("正常子元素"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("在CSS中：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".float-child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("在上述代码中，"),s("code",[t._v("parent")]),t._v("通过设置"),s("code",[t._v("overflow: hidden")]),t._v("创建了一个BFC，这样它就可以包含"),s("code",[t._v("float-child")]),t._v("这个浮动子元素，使得"),s("code",[t._v("normal-child")]),t._v("这个正常子元素能够按照正常的布局方式在"),s("code",[t._v("parent")]),t._v("内排列，不会因为"),s("code",[t._v("float-child")]),t._v("的浮动而出现布局混乱的情况。")])])]),t._v(" "),s("h2",{attrs:{id:"_3、bfc的应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、bfc的应用场景"}},[t._v("#")]),t._v(" 3、BFC的应用场景")]),t._v(" "),s("p",[t._v("BFC在实际的网页设计和布局中有很多重要的应用场景，以下是一些常见的例子：")]),t._v(" "),s("h3",{attrs:{id:"_1-解决外边距折叠问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决外边距折叠问题"}},[t._v("#")]),t._v(" 1. 解决外边距折叠问题")]),t._v(" "),s("p",[t._v("如前面所提到的，当需要避免相邻块级元素的外边距折叠时，可以通过创建一个BFC来实现。")]),t._v(" "),s("p",[t._v("这在一些需要精确控制元素间距的场景中非常有用，比如在设计页面的模块划分、卡片布局等时，确保每个元素之间的间距符合设计要求。")]),t._v(" "),s("h3",{attrs:{id:"_2-清除浮动影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-清除浮动影响"}},[t._v("#")]),t._v(" 2. 清除浮动影响")]),t._v(" "),s("p",[t._v("在使用浮动进行布局时，经常会遇到浮动元素影响后续元素布局的问题。通过创建BFC，可以有效地清除浮动带来的影响，使后续元素能够按照预期的方式进行布局。")]),t._v(" "),s("p",[t._v("例如，在一个包含图片和文字的网页布局中，如果图片设置为浮动，那么可以通过创建一个BFC来确保文字等后续元素的布局不受影响。")]),t._v(" "),s("h3",{attrs:{id:"_3-实现两列或多列布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现两列或多列布局"}},[t._v("#")]),t._v(" 3. 实现两列或多列布局")]),t._v(" "),s("p",[t._v("BFC可以用于实现简单的两列或多列布局。例如，可以将一个容器创建为BFC，然后在里面设置两个子元素，一个子元素设置为浮动，另一个子元素保持正常布局，通过调整它们的宽度等属性，可以实现两列布局。")]),t._v(" "),s("p",[t._v("并且由于BFC的存在，它们之间的布局关系会相对稳定，不会出现相互干扰的情况。")])])}),[],!1,null,null,null);s.default=e.exports}}]);