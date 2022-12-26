"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4646],{57977:function(d,g,r){r.r(g);var H=r(5574),t=r.n(H),S=r(67294),b=r(54124),x=r(5042),T=r(4650),i=r(13669),y=r(28257),B=r(74855),M=r.n(B),z=r(57132),v=r(2559),o=r(96923);function N(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var D={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",reset:"\u91CD\u7F6E",export:"\u5BFC\u51FA",exportDesc:"\u5C06\u4E0B\u9762\u7684 JSON \u5BF9\u8C61\u590D\u5236\u5230 ConfigProvider \u7684 theme \u5C5E\u6027\u4E2D\u5373\u53EF\u3002",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F"},en:{title:"Theme Editor",save:"Save",reset:"Reset",export:"Export",exportDesc:"Copy the following JSON object to the theme prop of ConfigProvider.",saveSuccessfully:"Saved successfully"}},L={name:"zbl8st",styles:"display:flex;height:56px;align-items:center;padding:0 24px;justify-content:space-between;border-bottom:1px solid #F0F0F0"},I=function(){return{header:L}},m="ant-design-v5-theme-editor-theme",X=function(){var P=i.message.useMessage(),s=t()(P,2),a=s[0],W=s[1],G=i.Modal.useModal(),u=t()(G,2),C=u[0],O=u[1],R=(0,v.Z)(D),p=t()(R,2),e=p[0],w=p[1],_=S.useState({}),h=t()(_,2),l=h[0],c=h[1];(0,S.useEffect)(function(){var n=localStorage.getItem(m);n&&c(function(){return JSON.parse(n)})},[]);var F=I(),A=function(){localStorage.setItem(m,JSON.stringify(l)),a.success(e.saveSuccessfully)},k=function(f,U){U?a.success("Copy theme config successfully!"):a.error("Copy failed, please try again.")},Z=function(){C.info({title:e.export,width:600,content:(0,o.tZ)("div",null,(0,o.tZ)("div",{style:{color:"rgba(0,0,0,0.65)"}},e.exportDesc),(0,o.tZ)("pre",{style:{padding:12,background:"#f5f5f5",borderRadius:4,marginTop:12,position:"relative"}},(0,o.tZ)(M(),{text:JSON.stringify(l,null,2),onCopy:k},(0,o.tZ)(i.Button,{type:"text",icon:(0,o.tZ)(z.Z,null),style:{position:"absolute",right:8,top:8}})),JSON.stringify(l,null,2)))})},Q=function(){c({})};return(0,o.tZ)("div",null,(0,o.tZ)(y.ql,null,(0,o.tZ)("title",null,"".concat(e.title," - Ant Design")),(0,o.tZ)("meta",{property:"og:title",content:"".concat(e.title," - Ant Design")})),W,O,(0,o.tZ)(i.ConfigProvider,{theme:{inherit:!1}},(0,o.tZ)("div",{css:F.header},(0,o.tZ)(i.Typography.Title,{level:5,style:{margin:0}},e.title),(0,o.tZ)("div",null,(0,o.tZ)(i.Button,{onClick:Z,style:{marginRight:8}},e.export),(0,o.tZ)(i.Button,{onClick:Q,style:{marginRight:8}},e.reset),(0,o.tZ)(i.Button,{type:"primary",onClick:A},e.save))),(0,o.tZ)(b.Z,{theme:{name:"Custom Theme",key:"test",config:l},style:{height:"calc(100vh - 64px - 56px)"},onThemeChange:function(f){c(f.config)},locale:w==="cn"?x.Z:T.Z})))};g.default=X},27056:function(d){d.exports=JSON.parse('{"Affix":{"global":["zIndexBase"],"component":{}},"Alert":{"global":["fontSizeHeading3","motionDurationSlow","marginXS","marginSM","fontSize","fontSizeLG","lineHeight","borderRadiusLG","motionEaseInOutCirc","colorText","paddingContentVerticalSM","paddingMD","paddingContentHorizontalLG","fontFamily","colorSuccess","colorSuccessBorder","colorSuccessBg","colorWarning","colorWarningBorder","colorWarningBg","colorError","colorErrorBorder","colorErrorBg","colorInfo","colorInfoBorder","colorInfoBg","lineWidth","lineType","motionDurationMid","fontSizeIcon","colorIcon","colorIconHover"],"component":{}},"Anchor":{"global":["fontSize","fontSizeLG","padding","paddingXXS","motionDurationSlow","lineWidthBold","colorPrimary","colorText","lineHeight","fontFamily","colorSplit"],"component":{}},"App":{"global":["colorText","fontSize","lineHeight","fontFamily"],"component":{}},"Avatar":{"global":["colorTextLightSolid","controlHeight","controlHeightLG","controlHeightSM","fontSize","fontSizeLG","fontSizeXL","fontSizeHeading3","marginXS","colorBorderBg","colorTextPlaceholder","borderRadius","borderRadiusLG","borderRadiusSM","lineWidth","lineType","colorText","lineHeight","fontFamily"],"component":{}},"BackTop":{"global":["zIndexBase","fontSizeHeading3","colorTextDescription","colorTextLightSolid","colorText","controlHeightLG","fontSize","lineHeight","fontFamily","motionDurationMid","screenMD","screenXS"],"component":{"zIndexPopup":10}},"Badge":{"global":["fontSize","lineHeight","fontSizeSM","lineWidth","marginXS","colorBorderBg","colorBgContainer","colorError","colorErrorHover","motionDurationSlow","blue-6","purple-6","cyan-6","green-6","magenta-6","pink-6","red-6","orange-6","yellow-6","volcano-6","geekblue-6","lime-6","gold-6","colorText","fontFamily","motionDurationMid","paddingXS","colorSuccess","colorPrimary","colorTextPlaceholder","colorWarning","motionEaseOutBack","borderRadiusSM","colorTextLightSolid"],"component":{}},"Breadcrumb":{"global":["colorTextDescription","fontSize","colorText","marginXS","lineHeight","fontFamily","motionDurationMid","paddingXXS","borderRadiusSM","marginXXS","colorBgTextHover","lineWidth","colorPrimaryBorder","fontSizeIcon"],"component":{}},"Button":{"global":["controlTmpOutline","paddingContentHorizontal","lineWidth","lineType","motionDurationMid","motionEaseInOut","lineHeight","colorText","marginXS","colorPrimaryBorder","colorPrimaryHover","controlHeightSM","paddingXS","borderRadiusSM","fontSize","opacityLoading","motionDurationSlow","controlHeight","borderRadius","controlHeightLG","fontSizeLG","borderRadiusLG","colorBorder","colorTextDisabled","colorBgContainerDisabled","colorBgContainer","controlOutlineWidth","colorPrimaryActive","colorError","colorErrorHover","colorErrorBorderHover","colorErrorActive","colorTextLightSolid","colorPrimary","controlOutline","colorErrorOutline","colorLink","colorLinkHover","colorLinkActive","colorBgTextHover","colorBgTextActive","colorErrorBg"],"component":{}},"Calendar":{"global":["paddingXXS","controlHeight","fontSize","lineHeight","lineWidth","controlHeightLG","fontSizeLG","lineHeightLG","controlHeightSM","paddingSM","paddingXS","controlPaddingHorizontal","colorPrimaryHover","colorPrimary","colorBgContainer","controlItemBgActive","fontSizeSM","lineHeightSM","marginXS","lineType","borderRadiusLG","colorTextHeading","colorSplit","colorIcon","motionDurationMid","colorIconHover","fontWeightStrong","colorTextDisabled","colorText","motionDurationSlow","colorLink","colorLinkActive","colorLinkHover","borderRadiusSM","colorTextLightSolid","borderRadius","controlItemBgHover","marginXXS","colorBgContainerDisabled","fontFamily","lineWidthBold","screenXS"],"component":{"yearControlWidth":80,"monthControlWidth":70,"miniContentHeight":256}},"Card":{"global":["boxShadowCard","fontSizeLG","lineHeightLG","padding","fontSize","lineHeight","paddingXS","paddingLG","lineWidth","paddingSM","colorBorderSecondary","boxShadow","colorText","fontFamily","colorBgContainer","borderRadiusLG","colorTextHeading","fontWeightStrong","lineType","motionDurationMid","colorTextDescription","colorPrimary","marginXXS","marginXS","colorFillAlter"],"component":{}},"Carousel":{"global":["controlHeightLG","controlHeightSM","marginXXS","colorText","fontSize","lineHeight","fontFamily","motionDurationSlow","colorBgContainer"],"component":{"dotWidth":16,"dotHeight":3,"dotWidthActive":24}},"Cascader":{"global":["controlHeight","fontSize","lineHeight","controlInteractiveSize","colorText","fontFamily","marginXS","lineWidth","colorPrimaryBorder","colorBgContainer","lineType","colorBorder","borderRadiusSM","motionDurationSlow","lineWidthBold","colorWhite","motionDurationFast","motionEaseInBack","paddingXS","fontSizeLG","colorPrimary","colorPrimaryHover","motionDurationMid","motionEaseOutBack","colorBgContainerDisabled","colorTextDisabled","paddingXXS","colorSplit","paddingSM","controlItemBgHover","fontWeightStrong","controlItemBgActive","colorTextDescription","fontSizeIcon","colorHighlight"],"component":{"controlWidth":184,"controlItemWidth":111,"dropdownHeight":180}},"Checkbox":{"global":["controlInteractiveSize","colorText","fontSize","lineHeight","fontFamily","marginXS","lineWidth","colorPrimaryBorder","colorBgContainer","lineType","colorBorder","borderRadiusSM","motionDurationSlow","lineWidthBold","colorWhite","motionDurationFast","motionEaseInBack","paddingXS","fontSizeLG","colorPrimary","colorPrimaryHover","motionDurationMid","motionEaseOutBack","colorBgContainerDisabled","colorTextDisabled"],"component":{}},"Collapse":{"global":["colorBgContainer","colorFillAlter","paddingSM","padding","borderRadiusLG","lineWidth","lineType","colorBorder","colorText","colorTextHeading","colorTextDisabled","fontSize","lineHeight","marginSM","motionDurationSlow","fontSizeIcon","fontFamily","paddingXXS","motionDurationMid","motionEaseInOut"],"component":{}},"DatePicker":{"global":["zIndexPopupBase","paddingXXS","controlHeight","fontSize","lineHeight","lineWidth","controlHeightLG","fontSizeLG","lineHeightLG","controlHeightSM","paddingSM","paddingXS","controlPaddingHorizontal","colorPrimaryHover","colorPrimary","boxShadowPopoverArrow","colorBgContainer","lineType","colorBorder","borderRadius","motionDurationMid","colorBgContainerDisabled","colorTextDisabled","colorTextPlaceholder","marginXS","colorTextDescription","lineWidthBold","motionDurationSlow","controlItemBgActive","colorPrimaryBorder","sizePopupArrow","borderRadiusXS","borderRadiusOuter","colorBgElevated","borderRadiusLG","boxShadowSecondary","borderRadiusSM","colorSplit","controlItemBgHover","colorText","fontFamily","controlOutlineWidth","controlOutline","controlPaddingHorizontalSM","colorTextHeading","colorIcon","colorIconHover","fontWeightStrong","colorLink","colorLinkActive","colorLinkHover","colorTextLightSolid","marginXXS","motionEaseOutQuint","motionEaseInQuint","motionEaseOutCirc","motionEaseInOutCirc","colorError","colorErrorOutline","colorWarning","colorWarningOutline"],"component":{"presetsWidth":120,"presetsMaxWidth":200,"zIndexPopup":1050}},"Descriptions":{"global":["colorFillAlter","fontSizeSM","lineHeightSM","colorText","paddingXS","padding","paddingLG","paddingSM","marginXS","marginXXS","fontSize","lineHeight","fontFamily","lineWidth","lineType","colorSplit","fontWeightStrong","fontSizeLG","lineHeightLG","borderRadiusLG"],"component":{}},"Divider":{"global":["marginXS","margin","marginLG","colorSplit","lineWidth","colorText","fontSize","lineHeight","fontFamily","colorTextHeading","fontSizeLG"],"component":{"sizePaddingEdgeHorizontal":0}},"Drawer":{"global":["zIndexPopupBase","paddingXS","padding","colorBgMask","colorBgElevated","motionDurationSlow","motionDurationMid","paddingLG","fontSizeLG","lineHeightLG","lineWidth","lineType","colorSplit","marginSM","colorIcon","colorIconHover","colorText","fontWeightStrong","boxShadowDrawerLeft","boxShadowDrawerRight","boxShadowDrawerUp","boxShadowDrawerDown"],"component":{"zIndexPopup":1000}},"Dropdown":{"global":["zIndexPopupBase","marginXXS","sizePopupArrow","controlHeight","fontSize","lineHeight","paddingXXS","borderRadiusOuter","borderRadiusLG","motionDurationMid","borderRadius","colorTextDisabled","fontSizeIcon","controlPaddingHorizontal","colorBgElevated","boxShadowPopoverArrow","colorText","fontFamily","borderRadiusXS","boxShadowSecondary","lineWidth","colorPrimaryBorder","colorTextDescription","borderRadiusSM","marginXS","fontSizeSM","controlItemBgHover","colorPrimary","controlItemBgActive","controlItemBgActiveHover","colorSplit","paddingXS","motionEaseOutQuint","motionEaseInQuint","motionEaseOutCirc","motionEaseInOutCirc","opacityLoading","colorError","colorTextLightSolid"],"component":{"zIndexPopup":1050}},"Empty":{"global":["controlHeightLG","margin","marginXS","marginXL","fontSize","lineHeight","opacityImage","colorTextDisabled"],"component":{}},"FloatButton":{"global":["colorTextLightSolid","colorBgElevated","controlHeightLG","marginXXL","marginLG","fontSize","fontSizeIcon","controlItemBgHover","margin","borderRadiusLG","colorText","lineHeight","fontFamily","lineWidth","lineType","colorSplit","boxShadowSecondary","paddingXXS","motionDurationMid","borderRadiusSM","colorFillContent","fontSizeLG","fontSizeSM","colorPrimary","colorPrimaryHover","motionDurationSlow","motionEaseInOutCirc"],"component":{}},"Form":{"global":["colorText","fontSize","lineHeight","fontFamily","marginLG","colorTextDescription","fontSizeLG","lineWidth","lineType","colorBorder","controlOutlineWidth","controlOutline","paddingSM","controlHeightSM","controlHeightLG","colorError","colorWarning","controlHeight","colorTextHeading","marginXXS","marginXS","motionDurationMid","motionEaseOut","motionEaseOutBack","colorSuccess","colorPrimary","motionDurationSlow","motionEaseInOut","margin","paddingXS","screenXSMax","screenSMMax","screenMDMax","screenLGMax"],"component":{}},"Grid":{"global":[],"component":{}},"Image":{"global":["zIndexPopupBase","colorTextLightSolid","fontSizeIcon","controlHeightLG","colorBgContainerDisabled","motionDurationSlow","paddingXXS","marginXXS","motionEaseOut","paddingSM","colorText","fontSize","lineHeight","fontFamily","marginSM","colorBgMask","motionDurationMid","motionEaseOutCirc","motionEaseInOutCirc"],"component":{"zIndexPopup":1080}},"InputNumber":{"global":["controlHeightSM","lineWidth","fontSize","paddingXXS","controlHeight","lineHeight","controlHeightLG","fontSizeLG","lineHeightLG","paddingSM","paddingXS","controlPaddingHorizontal","colorPrimaryHover","lineType","colorBorder","borderRadius","colorError","colorTextDescription","motionDurationMid","colorPrimary","colorBgContainer","colorTextDisabled","borderRadiusSM","borderRadiusLG","colorText","fontFamily","colorTextPlaceholder","controlOutlineWidth","controlOutline","colorBgContainerDisabled","motionDurationSlow","controlPaddingHorizontalSM","colorWarning","colorErrorOutline","colorWarningOutline","colorErrorBorderHover","colorWarningBorderHover","colorFillAlter"],"component":{"controlWidth":90,"handleWidth":22,"handleFontSize":7,"handleVisible":"auto"}},"Input":{"global":["paddingXXS","controlHeight","fontSize","lineHeight","lineWidth","controlHeightLG","fontSizeLG","lineHeightLG","controlHeightSM","paddingSM","paddingXS","controlPaddingHorizontal","colorPrimaryHover","colorText","fontFamily","colorBgContainer","lineType","colorBorder","borderRadius","motionDurationMid","colorTextPlaceholder","controlOutlineWidth","controlOutline","colorTextDisabled","colorBgContainerDisabled","motionDurationSlow","borderRadiusLG","controlPaddingHorizontalSM","borderRadiusSM","colorError","colorWarning","colorErrorOutline","colorWarningOutline","colorErrorBorderHover","colorWarningBorderHover","paddingLG","colorTextDescription","colorIcon","colorIconHover","colorTextQuaternary","fontSizeIcon","colorTextTertiary","colorSuccess","colorFillAlter","colorPrimary","colorPrimaryActive"],"component":{}},"Layout":{"global":["colorBgLayout","colorText","controlHeightSM","controlHeight","controlHeightLG","marginXXS","colorTextLightSolid","motionDurationMid","motionDurationSlow","fontSize","borderRadius","fontSizeXL","colorBgContainer"],"component":{"colorBgHeader":"#001529","colorBgBody":"#f5f5f5","colorBgTrigger":"#002140"}},"List":{"global":["controlHeightLG","paddingContentVertical","paddingContentHorizontalLG","paddingContentVerticalSM","paddingContentHorizontal","paddingContentVerticalLG","controlHeight","paddingSM","marginLG","padding","colorPrimary","paddingXS","margin","colorText","colorTextDescription","motionDurationSlow","lineWidth","fontSize","lineHeight","fontFamily","marginXXS","marginXXL","colorSplit","fontSizeSM","colorTextDisabled","fontSizeLG","lineHeightLG","lineType","paddingLG","borderRadiusLG","colorBorder","screenSM","screenMD","marginSM"],"component":{"contentWidth":220}},"Mentions":{"global":["zIndexPopupBase","paddingXXS","controlHeight","fontSize","lineHeight","lineWidth","controlHeightLG","fontSizeLG","lineHeightLG","controlHeightSM","paddingSM","paddingXS","controlPaddingHorizontal","colorPrimaryHover","colorTextDisabled","controlItemBgHover","colorText","motionDurationSlow","colorBgElevated","borderRadiusLG","boxShadowSecondary","fontFamily","colorBgContainer","lineType","colorBorder","borderRadius","motionDurationMid","colorTextPlaceholder","controlOutlineWidth","controlOutline","colorBgContainerDisabled","controlPaddingHorizontalSM","borderRadiusSM","colorError","colorWarning","colorErrorOutline","colorWarningOutline","colorErrorBorderHover","colorWarningBorderHover","fontWeightStrong"],"component":{"dropdownHeight":250,"controlItemWidth":100,"zIndexPopup":1050}},"Menu":{"global":["colorPrimary","colorError","colorTextDisabled","colorErrorBg","colorText","colorTextDescription","colorBgContainer","colorFillAlter","colorFillContent","lineWidth","lineWidthBold","controlItemBgActive","colorBgTextHover","zIndexPopupBase","borderRadiusLG","borderRadiusSM","marginXXS","colorBgElevated","colorErrorHover","colorTextLightSolid","colorTextSecondary","controlHeightLG","fontSize","margin","motionDurationSlow","motionDurationMid","motionEaseInOut","lineHeight","paddingXS","padding","colorSplit","lineType","fontFamily","motionEaseOut","controlHeightSM","borderRadius","paddingXL","fontSizeSM","fontSizeLG","boxShadowSecondary","marginXS","colorPrimaryBorder","motionEaseOutQuint","motionEaseInQuint","motionEaseOutCirc","motionEaseInOutCirc"],"component":{"dropdownWidth":160,"zIndexPopup":1050,"radiusItem":8,"radiusSubMenuItem":4,"colorItemText":"rgba(0, 0, 0, 0.88)","colorItemTextHover":"rgba(0, 0, 0, 0.88)","colorItemTextHoverHorizontal":"#1677ff","colorGroupTitle":"rgba(0, 0, 0, 0.45)","colorItemTextSelected":"#1677ff","colorItemTextSelectedHorizontal":"#1677ff","colorItemBg":"#ffffff","colorItemBgHover":"rgba(0, 0, 0, 0.06)","colorItemBgActive":"rgba(0, 0, 0, 0.06)","colorSubItemBg":"rgba(0, 0, 0, 0.02)","colorItemBgSelected":"#e6f4ff","colorItemBgSelectedHorizontal":"transparent","colorActiveBarWidth":0,"colorActiveBarHeight":2,"colorActiveBarBorderSize":1,"colorItemTextDisabled":"rgba(0, 0, 0, 0.25)","colorDangerItemText":"#ff4d4f","colorDangerItemTextHover":"#ff4d4f","colorDangerItemTextSelected":"#ff4d4f","colorDangerItemBgActive":"#fff2f0","colorDangerItemBgSelected":"#fff2f0","itemMarginInline":4}},"Message":{"global":["zIndexPopupBase","controlHeightLG","fontSize","lineHeight","paddingSM","boxShadowSecondary","colorBgElevated","colorSuccess","colorError","colorWarning","colorInfo","fontSizeLG","motionEaseInOutCirc","motionDurationSlow","marginXS","paddingXS","borderRadiusLG","colorText","fontFamily"],"component":{"height":150,"zIndexPopup":1010}},"Modal":{"global":["padding","fontSizeHeading5","lineHeightHeading5","paddingLG","colorBgElevated","lineWidth","lineType","colorSplit","colorTextHeading","colorTextDescription","paddingXS","fontSizeLG","colorIconHover","fontSize","lineHeight","controlHeightLG","zIndexPopupBase","screenSMMax","marginXS","colorText","fontFamily","margin","fontWeightStrong","borderRadiusLG","boxShadowSecondary","paddingMD","paddingContentHorizontalLG","borderRadiusSM","motionDurationMid","wireframe","colorPrimaryBorder","marginSM","colorError","colorWarning","colorInfo","colorSuccess","motionDurationSlow","colorBgMask","marginLG","motionEaseOutCirc","motionEaseInOutCirc"],"component":{}},"Notification":{"global":["zIndexPopupBase","paddingMD","paddingLG","colorBgElevated","paddingContentHorizontalLG","margin","marginLG","fontSizeLG","lineHeightLG","controlHeightLG","boxShadowSecondary","borderRadiusLG","colorSuccess","colorInfo","colorWarning","colorError","colorTextHeading","motionDurationMid","motionEaseInOut","fontSize","lineHeight","colorText","fontFamily","marginXS","marginSM","colorIcon","borderRadiusSM","colorIconHover","wireframe"],"component":{"zIndexPopup":1050,"width":384}},"Pagination":{"global":["controlHeight","fontFamily","colorBgContainer","fontWeightStrong","controlHeightSM","controlItemBgActiveDisabled","colorTextDisabled","marginXXS","controlHeightLG","marginSM","paddingXXS","fontSize","lineHeight","lineWidth","fontSizeLG","lineHeightLG","paddingSM","paddingXS","controlPaddingHorizontal","colorPrimaryHover","colorText","marginXS","lineType","borderRadius","motionDurationMid","colorBgTextHover","colorBgTextActive","colorPrimaryBorder","colorPrimary","fontSizeSM","margin","colorBorder","colorTextPlaceholder","controlOutlineWidth","controlOutline","colorBgContainerDisabled","motionDurationSlow","borderRadiusLG","controlPaddingHorizontalSM","borderRadiusSM","screenLG","screenSM","wireframe"],"component":{}},"Popconfirm":{"global":["zIndexPopupBase","colorText","colorWarning","marginXS","fontSize","fontWeightStrong","lineHeight"],"component":{"zIndexPopup":1060}},"Popover":{"global":["zIndexPopupBase","colorBgElevated","colorText","wireframe","fontWeightStrong","boxShadowSecondary","colorTextHeading","borderRadiusLG","marginXS","fontSize","lineHeight","fontFamily","sizePopupArrow","marginXXS","borderRadiusXS","borderRadiusOuter","boxShadowPopoverArrow","blue-6","purple-6","cyan-6","green-6","magenta-6","pink-6","red-6","orange-6","yellow-6","volcano-6","geekblue-6","lime-6","gold-6","lineWidth","lineType","colorSplit","paddingSM","controlHeight","padding","motionDurationMid","motionEaseOutCirc","motionEaseInOutCirc"],"component":{"zIndexPopup":1030,"width":177}},"Progress":{"global":["marginXXS","colorText","colorInfo","colorFillSecondary","fontSize","lineHeight","fontFamily","marginXS","paddingXS","motionDurationSlow","motionEaseInOutCirc","colorSuccess","colorBgContainer","motionEaseOutQuint","colorError","fontSizeSM"],"component":{}},"Radio":{"global":["padding","lineWidth","controlItemBgActiveDisabled","colorTextDisabled","colorBgContainer","fontSizeLG","controlOutline","colorPrimaryHover","colorPrimaryActive","colorText","colorPrimary","marginXS","controlOutlineWidth","colorTextLightSolid","wireframe","fontSize","lineHeight","fontFamily","motionDurationSlow","motionDurationMid","motionEaseInOut","motionEaseInOutCirc","colorBorder","colorBgContainerDisabled","paddingXS","lineType","colorWhite","colorPrimaryBorder","controlHeight","controlHeightLG","controlHeightSM","borderRadius","borderRadiusSM","borderRadiusLG"],"component":{}},"Rate":{"global":["colorFillContent","yellow-6","controlHeightLG","colorText","fontSize","lineHeight","fontFamily","marginXS","motionDurationMid","lineWidth"],"component":{}},"Result":{"global":["paddingLG","fontSizeHeading3","fontSize","colorInfo","colorError","colorSuccess","colorWarning","lineHeightHeading3","padding","paddingXL","paddingXS","marginXS","lineHeight","colorTextHeading","colorTextDescription","colorFillAlter"],"component":{"imageWidth":250,"imageHeight":295}},"Segmented":{"global":["lineWidthBold","lineWidth","colorTextLabel","colorText","colorFillSecondary","colorBgLayout","colorBgElevated","controlPaddingHorizontal","controlPaddingHorizontalSM","fontSize","lineHeight","fontFamily","borderRadius","motionDurationMid","motionEaseInOut","borderRadiusSM","boxShadow","controlHeight","marginSM","borderRadiusLG","controlHeightLG","fontSizeLG","controlHeightSM","borderRadiusXS","colorTextDisabled","paddingXXS","motionDurationSlow"],"component":{}},"Select":{"global":["zIndexPopupBase","paddingSM","colorText","fontSize","lineHeight","fontFamily","colorBgContainer","lineWidth","lineType","colorBorder","motionDurationMid","motionEaseInOut","colorTextDisabled","colorBgContainerDisabled","colorTextPlaceholder","fontSizeIcon","colorTextQuaternary","motionDurationSlow","colorTextTertiary","paddingXXS","controlPaddingHorizontalSM","borderRadius","controlHeight","controlHeightSM","borderRadiusSM","controlHeightLG","fontSizeLG","borderRadiusLG","controlHeightXS","borderRadiusXS","controlPaddingHorizontal","colorFillSecondary","colorSplit","paddingXS","colorIcon","colorIconHover","colorBgElevated","boxShadowSecondary","colorTextDescription","fontSizeSM","controlItemBgHover","fontWeightStrong","controlItemBgActive","colorPrimary","motionEaseOutQuint","motionEaseInQuint","motionEaseOutCirc","motionEaseInOutCirc","colorPrimaryHover","controlOutline","controlOutlineWidth","colorErrorHover","colorErrorOutline","colorWarningHover","colorWarningOutline"],"component":{"zIndexPopup":1050}},"Skeleton":{"global":["colorFillContent","colorFill","controlHeight","borderRadiusSM","marginLG","marginXXS","controlHeightLG","controlHeightSM","padding","marginSM","controlHeightXS"],"component":{"color":"rgba(0, 0, 0, 0.06)","colorGradientEnd":"rgba(0, 0, 0, 0.15)"}},"Slider":{"global":["controlHeightLG","controlHeightSM","lineWidth","controlHeight","colorFillContentHover","colorText","fontSize","lineHeight","fontFamily","colorFillTertiary","borderRadiusXS","motionDurationMid","colorPrimaryBorder","colorFillSecondary","colorPrimaryBorderHover","colorPrimary","colorBgElevated","colorTextDescription","colorBorderSecondary","motionDurationSlow","colorTextDisabled","colorBgContainer"],"component":{"controlSize":10,"railSize":4,"handleSize":10,"handleSizeHover":12,"dotSize":8,"handleLineWidth":2,"handleLineWidthHover":4}},"Space":{"global":[],"component":{}},"Spin":{"global":["colorTextDescription","controlHeightLG","controlHeight","colorText","fontSize","lineHeight","fontFamily","colorPrimary","motionDurationSlow","motionEaseInOutCirc","colorBgContainer","marginXXS"],"component":{"contentHeight":400}},"Statistic":{"global":["fontSizeHeading3","fontSize","fontFamily","marginXXS","padding","colorTextDescription","colorTextHeading","colorText","lineHeight"],"component":{}},"Steps":{"global":["wireframe","colorTextDisabled","fontSizeHeading3","fontSize","controlHeight","controlHeightLG","colorTextLightSolid","colorText","colorPrimary","colorTextLabel","colorTextDescription","colorTextQuaternary","colorFillContent","controlItemBgActive","colorError","colorBgContainer","colorBorderSecondary","colorSplit","lineHeight","fontFamily","motionDurationSlow","marginXS","lineWidth","lineType","paddingXXS","padding","fontSizeLG","fontWeightStrong","fontSizeSM","paddingSM","margin","marginXXS","paddingLG","marginSM","paddingXS","controlHeightSM","fontSizeIcon","lineWidthBold","marginLG","borderRadiusSM","motionDurationMid","controlItemBgHover","lineHeightSM","colorBorderBg"],"component":{"descriptionWidth":140}},"Switch":{"global":["fontSize","lineHeight","controlHeight","motionDurationMid","colorPrimary","opacityLoading","colorBgContainer","fontSizeIcon","colorText","fontFamily","colorTextQuaternary","colorTextTertiary","lineWidth","colorPrimaryBorder","colorPrimaryHover","colorTextLightSolid","fontSizeSM","colorWhite","marginXXS"],"component":{}},"Table":{"global":["controlItemBgActive","controlItemBgActiveHover","colorTextPlaceholder","colorTextHeading","colorSplit","colorBorderSecondary","fontSize","padding","paddingXS","paddingSM","controlHeight","colorFillAlter","colorIcon","colorIconHover","opacityLoading","colorBgContainer","colorFillSecondary","borderRadiusLG","colorFillContent","controlInteractiveSize","fontWeightStrong","lineWidth","lineType","motionDurationMid","paddingContentVerticalLG","wireframe","colorText","lineHeight","fontFamily","margin","marginXXS","fontSizeIcon","motionDurationSlow","colorPrimary","paddingXXS","fontSizeSM","borderRadius","colorTextDescription","colorTextDisabled","controlItemBgHover","boxShadowSecondary","colorLink","colorLinkHover","colorLinkActive"],"component":{}},"Tabs":{"global":["zIndexPopupBase","controlHeightLG","colorPrimaryHover","colorPrimaryActive","fontSize","lineHeight","lineWidth","padding","marginXXS","colorFillAlter","paddingXXS","paddingXS","fontSizeLG","borderRadius","marginSM","marginXS","margin","colorSplit","lineType","lineWidthBold","motionDurationSlow","controlHeight","boxShadowTabsOverflowLeft","boxShadowTabsOverflowRight","paddingLG","boxShadowTabsOverflowTop","boxShadowTabsOverflowBottom","colorBorder","colorText","fontFamily","colorBgContainer","borderRadiusLG","boxShadow","paddingSM","colorTextDescription","fontSizeSM","controlItemBgHover","colorTextDisabled","motionEaseInOut","colorPrimary","colorPrimaryBorder","colorTextHeading","motionDurationMid","motionEaseOutQuint","motionEaseInQuint"],"component":{"zIndexPopup":1050}},"Tag":{"global":["fontSize","lineHeight","lineWidth","fontSizeIcon","fontSizeSM","colorFillAlter","colorText","paddingXXS","fontFamily","marginXS","lineType","colorBorder","borderRadiusSM","motionDurationMid","colorTextDescription","colorTextHeading","colorTextLightSolid","colorPrimary","colorFillSecondary","colorPrimaryHover","colorPrimaryActive","blue-1","blue-3","blue-6","blue-7","purple-1","purple-3","purple-6","purple-7","cyan-1","cyan-3","cyan-6","cyan-7","green-1","green-3","green-6","green-7","magenta-1","magenta-3","magenta-6","magenta-7","pink-1","pink-3","pink-6","pink-7","red-1","red-3","red-6","red-7","orange-1","orange-3","orange-6","orange-7","yellow-1","yellow-3","yellow-6","yellow-7","volcano-1","volcano-3","volcano-6","volcano-7","geekblue-1","geekblue-3","geekblue-6","geekblue-7","lime-1","lime-3","lime-6","lime-7","gold-1","gold-3","gold-6","gold-7","colorSuccess","colorSuccessBg","colorSuccessBorder","colorInfo","colorInfoBg","colorInfoBorder","colorError","colorErrorBg","colorErrorBorder","colorWarning","colorWarningBg","colorWarningBorder"],"component":{}},"Timeline":{"global":["padding","paddingXXS","lineWidthBold","wireframe","colorText","fontSize","lineHeight","fontFamily","lineType","colorSplit","fontSizeSM","colorBgContainer","colorPrimary","colorError","colorSuccess","colorTextDisabled","lineWidth","margin","controlHeightLG","marginXXS","marginSM","marginXS"],"component":{}},"Tooltip":{"global":["zIndexPopupBase","colorBgSpotlight","borderRadius","colorTextLightSolid","borderRadiusOuter","controlHeight","boxShadowSecondary","paddingSM","paddingXS","colorText","fontSize","lineHeight","fontFamily","blue-6","purple-6","cyan-6","green-6","magenta-6","pink-6","red-6","orange-6","yellow-6","volcano-6","geekblue-6","lime-6","gold-6","sizePopupArrow","marginXXS","borderRadiusXS","boxShadowPopoverArrow","motionDurationFast","motionEaseOutCirc","motionEaseInOutCirc","motionDurationMid"],"component":{"zIndexPopup":1070,"colorBgDefault":"rgba(0, 0, 0, 0.85)"}},"Tour":{"global":["borderRadiusLG","fontSize","lineHeight","zIndexPopupBase","padding","paddingXS","borderRadius","borderRadiusXS","colorPrimary","colorText","colorFill","boxShadow","colorBgContainer","fontWeightStrong","marginXS","colorTextLightSolid","colorWhite","colorBgTextHover","motionDurationSlow","fontFamily","colorIcon","borderRadiusSM","motionDurationMid","colorIconHover","wireframe","sizePopupArrow","marginXXS","borderRadiusOuter","boxShadowPopoverArrow"],"component":{}},"Transfer":{"global":["fontSize","lineHeight","lineWidth","controlHeightLG","controlHeight","marginXS","marginXXS","fontSizeIcon","colorText","fontFamily","colorBgContainerDisabled","colorBorder","colorSplit","controlItemBgActive","controlItemBgActiveHover","colorTextDisabled","paddingSM","lineType","motionDurationSlow","borderRadiusLG","colorBgContainer","colorLinkHover","controlItemBgHover","paddingXS","margin","colorError","colorWarning"],"component":{"listWidth":180,"listHeight":200,"listWidthLG":250}},"TreeSelect":{"global":["colorBgElevated","paddingXS","controlHeightSM","fontSizeLG","colorText","fontSize","lineHeight","fontFamily","borderRadius","motionDurationSlow","lineWidth","colorPrimaryBorder","colorPrimary","colorTextDisabled","colorBorder","motionDurationMid","controlItemBgHover","controlItemBgActive","lineWidthBold","colorTextLightSolid","controlInteractiveSize","marginXS","colorBgContainer","lineType","borderRadiusSM","colorWhite","motionDurationFast","motionEaseInBack","colorPrimaryHover","motionEaseOutBack","colorBgContainerDisabled"],"component":{}},"Tree":{"global":["controlInteractiveSize","colorText","fontSize","lineHeight","fontFamily","marginXS","lineWidth","colorPrimaryBorder","colorBgContainer","lineType","colorBorder","borderRadiusSM","motionDurationSlow","lineWidthBold","colorWhite","motionDurationFast","motionEaseInBack","paddingXS","fontSizeLG","colorPrimary","colorPrimaryHover","motionDurationMid","motionEaseOutBack","colorBgContainerDisabled","colorTextDisabled","controlHeightSM","borderRadius","controlItemBgHover","controlItemBgActive","colorTextLightSolid","motionEaseInOut"],"component":{}},"Typography":{"global":["colorText","lineHeight","colorTextDescription","colorSuccess","colorWarning","colorError","colorErrorActive","colorErrorHover","colorTextDisabled","fontSizeHeading1","lineHeightHeading1","colorTextHeading","fontWeightStrong","fontSizeHeading2","lineHeightHeading2","fontSizeHeading3","lineHeightHeading3","fontSizeHeading4","lineHeightHeading4","fontSizeHeading5","lineHeightHeading5","colorLink","motionDurationSlow","colorLinkHover","colorLinkActive","linkDecoration","linkHoverDecoration","marginXXS","paddingXXS","controlHeight","fontSize","lineWidth","controlHeightLG","fontSizeLG","lineHeightLG","controlHeightSM","paddingSM","paddingXS","controlPaddingHorizontal","colorPrimaryHover","marginXS"],"component":{"sizeMarginHeadingVerticalStart":"1.2em","sizeMarginHeadingVerticalEnd":"0.5em"}},"Upload":{"global":["fontSizeHeading3","fontSize","lineHeight","lineWidth","controlHeightLG","colorTextDisabled","colorText","fontFamily","colorFillAlter","colorBorder","borderRadiusLG","motionDurationSlow","padding","colorPrimaryHover","margin","colorPrimary","marginXXS","colorTextHeading","fontSizeLG","colorTextDescription","paddingXS","lineType","paddingSM","fontSizeHeading2","colorError","colorErrorBg","colorTextLightSolid","marginXS","colorBgMask","marginXL","controlItemBgHover","motionEaseInOutCirc","motionDurationMid","motionEaseInOut"],"component":{}}}')}}]);