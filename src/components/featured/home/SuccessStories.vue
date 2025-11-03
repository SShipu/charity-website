<template>
    <section class="flat-row flat-later-new">
        <div class="container">
            <div class="row justify-center">
                <div class="col-md-8 col-md-offset-2">
                    <div class="title-section">
                        <h4>Everything Changes</h4>
                        <h2><span>Success</span> Stories</h2>
                    </div>
                </div><!-- /.col-md-8 -->
            </div><!-- /.row -->

            <div class="row">
                <div class="col-md-12">
                    <div class="later-new">
                        <div class="post">
                            <div class="img style1">
                                <a href="#" class="text-dark text-decoration-none"><img src="/images/about/index-1/9.jpg" alt="image"></a>
                                <span></span>
                            </div>

                            <div class="post-later-new">
                                <div class="title-later-new">
                                    <p>Social</p>
                                </div>
                                <h4 class="title-post">
                                    <a href="#" class="text-dark text-decoration-none">When you got your time </a>
                                </h4>
                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <div class="more">
                                        <a href="#" class="text-dark text-decoration-none">Read More</a>
                                    </div><!-- /more -->
                                </div> <!-- entry-content -->
                            </div><!-- /post-later-new -->      
                        </div> <!-- .post -->

                        <div class="post">
                            <div class="post-later-new">
                                <div class="title-later-new">
                                    <p>Education</p>
                                </div>
                                <h4 class="title-post">
                                    <a href="#" class="text-dark text-decoration-none">Sed teugiat eros at con vallis</a>
                                </h4>
                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <div class="more">
                                        <a href="#" class="text-dark text-decoration-none">Read More</a>
                                    </div><!-- /more -->
                                </div> <!-- entry-content -->
                            </div><!-- /post-later-new --> 

                            <div class="img style2">
                                <a href="#" class="text-dark text-decoration-none"><img src="/images/about/index-1/10.jpg" alt="image"></a>
                                <span></span>
                            </div>
     
                        </div> <!-- .post -->

                        <div class="post style1">
                            <div class="img style1">
                                <a href="#" class="text-dark text-decoration-none"><img src="/images/about/index-1/11.jpg" alt="image"></a>
                                <span></span>
                            </div>

                            <div class="post-later-new">
                                <div class="title-later-new">
                                    <p>Lifestyle</p>
                                </div>
                                <h4 class="title-post">
                                    <a href="#" class="text-dark text-decoration-none">Bempor feugiat eros aonvaise</a>
                                </h4>
                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <div class="more">
                                        <a href="#" class="text-dark text-decoration-none">Read More</a>
                                    </div><!-- /more -->
                                </div> <!-- entry-content -->
                            </div><!-- /post-later-new -->      
                        </div> <!-- .post -->
                    </div> <!-- later-new -->
                </div> <!-- .col-md-12 -->
            </div> <!-- .row -->            
        </div>
    </section>
  <!-- <section class="flat-row flat-later-new py-5">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <div class="title-section">
            <h4>Everything Changes</h4>
            <h2><span>Latest</span> News</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="later-new">
            <div 
              class="post mb-4" 
              v-for="(news, index) in newsList" 
              :key="index"
              :class="{'style1': news.style1}"
            >
              <div v-if="news.imgPosition === 'left'" class="img style1 me-3 float-start">
                <a :href="news.link"><img :src="news.img" alt="image"></a>
                <span></span>
              </div>

              <div class="post-later-new">
                <div class="title-later-new">
                  <p>{{ news.category }}</p>
                </div>
                <h4 class="title-post">
                  <a :href="news.link" class="text-dark text-decoration-none">{{ news.title }}</a>
                </h4>
                <div class="entry-content">
                  <p>{{ news.description }}</p>
                  <div class="more">
                    <a :href="news.link">Read More</a>
                  </div>
                </div>
              </div>

              <div v-if="news.imgPosition === 'right'" class="img style2 ms-3 float-end">
                <a :href="news.link"><img :src="news.img" alt="image"></a>
                <span></span>
              </div>

              <div class="clearfix"></div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
export default {
  name: "LatestNews",
  data() {
    return {
      newsList: [
        {
          category: "Social",
          title: "When you got your time",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "/images/about/index-1/9.jpg",
          link: "#",
          imgPosition: "left", // left or right
          style1: false,
        },
        {
          category: "Education",
          title: "Sed teugiat eros at con vallis",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "/images/about/index-1/10.jpg",
          link: "#",
          imgPosition: "right",
          style1: false,
        },
        {
          category: "Lifestyle",
          title: "Bempor feugiat eros aonvaise",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "/images/about/index-1/11.jpg",
          link: "#",
          imgPosition: "left",
          style1: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.row.justify-center {
  display: flex;
  justify-content: center;
}
/* .title-post a {
  color: #000;
  text-decoration: none;
}
.img {
  max-width: 200px;
}
.post {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.img.style1, .img.style2 {
  flex-shrink: 0;
}
.post-later-new {
  flex: 1;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
} */
</style>
