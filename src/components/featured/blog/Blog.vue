<template>
  <section class="main-content blog-post v1">
    <div class="container">
      <div class="row">
        <!-- Left: Blog Posts -->
        <div class="col-md-8">
          <div class="post-wrap">
            <article
              v-for="(post, index) in blogPosts"
              :key="index"
              class="post"
              :class="{ 'margin-bottom70px': index === blogPosts.length - 1 }"
            >
              <div class="entry-image">
                <img :src="post.image" :alt="post.title" />
              </div>
              <div class="content-post">
                <div class="title-education">
                  <p>{{ post.category }}</p>
                </div>
                <h4 class="title-post">
                  <a :href="post.link">{{ post.title }}</a>
                </h4>
                <div class="entry-meta">
                  <span class="author"><a href="#">{{ post.author }}</a></span>
                  <span class="date"><a href="#">{{ post.date }}</a></span>
                  <span class="comment"><a href="#">{{ post.comments }} Comments</a></span>
                </div>
                <div class="entry-content">
                  <p>{{ post.content }}</p>
                </div>
                <div class="more">
                  <a :href="post.link">Read More</a>
                </div>
                <ul class="flat-socials">
                  <li v-for="(icon, i) in post.socials" :key="i" :class="icon.name">
                    <a :href="icon.link"><i :class="icon.icon"></i></a>
                  </li>
                </ul>
              </div>
            </article>

            <!-- Pagination -->
            <div class="blog-pagination">
              <ul class="flat-pagination clearfix">
                <li class="prev"><a href="#"><i class="fa fa-angle-left"></i></a></li>
                <li v-for="(page, i) in pagination" :key="i" :class="{ active: page.active }">
                  <a href="#">{{ page.number }}</a>
                </li>
                <li class="next"><a href="#"><i class="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right: Sidebar -->
        <div class="col-md-4">
          <div class="sidebar">
            <!-- Search -->
            <div class="widget widget-search">
              <form @submit.prevent="onSearch">
                <div>
                  <input v-model="searchQuery" type="text" placeholder="Search" />
                  <input type="submit" value="" />
                </div>
              </form>
            </div>

            <!-- Recent Posts -->
            <div class="widget widget-recent-posts">
              <h5 class="widget-title">Recent Posts</h5>
              <ul class="recent-posts clearfix">
                <li v-for="(item, i) in recentPosts" :key="i">
                  <div class="thumb"><img :src="item.image" :alt="item.title" /></div>
                  <div class="text">
                    <a :href="item.link">{{ item.title }}</a>
                    <p>{{ item.date }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Categories -->
            <div class="widget widget-categories">
              <h5 class="widget-title">Categories</h5>
              <ul class="categories">
                <li v-for="(category, i) in categories" :key="i">
                  <a href="#">{{ category }}</a>
                </li>
              </ul>
            </div>

            <!-- Tags -->
            <div class="widget widget-tags">
              <h5 class="widget-title">Tags</h5>
              <ul class="tag-list">
                <li v-for="(tag, i) in tags" :key="i">
                  <a href="#">{{ tag }}</a>
                </li>
              </ul>
            </div>

            <!-- Archives -->
            <div class="widget widget-archives">
              <h5 class="widget-title">Archives</h5>
              <ul class="archives">
                <li v-for="(item, i) in archives" :key="i">
                  <a href="#">{{ item.month }}</a>
                  <span class="numb-right">({{ item.count }})</span>
                </li>
              </ul>
            </div>

            <!-- Instagram -->
            <div class="widget widget-instagram">
              <h5 class="widget-title">Instagram</h5>
              <div class="instagram-thumb clearfix">
                <div v-for="(img, i) in instagram" :key="i" class="thumb">
                  <a href="#"><img :src="img" alt="instagram" /></a>
                </div>
              </div>
            </div>

            <!-- Hello People -->
            <div class="widget widget-text">
              <h5 class="widget-title">Hello People</h5>
              <p>{{ helloText }}</p>
              <div class="more style1">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const onSearch = () => {
  console.log('Searching for:', searchQuery.value)
}

const blogPosts = ref([
  {
    image: 'images/blog/blog-1.jpg',
    category: 'Education',
    title: 'When you got your time write for us',
    link: 'blog-single.html',
    author: 'Juwel Khan',
    date: 'May 02, 2016',
    comments: 34,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cras id dui. Suspendisse potenti. Aenean tellus metus...',
    socials: [
      { name: 'facebook', icon: 'fa fa-facebook', link: '#' },
      { name: 'twitter', icon: 'fa fa-twitter', link: '#' },
      { name: 'google', icon: 'fa fa-google-plus', link: '#' },
      { name: 'linkedin', icon: 'fa fa-linkedin', link: '#' },
    ],
  },
  {
    image: 'images/blog/blog-2.jpg',
    category: 'Education',
    title: 'Aenean conv fringilla quam tate egs',
    link: '#',
    author: 'Juwel Khan',
    date: 'May 02, 2016',
    comments: 34,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    socials: [
      { name: 'facebook', icon: 'fa fa-facebook', link: '#' },
      { name: 'twitter', icon: 'fa fa-twitter', link: '#' },
      { name: 'google', icon: 'fa fa-google-plus', link: '#' },
      { name: 'linkedin', icon: 'fa fa-linkedin', link: '#' },
    ],
  },
  // Add more posts as needed...
])

const pagination = ref([
  { number: 1 },
  { number: 2, active: true },
  { number: 3 },
  { number: 4 },
])

const recentPosts = ref([
  { image: 'images/blog/widget/1.jpg', title: 'Lorem ipsum dolor sit amet...', date: 'May 10, 2016', link: '#' },
  { image: 'images/blog/widget/2.jpg', title: 'Allis tempus urna ultrices...', date: 'May 10, 2016', link: '#' },
  { image: 'images/blog/widget/3.jpg', title: 'Ultrices fring sit amet...', date: 'May 10, 2016', link: '#' },
])

const categories = ref(['Education', 'Medical', 'Health', 'Food & Drinks', 'Social Media', 'Donation', 'Volunteering'])
const tags = ref(['Donation', 'Social Network', 'Dollar', 'Money', 'Funding', 'Volunteer'])
const archives = ref([
  { month: 'May 2016', count: 20 },
  { month: 'April 2016', count: 84 },
  { month: 'March 2016', count: 76 },
  { month: 'February 2016', count: 39 },
  { month: 'January 2016', count: 98 },
  { month: 'December 2015', count: 81 },
  { month: 'November 2015', count: 38 },
])
const instagram = ref([
  'images/flickr/1.jpg',
  'images/flickr/2.jpg',
  'images/flickr/3.jpg',
  'images/flickr/4.jpg',
  'images/flickr/5.jpg',
  'images/flickr/6.jpg',
  'images/flickr/7.jpg',
  'images/flickr/8.jpg',
])

const helloText = ref(
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
)
</script>
