import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as n,d as t,f as a,o as s}from"./app-BgUtj9ZV.js";const l={},d=t("p",null,"记录一些流程语句",-1),r=a(`<p><code>gc()</code> 垃圾清理</p><hr><p><a href="https://help.autodesk.com/view/3DSMAX/2018/ENU/?guid=__files_GUID_6FC81BE7_58FF_4C63_8362_0BDCFA9F904C_htm" target="_blank" rel="noopener noreferrer">MAXScript 语言参考</a></p><p><a href="https://help.autodesk.com/view/3DSMAX/2018/ENU/?guid=__files_GUID_676FB825_84C1_4708_A398_993266E4D2AD_htm" target="_blank" rel="noopener noreferrer">MAXScript 示例</a></p><h2 id="控制语句" tabindex="-1"><a class="header-anchor" href="#控制语句"><span>控制语句</span></a></h2><ul><li>if 和 case of 用于判断选择的</li><li>while 和for 用于执行多次历遍循环</li><li>continue/exit 用于跳出循环/循环终止</li><li>try catch 用于测试补抓代码异常</li></ul><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h3><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>
-- if....do.... ：如果 xxx 那么执行 xxx
if 2&gt;1 do sphere()

-- if....then.... ：如果 xxx 正确 xxxx&lt;那么执行&gt;
if 2&lt;3 then box name:&quot;newbox&quot; pos:[50,0,0]    

-- $寻找对象
$newbox

-- if....then....else  :如果 xxxx   正确&lt;那么执行&gt;  错误&lt;那么执行&gt;
if distance $sphere001 $newbox&lt;10 then print 1  else $sphere001.segments=8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case-of" tabindex="-1"><a class="header-anchor" href="#case-of"><span>case of</span></a></h3><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>ticketNumber=1
case ticketNumber of
(   1: (print &quot;英雄&quot;) 
    2: (print &quot;玩具总动员&quot; )
    3: (print &quot;黑客帝国&quot;) 
    default: (print &quot;新闻联播&quot;)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while"><span>while</span></a></h3><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>--while....do....  :如果循环表达式为真就执行循环体,每次执行循环体前都要先判断下，知道循环表达式为假就结束循环。
x=1
while x&lt;5 do (print x; x=x+1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for"><span>for</span></a></h3><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>--for i=1 to 10 do...
x=1
for i=1 to 10 do print 1

-- for a in set to....
for a in selection do print 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>for i =1 to 52 do (if i==50 do (print&quot;出去休息下&quot;;continue); print i)
-- 达到条件 输出50 然后continue 继续判断  52结束
for i =1 to 52 do (if i=10 do (exit); print i)
-- 达到条件退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="try" tabindex="-1"><a class="header-anchor" href="#try"><span>try</span></a></h3><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>-- try....catch(messageBox&quot;....&quot;)

x=1

try x.name=i catch(messageBox&quot;这可能说数据赋值错误&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>function sum x y =(x+y)   -函数定义
fn adda x y =(x+y)  -简写
sum 34   -函数调用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p><h2 id="ui" tabindex="-1"><a class="header-anchor" href="#ui"><span>UI</span></a></h2><h3 id="button" tabindex="-1"><a class="header-anchor" href="#button"><span>Button</span></a></h3><p><a href="https://help.autodesk.com/view/3DSMAX/2018/ENU/?guid=__files_GUID_E03EED5F_E21F_4C2F_AFA9_BA16A6602ACA_htm" target="_blank" rel="noopener noreferrer">help autodesk</a></p><p>按钮控件用于在卷展栏上放置一个按下按钮，用户通常可以单击该按钮 执行某些任务。</p><p>语法为：</p><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>button &lt;name&gt; [&lt;caption&gt;] [images:&lt;image_spec_array&gt;] [toolTip:&lt;string&gt;] [border:&lt;boolean&gt;] [iconName:&lt;filename&gt; iconSize:&lt;point2&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>button theButton2 &quot;I  a button&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常规按钮</p><hr><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>button theButton iconName:@&quot;PolyTools\\TransformTools\\PB_CW&quot; iconSize:[20,20]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要用作按钮上图像的图标的文件名。如果指定了 iconName， 标题将被忽略。iconSize 指定 100% DPI 缩放的 iconName 大小。 如果未指定，则假定默认值为 [24,24]。</p><hr><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>button theBorderlessButton &quot;I am a button, too!&quot; border:false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当设置为 true 或未指定时，将使用边框绘制按钮。这是 3ds Max 2009 之前的默认行为。<br> 当设置为 false 时，该按钮将不带边框绘制，使其与 UI 背景。如果启用该按钮，则当按钮 按下，或鼠标悬停。</p><hr><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>  button btn_test &quot;Test&quot; tooltip:&quot;This is a tooltip&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tooltip: 为按钮的工具提示提供文本;如果未提供，则没有工具提示。</p><hr><p> </p><h3 id="window" tabindex="-1"><a class="header-anchor" href="#window"><span>window</span></a></h3><p>结合综合所上</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240129015114.png" style="width:40% !important;"></div><details><summary>Code：点击查看</summary><div class="language-Maxscript line-numbers-mode" data-ext="Maxscript" data-title="Maxscript"><pre class="language-Maxscript"><code>	
rollout menu1 &quot;menu1&quot;
(
button create &quot;check concavity&quot;
button theButton iconName:@&quot;Merger_boy_256&quot; iconSize:[20,20]
button theBorderlessButton &quot;I am a button, too!&quot; border:false
	
-- on对应按钮 do执行	
on theButton pressed do
	messagebox &quot;Remember: Never press unknown buttons!&quot;
)

rollout menu2 &quot;menu2&quot;
(	
label label_a &quot;tooltip button&quot;

button btn_test &quot;Test&quot; tooltip:&quot;This is a tooltip&quot;
	
group &quot;Group&quot;
(
	label l_warn &quot;a label for showing group&quot; 
)
	
)


utility testCheckButton &quot;Test The CheckButton&quot;
(
-- 点击按钮时随着变量的内容而缩放
checkbutton myCheckButton &quot;Check Me!&quot;
-- theState is a user variable name that will contain the state
-- of the checkbox whenever the change handler is executed
on myCheckButton changed theState do
(
if theState == true then
myCheckButton.text = &quot;Uncheck Me!&quot;
else
myCheckButton.text = &quot;Check Me!&quot;
)

-- 提示check类型按钮
checkbutton chk_test &quot;Check Me!&quot; tooltip:&quot;This is a tooltip&quot;
on chk_test changed state do
chk_test.tooltip = if state then &quot;I am checked!&quot; else &quot;I am unchecked!&quot;
	
)--end utility



theNewFloater = newRolloutFloater &quot;ButtonTest&quot; 230 315
addRollout menu1 theNewFloater
addRollout menu2 theNewFloater
addRollout testCheckButton theNewFloater

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,45);function c(o,u){return s(),i("div",null,[d,n(" more "),r])}const p=e(l,[["render",c],["__file","MaxscriptLearn.html.vue"]]),b=JSON.parse('{"path":"/posts/3dmax/MaxscriptLearn.html","title":"MaxscriptLearn","lang":"zh-CN","frontmatter":{"title":"MaxscriptLearn","icon":"iconfont alicon-3DMax","category":["3dMax"],"tag":["3dMax","Maxscript"],"date":"2024-01-28T00:00:00.000Z","article":false,"description":"记录一些流程语句","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/3dmax/MaxscriptLearn.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"MaxscriptLearn"}],["meta",{"property":"og:description","content":"记录一些流程语句"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"3dMax"}],["meta",{"property":"article:tag","content":"Maxscript"}],["meta",{"property":"article:published_time","content":"2024-01-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"MaxscriptLearn\\",\\"description\\":\\"记录一些流程语句\\"}"]]},"headers":[{"level":2,"title":"控制语句","slug":"控制语句","link":"#控制语句","children":[{"level":3,"title":"if","slug":"if","link":"#if","children":[]},{"level":3,"title":"case  of","slug":"case-of","link":"#case-of","children":[]},{"level":3,"title":"while","slug":"while","link":"#while","children":[]},{"level":3,"title":"for","slug":"for","link":"#for","children":[]},{"level":3,"title":"try","slug":"try","link":"#try","children":[]}]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"UI","slug":"ui","link":"#ui","children":[{"level":3,"title":"Button","slug":"button","link":"#button","children":[]},{"level":3,"title":"window","slug":"window","link":"#window","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"posts/3dmax/MaxscriptLearn.md","localizedDate":"2024年1月28日","excerpt":"<p>记录一些流程语句</p>\\n","autoDesc":true}');export{p as comp,b as data};
