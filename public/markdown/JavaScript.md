# JavaScript

### histroy

JavaScript的`history`对象是**浏览器提供的一个全局对象**，用于**管理浏览器的会话历史记录**。它允许JavaScript代码与浏览器的历史记录进行交互，包括导航到不同的URL、添加或替换历史记录项等操作。

`history`对象具有以下常用属性和方法：

1. `history.length`：返回当前会话历史记录中的历史记录条目数量。

2. `history.back()`：导航到前一个历史记录项（等效于用户点击浏览器的后退按钮）。

3. `history.forward()`：导航到下一个历史记录项（等效于用户点击浏览器的前进按钮）。

4. `history.go(n)`：导航到相对于当前历史记录项的第n个历史记录项，其中`n`可以为正数（前进）或负数（后退）。

5. `history.pushState(state, title, url)`：向**浏览器的历史记录栈中添加一个新的历史记录项**。`state`参数是一个状态对象，可用于传递数据；`title`参数是一个字符串，通常被忽略；`url`参数是新的URL。该方法**不会触发页面的实际导航或刷新**。

6. `history.replaceState(state, title, url)`：替换当前的历史记录项为一个新的历史记录项。参数和效果与`pushState()`方法类似，但是替换当前项而不是添加新项。

使用`history`对象，你可以通过上述方法来控制浏览器的历史记录，导航到不同的页面或URL，以及传递数据。这对于实现前端路由、历史记录管理以及构建单页面应用程序（SPA）非常有用。

请注意，使用`history`对象时要遵循**同源策略**。对于不同域的页面，某些`history`方法可能受到限制。此外，修改`history`对象的方法**不会向服务器发送请求**，它们只是在浏览器端进行的操作。

**设置state**

```javascript
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";
history.pushState(state, "", url);
```

**更新url**

```javascript
const url = new URL(location);
url.searchParams.set("foo", "bar");
history.pushState({}, "", url);
```

### Jsx

JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar *HTML-like* syntax. The nice thing about JSX is that apart from following [three JSX rules](https://beta.reactjs.org/learn/writing-markup-with-jsx#the-rules-of-jsx), you don’t need to learn any new symbols or syntax outside of HTML and JavaScript.
JSX 是 JavaScript 的语法扩展，它允许您用熟悉的类似 HTML 的语法描述您的 UI。JSX的好处是，除了遵循三个JSX规则之外，你不需要学习HTML和JavaScript之外的任何新符号或语法。

Note that browsers don’t understand JSX out of the box, so you’ll need a JavaScript compiler, such as a [Babel](https://babeljs.io/), to transform your JSX code into regular JavaScript.
请注意，浏览器不能理解开箱即用的JSX，因此您需要一个JavaScript编译器（例如Babel）将JSX代码转换为常规JavaScript。



### 解析string的function

#### new Function和eval



### 事件

事件捕获，window- document-body-div

事件到达两次

事件冒泡，div-body- document-window

事件监听：

​	冒泡过程中`addEventListener(eventName, fn, [default: false])`

​	捕获过程中`addEventListener(eventName, fn,  true)`

##### 为什么会在前端加入冒泡事件这种机制,是出于什么问题才考虑加入这样一种机制的

1. 加入冒泡机制是因为存在这个现象 子元素存在于父级元素，你点击子元素也是相当于点击了父元素，然后冒泡机制可用于事件委托，优化性能，比如长列表绑定事件
2. 如上楼所说的长列表绑定，笨的做法：每个li上绑定事件，li触发事件，如果1kw条数据，这种做法肯定是不科学的。所以，优化性能的时候，将事件绑定在ul上，加入冒泡机制，代码量变少、性能又好，何乐而不为？
