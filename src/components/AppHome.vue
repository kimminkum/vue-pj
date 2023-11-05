<template>
  <div>
    <div v-for="(mainSection__, i) in mainSection_" :key="i">
      <article>
        <div class="img_box">
          <img class="pc_img" :src="mainSection__.img" alt="메인 이미지" />
          <img class="mb_img" :src="mainSection__.imgM" alt="메인 이미지" />
        </div>
        <div class="mL_pM">
          <h5 v-if="mainSection__.little_txt">
            {{ mainSection__.little_txt }}
          </h5>
          <h2>{{ mainSection__.title }}</h2>
          <p class="mb_p">{{ mainSection__.texts }}</p>
          <p class="pc_p" v-html="mainSection__.texts2"></p>
          <div>
            <button class="black_btn">{{ mainSection__.btn1 }}</button>
            <button class="black_btn" v-if="mainSection__.btn2">
              {{ mainSection__.btn2 }}
            </button>
          </div>
        </div>
      </article>
    </div>

    <article class="two_box">
      <div>
        <div>
          <div class="img_box">
            <img class="pc_img" src="../img/main4_L.webp" alt="메인 이미지" />
            <img
              class="mb_img"
              src="../img/main_m4_L.webp"
              alt="메인 이미지4L"
            />
          </div>

          <div>
            <h4 class="white">Own the Floor</h4>
            <h5 class="white">스튜디오 밖에서도 빛나는 스니커즈</h5>
            <button class="white_btn2">구매하기</button>
          </div>
        </div>
        <div>
          <div class="img_box">
            <img class="pc_img" src="../img/main4_R.webp" alt="메인 이미지" />
            <img
              class="mb_img"
              src="../img/main_m4_R.webp"
              alt="메인 이미지4R"
            />
          </div>

          <div>
            <h4>나이키 덩크</h4>
            <button class="black_btn">구매하기</button>
          </div>
        </div>
      </div>
    </article>

    <div v-for="(secondSection__, i) in secondSection_" :key="i">
      <article>
        <div class="img_box">
          <div v-if="secondSection__.img">
            <img class="pc_img" :src="secondSection__.img" alt="메인 이미지" />
          </div>
          <div v-if="secondSection__.imgM">
            <img class="mb_img" :src="secondSection__.imgM" alt="메인 이미지" />
          </div>
          <div v-if="secondSection__.videoM">
            <video
              class="mb_video"
              :src="secondSection__.videoM"
              autoplay
              muted
              loop
              playsinline
            ></video>
          </div>
          <div v-if="secondSection__.video">
            <video
              class="pc_video"
              :src="secondSection__.video"
              autoplay
              muted
              loop
              playsinline
            ></video>
          </div>
        </div>
        <div class="mL_pM">
          <h5 v-if="secondSection__.little_txt">
            {{ secondSection__.little_txt }}
          </h5>
          <h2>{{ secondSection__.title }}</h2>
          <p class="mb_p">{{ secondSection__.texts }}</p>
          <p class="pc_p" v-html="secondSection__.texts2"></p>
          <div>
            <button class="black_btn">{{ secondSection__.btn1 }}</button>
          </div>
        </div>
      </article>
    </div>

    <article class="two_box">
      <h3>Trending Now</h3>
      <div>
        <div>
          <div class="img_box">
            <img class="pc_img" src="../img/main7_L.webp" alt="메인 이미지" />
            <img
              class="mb_img"
              src="../img/main_m7_L.webp"
              alt="메인 이미지4L"
            />
          </div>

          <div>
            <h4 class="white">나이키 캠퍼스 팩</h4>
            <button class="white_btn2">구매하기</button>
          </div>
        </div>
        <div>
          <div class="img_box">
            <img class="pc_img" src="../img/main7_R.jpg" alt="메인 이미지" />
            <img
              class="mb_img"
              src="../img/main_m7_R.jpg"
              alt="메인 이미지4R"
            />
          </div>

          <div>
            <h4 class="white">나이키 와플</h4>
            <button class="white_btn2">구매하기</button>
          </div>
        </div>
      </div>
    </article>

    <!-- swiper -->
    <article class="shoose_box">
      <div>
        <h4>Featured Shoose</h4>

        <div class="swiper_box">
          <swiper
            :slidesPerView="1"
            :spaceBetween="-100"
            :breakpoints="{
              '520': {
                slidesPerView: 2,
                spaceBetween: 20
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 40
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }"
          >
            <swiper-slide v-for="(shooseData__, i) in shooseData_" :key="i">
              <section>
                <div class="img_box">
                  <img :src="shooseData__.img" alt="신발 사진" />
                </div>
                <div class="txt_box">
                  <h5 class="bold brown" v-if="shooseData__.member">
                    {{ shooseData__.member }}
                  </h5>
                  <h5>{{ shooseData__.title }}</h5>
                  <p>{{ shooseData__.division }}</p>
                  <h5>{{ shooseData__.price }}</h5>
                  <p class="liner" v-if="shooseData__.noprice">
                    {{ shooseData__.noprice }}
                  </p>
                </div>
              </section>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </article>

    <article class="iconic">
      <div>
        <h4>Always Iconic</h4>

        <div class="swiper_box">
          <swiper
            :modules="modules"
            :slidesPerView="2"
            :spaceBetween="10"
            :loop="true"
            :navigation="true"
            :centeredSlides="true"
            :breakpoints="{
              '768': {
                slidesPerView: 3,
                spaceBetween: 40
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }"
          >
            <swiper-slide v-for="(iconicData__, i) in iconicData_" :key="i">
              <section>
                <div class="img_box">
                  <img :src="iconicData__.img" alt="신발 사진" />
                </div>
                <div class="txt_box">
                  <p>{{ iconicData__.title }}</p>
                  <div class="nums">{{ iconicData__.nums }}</div>
                </div>
              </section>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </article>

    <article class="iconic">
      <div>
        <h4>Shop By Sport</h4>

        <div class="swiper_box">
          <swiper
            :modules="modules"
            :slidesPerView="2"
            :spaceBetween="10"
            :loop="true"
            :navigation="true"
            :centeredSlides="true"
            :breakpoints="{
              '768': {
                slidesPerView: 3,
                spaceBetween: 40
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }"
          >
            <swiper-slide v-for="(ectData__, i) in ectData_" :key="i">
              <section>
                <div class="img_box">
                  <img :src="ectData__.img" alt="신발 사진" />
                </div>
                <div class="txt_box">
                  <p>{{ ectData__.title }}</p>
                  <div class="nums">{{ ectData__.nums }}</div>
                </div>
              </section>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </article>

    <article class="homeApp">
      <h4>나이키 커뮤니티와 함께 하기</h4>

      <div class="flex">
        <section>
          <div class="img_box"></div>
          <div class="txt_box">
            <h4>나이키 앱</h4>
            <p>
              원하는 것을 누구보다 빠르게, <br />
              새로운 영감으로 매일을 새롭게, 상상만 했던 경험을 현실로. <br />
              여러분의 매일을 나이키 앱에서 바꿔 보세요.
            </p>
            <button class="black_btn">자세히 보기</button>
          </div>
        </section>
        <section>
          <div class="img_box"></div>
          <div class="txt_box">
            <h4>나이키 트레이닝 클럽(NTC)</h4>
            <p>
              NTC 앱으로 개인 맞춤형 트레이닝 가이드를 만나 보세요.<br />
              운동, 마음가짐, 영양, 수면 등 몸과 <br />마음을 위한 전문가 팁도
              함께 제공됩니다.
            </p>
            <button class="black_btn">자세히 보기</button>
          </div>
        </section>
        <section>
          <div class="img_box"></div>
          <div class="txt_box">
            <h4>나이키 런 클럽(NRC)</h4>
            <p>
              NRC 앱과 함께 언제 어디서든 러닝을 시작해 보세요.<br />전문 러닝
              코치들의 오디오 가이드 런으로 <br />올바른 러닝 루틴을 만들 수
              있습니다.
            </p>
            <button class="black_btn">자세히 보기</button>
          </div>
        </section>
        <section>
          <div class="img_box"></div>
          <div class="txt_box">
            <h4>SNKRS 앱</h4>
            <p>
              최고의 스니커즈, 최신 발매 소식, 독점 비하인드 스토리.
              <br />새로운 스니커즈 문화를 선도할<br />SNKRS 커뮤니티로 초대
              합니다.
            </p>
            <button class="black_btn">자세히 보기</button>
          </div>
        </section>
      </div>
    </article>

    <article class="nav_menu">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Featured
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div>에어 포스1</div>
              <div>조던1</div>
              <div>에어 맥스 97</div>
              <div>에어 맥스 99</div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              신발
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div>전체 보기</div>
              <div>조던 신발</div>
              <div>러닝 신발</div>
              <div>농구 신발</div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              의류
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div>전체 보기</div>
              <div>탑 & 티셔츠</div>
              <div>쇼츠</div>
              <div>후디 & 풀오버</div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Kids
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div>베이비 신발</div>
              <div>키즈 신발</div>
              <div>키즈 농구 신발</div>
              <div>키즈 러닝 신발</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  name: "AppHome",
  props: {
    mainSection_: Object,
    secondSection_: Object,
    shooseData_: Object,
    iconicData_: Object,
    ectData_: Object
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {}
    };
  },
  setup() {
    return {
      modules: [Navigation]
    };
  }
};
</script>

<style>
@import "../css/Home.css";
</style>
