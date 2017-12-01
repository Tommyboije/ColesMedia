"use strict";$(document).ready(function(){!function(){function t(){var t=function t(){o.animate({width:"100%"},800,"swing",function(){p.css({opacity:"1"})})},n=function t(){s.animate({width:"100%"},800,"swing",function(){e.animate({margin:"0px auto 0px auto"},600,"swing")})},i=function t(){c.animate({bottom:"-10px"},600,"swing")};setTimeout(function(){t()},600),setTimeout(function(){n()},900),setTimeout(function(){i()},1700)}var n=$(window).scrollTop(),i=$(window),a=$("html,body"),e=$("nav"),o=$(".big-box"),s=$(".name-box"),c=$(".white-box-wrap-hero"),p=$(".arrow-wrap-hero"),u=$(".quoter-wrap"),r=$(".quote-icon-wrap"),l=$(".about-golden-line"),f=$(".about-title-h1"),m=$(".services-title-h1"),d=$(".services-golden-line"),v=$(".contact-wrap-design"),w=$(".contact-form"),h=$(".contact-s"),g=$(".submit-button"),x=$(".projects-title-h1"),b=$(".projects-golden-line"),C=$("p.getintouch-p"),y=$(".getintouch-h1-wrap"),k=$(".contact-title-h1"),T=$(".contact-golden-line"),j=$("blockquote.quote"),q=$(".design-image-wrap"),D=$(".design-image"),z=$(".code-image-wrap"),P=$(".xkout-button-wrap"),A=$(".xkout-mockup-wrap"),O=$(".xkout-bg"),S=$(".xkout-text-wrap"),_=$(".wikipedia-button-wrap"),Y=$(".wikipedia-mockup-wrap"),B=$(".wikipedia-bg"),E=$(".hamburger-wrap"),F=$("a.hamburger-wrap > div"),G=$(".bar-1"),H=$(".bar-2"),I=$(".bar-3"),J=$('*[data-up-down="updown"]'),K=$(".sidenav"),L=$(".nav-link"),M=$(".nav-bg"),N=$(".nav-span"),Q=$(".sidenav-menu-link"),R=$(".input-name"),U=$(".input-email"),V=$(".textarea-message"),W=$(".popup-wrap"),X=$('*[data-popup-content="success"]'),Z=$('*[data-popup-h1-outer="success"]'),tt=$('*[data-popup-whitebox="success"]'),nt=$('*[data-popup-p="success"]'),it=$('*[data-popup-h1="success"]'),at=$('*[data-popup-content="failed"]'),et=$('*[data-popup-h1-outer="failed"]'),ot=$('*[data-popup-whitebox="failed"]'),st=$('*[data-popup-p="failed"]'),ct=$('*[data-popup-h1="failed"]'),pt=$(".contact-details-wrap"),ut=$(".viewport-width"),rt=function t(){u.animate({opacity:"1"},800),r.animate({opacity:"1"},800),j.animate({opacity:"1"},800)};c.on("click",rt),p.on("click",rt);var lt=function t(){var n=$(window).width(),i=$(window).height();$(".viewport-width").html(n+"px")};$(window).resize(lt),i.on("beforeunload",function(){i.scrollTop(0),window.location.href=window.location.href}),w.validate({errorClass:"errorAlert",rules:{_replyto:{required:!0,email:!0},name:{required:!0}},messages:{_replyto:{required:"Please enter your email adress.",email:"Please enter a <i>valid</i> email adress."},name:{required:"Please enter your name."}},onfocusout:function t(n){this.element(n)}}),w.on("submit",function(t){return t.preventDefault(),$(this).valid()&&$.ajax({url:"https://formspree.io/max@colesmedia.se",method:"POST",data:{name:R.val(),email:U.val(),message:V.val()},dataType:"json"}).done(ft).fail(mt),!1});var ft=function t(){W.css({"z-index":"5"}),g.addClass("inactive");var n=R.val(),i=U.val(),a="Thank you <i>"+n+"</i> for taking the time to get in touch. Your message was successfully sent from the email adress <i>"+i+"</i>.";nt.html(a),it.text("Success!"),setTimeout(function(){w.css({filter:"blur(1px)"}),k.css({filter:"blur(1px)"}),pt.css({filter:"blur(1px)"}),X.animate({width:"100%"},600,"swing"),setTimeout(function(){t()},400);var t=function t(){Z.animate({width:"100%"},600,"swing",n)},n=function t(){tt.animate({height:"100%"},400,"swing")}},200);var e=function t(n){n.preventDefault(),tt.addClass("inactive"),setTimeout(function(){i()},200);var i=function t(){tt.animate({height:"0%"},400,"swing",a)},a=function t(){setTimeout(function(){e()},300),Z.animate({width:"0%"},600,"swing")},e=function t(){X.animate({width:"0%"},600,"swing",o)},o=function t(){w.css({filter:"blur(0px)"}),k.css({filter:"blur(0px)"}),pt.css({filter:"blur(0px)"}),tt.removeClass("inactive"),g.removeClass("inactive"),W.css({"z-index":"-1"}),location.reload()}};tt.on("click",e),R.val(""),U.val(""),V.val("")},mt=function t(){W.css({"z-index":"5"}),g.addClass("inactive"),nt.text("Apparently something went wrong when trying to submit your message. Please refresh this page and try again."),it.text("Oops!"),setTimeout(function(){w.css({filter:"blur(1px)"}),k.css({filter:"blur(1px)"}),pt.css({filter:"blur(1px)"}),at.animate({width:"100%"},600,"swing"),setTimeout(function(){t()},400);var t=function t(){et.animate({width:"100%"},600,"swing",n)},n=function t(){ot.animate({height:"100%"},400,"swing")}},200);var n=function t(n){n.preventDefault(),ot.addClass("inactive"),setTimeout(function(){i()},200);var i=function t(){ot.animate({height:"0%"},400,"swing",a)},a=function t(){setTimeout(function(){e()},300),et.animate({width:"0%"},600,"swing")},e=function t(){at.animate({width:"0%"},600,"swing",o)},o=function t(){w.css({filter:"blur(0px)"}),k.css({filter:"blur(0px)"}),pt.css({filter:"blur(0px)"}),ot.removeClass("inactive"),g.removeClass("inactive"),W.css({"z-index":"0"})}};ot.on("click",n)};$("a[href^=\\#]").click(function(t){t.preventDefault();var n=$(this).attr("href");a.animate({scrollTop:$(n).offset().top-100},"slow")}),t(),Q.click(function(t){if(t.preventDefault(),40===E.height()){E.addClass("inactive"),F.stop().animate({height:"4px"},200,"linear",function(){i(),n()});var n=function t(){K.stop().animate({width:"-7%"},400,"swing")},i=function t(){E.stop().animate({top:"0px"},600,"swing",function(){a(),e(),o()})},a=function t(){G.stop().animate({top:"0px"},200,"swing")},e=function t(){I.stop().animate({top:"35px"},200,"swing")},o=function t(){E.removeClass("inactive"),E.removeClass("open"),E.addClass("closed")}}else{E.addClass("inactive"),F.stop().animate({height:"2px"},200,"linear",function(){c(),s()});var s=function t(){K.stop().animate({width:"-7%"},400,"swing")},c=function t(){E.stop().animate({top:"0px"},600,"swing",function(){p(),u(),r()})},p=function t(){G.stop().animate({top:"0px"},200,"swing")},u=function t(){I.stop().animate({top:"22px"},200,"swing")},r=function t(){E.removeClass("inactive"),E.removeClass("open"),E.addClass("closed")}}}),E.click(function(t){if(t.preventDefault(),40===E.height())if(E.hasClass("closed")){E.addClass("inactive"),J.stop().animate({top:"17px"},400,"swing",function(){n(),i(),a()});var n=function t(){E.stop().animate({top:"300px"},600,"swing",function(){e()})},i=function t(){K.stop().animate({width:"107%"},400,"swing")},a=function t(){F.stop().animate({height:"6px"},200,"linear")},e=function t(){E.removeClass("closed"),E.removeClass("inactive"),E.addClass("open")}}else{E.addClass("inactive"),F.stop().animate({height:"4px"},200,"linear",function(){s(),o()});var o=function t(){K.stop().animate({width:"-7%"},400,"swing")},s=function t(){E.stop().animate({top:"0px"},600,"swing",function(){c(),p(),u()})},c=function t(){G.stop().animate({top:"0px"},200,"swing")},p=function t(){I.stop().animate({top:"35px"},200,"swing")},u=function t(){E.removeClass("inactive"),E.removeClass("open"),E.addClass("closed")}}else if(E.hasClass("closed")){E.addClass("inactive"),J.stop().animate({top:"11px"},400,"swing",function(){r(),l(),f()});var r=function t(){E.stop().animate({top:"185px"},600,"swing",function(){m()})},l=function t(){K.stop().animate({width:"107%"},400,"swing")},f=function t(){F.stop().animate({height:"4px"},200,"linear")},m=function t(){E.removeClass("closed"),E.removeClass("inactive"),E.addClass("open")}}else{E.addClass("inactive"),F.stop().animate({height:"2px"},200,"linear",function(){v(),d()});var d=function t(){K.stop().animate({width:"-7%"},400,"swing")},v=function t(){E.stop().animate({top:"0px"},600,"swing",function(){w(),h(),g()})},w=function t(){G.stop().animate({top:"0px"},200,"swing")},h=function t(){I.stop().animate({top:"22px"},200,"swing")},g=function t(){E.removeClass("inactive"),E.removeClass("open"),E.addClass("closed")}}});var dt=function t(){function n(t){var n=i.scrollTop(),a=n+i.height(),e=$(t).offset().top;return e+$(t).height()<=a&&e>=n}var a=function t(){$(window).scrollTop()>=100&&ht(),!0===n(v)?(vt("#services"),wt("#about"),wt("#contact"),wt("#projects"),gt()):wt("#services"),!0===n(f)&&(vt("#about"),wt("#services"),wt("#contact"),wt("#projects"),$t()),!0===n(A)&&(vt("#projects"),wt("#about"),wt("#contact"),wt("#services"),xt()),!0===n(C)&&bt(),!0===n(k)&&(vt("#contact"),wt("#about"),wt("#projects"),wt("#services"),Ct())};i.on("scroll",a)},vt=function t(n){var i=$('.nav-link[href="'+n+'"] > .nav-bg');$('.nav-link[href="'+n+'"] > .nav-span').addClass("animate-nav"),i.addClass("animate-nav")},wt=function t(n){var i=$('.nav-link[href="'+n+'"] > .nav-bg');$('.nav-link[href="'+n+'"] > .nav-span').removeClass("animate-nav"),i.removeClass("animate-nav")},ht=function t(){u.animate({opacity:"1"},800),r.animate({opacity:"1"},800),j.animate({opacity:"1"},800)},gt=function t(){d.animate({left:"0",opacity:"1"},800),m.animate({left:"0",opacity:"1"},800)},$t=function t(){l.animate({left:"0",opacity:"1"},800),f.animate({left:"0",opacity:"1"},800)},xt=function t(){b.animate({left:"0",opacity:"1"},800),x.animate({left:"0",opacity:"1"},800)},bt=function t(){y.animate({width:"100%"},800)},Ct=function t(){T.animate({left:"0",opacity:"1"},800),k.animate({left:"0",opacity:"1"},800)};dt()}()});