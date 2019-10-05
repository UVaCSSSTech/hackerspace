import React from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <head>
        <title>UVaCSSS</title>
        <link rel = "icon" type = "image/png" href = "images/cssslogo.png">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700|Playfair+Display:400,700,900" rel="stylesheet">

        <link rel="stylesheet" href="fonts/icomoon/style.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/magnific-popup.css">
        <link rel="stylesheet" href="css/jquery-ui.css">
        <link rel="stylesheet" href="css/owl.carousel.min.css">
        <link rel="stylesheet" href="css/owl.theme.default.min.css">
        <link rel="stylesheet" href="css/bootstrap-datepicker.css">
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
        <link rel="stylesheet" href="css/aos.css">>
        <script src="vendor/react.js"></script>


        <link rel="stylesheet" href="css/style.css">
      </head>
      <body>

      <div className="site-wrap">

        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <header className="site-navbar pt-3" role="banner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-6 col-xl-6 logo">
                <img src='images/cssslogo.png', style='height:150px;'>
                <h1 className="mb-0"><a href="index.html" className="text-red h2 mb-0">UVaCSSS</a></h1>
                <div className="social-icons d-inline">
                    <a href="https://www.instagram.com/uvacsss/"><span className="icon-facebook"></span></a>
                    <a href="#"><span className="icon-twitter"></span></a>
                    <a href="#"><span className="icon-instagram"></span></a>
                  </div>
              </div>

              <div className="col-12 d-none d-xl-block border-top">
                <nav className="site-navigation text-center " role="navigation">
                  <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block mb-0">
                    <li className="active"><a href="index.html">About</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="index.html">Activities</a></li>
                    <li><a href="category.html">Technology</a></li>
                    <li><a href="category.html">Latest</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>


        <div className="site-cover site-cover-sm same-height" style='overflow:hidden'>
            <img src='images/csssfamily.JPG' style="width:100%; ">
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
                <div className="col-12 section-heading" style='text-align: center; position: relative;'><h2>About us</h2></div>
            </div>
          </div>
        </div>

        <div className="site-section">
            <div className="container">
              <div className="row mb-5">
                  <div className="col-12 section-heading" style='text-align: center; position: relative;'><h2>Subscribe to our news letter</h2></div>
              </div>
            </div>
          </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 section-heading"><h2>Popular Posts</h2></div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded"></a>
                  <span className="post-category text-white bg-success mb-3">Nature</span>
                  <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                  <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid"></figure>
                    <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                </div>
              </div>
              <div className="col-lg-6 pl-lg-4">
                <div className="entry3 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-success mb-3">Nature</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio.</p>
                  </div>
                </div>

                <div className="entry3 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-success mb-3">Nature</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio.</p>
                  </div>
                </div>

                <div className="entry3 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_4.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-success mb-3">Nature</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="section-heading mb-5 d-flex align-items-center">
                  <h2>Sports</h2>
                  <div className="ml-auto"><a href="#" className="view-all-btn">View All</a></div>
                </div>
                <div className="entry2 mb-5">
                  <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded"></a>
                  <span className="post-category text-white bg-primary mb-3">Sports</span>
                  <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                  <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid"></figure>
                    <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio. laborum error in eum id veritatis quidem neque nesciunt at architecto nam ullam, officia unde dolores officiis veniam</p>
                </div>


                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="#"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-primary mb-3">Sports</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>

                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_4.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-primary mb-3">Sports</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>

                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-primary mb-3">Sports</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="section-heading mb-5 d-flex align-items-center">
                  <h2>Travel</h2>
                  <div className="ml-auto"><a href="#" className="view-all-btn">View All</a></div>
                </div>
                <div className="entry2 mb-5">
                  <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded"></a>
                  <span className="post-category text-white bg-danger mb-3">Travel</span>
                  <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                  <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid"></figure>
                    <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio. laborum error in eum id veritatis quidem neque nesciunt at architecto nam ullam, officia unde dolores officiis veniam</p>
                </div>


                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-danger mb-3">Travel</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>

                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-danger mb-3">Travel</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>

                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-danger mb-3">Travel</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="section-heading mb-5 d-flex align-items-center">
                  <h2>Lifestyle</h2>
                  <div className="ml-auto"><a href="#" className="view-all-btn">View All</a></div>
                </div>
                <div className="entry2 mb-5">
                  <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid rounded"></a>
                  <span className="post-category text-white bg-warning mb-3">Lifestyle</span>
                  <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                  <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid"></figure>
                    <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio. laborum error in eum id veritatis quidem neque nesciunt at architecto nam ullam, officia unde dolores officiis veniam</p>
                </div>


                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_4.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-warning mb-3">Lifestyle</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>

                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-warning mb-3">Lifestyle</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>

                <div className="entry4 d-block d-sm-flex">
                  <figure className="figure order-2"><a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded"></a></figure>
                  <div className="text mr-4 order-1">
                    <span className="post-category text-white bg-warning mb-3">Lifestyle</span>
                    <h2><a href="single.html">The 20 Biggest Fintech Companies In America 2019</a></h2>
                    <span className="post-meta mb-3 d-block">May 12, 2019</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="site-footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-4">
                <h3 className="footer-heading mb-4">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
              </div>
              <div className="col-md-3 ml-auto">
                <h3 className="footer-heading mb-4">Quick Menu</h3>
                <ul className="list-unstyled float-left mr-5">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Advertise</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Subscribes</a></li>
                </ul>
                <ul className="list-unstyled float-left">
                  <li><a href="#">Travel</a></li>
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Sports</a></li>
                  <li><a href="#">Nature</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">Subscribe</h3>
                  <form action="" method="post" className="form-footer-subscribe">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control">
                      <input type="submit" className="btn btn-primary text-white" value="Subscribe">
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className="footer-heading mb-4">Connect With Us</h3>
                  <p>
                    <a href="#"><span className="icon-facebook pt-2 pr-2 pb-2 pl-0"></span></a>
                    <a href="#"><span className="icon-twitter p-2"></span></a>
                    <a href="#"><span className="icon-instagram p-2"></span></a>
                    <a href="#"><span className="icon-rss p-2"></span></a>
                    <a href="#"><span className="icon-envelope p-2"></span></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <p>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <script src="{% static "frontend/main.js" %}"></script>
      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/jquery-migrate-3.0.1.min.js"></script>
      <script src="js/jquery-ui.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.stellar.min.js"></script>
      <script src="js/jquery.countdown.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/bootstrap-datepicker.min.js"></script>
      <script src="js/aos.js"></script>

      <script src="js/main.js"></script>

      </body>
    )
  }
}

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
