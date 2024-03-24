import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as u,c as b,b as v,a as s,w as t,d as e,e as n,f as o}from"./app-C-b6Dbk0.js";const p={},h=e("p",null,"记录一些基础的maya日常笔记",-1),f=e("h2",{id:"一些常用小代码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一些常用小代码"},[e("span",null,"一些常用小代码")])],-1),g=e("h3",{id:"硬边选择",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#硬边选择"},[e("span",null,"硬边选择")])],-1),k=e("p",null,"功能描述：按角度获取硬边",-1),x=e("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[e("pre",{class:"language-python"},[e("code",null,[n(`
`),e("span",{class:"token keyword"},"import"),n(" maya"),e("span",{class:"token punctuation"},"."),n("cmds "),e("span",{class:"token keyword"},"as"),n(` cmds
cmds`),e("span",{class:"token punctuation"},"."),n("polySelectConstraint"),e("span",{class:"token punctuation"},"("),n("m "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"3"),e("span",{class:"token punctuation"},","),n(" t "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0x8000"),e("span",{class:"token punctuation"},","),n(" sm "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),n(`
sels `),e("span",{class:"token operator"},"="),n(" cmds"),e("span",{class:"token punctuation"},"."),n("ls"),e("span",{class:"token punctuation"},"("),n("sl "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),n(`
cmds`),e("span",{class:"token punctuation"},"."),n("polySelectConstraint"),e("span",{class:"token punctuation"},"("),n("sm "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token comment"},"#复原选择模式，不然在view中只能选择硬边"),n(`
cmds`),e("span",{class:"token punctuation"},"."),n("select"),e("span",{class:"token punctuation"},"("),n("sels"),e("span",{class:"token punctuation"},")"),n(`

`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("h3",{id:"提取曲线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#提取曲线"},[e("span",null,"提取曲线")])],-1),w=e("p",null,"功能描述：从边提取曲线 polyEdgeToCurves",-1),_=e("div",{class:"language-mel line-numbers-mode","data-ext":"mel","data-title":"mel"},[e("pre",{class:"language-mel"},[e("code",null,[n(`
`),e("span",{class:"token function"},"polyToCurve"),n(),e("span",{class:"token flag operator"},"-form"),n(),e("span",{class:"token number"},"2"),n(),e("span",{class:"token flag operator"},"-degree"),n(),e("span",{class:"token number"},"3"),n(),e("span",{class:"token flag operator"},"-conformToSmoothMeshPreview"),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),n(`

`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("h3",{id:"世界中心枢轴",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#世界中心枢轴"},[e("span",null,"世界中心枢轴")])],-1),T=e("p",null,"功能描述：世界中心枢轴: 选择对象",-1),z=e("div",{class:"language-mel line-numbers-mode","data-ext":"mel","data-title":"mel"},[e("pre",{class:"language-mel"},[e("code",null,[e("span",{class:"token keyword"},"string"),n(),e("span",{class:"token variable"},"$obj"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token operator"},"="),e("span",{class:"token code italic"},[e("span",{class:"token delimiter punctuation"},"`"),e("span",{class:"token statement"},[e("span",{class:"token function"},"ls"),e("span",{class:"token flag operator"},"-sl")]),e("span",{class:"token delimiter punctuation"},"`")]),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token keyword"},"for"),e("span",{class:"token punctuation"},"("),e("span",{class:"token variable"},"$aObj"),n(),e("span",{class:"token keyword"},"in"),n(),e("span",{class:"token variable"},"$obj"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token punctuation"},"{"),n(`
`),e("span",{class:"token function"},"xform"),n(),e("span",{class:"token flag operator"},"-cp"),n(),e("span",{class:"token variable"},"$aObj"),e("span",{class:"token punctuation"},";"),e("span",{class:"token comment"},"//坐标刷新到自身中心"),n(`
`),e("span",{class:"token function"},"move"),n(),e("span",{class:"token flag operator"},"-rpr"),n(),e("span",{class:"token number"},"0"),n(),e("span",{class:"token number"},"0"),n(),e("span",{class:"token number"},"0"),n(),e("span",{class:"token variable"},"$aObj"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token function"},"FreezeTransformations"),e("span",{class:"token punctuation"},";"),e("span",{class:"token comment"},"//冻结变换-也就是位置信息为零"),n(`
`),e("span",{class:"token function"},"DeleteHistory"),e("span",{class:"token punctuation"},";"),e("span",{class:"token comment"},"//清除历史"),n(`
`),e("span",{class:"token function"},"ResetTransformations"),e("span",{class:"token punctuation"},";"),e("span",{class:"token comment"},"//重置变换-坐标归世界中心"),n(`
`),e("span",{class:"token function"},"OptimizeScene"),e("span",{class:"token punctuation"},";"),e("span",{class:"token comment"},"//清理场景"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("h3",{id:"固定fbx参数导出",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#固定fbx参数导出"},[e("span",null,"固定FBX参数导出")])],-1),S=e("p",null,"功能描述：统一团队导出格式",-1),L=e("div",{class:"language-mel line-numbers-mode","data-ext":"mel","data-title":"mel"},[e("pre",{class:"language-mel"},[e("code",null,[e("span",{class:"token keyword"},"string"),n(),e("span",{class:"token variable"},"$ObjectsSelected"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token code italic"},[e("span",{class:"token delimiter punctuation"},"`"),e("span",{class:"token statement"},[e("span",{class:"token function"},"ls"),n(),e("span",{class:"token flag operator"},"-sl")]),e("span",{class:"token delimiter punctuation"},"`")]),e("span",{class:"token punctuation"},";"),n("             "),e("span",{class:"token comment"},"//--选择对象--//"),n(`

`),e("span",{class:"token keyword"},"float"),n(),e("span",{class:"token variable"},"$ObjectsSize"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"size"),e("span",{class:"token punctuation"},"("),e("span",{class:"token variable"},"$ObjectsSelected"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n("    "),e("span",{class:"token comment"},"//判读是否多个对象//"),n(`
`),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token variable"},"$ObjectsSize"),n(),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token function"},"error"),n(),e("span",{class:"token string"},'"如果有多个对象,请把对象打组导出."'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token variable"},"$ObjectsSize"),n(),e("span",{class:"token operator"},"=="),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),n("                           "),e("span",{class:"token comment"},"//等于1就执行导出//"),n(`

`),e("span",{class:"token function"},"SelectHierarchy"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"DeleteHistory"),e("span",{class:"token punctuation"},";"),n("              "),e("span",{class:"token comment"},"//按类型删除: 历史: 删除选定对象上的构建历史"),n(`

`),e("span",{class:"token comment"},"//---------------------------FBX导出窗口调用命令--------------------------//"),n(`
`),e("span",{class:"token variable"},"$tbSaveLocation"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token code italic"},[e("span",{class:"token delimiter punctuation"},"`"),e("span",{class:"token statement"},[e("span",{class:"token function"},"fileDialog2"),n(),e("span",{class:"token flag operator"},"-ff"),n(),e("span",{class:"token string"},'"*.fbx"')]),e("span",{class:"token delimiter punctuation"},"`")]),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|SmoothingGroups "),e("span",{class:"token flag operator"},"-v"),n(" true"),e("span",{class:"token punctuation"},";"),n("        "),e("span",{class:"token comment"},"//true|false;"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|expHardEdges "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`           
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|TangentsandBinormals "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|SmoothMesh "),e("span",{class:"token flag operator"},"-v"),n(" true"),e("span",{class:"token punctuation"},";"),n(`             
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|SelectionSet "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|BlindData "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|AnimationOnly "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`         
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|Instances "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|ContainerObjects "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|IncludeGrp|Geometry|Triangulate "),e("span",{class:"token flag operator"},"-v"),n(" false"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXProperty"),n(" Export|AdvOptGrp|Fbx|AsciiFbx "),e("span",{class:"token flag operator"},"-v"),n(),e("span",{class:"token string"},'"Binary"'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token function"},"FBXExport"),n(),e("span",{class:"token flag operator"},"-f"),n(),e("span",{class:"token variable"},"$tbSaveLocation"),n(),e("span",{class:"token flag operator"},"-s"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token comment"},"//ExportSelection;"),n(`
`),e("span",{class:"token comment"},"//---------------------------导出命令--------------------------//"),n(`

`),e("span",{class:"token function"},"print"),n(),e("span",{class:"token string"},'"成功导出"'),e("span",{class:"token punctuation"},";"),n(`

`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),X=e("p",null," ",-1),F=e("h2",{id:"免费工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#免费工具"},[e("span",null,"免费工具")])],-1),C=e("h3",{id:"来自-klaudio-ladavac-免费工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#来自-klaudio-ladavac-免费工具"},[e("span",null,"- 来自 Klaudio Ladavac 免费工具 -")])],-1),j=e("p",null,"颜色id工具；镜像工具；测量工具；楔角工具；选择相似工具",-1),E={href:"https://klaudio2u.gumroad.com/",target:"_blank",rel:"noopener noreferrer"},P=e("div",{class:"image-preview"},[e("img",{src:"https://sky.megestu.top/i/12024/KlaudioLadavac.png",style:{width:"80% !important"}})],-1),A=e("hr",null,null,-1),O=e("p",null," ",-1),G=e("h3",{id:"ari-uv工具集",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ari-uv工具集"},[e("span",null,"- Ari UV工具集 -")])],-1),B=e("p",null,"UV-工具集",-1),M={href:"http://cgjishu.net/",target:"_blank",rel:"noopener noreferrer"},I=o(`<div class="image-preview"><img src="https://sky.megestu.top/i/12024/Ari.png" style="width:80% !important;"></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>source &quot;Ari/AriUVGriddingOptions.mel&quot;;
AriUVGriddingOptions();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p> </p><h3 id="im3djoe-maya-polygon-lab" tabindex="-1"><a class="header-anchor" href="#im3djoe-maya-polygon-lab"><span>- Im3dJoe - Maya Polygon Lab -</span></a></h3><p>Im3dJoe工作室免费分享的一些超棒工具</p>`,6),W={href:"https://im3djoe.gumroad.com/",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,"部分截图",-1),U=e("div",{class:"image-preview"},[e("img",{src:"https://sky.megestu.top/i/12024/Im3dJoe.png",style:{width:"80% !important"}})],-1),D=e("p",null," ",-1),q=e("hr",null,null,-1),V=e("h3",{id:"来自-adnan-chaumette-免费工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#来自-adnan-chaumette-免费工具"},[e("span",null,"- 来自 Adnan Chaumette 免费工具 -")])],-1),$=e("br",null,null,-1),Z={href:"https://fansub.gumroad.com/",target:"_blank",rel:"noopener noreferrer"},J=e("div",{class:"image-preview"},[e("img",{src:"https://sky.megestu.top/i/12024/20240113015210.png",style:{width:"80% !important"}})],-1),K=e("p",null," ",-1),Y=e("hr",null,null,-1),Q=e("h3",{id:"ig-ezrename-change",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ig-ezrename-change"},[e("span",null,"- ig_EzRename change -")])],-1),ee=e("p",null,[n("作者：igorsilva"),e("br"),n(" 一款开源的maya重命名工具；"),e("br"),n(" 在原有基础上进行了一小部分的改动，更符合个人工作习惯。")],-1),ne=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`#--------------------------------------------------------------------------------#
#             Teste only in maya 2018+
#
#
#             ig_EzRename.py 
#             version 1.2, last modified 26/10/2020
#             Copyright (C) 2020 Igor Silva
#             Email: igorsilva.design@gmail.com
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# See http://www.gnu.org/licenses/gpl.html for a copy of the GNU General 
# Public License.
#version 1.1
#Fixed the tool was not working with objects with the same name
# Fixed Hierarchy mode search and replace
# Fixed All mode search and replace 

#--------------------------------------------------------------------------------#
#                    I N S T A L L A T I O N:
#
# Copy the "ig_EzRename.py" to your Maya scripts directory:
#     MyDocuments\\Maya\\scripts\\
#         use this text as a python script within Maya:
'''
import ig_EzRename
reload(ig_EzRename)
ig_EzRename.UI()
'''
# this text can be entered from the script editor and can be made into a button

import maya.cmds as cmds

def UI():
	
	global SelectName
	global RenameText

	global StartValue
	global PaddingValue
	global NumberCheck

	global RemoveFirst
	global RemoveEnd

	global PrefixText
	global SuffixText

	global SearchText
	global ReplaceText
	global SRCheck
	
	#UI Width
	sizeX = 240
	version = "v1.0"
	if cmds.window("igEzRenameWin", exists=True):
		cmds.deleteUI("igEzRenameWin", window=True)
	
	#Creating UI
	igEzRenamWin = cmds.window("igEzRenameWin", title="ig Easy Rename Tool "+version, width=sizeX+6, height=385, mnb = True, mxb = False, sizeable = False)
	
	#Creating interface elements
	mainLayout = cmds.columnLayout("mainColumnLayout", width = sizeX, adjustableColumn=False, co = ["both",2])

	#Select All Button
	cmds.separator(h=5, style = "none", parent = mainLayout)
	cmds.button(label = "Select All", w=sizeX, h=25, c=SelectAll, ann = "Select ALL objects in scene")
	cmds.separator(h=5, style = "none", parent = mainLayout)

	#Select by Name
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 25), (2, 60)], cs = [(5,5), (5,5)])
	cmds.button(label = "Select by Name", w=sizeX/3, h=25, c=SelectName, align = "Center", ann="Select objects by name")
	SelectName = cmds.textField(w = sizeX*0.646, ann="Select by Name \\n Use * after and/or before the text to select by prefix/suffix \\n Example: *_grp")
	cmds.separator(w = sizeX, h=15, style = "in", parent = mainLayout)
	
	#Rename and Number
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)])
	#Rename Field
	cmds.text(label="  Rename:", font = "boldLabelFont", w = sizeX/4, align="left", ann="Write the name you want to rename the objects selected")
	RenameText = cmds.textField(w = sizeX*0.75, ann="Write the name you want to rename the objects selected")
	
	#Start Field
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)])
	cmds.text(label="  Start:", font = "boldLabelFont", w = sizeX/4, align="left")
	StartValue = cmds.textField(w = sizeX/4, tx="1", ann="Write the Start value for the sequence")
	#Padding Field
	cmds.text(label="  Padding:", font = "boldLabelFont", w = sizeX/4, align="left")
	PaddingValue = cmds.textField(w = sizeX/4, tx="2", ann="Write the Padding value for the numbers")
	#Number Letters
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)])
	cmds.text(label="", font = "boldLabelFont", w = sizeX/4-2, align="left")
	NumberCheck = cmds.radioButtonGrp(labelArray2=[ 'Numbers', 'Letters'], numberOfRadioButtons=2, w=sizeX, h=20, sl=1, cw = ([1,120]))
	#ButtonRename and Number
	cmds.separator(h=5, style = "none", parent = mainLayout)
	cmds.button(label = "Rename and Number", w=sizeX, h=25, c=RenameNumber, align = "Center", parent = mainLayout)
	cmds.separator(w = sizeX, h=15, style = "in", parent = mainLayout)

	#RemoveCharacter
	#Remove First/Last
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 25), (2, 60)], cs = [(5,5)])
	cmds.text(label="  Remove:", font = "boldLabelFont", w = sizeX/3-12, align="left")
	cmds.button(label = "First Char->", w=sizeX/3, h=25, c="ig_EzRename.Remove(True)", align = "Center")
	cmds.button(label = "<-Last Char", w=sizeX/3, h=25, c="ig_EzRename.Remove(False)", align = "Center")
	cmds.separator(h=5, style = "none", parent = mainLayout)

	#Remove pasted__
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 25), (2, 60)], cs = [(90,90)])
	cmds.text(label="  ", font = "boldLabelFont", w = sizeX/3-12, align="left")
	cmds.button(label = "pasted__", w=sizeX/3, h=25, c=RemovePasted, align = "Center")

	#Remove UI
	cmds.separator(h=5, style = "none", parent = mainLayout)
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 25), (2, 60)], cs = [(8.5,8.5)])
	RemoveFirst = cmds.textField(w = sizeX/5, tx="0", ann="Write the amount of characters you want to delete on text beginning")
	cmds.button(label = "-", w=25, h=25, c="ig_EzRename.RemoveChar('begin')", align = "Center", ann="Delete on text beginning")
	cmds.button(label = "Remove", w=sizeX/4, h=25, c="ig_EzRename.RemoveChar('all')", align = "Center", ann="Delete on text beginning and ending")
	cmds.button(label = "-", w=25, h=25, c="ig_EzRename.RemoveChar('end')", align = "Center", ann="Delete on text ending")
	RemoveEnd = cmds.textField(w = sizeX/5, tx="3", ann="Write the amount of characters you want to delete on text ending")
	cmds.separator(w = sizeX, h=15, style = "in", parent = mainLayout)
	
	#Suffix
	#Control Suffix
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)], cs = [(5,5)])
	cmds.text(label="  Prefix:", font = "boldLabelFont", w = sizeX/4-10, align="left", ann="Write the prefix")
	PrefixText = cmds.textField(w = sizeX/2.5+33, tx="prefix_", ann="Write the prefix")
	cmds.button(label = "Add", w=sizeX/4-10, h=25, c="ig_EzRename.PrefixSuffix(False)", align = "Center")
	cmds.separator(h=5, style = "none", parent = mainLayout)
	#Group Suffix
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)], cs = [(5,5)])
	cmds.text(label="  Suffix:", font = "boldLabelFont", w = sizeX/4-10, align="left", ann="Write the suffix")
	SuffixText = cmds.textField(w = sizeX/2.5+33, tx="_suffix", ann="Write the suffix")
	cmds.button(label = "Add", w=sizeX/4-10, h=25, c="ig_EzRename.PrefixSuffix(True)", align = "Center")
	cmds.separator(w = sizeX, h=15, style = "in", parent = mainLayout)



	#Prefix
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)], cs = [(5,5)])
	cmds.text(label="  Prefix:", font = "boldLabelFont", w = sizeX/4-10, align="left", ann="Write the Prefix")
	cmds.button(label = "SM_", w=sizeX/5-4, h=25, c="ig_EzRename.Prefix('SM_')", align = "Center", ann = "Add SM_ suffix") 
	cmds.button(label = "UCX_", w=sizeX/5-4, h=25, c="ig_EzRename.Prefix('UCX_')", align = "Center", ann = "Add UCX_ suffix") 
	cmds.separator(w = sizeX, h=15, style = "in", parent = mainLayout)

	#Suffix
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)], cs = [(5,5)])
	cmds.text(label="  Suffix:", font = "boldLabelFont", w = sizeX/4-10, align="left", ann="Write the Suffix")
	cmds.button(label = "_low", w=sizeX/5-4, h=25, c="ig_EzRename.Suffix('_low')", align = "Center", ann = "Add _low suffix") 
	cmds.button(label = "_high", w=sizeX/5-4, h=25, c="ig_EzRename.Suffix('_high')", align = "Center", ann = "Add _high suffix")
	cmds.button(label = "_backup", w=sizeX/4-4, h=25, c="ig_EzRename.Suffix('_backup')", align = "Center", ann = "Add _backup suffix")
	cmds.separator(w = sizeX, h=15, style = "in", parent = mainLayout)


	#Search and Replace
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)], cs = [(5,5)])
	cmds.text(label="  Search:", font = "boldLabelFont", w = sizeX/4-10, align="left", ann="Write the text to search")
	SearchText = cmds.textField(w = sizeX/2+100, ann="Write the text to search")
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)], cs = [(5,5)])
	cmds.text(label="  Replace:", font = "boldLabelFont", w = sizeX/4-10, align="left", ann="Write the text to replace")
	ReplaceText = cmds.textField(w = sizeX/2+100, ann="Write the text to replace")
	cmds.rowColumnLayout( numberOfRows=1, w=sizeX, parent=mainLayout, rowHeight=[(1, 20), (2, 60)], cs = [(5,5)])
	SRCheck = cmds.radioButtonGrp(labelArray3=[ 'Selected', 'Hierarchy', 'All'], numberOfRadioButtons=3, w=sizeX, h=20, sl=1, cw = ([1,95],[2,95],[3,95]))
	cmds.button(label = "Apply", w=sizeX, h=25, c=SearchReplace, align = "Center", parent = mainLayout)
	cmds.separator(h=5, style = "none", parent = mainLayout)
	
	#Show UI:
	cmds.showWindow(igEzRenamWin)

def SelectAll(*args):
	cmds.select(ado=True, hi = True)
	selection = cmds.ls(selection=True, sn=True)
	selectionAdd = []

	#Old select all code version
	"""for objs in selection:
		children = cmds.listRelatives(objs, c=True, f =True)
		print "Children01:", children
		shapes = cmds.listRelatives(objs, s=True, f = True)
		print "Shapes:", shapes
		
		if not children == None:
			if not shapes == None:
				for s in shapes:
					children.remove(s)
			
			for chi in children:
				
				children2 = cmds.listRelatives(chi, c=True, f = True)
				print "CHildren02:", children2

				if not children2 == None:
					for chi2 in children2:
						children.append(chi2)
				
				selectionAdd.append(chi)

		

	for objs in selectionAdd:
		cmds.select(objs, add=True)"""

def SelectName(*args):
	cmds.select(cl=True)
	name = cmds.textField(SelectName, text = 1, q=True)
	try:
		selection = cmds.ls(name, l = True)
	except:
		cmds.warning("Object Don't Exist")

	for objs in selection:
		cmds.select(objs, add=True)

def RenameNumber(*args):

	number = cmds.textField(StartValue, text = 1, q=True)
	number = int(number)
	
	padding = cmds.textField(PaddingValue, text = 1, q=True)
	padding = int(padding)

	NumberLetters = cmds.radioButtonGrp(NumberCheck, q=True, select=True)
	
	newName = cmds.textField(RenameText, text = 1, q=True)

	selection = cmds.ls(selection=True, sn=True)
	
	lettersList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

	#Number suffix
	y = 0
	
	for obj in selection: 
		try:
			#Teste if has duplicate mesh with the same name on the scene and return the name without parents
			trueName = testDuplicateName(obj)
			#Save the original name
			oldName = trueName

			#If true use numbers, else use letters
			if NumberLetters == 1:
				zeros = ""
				for x in xrange(int(padding)):
					if len(str(number)) <= x:
						zeros = zeros+"0"
				
				#Create the newName and rename
				name = newName+"_"+"{:0>"+str(padding)+"}"
				newNameList = name.format(number)
				cmds.rename(obj, name.format(number))

			else:
				newNameList = newName+"_"+lettersList[y]
				cmds.rename(obj, newName+"_"+lettersList[y])
				if y < len(lettersList)-1:
					y+=1
				else:
					y=0

			#For to rename all the oldNames on list to newNames
			for x in xrange(len(selection)):
				newParentName = selection[x].replace(oldName, newNameList)
				selection[x] = newParentName
		except:
			pass
		
		number = int(number+1)

def RemoveChar(Type):
	
	first = cmds.textField(RemoveFirst, text = 1, q=True)
	end = cmds.textField(RemoveEnd, text = 1, q=True)

	selection = cmds.ls(selection = True, sn=True)

	for objs in selection:
		#Teste if has duplicate mesh with the same name on the scene
		trueName = testDuplicateName(objs)

		#Save the original name
		oldName = trueName

		if Type == "all":
			name = trueName[:-int(end)]
			name = name[int(first):]

		if Type == "begin":
			name = trueName[int(first):]

		if Type == "end":
			name = trueName[:-int(end)]
		
		try:
			cmds.rename(objs, str(name))
		except:
			pass

		#For to rename all the oldNames on list to newNames
		for x in xrange(len(selection)):
			newParentName = selection[x].replace(oldName, name)
			selection[x] = newParentName
	

def Remove(Type):
	
	selection = cmds.ls(selection = True, sn = True)

	for objs in selection:
		#Teste if has duplicate mesh with the same name on the scene
		trueName = testDuplicateName(objs)

		#Save the original name
		oldName = trueName

		if Type:
			name = trueName[1:]
		else:
			name = trueName[:-1]

		try:
			cmds.rename(objs, name)
		except:
			pass

		#For to rename all the oldNames on list to newNames
		for x in xrange(len(selection)):
			newParentName = selection[x].replace(oldName, name)
			selection[x] = newParentName



def RemovePasted(*args):
	
	selection = cmds.ls("pasted__*", sn = True)
	
	for objs in selection:
		#Teste if has duplicate mesh with the same name on the scene
		trueName = testDuplicateName(objs)

		name = trueName[8:]
		try:
			cmds.rename(objs, name)
		except:
			cmds.warning("Don't Exist pasted Objects")

def PrefixSuffix(Suffix):
	prefix = cmds.textField(PrefixText, text = 1, q=True)
	suffix = cmds.textField(SuffixText, text = 1, q=True)

	selection = cmds.ls(selection = True, sn = True)

	for objs in selection:

		#Teste if has duplicate mesh with the same name on the scene
		trueName = testDuplicateName(objs)
		#Save the original name
		oldName = trueName
		
		if Suffix:
			name = str(trueName)+suffix
		else:
			name = prefix+str(trueName)

		try:
			cmds.rename(objs, name)
		except:
			pass
		
		#For to rename all the oldNames on list to newNames
		for x in xrange(len(selection)):
			newParentName = selection[x].replace(oldName, name)
			selection[x] = newParentName
		

def Suffix(Text):
	
	selection = cmds.ls(selection = True, sn = True)
	
	for objs in selection:
		#Teste if has duplicate mesh with the same name on the scene
		trueName = testDuplicateName(objs)

		#Save the original name
		oldName = trueName

		newName = trueName+Text
		try:
			cmds.rename(objs, newName)
		except:
			pass

		#For to rename all the oldNames on list to newNames
		for x in xrange(len(selection)):
			newParentName = selection[x].replace(oldName, newName)
			selection[x] = newParentName

def SearchReplace(*args):
	
	search = cmds.textField(SearchText, text = 1, q=True)
	replace = cmds.textField(ReplaceText, text = 1, q=True)

	SRMethod = cmds.radioButtonGrp(SRCheck, q=True, select=True)
	
	#Selected search and Replace method
	if SRMethod == 1:
		selection = cmds.ls(selection = True, sn = True)

	#Hierarchy search and Replace method
	if SRMethod == 2:
		cmds.select(hi = True)
		selection = cmds.ls(selection = True, sn = False)
		
	#All search and Replace method
	if SRMethod == 3:
		#Select All DagObjects in scene
		selection = []
		cmds.select(ado = True, hi = True)
		selection = cmds.ls(selection = True, sn=False)

	#for to rename the objects 
	for obj in selection:
		#Teste if has duplicate mesh with the same name on the scene and return the name without parents
		trueName = testDuplicateName(obj)
		#Save the original name
		oldName = trueName
		#Search and replace to create the new name
		newName = trueName.replace(search, replace)
		
		#Rename the object
		try:
			cmds.rename(obj, newName)
		except:
			pass
	
		#For to rename all the oldNames on list to newNames
		for x in xrange(len(selection)):
			newParentName = selection[x].replace(oldName, newName)
			selection[x] = newParentName

		print "Slecao: ", selection

		
	
def testDuplicateName(Obj):

	try:
		trueName =  Obj.split("|")
		return trueName[len(trueName)-1]
	except:
		return Obj

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),se=o('<p> </p><p> </p><h2 id="收费不错的工具" tabindex="-1"><a class="header-anchor" href="#收费不错的工具"><span>收费不错的工具</span></a></h2><p> </p><h3 id="ninjin-normals-可爱风顶点法线编辑工具" tabindex="-1"><a class="header-anchor" href="#ninjin-normals-可爱风顶点法线编辑工具"><span><em><strong>Ninjin Normals</strong></em> | 可爱风顶点法线编辑工具</span></a></h3><p>只支持 maya2023及以上 python3制作<br> 自带预览shader，可查看卡通阴影和风格化渲染</p>',6),te={href:"https://ninjinstudios.gumroad.com/l/ninjinnormals",target:"_blank",rel:"noopener noreferrer"},ae=e("div",{class:"image-preview"},[e("img",{src:"https://sky.megestu.top/i/12024/65e0a634bb5bb.png",style:{width:"80% !important"}})],-1);function le(ie,re){const i=c("CodeTabs"),r=c("ExternalLinkIcon"),m=c("Badge");return u(),b("div",null,[h,v(" more "),f,g,k,s(i,{id:"13",data:[{id:"python"}],"tab-id":"shell"},{title0:t(({value:a,isActive:l})=>[n("python")]),tab0:t(({value:a,isActive:l})=>[x]),_:1}),y,w,s(i,{id:"24",data:[{id:"mel"}],"tab-id":"shell"},{title0:t(({value:a,isActive:l})=>[n("mel")]),tab0:t(({value:a,isActive:l})=>[_]),_:1}),N,T,s(i,{id:"35",data:[{id:"mel"}],"tab-id":"shell"},{title0:t(({value:a,isActive:l})=>[n("mel")]),tab0:t(({value:a,isActive:l})=>[z]),_:1}),R,S,s(i,{id:"46",data:[{id:"mel"}],"tab-id":"shell"},{title0:t(({value:a,isActive:l})=>[n("mel")]),tab0:t(({value:a,isActive:l})=>[L]),_:1}),X,F,C,j,e("p",null,[e("a",E,[n("下载地址 "),s(r)])]),P,A,O,G,B,e("p",null,[n("地址： "),e("a",M,[n("cgjishu.net"),s(r)])]),I,e("p",null,[e("a",W,[n("下载地址"),s(r)])]),H,U,D,q,V,e("p",null,[n("每一项都很好用-还有使用说明"),$,e("a",Z,[n("下载地址"),s(r)])]),J,K,Y,Q,ee,e("details",null,[e("summary",null,[s(m,{text:"Code-view",color:"#e0dd8b"})]),s(i,{id:"121",data:[{id:"ig_EzRename"}],"tab-id":"shell"},{title0:t(({value:a,isActive:l})=>[n("ig_EzRename")]),tab0:t(({value:a,isActive:l})=>[ne]),_:1})]),se,e("p",null,[e("a",te,[n("下载地址"),s(r)])]),ae])}const me=d(p,[["render",le],["__file","MayaNotes.html.vue"]]),de=JSON.parse('{"path":"/posts/maya/MayaNotes.html","title":"MayaNotes","lang":"zh-CN","frontmatter":{"title":"MayaNotes","icon":"iconfont alicon-maya1","category":["Maya"],"tag":["Maya","tips"],"date":"2023-12-23T00:00:00.000Z","description":"记录一些基础的maya日常笔记 一些常用小代码 硬边选择 功能描述：按角度获取硬边 提取曲线 功能描述：从边提取曲线 polyEdgeToCurves 世界中心枢轴 功能描述：世界中心枢轴: 选择对象 固定FBX参数导出 功能描述：统一团队导出格式 免费工具 - 来自 Klaudio Ladavac 免费工具 - 颜色id工具；镜像工具；测量工具；楔角...","head":[["meta",{"property":"og:url","content":"https://megestus.top/blog/posts/maya/MayaNotes.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"MayaNotes"}],["meta",{"property":"og:description","content":"记录一些基础的maya日常笔记 一些常用小代码 硬边选择 功能描述：按角度获取硬边 提取曲线 功能描述：从边提取曲线 polyEdgeToCurves 世界中心枢轴 功能描述：世界中心枢轴: 选择对象 固定FBX参数导出 功能描述：统一团队导出格式 免费工具 - 来自 Klaudio Ladavac 免费工具 - 颜色id工具；镜像工具；测量工具；楔角..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T14:30:16.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Maya"}],["meta",{"property":"article:tag","content":"tips"}],["meta",{"property":"article:published_time","content":"2023-12-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-23T14:30:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MayaNotes\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-23T14:30:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"一些常用小代码","slug":"一些常用小代码","link":"#一些常用小代码","children":[{"level":3,"title":"硬边选择","slug":"硬边选择","link":"#硬边选择","children":[]},{"level":3,"title":"提取曲线","slug":"提取曲线","link":"#提取曲线","children":[]},{"level":3,"title":"世界中心枢轴","slug":"世界中心枢轴","link":"#世界中心枢轴","children":[]},{"level":3,"title":"固定FBX参数导出","slug":"固定fbx参数导出","link":"#固定fbx参数导出","children":[]}]},{"level":2,"title":"免费工具","slug":"免费工具","link":"#免费工具","children":[{"level":3,"title":"- 来自 Klaudio Ladavac 免费工具 -","slug":"来自-klaudio-ladavac-免费工具","link":"#来自-klaudio-ladavac-免费工具","children":[]},{"level":3,"title":"- Ari UV工具集 -","slug":"ari-uv工具集","link":"#ari-uv工具集","children":[]},{"level":3,"title":"- Im3dJoe - Maya Polygon Lab -","slug":"im3djoe-maya-polygon-lab","link":"#im3djoe-maya-polygon-lab","children":[]},{"level":3,"title":"- 来自 Adnan Chaumette 免费工具 -","slug":"来自-adnan-chaumette-免费工具","link":"#来自-adnan-chaumette-免费工具","children":[]},{"level":3,"title":"- ig_EzRename change -","slug":"ig-ezrename-change","link":"#ig-ezrename-change","children":[]}]},{"level":2,"title":"收费不错的工具","slug":"收费不错的工具","link":"#收费不错的工具","children":[{"level":3,"title":"Ninjin Normals | 可爱风顶点法线编辑工具","slug":"ninjin-normals-可爱风顶点法线编辑工具","link":"#ninjin-normals-可爱风顶点法线编辑工具","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1711204216000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"posts/maya/MayaNotes.md","localizedDate":"2023年12月23日","excerpt":"<p>记录一些基础的maya日常笔记</p>\\n","autoDesc":true}');export{me as comp,de as data};
