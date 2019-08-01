function validateForm() {
 	var missing = []
	if($("#name").val() == "")
		missing.push("name")
	if($("#email").val() == "")
		missing.push("email")
	if($("#message").val() == "")
		missing.push("message")
	if(missing.length>0) {
		$("#formerrors").css("color", "red")
		$("#formerrors").html("You are missing: " + missing)
	} else {
		$("#formerrors").css("color", "green")
		$("#formerrors").html("Thank you for submitting!")
	}
}

function validateForm1() {
	$("#formerrors").css("color", "red")
	$("#formerrors").html("You are missing: missed")
}


function validateForm2() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out 2");
    return false;
  }
}
$(window).scroll(function() {
	var height = $(window).scrollTop();
	if (height > 200) {
		$('#back2Top').fadeIn();
	} else {
	  $('#back2Top').fadeOut();
	}
	});
	$(document).ready(function() {
 	 $("#back2Top").click(function(event) {
	event.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
	  });
});

/*
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var ampm;

	if (hour > 12) {
		ampm = "PM";
		hour = hour - 12;
	}
	else {
		ampm = "AM";
	}

var clock = (hour + ":" + minute + ":" + second + " " + ampm)

document.getElementById("clock").innerHTML = "The time is: "+ clock;*/

$(document).ready(function() {
    $("#aboutnav").mouseenter(function(event) {
        $("#homenav #leftborderbot").css('height', '82px');
        $("#homenav #leftborderbot").css('left', '0');
        $("#homenav #borderbot").css('width', '33%');
        $("#homenav #borderbot").css('left', '0%');
        $("#homenav #topborderbot").css('width', "33%");
        $("#homenav #topborderbot").css('right', "67%");
        $("#homenav #rightborderbot").css('right', "67%");
        $("#homenav #rightborderbot").css('height', "82px");
    });
    $("#aboutnav").mouseleave(function(event) {
        $("#homenav #leftborderbot").css('height', '0px');
        $("#homenav #borderbot").css('width', '0');
        $("#homenav #rightborderbot").css('height', '0px');
        $("#homenav #topborderbot").css('width', '0%');
    });
    $("#worknav").mouseenter(function(event) {
        $("#homenav #leftborderbot").css('height', '82px');
        $("#homenav #leftborderbot").css('left', '33%');
        $("#homenav #borderbot").css('width', '33%');
        $("#homenav #borderbot").css('left', '33%');
        $("#homenav #topborderbot").css('width', "33%");
        $("#homenav #topborderbot").css('right', "34%");
        $("#homenav #rightborderbot").css('right', "34%");
        $("#homenav #rightborderbot").css('height', "82px");

        /*show dropdown*/

        $("#workdropdown").slideDown("fast");

    });
    $("#worknav").mouseleave(function(event) {
        $("#homenav #leftborderbot").css('height', '0px');
        $("#homenav #borderbot").css('width', '0');
        $("#homenav #rightborderbot").css('height', '0px');
        $("#homenav #topborderbot").css('width', '0%');

        $("#workdropdown").slideUp("fast");
    });
    $("#contactnav").mouseenter(function(event) {
        $("#homenav #leftborderbot").css('height', '82px');
        $("#homenav #leftborderbot").css('left', '66%');
        $("#homenav #borderbot").css('width', '34%');
        $("#homenav #borderbot").css('left', '66%');
        $("#homenav #topborderbot").css('width', "34%");
        $("#homenav #topborderbot").css('right', "0%");
        $("#homenav #rightborderbot").css('right', "0%");
        $("#homenav #rightborderbot").css('height', "82px");
    });
    $("#contactnav").mouseleave(function(event) {
        $("#homenav #leftborderbot").css('height', '0px');
        $("#homenav #borderbot").css('width', '0');
        $("#homenav #rightborderbot").css('height', '0px');
        $("#homenav #topborderbot").css('width', '0%');
    });
});

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 100) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 600;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 4px solid #ea4a67}";
        document.body.appendChild(css);
    };
$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slide2");
        }
    });
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slide6");
        }
    });
    if($(window).width() > 768) {
        var winTop = $(window).scrollTop();
         $(".artleft").each(function(){
            $(this).css({
            'margin-top' : -winTop/200 + "vh"
            });
        });
        $(".artright").each(function(){
            $(this).css({
            'margin-top' : 50 + winTop/200 + "vh"
            });
        });
    }
  });

function toggleSection() {
    var secid = event.currentTarget.parentNode.id;
    $("#" + secid + " .hiddensec").slideToggle(500);
    $("#" + secid + " .line1").toggleClass("short");
}

/*
function rotate(x) {
    x.classList.toggle("change");
}

$(window).scroll(function() {
    $("#sec1img").css({
    'margin-top' : ($(this).scrollTop())/3
    });
    $("#contactimg").css({
    'margin-top' : -30 + ($(this).scrollTop())/70 + "%"
    });
});

// set up global javascript variables
*/
var canvas, gl; // canvas and webgl context

var shaderScript;
var shaderSource;
var vertexShader; // Vertex shader.  Not much happens in that shader, it just creates the vertex's to be drawn on
var fragmentShader; // this shader is where the magic happens. Fragment = pixel.  Vertex = kind of like "faces" on a 3d model.  
var buffer;

var locationOfTime;
var locationOfResolution;

var startTime = new Date().getTime(); // Get start time for animating
var currentTime = 0;

function init() {
    // standard canvas setup here, except get webgl context
    canvas = document.getElementById('glscreen');
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // give WebGL it's viewport
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // kind of back-end stuff
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
        gl.ARRAY_BUFFER, 
        new Float32Array([
            -1.0, -1.0, 
            1.0, -1.0, 
            -1.0,  1.0, 
            -1.0,  1.0, 
            1.0, -1.0, 
            1.0,  1.0]), 
        gl.STATIC_DRAW
    ); // ^^ That up there sets up the vertex's used to draw onto. I think at least, I haven't payed much attention to vertex's yet, for all I know I'm wrong.

    shaderScript = document.getElementById("2d-vertex-shader");
    shaderSource = shaderScript.text;
    vertexShader = gl.createShader(gl.VERTEX_SHADER); //create the vertex shader from script
    gl.shaderSource(vertexShader, shaderSource);
    gl.compileShader(vertexShader);

    shaderScript   = document.getElementById("2d-fragment-shader");
    shaderSource   = shaderScript.text;
    fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //create the fragment from script
    gl.shaderSource(fragmentShader, shaderSource);
    gl.compileShader(fragmentShader);

    program = gl.createProgram(); // create the WebGL program.  This variable will be used to inject our javascript variables into the program.
    gl.attachShader(program, vertexShader); // add the shaders to the program
    gl.attachShader(program, fragmentShader); // ^^
    gl.linkProgram(program);     // Tell our WebGL application to use the program
    gl.useProgram(program); // ^^ yep, but now literally use it.
    
    locationOfResolution = gl.getUniformLocation(program, "u_resolution");
    locationOfTime = gl.getUniformLocation(program, "u_time");
    
    
    gl.uniform2f(locationOfResolution, canvas.width, canvas.height);
    gl.uniform1f(locationOfTime, currentTime);

    render();
}

function render() {
    var now = new Date().getTime();
    currentTime = (now - startTime) / 1000; // update the current time for animations
    
    
    gl.uniform1f(locationOfTime, currentTime); // update the time uniform in our shader

    window.requestAnimationFrame(render, canvas); // request the next frame

    positionLocation = gl.getAttribLocation(program, "a_position"); // do stuff for those vertex's
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

window.addEventListener('load', function(event){
    init();
});

window.addEventListener('resize', function(event){
    // just re-doing some stuff in the init here, to enable resizing.
    
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    locationOfResolution = gl.getUniformLocation(program, "u_resolution");
});








