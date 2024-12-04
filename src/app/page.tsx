import Banner from "@/components/banner";
import FirstContainer from "@/components/first-container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <FirstContainer />
      {/* functiosn */}
      {/* <script>

const scrollContainer = document.querySelector('.cart-container');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

// Scroll left function
scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: 'smooth'
    });
});

// Scroll right function
scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: 'smooth'
    });
});
</script> */}

      <Footer />
      {/* 

<!-- JS file link -->
<script src="index.js"></script>
<!-- Bootstarp Link -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> */}
    </main>
  );
};

export default Home;
