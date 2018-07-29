function getEvent(done){
    $.get("http://localhost:8000/newsfeed/apinewsfeed", (data) => {
        done(data)
    })
}

function refreshEvents(events){
    events.forEach((event) => {

        $("#container-events").append(`
        <div class="container padding">
        <div class="row welcome text-center">
            <div class="col-12">
                <img src="${event.image}">
            </div>
        
            <div class="col-12">
                <h1 class="display-5">${event.title}</h1>
            </div>
            <hr>
            <div class="col-12">
                <h6 class="text-left ml-5"> ${even.publish}</h6>
                <p class="lead ml-5">${event.markup}</p>
            </div>
        </div>
    </div>
        `)
            
    })

    $("#container-events").append(
        ` <!--Contact Us-->
    
        <footer id="contactUs">
        <h3 class="text-center">Contact Us</h3>
        <p class="text-center">Email or Call us</p>
        <p class="text-center">Email: <strong>contact@opendev.test</strong></p>
        <p class="text-center">Phone: <strong>+91-7777777777</strong></p>
        
        <div class="container-fluid padding">
            <div class="row text-center padding">
                <div class="col-12 padding">
                    <a href="#"><i class="fab fa-facebook social" ></i></a>
                    <a href="#"><i class="fab fa-twitter social" ></i></a>
                    <a href="#"><i class="fab fa-google-plus-g social" ></i></a>
                    <a href="#"><i class="fab fa-instagram social" ></i></a>
                    <a href="#"><i class="fab fa-youtube social" ></i></a>
                </div>
            </div>
        </div>
        </footer>
        `
    )
}


function toggleActive(newActiveTab){
    $(".navbar-nav > li > a").removeClass("active")
    $(`#${newActiveTab}`).addClass("active")
    $(".contents").hide()
    $(`#container-${newActiveTab}`).empty()
    $(`#container-${newActiveTab}`).show() 
}

function getHome () {
    $("#container-home").append(`
       <div class="contents" id="tab-home">
       <!--Image Slides-->
       <div id="slides" class="carousel slide" data-ride="carousel">
           <ul class="carousel-indicators">
               <li data-target="#slides" data-slide-to="0" class="active"></li>
               <li data-target="#slides" data-slide-to="1"></li>
               <li data-target="#slides" data-slide-to="2"></li>
           </ul>
           <div class="carousel-inner">
               <div class="carousel-item active">
                   <img src="img/img-1.jpg" alt="">
                   <div class="carousel-caption">
                       <h1 class="display-3">Community Website</h1>
                       <h4>An Open Source Community</h4>
                       <a href="#" class="btn btn-outline-light btn-lg">Join Now</a>
                   </div>
               </div>
               <div class="carousel-inner">
                   <div class="carousel-item">
                       <img src="img/img-2.jpg" alt="">
                   </div>
                   
                   <div class="carousel-inner">
                       <div class="carousel-item">
                           <img src="img/img-3.jpeg" alt="">
                       </div>
                   </div>
               </div>
           </div>
       </div>
   
       <!--Jumbotron-->
       <div class="container-fluid">
           <div class="row jumbotron">
               
               <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                   <p class="lead">
                    A community for Computer Science Enthusiasts looking for a place to Learn, Grow and Develop their Skills in an environment of like minded peers.
                   </p>
               </div>
   
               <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                   <a href="" class="btn btn-outline-secondary btn-lg">Join Discord</a>
               </div>
           </div>
       </div>
   </div>

   <!--Parallax-->
    
   <!--Welcome section-->
   <div class="container-fluid padding">
        <div class="row welcome text-center">
            <div class="col-12">
                <h1 class="display-4">What We look for</h1>
            </div>
            <hr>
            <div class="col-12">
                <p class="lead">
                    We aim to develop a community where people from all sorts of domains, be it Web development, Android, IOS, Machine Learning and AI, or any other domain can share their ideas, and learn new skills and technologies.
                    There is no better way to learn, than to learn by contributing to a live project in an environment of like-minded peers.
                    We are determined to create an environment where people can learn from their peers as well as share their knowledge with others, to create an environment of learning.       
                </p>
            </div>
        </div>
    </div>

    <!--icons-->
    <div class="container-fluid padding">
        <div class="row text-center padding">
           <div class="col-12 ">
               <i class="fab fa-node-js icons"></i>
               <i class="fab fa-python icons"></i>
               <i class="fab fa-android icons"></i>
               <i class="fab fa-html5 icons"></i>
               <i class="fab fa-css3-alt icons"></i>
               <i class="fab fa-js-square icons"></i>
           </div>
        </div>
    </div>

   
   <!--Emoji-->
   
   <button class="fun btn btn-outline-secondary" data-toggle="collapse" data-target="#emoji">Click for Fun</button>
   <div id="emoji" class="collapse">
       <div class="container-fluid padding">
           <div class="row text-center">
               <div class="col-sm-6 col-md-3">
                   <img src="img/gif/panda.gif" alt="" class="gif">
               </div>
               
               <div class="col-sm-6 col-md-3">
                   <img src="img/gif/poo.gif" alt="" class="gif">
               </div>
               
               <div class="col-sm-6 col-md-3">
                   <img src="img/gif/unicorn.gif" alt="" class="gif">
               </div>
               
               <div class="col-sm-6 col-md-3">
                   <img src="img/gif/chicken.gif" alt="" class="gif">
               </div>
           
           </div>
       </div>
   </div>

   <!--footer-->

   <footer id="contactUs">
        <h3 class="text-center">Contact Us</h3>
        <p class="text-center">Email or Call us</p>
        <p class="text-center">Email: <strong>contact@opendev.test</strong></p>
        <p class="text-center">Phone: <strong>+91-7777777777</strong></p>

        <div class="container-fluid padding">
            <div class="row text-center padding">
                <div class="col-12 padding">
                    <a href="#"><i class="fab fa-facebook social" ></i></a>
                    <a href="#"><i class="fab fa-twitter social" ></i></a>
                    <a href="#"><i class="fab fa-google-plus-g social" ></i></a>
                    <a href="#"><i class="fab fa-instagram social" ></i></a>
                    <a href="#"><i class="fab fa-youtube social" ></i></a>
                </div>
            </div>
        </div>
    </footer>
   
       `)
}


function getAbout(){
    $("#container-about").append(`
    <div class="container-fluid padding about">
    <div class="row padding">
    <div class="col-lg-6" >
        <h2>Our Mission</h2>
        <hr>
        <p class="lead">
        We are a group of Computer Science Enthusiasts. We are always excited about new technologies and innovations, and look forward towards creating something in the field of Technology that can solve problems. We started off with our Computer Science degree in the year 2017, with the aim to fulfill our passion for Computer Science. So, throughout our first year we were looking for a place to share our ideas and to contribute to some Computer Science projects, but sadly we couldn't find one. This led us to the idea of establishing our own Community where people can learn from their peers, as all of us are good at something.  
        So, with this community we aim at providing an environment to every Computer Science enthusiast, who is looking for a place to share ideas and learn. The community also aims at promoting Open Source Development, as contributing to Open Source projects is one of the best ways to learn. We would try our best to conduct regular workshops on latest technology to keep the community updated with latest technologies and practices.   
        We look for people who are passionate about Computer Science, and would love to have them as part of the Communuty!
        </p>
    </div>

        <div class="col-lg-6">
            <img src="img/balloon.png" class="img-fluid svg" alt="">
        </div>
    
    </div>
    </div> 
    
    <!--Contact Us-->

<footer id="contactUs">
<h3 class="text-center">Contact Us</h3>
<p class="text-center">Email or Call us</p>
<p class="text-center">Email: <strong>contact@opendev.test</strong></p>
<p class="text-center">Phone: <strong>+91-7777777777</strong></p>

<div class="container-fluid padding">
    <div class="row text-center padding">
        <div class="col-12 padding">
            <a href="#"><i class="fab fa-facebook social" ></i></a>
            <a href="#"><i class="fab fa-twitter social" ></i></a>
            <a href="#"><i class="fab fa-google-plus-g social" ></i></a>
            <a href="#"><i class="fab fa-instagram social" ></i></a>
            <a href="#"><i class="fab fa-youtube social" ></i></a>
        </div>
    </div>
</div>
</footer>
    `)
}


$(function () {
    toggleActive("home")
    getHome()

    $("#home").click(() => {
        toggleActive("home")
        getHome()
    })
    
    $("#about").click(() => {
        toggleActive("about")
        getAbout()
    })
    
    $("#events").click(() => {
        toggleActive("events")
        getEvent(refreshEvents)
    })
    
})
    