// ==UserScript==
// @name         123kanfang
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  123看房抢到图自动确定脚本
// @author       首席插秧师
// @match        http://webresource.123kanfang.com/studioCloud4/index.html*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setInterval(function () {
        let le = document.getElementsByClassName("el-button el-button--default el-button--small el-button--primary").length;
        if (le == 1) {
            document.getElementsByClassName("el-button el-button--default el-button--small el-button--primary")[0].click();
            setTimeout(function () {
                document.getElementsByClassName("el-button el-button--default el-button--small el-button--primary")[0].click();
                console.log("抢到图啦！");
            }, 600)

        }
        else {
            console.log("还没抢到哦！");
        }
    }, 6000);


    // Your code here...
})();