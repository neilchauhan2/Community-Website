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
                   <img src="public/img/img-1.jpg" alt="">
                   <div class="carousel-caption">
                       <h1 class="display-3">Community Website</h1>
                       <h4>An Open Source Community</h4>
                       <a href="#" class="btn btn-outline-light btn-lg">Join Now</a>
                   </div>
               </div>
               <div class="carousel-inner">
                   <div class="carousel-item">
                       <img src="public/img/img-2.jpg" alt="">
                   </div>
                   
                   <div class="carousel-inner">
                       <div class="carousel-item">
                           <img src="public/img/img-3.jpeg" alt="">
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
        getEvents()
    })
    
    $("#suggestions").click(() => {
        toggleActive("suggestions")
        getSuggestions()
    })
    
    $("#contact").click(() => {
        toggleActive("contact")
        getContact()
    })
})
    