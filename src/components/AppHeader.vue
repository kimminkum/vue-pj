<template>
  <div class="header">
    <div class="header_t">
      <div class="logo_jo">
        <a href="#"><img src="../img/logo_jo.svg" alt="조던" /></a>
      </div>

      <div class="pribox">
        <ul>
          <li>매장 찾기</li>
          <li>고객센터</li>
          <li>가입하기</li>
          <li>로그인</li>
        </ul>
      </div>
    </div>

    <div class="header_b flex_sb">
      <router-link
        @click="scrollx"
        to="/vue-pj"
        class="nav-link"
        :class="{ active: $route.path === '/' }"
        ><div class="logo">
          <img src="../img/logo_nike.svg" alt="나이키" />
        </div>
      </router-link>

      <nav class="pc_nav">
        <ul>
          <router-link
            @click="scrollx"
            to="/Product"
            class="nav-link"
            :class="{ active: $route.path === '/Product' }"
            ><a href="#">Product</a></router-link
          >
          <router-link
            @click="scrollx"
            to="/Login"
            class="nav-link"
            :class="{ active: $route.path === '/Login' }"
            ><a href="#">Login</a></router-link
          >
        </ul>
      </nav>

      <!-- mobile_menu -->
      <div class="mobile_menu">
        <ul>
          <li @click="search_o">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <li><i class="fa-solid fa-bag-shopping"></i></li>
          <li><i class="fa-regular fa-user"></i></li>
        </ul>
        <div @click="onToggle">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      <!-- pc_menu -->
      <div class="pc_menu">
        <!-- 검색창 -->
        <div>
          <div @click="search_o">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <div>
            <input type="text" name="" value="" placeholder="검색" />
          </div>
          <div>
            <i class="fa-regular fa-heart"></i>
          </div>
          <div>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- side bar -->
    <div class="blur_effect" :class="{ ons: isAnima }"></div>

    <div class="sidebar" :class="{ act: isToggle }">
      <div @click="offToggle" class="close_btn">
        <i class="fa-solid fa-xmark"></i>
      </div>

      <ul>
        <router-link
          @click="scrolls"
          to="/vue-pj"
          class="nav-link"
          :class="{ active: $route.path === '/' }"
          ><li>
            <a href="#"
              >Home <span><i class="fa-solid fa-chevron-right"></i></span
            ></a></li
        ></router-link>

        <router-link
          @click="scrolls"
          to="/Product"
          class="nav-link"
          :class="{ active: $route.path === '/Product' }"
          ><li>
            <a href="#"
              >Product <span><i class="fa-solid fa-chevron-right"></i></span
            ></a></li
        ></router-link>
        <router-link
          @click="scrolls"
          to="/Login"
          class="nav-link"
          :class="{ active: $route.path === '/Login' }"
          ><li>
            <a href="#"
              >Login <span><i class="fa-solid fa-chevron-right"></i></span
            ></a></li
        ></router-link>
        <li>
          <a href="#">나이키 앱</a>
        </li>
      </ul>

      <div>
        <img src="../img/logo_jo.svg" alt="" />
        <span>Jordan</span>
      </div>

      <div>
        <h4 class="gray">
          나이키 멤버가 되어 최고의<br />
          제품, 스포츠에 대한<br />
          영감과 스토리를<br />
          만나보세요. <span class="black">자세히 보기</span>
        </h4>
      </div>

      <div class="flex">
        <button class="black_btn">가입하기</button>
        <button class="white_btn">로그인</button>
        <router-link
          @click="scrolls"
          to="/vue-pj"
          class="nav-link"
          :class="{ active: $route.path === '/' }"
          ><button class="white_btn">로그인</button></router-link
        >
      </div>

      <div>
        <li>
          <a href="#"
            ><i class="fa-solid fa-bag-shopping"></i> <span>장바구니</span></a
          >
        </li>
        <li>
          <a href="#"><i class="fa-solid fa-box"></i><span>주문</span></a>
        </li>
        <li>
          <a href="#"
            ><i class="fa-solid fa-store"></i><span>매장 찾기</span></a
          >
        </li>
        <li>
          <a href="#"
            ><i class="fa-solid fa-question"></i><span>고객센터</span></a
          >
        </li>
      </div>
    </div>

    <div id="search_hash">
      <div class="flex_end">
        <div id="search_close" class="close_btn" @click="search_x">취소</div>
      </div>

      <div class="search_window">
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          id="tt"
          v-model="searchText"
          @keyup="enterkey()"
        />
        <button type="submit" @click="appendDiv()">확인</button>
      </div>

      <div class="keyword">
        <h4>인기 검색어</h4>
        <div>
          <button class="hashtag" @click="statusChange('Air Force 1')">
            Air Force 1
          </button>
          <button class="hashtag" @click="statusChange('Jordan')">
            Jordan
          </button>
          <button class="hashtag" @click="statusChange('Air Max')">
            Air Max
          </button>
          <button class="hashtag" @click="statusChange('Blazer')">
            Blazer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      searchText: "",
      isToggle: false,
      isAnima: false
    };
  },
  methods: {
    onToggle() {
      this.isToggle = !this.isToggle;
      this.isAnima = !this.isAnima;
    },
    offToggle() {
      this.isToggle = !this.isToggle;
      this.isAnima = !this.isAnima;
    },
    goBack() {
      this.$router.go(-1);
      document.querySelector("body").classList.remove("act");
    },
    scrolls() {
      this.isToggle = !this.isToggle;
      this.isAnima = !this.isAnima;
      document.querySelector("body").classList.remove("act");
    },
    scrollx() {
      document.querySelector("body").classList.remove("act");
    },
    search_o() {
      document.querySelector("#search_hash").classList.add("act");
    },
    search_x() {
      document.querySelector("#search_hash").classList.remove("act");
    },
    statusChange(statusItem) {
      this.searchText = statusItem;
    },
    enterkey() {},
    appendDiv() {}
  }
};
</script>

<style>
@import "../css/Header.css";
</style>
