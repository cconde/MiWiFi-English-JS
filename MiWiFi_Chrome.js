// ==UserScript==
// @name         MiWiFi in English
// @namespace    http://saiful.im/miwifi/
// @version      2.2
// @description  Xiaomi AC Router Translation in English (Google Chrome)
// @author       Saiful Islam
// @match        http://miwifi.com/*
// @match        http://192.168.31.1/*
// @grant        none
// ==/UserScript==

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function errorFix()
{
	console.log("Fixing CSS...");
	$(".title img, .icons img").attr('src', 'data:image/png;base64,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');
	$(".recomsites").hide();
	$(".hotwords").hide();
	$("#nav li a ").css( "font-size", 16);
	$(".dropmenu").css( "width", 160);
	$("#trafficChart > svg:nth-child(2)").remove();
	$("#cpuChart > svg:nth-child(2)").remove();
	$("#cpuChart > svg:nth-child(2)").remove();
	$("#memChart > svg:nth-child(2)").remove();
	$("#piechart > svg:nth-child(2)").remove();
	$("#piechartcat > svg:nth-child(2)").remove();
	$("#ioStatus > svg:nth-child(2)").remove();
	$('input:text').css('height', 40, 'important');
	$('input:text').css('width', 330, 'important');
	$('input:password').css('height', 40, 'important');
	$('.form-item .ipt-text').css('width', 330, 'important');
	$('.form-item-select .k').css('width', 300, 'important');
	$('.form-item .k').css('width', 300, 'important');
	$('.mod-set .hd h3').css('width', "100%", 'important');
	$(".panel-mask, .panel-loading").hide();
	clearInterval(document.intR);
}

$( document ).ready(function() {
console.log('starting');
	document.str = document.documentElement.innerHTML;
    var translate = '{"2015 小米路由器":"2015 Mi Router",'+
        '"官方网站":"Official website","官方微博":"Official Weibo","官方微信":"Official micro-letter",'+
        '"用户社区":"User Community","常见问题":"Common Problem","服务热线":"Service hotline","路由状态":"Routing status","存储状态":"Storage status",'+
        '"常用设置":"Common Settings","高级设置":"Settings","终端设备":"Devices","互联网":"Internet","带宽":"Bandwidth ","台":" device","外网状态":"External Network State",'+
        '"外网":"External ","连接类型":"Connection Type","IP地址":"IP addresses","下载Bandwidth":"Download Bandwidth","上传Bandwidth":"Upload Bandwidth",'+
        '"网关地址":"Gateway Address","重新测速":"Speed Test","手工修改":"Manual Change","系统版本:":"System version:","开发版":"Dev. Edition","MAC地址":"MAC address",'+
        '"网线连网设备":"Device Connected via Cable","访问External":"Internet Access","全盘访问":"Disk Access","2.4G连网设备":"2.4G Devices","5G连网设备":"5G Devices",'+
        '"小蚁智能摄像机":"MI Ant Camera","路由器信息":"Router Information","小米路由器(R1D)":"Mi AC Router (R1D)","路由器型号":"Router model",'+
        '"系统ROM版本":"System ROM Version","实时网络状态":"Live Network Status","实时下行流量:":"Download:","实时上行流量:":"Upload:",'+
        '"终端流量统计":"Terminal Traffic Statistics","当前终端:":"Connected Devices:","小米路由器":"Mi Router","最快下载:":"Max Download Speed:",'+
        '"总下载量":"Total downloads","总上传量":"Total uploads","累计终端:":"Cumulative Devices:","当前CPU状态":"Current CPU Status","当前CPU负载":"CPU Load",'+
        '"当前内存状态":"Current Memory Status","当前内存占用":"Memory Load","CPU核心数":"CPU Cores","核心频率":"Core Frequency","内存容量":"Memory Capacity",'+
        '"内存类型:":"Memory Type:","内存频率:":"Memory Frequency:",'+
        '"查看详情":"Details",'+
        '"天":"days ",'+
        '"秒":"sec ",'+
        '"当前未有":"No current ",'+
        '"去小米网购买5G智能设备":"Open MI page to buy 5G devices",'+
        '"运行在5GHz以上的高频段的独立Wi-Fi比较2.4G Wi-Fi速度更快更稳定，适合电视、盒子包括距离路由器较近的设备":"faster than 2.4G Wi-Fi. 5G Wi-Fi uses a more stable high frequency band, suitable for television, set top box...",'+
        '"本地存储":"Local Storage","已用":"Used","总容量":"Total Capacity ","文件系统 :":"File System:",'+
        '"硬盘接口 :":"Disk Interface:","您的硬盘已经":"You dont scan hard disk in ","天没有进行过检测，建议每隔":" days, it is recommended performing scan in every ",'+
        '"天执行一次硬盘体检":" days.","硬盘读写状态":"Hard Disk R&W Status","上次体检为":"Last Scan","优":" Excellent","立即体检":"Scan Now",'+
        '"文件类型存储统计":"File Type Statistics","读取:":"Read: ","写入:":"Write: ","可用":"Available","图片":"Picture","视频":"Video","音乐":"Music","文档":"File",'+
        '"其他":"Other","硬盘自动休眠":"Auto Sleep","格式化硬盘":"Formatting  Hard Disk",'+
        '"开启此功能后Mi Router将在硬盘非工作状态下使其进入休眠状态，以延长硬盘使用寿命。":"After activating this function HDD will sleep at non-working state to extend drive life.",'+
        '"清除硬盘中的全部用户数据，例如Video或Picture":"Remove the hard drive of all user data, such as Video or Picture",'+
        '"建议正在使用SSH连接路由器的用户不要开启此功能":"We Recommend To Not Use This Feature If You Use Any SSH Connection",'+
        '"文件系统检测":"Filesystem check", '+
        '"此功能可以扫描磁盘文件系统的错误并尝试修复。扫描期间请尽量不要使用您的磁盘，例如下载、硬盘读写等。":"This function will scan and try to fix disk file system errors. Please do not to use your disk during the scan.",'+
        '"体检过程大约需要几秒至几分钟不等":"Scan process takes about a few seconds to several minutes","视硬盘情况而定":"Depends on hard disk availability",'+
        '"体检过程中涉及到硬盘的功能将暂时无法使用":"Scan process involved in the function of hard disk will temporarily unavailable","插件、文件读写等":"Plug-in, document literacy, etc.",'+
        '"确定":"Yes","取消":"Cancel","开始硬盘体检":"Start Hard Disk Scan",'+
        '"清除硬盘中的全部用户数据，此过程不可恢复，是否确认":"Clear all user data in hard disk, this process can not be restored Are you sure","格式化":" Format","开关":"Switch",'+
        '"开启":"Enable","关闭":"Disable","Wi-Fi名称":"Wi-Fi SSID \/ Name","隐藏网络不被发现":"Hide SSID","强加密":"Strong encryption ","WPA2个人版":"WPA2 Personal Edition",'+
        '"仅支持WPA加密方式的设备将无法连接":"Only WPA encryption devices will connect","混合加密":"Hybrid Encryption","无加密":"No Encryption",'+
        '"允许所有人连接":"Allow anyone to connect","加密方式":"Encryption","名称":"Name","Wi-Fi设置":"Wi-Fi Settings","上网设置":"Internet Settings","安全中心":"Security Center",'+
        '"局域网设置":"LAN Settings","系统状态":"System Status","密码":"Password","无线信道":"Radio channel","自动":"Automatic","信号强度":"Signal Strength","穿墙":"Wall",'+
        '"标准":" Standard","节能":"Energy Saving","保存":"Save","上网信息":"Internet information","经过检测，建议使用PPPoE方式":"After testing, it is recommended to use PPPoE mode",'+
        '"需要输入帐号与Password":"Need to enter the Account ID and Password","账户":"Account ID","子网掩码":"Subnet Mask","默认网关":"Default Gateway","拨号成功":"Connected",'+
        '"断开":"Disconnect","上网方式":"Internet Access Methods","账号":"Account ID","Automatic配置":"Automatic configuration","手动配置":"Manual configuration",'+
        '"特殊拨号":"Special dial","字节":"Byte","网络正常情况下不建议修改":"Under normal circumstances, the network does not propose to amend","应用":"Apply",'+
        '"WAN口速率":"WAN port speed","推荐":"Recommend","速率":"Speed","MAC address克隆":"MAC Address Cloning","当前使用的":"Currently used ","是":" is ",'+
        '"当前管理终端的MAC address，可以手动更改为Other MAC address":"Current Mac Address, You can Change MAC Address.","克隆":"Clone","恢复":"Restore",'+
        '"工作模式切换":"Router Mode Switching","在路由器工作模式和中继工作模式之间进行切换":"Change mode between the router and the relay mode","切换":"Switch",'+
        '"请手工选择需要的工作模式":"Select Router Mode","普通路由器工作模式":"Router Mode","创建一个无线网络":"Create a wireless network","有线中继工作模式":"Relay Mode",'+
        '"扩展现有的网络":"Extend the existing network","下一步":"Next","当前管理终端的":"Current ","可以手动更改为OtherMAC address":"You can Change MAC Address",'+
        '"提示信息":"Message","设置成功":"Setting Success","确认":"Confirm","无线访问控制":"Wireless Access Control","控制模式：":"Control Mode:","黑名单模式":"Blacklist mode",'+
        '"不允许列表中设备访问":"The list of equipment allowed access","白名单模式":"Whitelist mode","只允许列表中设备访问":"Only allows access to the list of equipment",'+
        '"黑名单设备列表":"Blacklisted Devices"," 设备Name":"Device Name","操作":"Action","还没有设备添加进来":"Empty List!","从在线列表添加":"Add from the online list",'+
        '"手工添加":"Manually add","Save并生效":"Save & Apply","修改管理Password":"Password Management","原":"Old","新Password":"New Password",'+
        '"确认Password":"Confirm Password","管理后台访问控制":"Admin Access Control","管理后 device访问":"Admin Access Control","控制":"Control",'+
        '"address白名单":"address whitelist","删除":"Delete","本机":"This Device","通过MAC address添加设备":"Add device via MAC address","设备Name":"Equipment Name",'+
        '"DHCP服务":"DHCP Service","开始IP":"Start IP","结束IP":"End IP","租约":"Lease","分":"min ","局域网IP ":"LAN IP ","局域网IP":"LAN IP","升级检测":"System Upgrade",'+
        '"系统版本":"System Version","当前版本":"Current firmware version is ","你的版本 is 最新的，无需升级。":"your version is up to date, you dont need to upgrade.",'+
        '"手动升级":"Manual upgrade","上传日志":"Update Log","下载日志":"Download Log","Restore出厂设置":"Restore factory settings","立即Restore":"Restore Now","提示":"Tips",'+
        '"Restore出厂设置Action会抹掉当前路由器的所有设置，建议您先进行配置备份再Restore出厂设置。":"Action Restore factory settings will erase all the current router settings, it is recommended that you configure a backup and then Restore factory settings.",'+
        '"备份路由器设置":"Backup router settings","直接Restore出厂设置":"Direct Restore","备份与Restore":"Backup and Restore",'+
        '"备份路由器的配置，重新刷机或重置路由器后可以用来Restore。":"Backup router configuration, upgrade again or after resetting the router can be used to Restore.","新建备份":"New Backup",'+
        '"可选备份":"Optional backup","路由器名和管理Password":"Router Name and Password Management","拨号方式和宽带帐号Password等":"Dial-up and broadband account Password etc.",'+
        '"wifi设置":"wifi settings","wifiName和Password等":"WiFi Name and Password, etc.","Service和LAN IP设置":"Service and LAN IP settings","无线访问黑白名单":"Wireless access black list",'+
        '"开始备份":"Start Backup","从备份Restore路由器设置":"Restore settings from a backup router","请选择备份文件":"Please select the backup file","开始Restore":"Begin Restore",'+
        '"处理中...":"Processing...","正在检测更新，请稍候...":"Checking for updates, please wait ...","QoS智能限速":"QoS Smart Speed","DHCP静态IPsub配":"DHCP Server","端口转发":"Port Forwarding",'+
        '"状态":"Status","当External Download Bandwidth 超过50Mbps时，建议无需EnableQoS功能":"When External Download Bandwidth over 50Mbps, we recommended Not Enabling QoS",'+
        '"设备限速Status":"Device speed Status","当前QoS服务暂未Enable":"Current QoS Service Write Enable","Apply限速Status":"Apply Speed Status","当前速度":"Current speed",'+
        '"限速模式":"Speed mode","无限制":"Unlimited","迅雷":"Thunderbolt","编辑":"Edit","Apply限速":"Apply speed","当前网速":"Current network speed",'+
        '"上传速度":"Upload speed","下载速度":"Download speed","已绑定的设备列表":"Bound to a list of equipment","没有设置信息":"Information not provided",'+
        '"添加":"Add","绑定设备":"Bounded devices","移除":"Remove","增加一项":"Add New","一键绑定":"A key binding","服务列表":"Service List",'+
        '"服务提供商及主机Name":"ISP and Host Name","最近更新":"Last Updated","还没有服务Add进来":"Nothing in list","Add服务":"Add Services","用户名":"Username",'+
        '"主机Name":"Host Name","Status检查":"Check Status","sub钟":"sub clock","小时":"hours ","服务提供商":"Service provider","强制更新":"Forced update",'+
        '"Port Forwarding规则列表":"Port Forwarding Rules","协议":"Protocols","外部端口":"External Port","内部IP addresses":"Internal IP addresses",'+
        '"内部端口":"Internal Port","TCP和UDP":"TCP & UDP","Add规则":"Add Rule","范围转发规则列表":"Range forwarding rules list","起始端口":"Start Port",'+
        '"结束端口":"End Port","目标IP":"Destination IP",'+
        '"EnableDMZ功能可以将内网某一个设备的IP映射到External ，方便从External 访问到该设备。":"EnableDMZ function allows one IP devices within the network are mapped to External, easy access from the External to the device.",'+
        '"新建Port Forwarding规则":"New Port Forwarding Rules","":"","新建范围转发规则":"New range forwarding rules",'+
        '"规则正在生效中，请等待...":"Applying Changes....","请填写External Port。":"Please fill External Port.",'+
        '"请填写IP addresses最后一位。":"Please fill out the last bit IP addresses.","请填写Internal Port。":"Please fill out Internal Port.",'+
        '"Protocols类型":"Protocol Type","服务器地址":"Server Address","服务器":"Server","UPnPStatus":"UPnP Status","UPnP设备列表":"UPnP Device List",'+
        '"客户端IP":"Client IP","开发者选项":"Developer Options","插件开发环境":"Plug-in Development Environment","插件ID":"Plug in ID",'+
        '"访问路由共享盘权限":"Access routes shared disk permissions","路由器下载引擎权限":"Router download engine Permissions",'+
        '"vpn操作权限":"VPN operating authority","获取链接设备信息权限":"Get the link device information rights","u盘访问权限":"Disk Access",'+
        '"文件变化通知":"File change notification",'+
        '"通过SSH工具，输入ssh plugin@miwifi.com -p 2222 登录路由器，默认登录Passwordadmin":"For SSH tool, enter ssh plugin@miwifi.com -p 2222 log into the router, the default login Password:admin ",'+
        '"登录后可通过passwd修改Password":"After login please modifying Password","修改路由器Name":"Change router Name","系统升级":"System Upgrade","下载客户端":"Download Client",'+
        '"重启":"Reboot",'+
        '"关机":"Shutdown",'+
        '"注销":"Logout",'+
        '"PC客户端":"PC Client",'+
        '"MAC客户端":"MAC Client","Android客户端":"Android Client","iPhone客户端":"iPhone Client",'+
        '"路由器正常工作情况下建议使用系统System Upgrade进行升级，在当系统无法升级或需要降级到前一版本时使用手动上传rom包进行升级。":"Under normal operating conditions the router is recommended to use the system upgrade System Upgrade, using manually upload rom package upgrade when the system can not be upgraded or need to downgrade to the previous version.",'+
        '"请选择固件:":"Please select Firmware:",'+
        '"开始升级":"Start Upgrade",'+
        '"Reboot路由器":"Reboot System",'+
        '"路由器Reboot需要等待十几秒或更多时间，Reboot过程中将会Disconnect网络连接，稍后将Automatic重新连接网络。":"Reboot the router needs to wait for ten seconds or more time, Reboot process will Disconnect network connection, later Automatic reconnect to the network.",'+
        '"Yes要Delete这条规则吗？":"Delete This rule?","正在拨号":"Dialing","认证失败":"Authentication failed","用户密码异常导致":"Wrong Username & Password",'+
        '"正在尝试Special dial模式":"Trying Special dial mode","正在下载升级包":" Downloading the upgrade package","Cancel升级":"Cancel Update",'+
        '"恭喜！网络连接正常":"Congratulations! Network connection is normal","网络诊断完成，未发现错误":"Network Diagnostics is complete, no errors are found",'+
        '"重新诊断":"Newly diagnosed","连网设备":"Network Devices","已连接":"Connected","修改路由器":"Router Administration","青春版":"Mini","稳定版":"Stable",'+
        '"网络诊断完成，发现错误":"Network Diagnostics complete, found an error","诊断问题":"Diagnose problems","可能Old因":"Probably Old Result","解决办法":"Solution",'+
        '"PPPoE拨号失败":"PPPoE dial-up fails","错误码":"Error Code ","宽带因欠费无法继续使用":"Broadband can not be used, due to error",'+
        '"宽带运营商机房故障":"Opportunities room broadband operators fault","联系运营商查询宽带 is 否欠费":"Contact the operator to check whether broadband is delinquent",'+
        '"联系运营商了解 is 否当地有线路故障":"Contact your carrier to understand is whether there is a line fault of local Confirm information","Confirm信息":"Confirm information",'+
        '"YesReboot System，Reboot将Disconnect和Mi Router的连接。":"Yes Reboot System, Reboot will Disconnect and Mi Router connection.",'+
        '"Reboot SystemAction生效，等待设备Reboot..":"Rebooting System, wait for the device Reboot ..","Reboot中...":"Reboon In...",'+
        '"请输入路由器管理Password":"Please enter to manage  router Password","WAN口协商Speed设置":"WAN Port is disconnected",'+
        '"问题排查":"Troubleshooting","宽带因欠费无法继续使用 联系运营商查询宽带 is 否欠费":"Broadband can not continue to use , contact operator to check whether broadband is disconencted",'+
        '"更换了接入宽带 检查WAN口接入的宽带 is 否已经变更":"Replace the access to broadband WAN port to check is whether the broadband access has changed",'+
        '"时间设置":"Time setting",'+
        '"东亚":"East Asia","时间":"Time","更改时区":"Change the time zone",'+
        '"年":"\/","月":"\/","日":"\/","更改时间":"Change the time",'+
        '"国际换日线":"International Date Line","中途岛":"Midway","夏威夷":"Hawaii","阿留申":"Aleutian","马克萨斯群岛":"Marquesas Islands","阿拉斯加时太平洋":"Alaska Pacific",'+
        '"时北美山区":"North America","北美中部":"North Central","北美东部":"Eastern North America","委内瑞拉":"Venezuela","大西洋":"Atlantic","纽芬兰岛":"Newfoundland","南美":"South America",'+
        '"巴西":"Brazil","佛得角":"Cape Verde","欧洲西部时区":"Western Europe time zone","格林威治":"Greenwich","欧洲中部时区":"Central European time zone",'+
        '"欧洲东部时区":"Eastern European time zone","莫斯科时区":"Moscow time zone","伊朗":"Iran","中东时区":"Middle East Time Zone","阿富汗":"Afghanistan","印度":"India",'+
        '"尼泊尔":"Nepal","孟加拉":"Bangladesh","缅甸":"Myanmar","中南半岛":"Indochina","朝鲜":"Korea","远东":"Far East","澳大利亚中部":"Central Australia",'+
        '"澳大利亚东部":"Eastern Australia","澳大利亚远东":"Australia Far East","瓦努阿图":"Vanuatu","诺福克岛":"Norfolk Island","太平洋":"Pacific Ocean",'+
        '"时":" Time","更改":"Change "}';
    var data = JSON.parse(translate);
 	$.each(data, function(key, value) {
		document.str = replaceAll(key, value, document.str);
	}); 
	document.documentElement.innerHTML = "";
	document.open('text/html');document.write(document.str);document.close();
	console.log('done');
	errorFix();
	$(document).on('click', '.btn', function() {
	    $(".d-is-open").css({top: '20%', position:'fixed'});
	    $('input:text').css('height', 40, 'important');
		$('input:text').css('width', 330, 'important');
		$('input:password').css('height', 40, 'important');
	});
});


