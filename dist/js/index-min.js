"use strict";$(function(){!function(){function t(){var t=function t(){o.animate({width:"100%"},800,"swing",function(){p.css({opacity:"1"})})},n=function t(){s.animate({width:"100%"},800,"swing",function(){e.animate({margin:"0px auto 0px auto"},600,"swing")})},i=function t(){c.animate({bottom:"-10px"},600,"swing")};setTimeout(function(){t()},600),setTimeout(function(){n()},900),setTimeout(function(){i()},1700)}var n=$(window).scrollTop(),i=$(window),a=$("html,body"),e=$("nav"),o=$(".big-box"),s=$(".name-box"),c=$(".white-box-wrap-hero"),p=$(".arrow-wrap-hero"),u=$(".quoter-wrap"),r=$(".quote-icon-wrap"),l=$(".about-golden-line"),f=$(".about-title-h1"),m=$(".services-title-h1"),d=$(".services-golden-line"),v=$(".contact-wrap-design"),w=$(".contact-form"),g=$(".submit-button"),h=$(".projects-title-h1"),x=$(".projects-golden-line"),b=$("p.getintouch-p"),C=$(".getintouch-h1-wrap"),k=$(".contact-title-h1"),y=$(".contact-golden-line"),T=$("blockquote.quote"),j=$(".design-image-wrap"),q=$(".design-image"),D=$(".code-image-wrap"),P=$(".xkout-button-wrap"),z=$(".xkout-mockup-wrap"),S=$(".xkout-bg"),A=$(".xkout-text-wrap"),O=$(".wikipedia-button-wrap"),_=$(".wikipedia-mockup-wrap"),Y=$(".wikipedia-bg"),B=$(".hamburger-wrap"),E=$("a.hamburger-wrap > div"),F=$(".bar-1"),G=$(".bar-2"),H=$(".bar-3"),I=$('*[data-up-down="updown"]'),J=$(".sidenav"),K=$(".nav-link"),L=$(".nav-bg"),M=$(".nav-span"),N=$(".sidenav-menu-link"),Q=$(".input-name"),R=$(".input-email"),U=$(".textarea-message"),V=$(".popup-wrap"),W=$('*[data-popup-content="success"]'),X=$('*[data-popup-h1-outer="success"]'),Z=$('*[data-popup-whitebox="success"]'),tt=$('*[data-popup-p="success"]'),nt=$('*[data-popup-h1="success"]'),it=$('*[data-popup-content="failed"]'),at=$('*[data-popup-h1-outer="failed"]'),et=$('*[data-popup-whitebox="failed"]'),ot=$('*[data-popup-p="failed"]'),st=$('*[data-popup-h1="failed"]'),ct=$(".contact-details-wrap");i.on("beforeunload",function(){i.scrollTop(0),window.location.href=window.location.href}),w.validate({errorClass:"errorAlert",rules:{_replyto:{required:!0,email:!0},name:{required:!0}},messages:{_replyto:{required:"Please enter your email adress.",email:"Please enter a <i>valid</i> email adress."},name:{required:"Please enter your name."}},onfocusout:function t(n){this.element(n)}}),g.on("click",function(){return $.ajax({url:"https://formspree.io/max@colesmedia.se",method:"POST",data:{name:Q.val(),email:R.val(),message:U.val()},dataType:"json"}).done(pt).fail(ut),!1});var pt=function t(n){V.css({"z-index":"5"}),n.preventDefault(),g.addClass("inactive");var i=Q.val(),a=R.val(),e="Thank you "+i+" for taking the time to get in touch. Your message has been recived along with your email adress "+a;tt.text(e),nt.text("Success!"),setTimeout(function(){w.css({filter:"blur(1px)"}),k.css({filter:"blur(1px)"}),ct.css({filter:"blur(1px)"}),W.animate({width:"100%"},600,"swing"),setTimeout(function(){t()},400);var t=function t(){X.animate({width:"100%"},600,"swing",n)},n=function t(){Z.animate({height:"100%"},400,"swing")}},600);var o=function t(n){n.preventDefault(),Z.addClass("inactive"),setTimeout(function(){i()},200);var i=function t(){Z.animate({height:"0%"},400,"swing",a)},a=function t(){setTimeout(function(){e()},300),X.animate({width:"0%"},600,"swing")},e=function t(){W.animate({width:"0%"},600,"swing",o)},o=function t(){w.css({filter:"blur(0px)"}),k.css({filter:"blur(0px)"}),ct.css({filter:"blur(0px)"}),Z.removeClass("inactive"),g.removeClass("inactive"),V.css({"z-index":"0"})}};Z.on("click",o),Q.val(""),R.val(""),U.val("")},ut=function t(n){V.css({"z-index":"5"}),n.preventDefault(),g.addClass("inactive");var i="Apparently something went wrong when trying to submit your message. Please refresh this page and try again.";tt.text(msgSuccess),nt.text("Oops!"),setTimeout(function(){w.css({filter:"blur(1px)"}),k.css({filter:"blur(1px)"}),ct.css({filter:"blur(1px)"}),it.animate({width:"100%"},600,"swing"),setTimeout(function(){t()},400);var t=function t(){at.animate({width:"100%"},600,"swing",n)},n=function t(){et.animate({height:"100%"},400,"swing")}},600);var a=function t(n){n.preventDefault(),et.addClass("inactive"),setTimeout(function(){i()},200);var i=function t(){et.animate({height:"0%"},400,"swing",a)},a=function t(){setTimeout(function(){e()},300),at.animate({width:"0%"},600,"swing")},e=function t(){it.animate({width:"0%"},600,"swing",o)},o=function t(){w.css({filter:"blur(0px)"}),k.css({filter:"blur(0px)"}),ct.css({filter:"blur(0px)"}),et.removeClass("inactive"),g.removeClass("inactive"),V.css({"z-index":"0"})}};et.on("click",a)};$("a[href^=\\#]").click(function(t){t.preventDefault();var n=$(this).attr("href");a.animate({scrollTop:$(n).offset().top-100},"slow")}),t(),N.click(function(t){if(t.preventDefault(),40===B.height()){B.addClass("inactive"),E.stop().animate({height:"4px"},200,"linear",function(){i(),n()});var n=function t(){J.stop().animate({width:"-7%"},400,"swing")},i=function t(){B.stop().animate({top:"0px"},600,"swing",function(){a(),e(),o()})},a=function t(){F.stop().animate({top:"0px"},200,"swing")},e=function t(){H.stop().animate({top:"35px"},200,"swing")},o=function t(){B.removeClass("inactive"),B.removeClass("open"),B.addClass("closed")}}else{B.addClass("inactive"),E.stop().animate({height:"2px"},200,"linear",function(){c(),s()});var s=function t(){J.stop().animate({width:"-7%"},400,"swing")},c=function t(){B.stop().animate({top:"0px"},600,"swing",function(){p(),u(),r()})},p=function t(){F.stop().animate({top:"0px"},200,"swing")},u=function t(){H.stop().animate({top:"22px"},200,"swing")},r=function t(){B.removeClass("inactive"),B.removeClass("open"),B.addClass("closed")}}}),B.click(function(t){if(t.preventDefault(),40===B.height())if(B.hasClass("closed")){B.addClass("inactive"),I.stop().animate({top:"17px"},400,"swing",function(){n(),i(),a()});var n=function t(){B.stop().animate({top:"300px"},600,"swing",function(){e()})},i=function t(){J.stop().animate({width:"107%"},400,"swing")},a=function t(){E.stop().animate({height:"6px"},200,"linear")},e=function t(){B.removeClass("closed"),B.removeClass("inactive"),B.addClass("open")}}else{B.addClass("inactive"),E.stop().animate({height:"4px"},200,"linear",function(){s(),o()});var o=function t(){J.stop().animate({width:"-7%"},400,"swing")},s=function t(){B.stop().animate({top:"0px"},600,"swing",function(){c(),p(),u()})},c=function t(){F.stop().animate({top:"0px"},200,"swing")},p=function t(){H.stop().animate({top:"35px"},200,"swing")},u=function t(){B.removeClass("inactive"),B.removeClass("open"),B.addClass("closed")}}else if(B.hasClass("closed")){B.addClass("inactive"),I.stop().animate({top:"11px"},400,"swing",function(){r(),l(),f()});var r=function t(){B.stop().animate({top:"185px"},600,"swing",function(){m()})},l=function t(){J.stop().animate({width:"107%"},400,"swing")},f=function t(){E.stop().animate({height:"4px"},200,"linear")},m=function t(){B.removeClass("closed"),B.removeClass("inactive"),B.addClass("open")}}else{B.addClass("inactive"),E.stop().animate({height:"2px"},200,"linear",function(){v(),d()});var d=function t(){J.stop().animate({width:"-7%"},400,"swing")},v=function t(){B.stop().animate({top:"0px"},600,"swing",function(){w(),g(),h()})},w=function t(){F.stop().animate({top:"0px"},200,"swing")},g=function t(){H.stop().animate({top:"22px"},200,"swing")},h=function t(){B.removeClass("inactive"),B.removeClass("open"),B.addClass("closed")}}});var rt=function t(){function n(t){var n=i.scrollTop(),a=n+i.height(),e=$(t).offset().top;return e+$(t).height()<=a&&e>=n}var a=function t(){$(window).scrollTop()>=100&&mt(),!0===n(v)?(lt("#services"),ft("#about"),ft("#contact"),ft("#projects"),dt()):ft("#services"),!0===n(f)&&(lt("#about"),ft("#services"),ft("#contact"),ft("#projects"),vt()),!0===n(z)&&(lt("#projects"),ft("#about"),ft("#contact"),ft("#services"),wt()),!0===n(b)&&gt(),!0===n(k)&&(lt("#contact"),ft("#about"),ft("#projects"),ft("#services"),ht())};i.on("scroll",a)},lt=function t(n){var i=$('.nav-link[href="'+n+'"] > .nav-bg');$('.nav-link[href="'+n+'"] > .nav-span').addClass("animate-nav"),i.addClass("animate-nav")},ft=function t(n){var i=$('.nav-link[href="'+n+'"] > .nav-bg');$('.nav-link[href="'+n+'"] > .nav-span').removeClass("animate-nav"),i.removeClass("animate-nav")},mt=function t(){u.animate({opacity:"1"},800),r.animate({opacity:"1"},800),T.animate({opacity:"1"},800)},dt=function t(){d.animate({left:"0",opacity:"1"},800),m.animate({left:"0",opacity:"1"},800)},vt=function t(){l.animate({left:"0",opacity:"1"},800),f.animate({left:"0",opacity:"1"},800)},wt=function t(){x.animate({left:"0",opacity:"1"},800),h.animate({left:"0",opacity:"1"},800)},gt=function t(){C.animate({width:"100%"},800)},ht=function t(){y.animate({left:"0",opacity:"1"},800),k.animate({left:"0",opacity:"1"},800)};rt()}()});