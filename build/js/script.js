$(document).ready(function(){$(window).scroll(function(){0!=$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function(){$("body, html").animate({scrollTop:0},800)}),$("#toTop").click(function(){'<i class="fas fa-arrow-up"></i>'==$(this).html()&&$(this).html('<i class="fas fa-rocket"></i>')}),$("#toTop").mouseover(function(){$(this).css("background-color","yellow")}),$("#toTop").mouseout(function(){$(this).css("background-color","#69d2e7")})});