!function r(t,e,i){function n(s,a){if(!e[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=e[s]={exports:{}};t[s][0].call(u.exports,function(r){var e=t[s][1][r];return n(e?e:r)},u,u.exports,r,t,e,i)}return e[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(){$(function(){return $("#icon").click(function(){return console.log($(this).hasClass("active")),$("aside").css($(this).hasClass("active")?{right:"-250px"}:{right:"0"})}),$("header nav").click(function(){return $(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),$("#wrapper").masonry({itemSelector:".item",columnWidth:150})})},{}]},{},[1]);