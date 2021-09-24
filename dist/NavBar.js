Object.defineProperty(exports,"__esModule",{value:true});exports.BackButton=BackButton;exports.LeftButton=LeftButton;exports.RightButton=RightButton;var _react=_interopRequireDefault(require("react"));var _stack=require("@react-navigation/stack");var _reactNative=require("react-native");var _core=require("@react-navigation/core");var _drawer=require("@react-navigation/drawer");var _back_chevron=_interopRequireDefault(require("../images/back_chevron.png"));var _jsxFileName="/Users/tomaszkwiatek/Documents/Projects/react-native-router-flux/src/NavBar.js";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?Object(arguments[i]):{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys.push.apply(ownKeys,Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}var hitSlop={top:15,bottom:15,left:15,right:15};function BackButton(state){var textButtonStyle=[styles.barBackButtonText,state.backButtonTextStyle];var style=[styles.backButton,state.leftButtonStyle];var buttonImage=state.backButtonImage||_back_chevron.default;var tintColor=getValue(state.backButtonTintColor,state)||state.tintColor||state.navBarButtonColor||state.headerTintColor;var onPress=state.onBack;if(onPress){onPress=onPress.bind(null,state);}else{onPress=function onPress(){return state.navigation.dispatch(_core.NavigationActions.back());};}if(!state.backButtonImage){return _react.default.createElement(_stack.HeaderBackButton,{onPress:onPress,title:state.backTitle,titleStyle:textButtonStyle,tintColor:tintColor,truncatedTitle:state.truncatedTitle,__source:{fileName:_jsxFileName,lineNumber:31}});}var text=state.backTitle?_react.default.createElement(_reactNative.Text,{style:textButtonStyle,__source:{fileName:_jsxFileName,lineNumber:34}},state.backTitle):null;return _react.default.createElement(_reactNative.TouchableOpacity,{testID:"backNavButton",style:styles.backButtonContainer,onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:37}},_react.default.createElement(_reactNative.View,{style:style,__source:{fileName:_jsxFileName,lineNumber:38}},buttonImage&&!state.hideBackImage&&_react.default.createElement(_reactNative.Image,{source:buttonImage,style:[styles.backButtonImage,state.barButtonIconStyle,state.leftButtonIconStyle,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:39}}),text));}function LeftButton(state){var onPress=state.onLeft;var buttonImage=getValue(state.leftButtonImage,state);var menuIcon=getValue(state.drawerIcon,state);var style=[styles.leftButton,state.leftButtonStyle];var leftButtonTextStyle=getValue(state.leftButtonTextStyle,state);var leftButtonIconStyle=getValue(state.leftButtonIconStyle,state);var leftButtonStyle=[styles.defaultImageStyle,leftButtonIconStyle];var leftTitle=state.getLeftTitle?state.getLeftTitle(state):getValue(state.leftTitle,state);var textColor=getValue(state.leftButtonTintColor,state);var tintColor=textColor||state.tintColor||state.navBarButtonColor||state.headerTintColor;var textStyle=[styles.barLeftButtonText,tintColor&&{color:tintColor},leftButtonTextStyle,textColor&&{color:textColor}];if(state.leftButton||state.left){var Button=state.leftButton||state.left;return _react.default.createElement(Button,_extends({},state,{key:"leftNavBarBtn",testID:"leftNavButton",style:style.concat(leftButtonStyle),textStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:61}}));}if(!onPress&&!state.hideDrawerButton&&(state.drawerImage||menuIcon)&&state.drawerPosition!=='right'){buttonImage=state.drawerImage;if(buttonImage||menuIcon){onPress=function onPress(){return state.navigation.dispatch(_drawer.DrawerActions.openDrawer());};}if(!menuIcon){menuIcon=_react.default.createElement(_reactNative.Image,{source:buttonImage,style:[state.leftButtonIconStyle||styles.defaultImageStyle,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:70}});}}if(onPress&&(leftTitle||buttonImage||menuIcon)){onPress=onPress.bind(null,state);return _react.default.createElement(_reactNative.TouchableOpacity,{key:"leftNavBarBtn",testID:"leftNavButton",style:style,onPress:onPress,hitSlop:state.hitSlop||hitSlop,__source:{fileName:_jsxFileName,lineNumber:77}},leftTitle&&_react.default.createElement(_reactNative.Text,{style:textStyle,__source:{fileName:_jsxFileName,lineNumber:78}},leftTitle),!leftTitle&&(menuIcon||buttonImage)&&_react.default.createElement(_reactNative.View,{style:{flex:1,justifyContent:'center',alignItems:'flex-start'},__source:{fileName:_jsxFileName,lineNumber:80}},menuIcon||_react.default.createElement(_reactNative.Image,{source:buttonImage,style:[state.leftButtonIconStyle||styles.defaultImageStyle,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:87}})));}if(!!state.onLeft^!!(leftTitle||buttonImage||menuIcon)){console.warn("Both onLeft and leftTitle/leftButtonImage\n            must be specified for the scene: "+state.name);}return null;}function getValue(value,params){return value instanceof Function?value(params):value;}function RightButton(state){if(!state){return null;}var onPress=state.onRight;var buttonImage=getValue(state.rightButtonImage,state);var menuIcon=state.drawerIcon;var style=[styles.rightButton,state.rightButtonStyle];var rightButtonTextStyle=getValue(state.rightButtonTextStyle,state);var rightButtonIconStyle=getValue(state.rightButtonIconStyle,state);var rightButtonStyle=[styles.defaultImageStyle,rightButtonIconStyle];var rightTitle=state.getRightTitle?state.getRightTitle(state):getValue(state.rightTitle,state);var textColor=getValue(state.rightButtonTintColor,state);var tintColor=textColor||state.tintColor||state.navBarButtonColor||state.headerTintColor;var textStyle=[styles.barRightButtonText,tintColor&&{color:tintColor},rightButtonTextStyle,textColor&&{color:textColor}];if(state.rightButton||state.right){var Button=state.rightButton||state.right;return _react.default.createElement(Button,_extends({},state,{key:"rightNavBarBtn",testID:"rightNavButton",style:style,textButtonStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:123}}));}if(!onPress&&!state.hideDrawerButton&&state.drawerImage&&state.drawerPosition==='right'){buttonImage=state.drawerImage;if(buttonImage||menuIcon){onPress=function onPress(){return state.navigation.dispatch(_drawer.DrawerActions.openDrawer());};}if(!menuIcon){menuIcon=_react.default.createElement(_reactNative.Image,{source:buttonImage,style:[rightButtonStyle,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:132}});}}if(onPress&&(rightTitle||buttonImage)){onPress=onPress.bind(null,state);return _react.default.createElement(_reactNative.TouchableOpacity,{key:"rightNavBarBtn",testID:"rightNavButton",style:style,onPress:onPress,hitSlop:state.hitSlop||hitSlop,__source:{fileName:_jsxFileName,lineNumber:139}},rightTitle&&_react.default.createElement(_reactNative.Text,{style:textStyle,__source:{fileName:_jsxFileName,lineNumber:140}},rightTitle),!rightTitle&&buttonImage&&_react.default.createElement(_reactNative.View,{style:{flex:1,justifyContent:'center',alignItems:'flex-end'},__source:{fileName:_jsxFileName,lineNumber:142}},menuIcon||_react.default.createElement(_reactNative.Image,{source:buttonImage,style:[state.rightButtonIconStyle||styles.defaultImageStyle,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:149}})));}if(!!state.onRight^!!(typeof rightTitle!=='undefined'||typeof buttonImage!=='undefined')){console.warn("Both onRight and rightTitle/rightButtonImage\n            must be specified for the scene: "+state.routeName);}return null;}var styles=_reactNative.StyleSheet.create({title:{textAlign:'center',color:'#0A0A0A',fontSize:18,width:180,alignSelf:'center'},titleImage:{width:180,alignSelf:'center'},titleWrapper:_objectSpread({marginTop:10},_reactNative.Platform.select({ios:{top:20},android:{top:5},windows:{top:5}})),header:_objectSpread({backgroundColor:'#EFEFF2',paddingTop:0},_reactNative.Platform.select({ios:{height:64},android:{height:54},windows:{height:54}}),{borderBottomWidth:0.5,borderBottomColor:'#828287'}),backButton:_objectSpread({},_reactNative.Platform.select({ios:{top:12},android:{top:10},windows:{top:8}}),{left:2,paddingLeft:8,flexDirection:'row',transform:[{scaleX:_reactNative.I18nManager.isRTL?-1:1}]}),rightButton:{right:2,paddingRight:8},leftButton:{left:2,paddingLeft:8},barRightButtonText:{color:'rgb(0, 122, 255)',textAlign:'right',fontSize:17},barBackButtonText:{color:'rgb(0, 122, 255)',textAlign:'left',fontSize:17,paddingLeft:6},barLeftButtonText:{color:'rgb(0, 122, 255)',textAlign:'left',fontSize:17},backButtonContainer:{height:50,width:70},backButtonImage:_objectSpread({},_reactNative.Platform.select({android:{marginTop:5}}),{width:13,height:21}),defaultImageStyle:{height:24,resizeMode:'contain'}});