	window.onload = initDivMouseOver;
	function initDivMouseOver()   {
		var div1 = document.getElementById("green-div-1");
		var img1 = document.getElementById("img-icon-1");
		var p1 = document.getElementById("p1");
		var div2 = document.getElementById("green-div-2");
		var img2 = document.getElementById("img-icon-2");
		var p2 = document.getElementById("p2");
		var div3 = document.getElementById("green-div-3");
		var img3 = document.getElementById("img-icon-3");
		var p3 = document.getElementById("p3");
		var div4 = document.getElementById("green-div-4");
		var img4 = document.getElementById("img-icon-4");
		var p4 = document.getElementById("p4");
		var div5 = document.getElementById("green-div-5");
		var img5 = document.getElementById("img-icon-5");
		var p5 = document.getElementById("p5");
		var div6 = document.getElementById("green-div-6");
		var img6 = document.getElementById("img-icon-6");
		var p6 = document.getElementById("p6");
		
		var mainDiv = document.getElementById("section4-main-div");
		var section4div = document.getElementById("section4-div");
		var mainP = document.getElementById("section4-p-main");
		var h1 = document.getElementById("section4-h1");
		var button = document.getElementById("section4-button");
		
		var mainDiv2 = document.getElementById("section4-main-div-2");
		var section4div2 = document.getElementById("section4-div-2");
		var mainP2 = document.getElementById("section4-p-main-2");
		var h12 = document.getElementById("section4-h1-2");
		var button2 = document.getElementById("section4-button-2");
		
		var mainDiv3 = document.getElementById("section4-main-div-3");
		var section4div3 = document.getElementById("section4-div-3");
		var mainP3 = document.getElementById("section4-p-main-3");
		var h13 = document.getElementById("section4-h1-3");
		var button3 = document.getElementById("section4-button-3");
		
		var mainDiv4 = document.getElementById("section4-main-div-4");
		var section4div4 = document.getElementById("section4-div-4");
		var mainP4 = document.getElementById("section4-p-main-4");
		var h14 = document.getElementById("section4-h1-4");
		var button4 = document.getElementById("section4-button-4");
//SECTION-1-DIV-1
		div1.mouseIsOver = false;
		div1.onmouseover = function()   {
		    this.mouseIsOver = true;
			img1.src = "img/section1/code-green-icon.png";
			p1.style.color = "#545454";
		};
		div1.onmouseout = function()   {
		    this.mouseIsOver = false;
			img1.src = "img/section1/code-icon.png";
			p1.style.color = "#a19fa0";
		}
//SECTION-1-DIV-2
		div2.mouseIsOver = false;
		div2.onmouseover = function()   {
		    this.mouseIsOver = true;
			img2.src = "img/section1/computer-green-icon.png";
			p2.style.color = "#545454";
		};
		div2.onmouseout = function()   {
		    this.mouseIsOver = false;
			img2.src = "img/section1/computer-icon.png";
			p2.style.color = "#a19fa0";
		}
//SECTION-1-DIV-3
		div3.mouseIsOver = false;
		div3.onmouseover = function()   {
		    this.mouseIsOver = true;
			img3.src = "img/section1/wifi-green-icon.png";
			p3.style.color = "#545454";
		};
		div3.onmouseout = function()   {
		    this.mouseIsOver = false;
			img3.src = "img/section1/wifi-icon.png";
			p3.style.color = "#a19fa0";
		}
//SECTION-1-DIV-4
		div4.mouseIsOver = false;
		div4.onmouseover = function()   {
		    this.mouseIsOver = true;
			img4.src = "img/section1/eye-green-icon.png";
			p4.style.color = "#545454";
		};
		div4.onmouseout = function()   {
		    this.mouseIsOver = false;
			img4.src = "img/section1/eye-icon.png";
			p4.style.color = "#a19fa0";
		}
//SECTION-1-DIV-5
		div5.mouseIsOver = false;
		div5.onmouseover = function()   {
		    this.mouseIsOver = true;
			img5.src = "img/section1/camera-green-icon.png";
			p5.style.color = "#545454";
		};
		div5.onmouseout = function()   {
		    this.mouseIsOver = false;
			img5.src = "img/section1/camera-icon.png";
			p5.style.color = "#a19fa0";
		}
//SECTION-1-DIV-6
		div6.mouseIsOver = false;
		div6.onmouseover = function()   {
		    this.mouseIsOver = true;
			img6.src = "img/section1/brightness-green-icon.png";
			p6.style.color = "#545454";
		};
		div6.onmouseout = function()   {
		    this.mouseIsOver = false;
			img6.src = "img/section1/brightness-icon.png";
			p6.style.color = "#a19fa0";
		}
//SECTION-4-DIV-1
		mainDiv.mouseIsOver = false;
		mainDiv.onmouseover = function()   {
		    this.mouseIsOver = true;
			
			section4div.style.border = "1px solid #1dde85";
			mainP.style.color = "#1dde85";
			
			h1.style.border = "none";
			h1.style.color = "#fffcf4";
			h1.style.backgroundColor = "#1dde85";
			
			button.style.backgroundColor = "#1dde85";
			button.style.color = "#fffcf4";
			button.style.border = "none";
			button.style.borderRadius = "5px";
		};
		mainDiv.onmouseout = function()   {
		    this.mouseIsOver = false;
			
			section4div.style.border = "none";
			mainP.style.color = "#989799";
			
			h1.style.border = "1px solid #c4c2c0";
			h1.style.color = "#454546";
			h1.style.backgroundColor = "#fffcf4";
			
			button.style.backgroundColor = "#fffcf4";
			button.style.color = "#454546";
			button.style.border = "1px solid #989799";
		}
//SECTION-4-DIV-2
		mainDiv2.mouseIsOver = false;
		mainDiv2.onmouseover = function()   {
		    this.mouseIsOver = true;
			
			section4div2.style.border = "1px solid #1dde85";
			mainP2.style.color = "#1dde85";
			
			h12.style.border = "none";
			h12.style.color = "#fffcf4";
			h12.style.backgroundColor = "#1dde85";
			
			button2.style.backgroundColor = "#1dde85";
			button2.style.color = "#fffcf4";
			button2.style.border = "none";
			button2.style.borderRadius = "5px";
		};
		mainDiv2.onmouseout = function()   {
		    this.mouseIsOver = false;
			
			section4div2.style.border = "none";
			mainP2.style.color = "#989799";
			
			h12.style.border = "1px solid #c4c2c0";
			h12.style.color = "#454546";
			h12.style.backgroundColor = "#fffcf4";
			
			button2.style.backgroundColor = "#fffcf4";
			button2.style.color = "#454546";
			button2.style.border = "1px solid #989799";
		}
//SECTION-4-DIV-3
		mainDiv3.mouseIsOver = false;
		mainDiv3.onmouseover = function()   {
			this.mouseIsOver=true;
			
			section4div3.style.border = "1px solid #1dde85";
			mainP3.style.color = "#1dde85";
			
			h13.style.border = "none";
			h13.style.color = "#fffcf4";
			h13.style.backgroundColor = "#1dde85";
			
			button3.style.backgroundColor = "#1dde85";
			button3.style.color = "#fffcf4";
			button3.style.border = "none";
			button3.style.borderRadius = "5px";
		};
		mainDiv3.onmouseout = function()   {
		    this.mouseIsOver = false;
			
			section4div3.style.border = "none";
			mainP3.style.color = "#989799";
			
			h13.style.border = "1px solid #c4c2c0";
			h13.style.color = "#454546";
			h13.style.backgroundColor = "#fffcf4";
			
			button3.style.backgroundColor = "#fffcf4";
			button3.style.color = "#454546";
			button3.style.border = "1px solid #989799";
		}
//SECTION-4-DIV-4
		mainDiv4.mouseIsOver = false;
		mainDiv4.onmouseover = function()   {
		    this.mouseIsOver = true;
			
			section4div4.style.border = "1px solid #1dde85";
			mainP4.style.color = "#1dde85";
			
			h14.style.border = "none";
			h14.style.color = "#fffcf4";
			h14.style.backgroundColor = "#1dde85";
			
			button4.style.backgroundColor = "#1dde85";
			button4.style.color = "#fffcf4";
			button4.style.border = "none";
			button4.style.borderRadius = "5px";
		};
		mainDiv4.onmouseout = function()   {
		    this.mouseIsOver = false;
			
			section4div4.style.border = "none";
			mainP4.style.color = "#989799";
			
			h14.style.border = "1px solid #c4c2c0";
			h14.style.color = "#454546";
			h14.style.backgroundColor = "#fffcf4";
			
			button4.style.backgroundColor = "#fffcf4";
			button4.style.color = "#454546";
			button4.style.border = "1px solid #989799";
		}
	}

$('.category-item').click(function(){
    const category = $(this).attr('id');
    if(category==="all") {
      $('.portfolio-item').addClass('hide');
      setTimeout(function(){
        $('.portfolio-item').removeClass('hide');
      }, 300);
    } else {
      $('.portfolio-item').addClass('hide');
      setTimeout(function(){
              let name = "." + category;
              $(name).removeClass('hide');
            }, 300);
    }
  });

$(document).ready(function(){
        $("#btt-for-jquery").click(function(){
            $("#more").toggleClass("opened");
            $(this).addClass("unvisible");
        });
    });