<template>
  <div class="newPro">
    <div class="intro_title">
      <h3>신상품</h3>
    </div>

    <div>
      <div class="flex_sb">
        <p>499개의 결과</p>
        <button class="filter_btn" @click="filter_on">
          필터 <i class="fa-solid fa-sliders"></i>
        </button>
      </div>

      <div class="flex_sb">
        <div class="pc_filter">
          <div id="pro_t">
            <a>신발</a>
            <a>스포츠 브라</a>
            <a>바디수트</a>
            <a>탑 & 티셔츠</a>
            <a>후디 & 크루</a>
            <a>재킷 & 베스트</a>
            <a>팬츠 & 타이츠</a>
            <a>쇼츠</a>
            <a>트랙수트</a>
            <a>점프수트 & 롬퍼스</a>
            <a>스커트 & 드레스</a>
            <a>양말</a>
            <a>용품</a>
          </div>
          <hr />
          <div>
            <div class="accordion_btns act flex_sb">
              <p>성별</p>
              <div class="btn_icon"></div>
            </div>
            <form class="accordion_menus">
              <div>
                <input type="checkbox" name="" id="filter_man" />
                <label for="filter_man">남성</label>
              </div>
              <div>
                <input type="checkbox" name="" id="filter_woman" />
                <label for="filter_woman">여성</label>
              </div>
              <div>
                <input type="checkbox" name="" id="filter_uni" />
                <label for="filter_uni">유니섹스</label>
              </div>
            </form>
          </div>

          <hr />

          <div>
            <div class="accordion_btns act flex_sb">
              <p>키즈</p>
              <div class="btn_icon"></div>
            </div>
            <form class="accordion_menus">
              <div>
                <input type="checkbox" name="" id="filter_man" />
                <label for="filter_man">남아</label>
              </div>
              <div>
                <input type="checkbox" name="" id="filter_woman" />
                <label for="filter_woman">여아</label>
              </div>
            </form>
          </div>

          <hr />

          <div>
            <div class="accordion_btns act flex_sb">
              <p>색상</p>
              <div class="btn_icon"></div>
            </div>
            <form class="accordion_menus">
              <div class="color_filter">
                <div>
                  <div class="purple_bg circle_bg"></div>
                  <p>보라</p>
                </div>
                <div>
                  <div class="black_bg circle_bg"></div>
                  <p>검정</p>
                </div>
                <div>
                  <div class="red_bg circle_bg"></div>
                  <p>빨강</p>
                </div>
                <div>
                  <div class="orange_bg circle_bg"></div>
                  <p>주황</p>
                </div>
                <div>
                  <div class="blue_bg circle_bg"></div>
                  <p>파랑</p>
                </div>
                <div>
                  <div class="white2 circle_bg"></div>
                  <p>흰색</p>
                </div>
                <div>
                  <div class="brown_bg circle_bg"></div>
                  <p>갈색</p>
                </div>
                <div>
                  <div class="green_bg circle_bg"></div>
                  <p>초록</p>
                </div>
                <div>
                  <div class="yellow_bg circle_bg"></div>
                  <p>노랑</p>
                </div>
                <div>
                  <div class="multi_bg circle_bg"></div>
                  <p>멀티</p>
                </div>
                <div>
                  <div class="gray_bg circle_bg"></div>
                  <p>회색</p>
                </div>
                <div>
                  <div class="pink_bg circle_bg"></div>
                  <p>핑크</p>
                </div>
              </div>
            </form>
          </div>

          <hr />

          <div>
            <div class="accordion_btns act flex_sb">
              <p>가격대</p>
              <div class="btn_icon"></div>
            </div>
            <form class="accordion_menus">
              <div>
                <input type="checkbox" name="" id="filter_price1" />
                <label for="filter_price1">0 - 50,000</label>
              </div>
              <div>
                <input type="checkbox" name="" id="filter_price2" />
                <label for="filter_price2">50,000 - 100,000</label>
              </div>
              <div>
                <input type="checkbox" name="" id="filter_price3" />
                <label for="filter_price3">100,000 - 150,000</label>
              </div>
              <div>
                <input type="checkbox" name="" id="filter_price4" />
                <label for="filter_price4">150,000 - 200,000</label>
              </div>
            </form>
          </div>

          <hr />

          <div>
            <div class="accordion_btns act flex_sb">
              <p>브랜드</p>
              <div class="btn_icon"></div>
            </div>
            <form class="accordion_menus">
              <div>
                <input type="checkbox" name="" id="filter_brand" />
                <label for="filter_brand">나이키 스포츠웨어</label>
              </div>
            </form>
          </div>
        </div>

        <div class="products">
          <div v-for="(products_, i) in products" :key="i">
            <!-- <div> -->
            <div class="pro_box">
              <div class="img_box">
                <img :src="products_.img" alt="" />
              </div>
              <div class="txt_box">
                <p>{{ products_.title }}</p>
                <p>{{ products_.division }}</p>
                <p>{{ products_.price }} 원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mobiles_filter">
    <div class="close_btn">
      <button class="nav-link" @click="filter_off">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </div>

    <h5>필터</h5>

    <div id="pro_t">
      <a>신발</a>
      <a>스포츠 브라</a>
      <a>바디수트</a>
      <a>탑 & 티셔츠</a>
      <a>후디 & 크루</a>
      <a>재킷 & 베스트</a>
      <a>팬츠 & 타이츠</a>
      <a>쇼츠</a>
      <a>트랙수트</a>
      <a>점프수트 & 롬퍼스</a>
      <a>스커트 & 드레스</a>
      <a>양말</a>
      <a>용품</a>
    </div>
    <hr />
    <div>
      <div class="accordion_btns act flex_sb">
        <p>성별</p>
        <div class="btn_icon"></div>
      </div>
      <form class="accordion_menus">
        <div>
          <input type="checkbox" name="" id="filter_man" />
          <label for="filter_man">남성</label>
        </div>
        <div>
          <input type="checkbox" name="" id="filter_woman" />
          <label for="filter_woman">여성</label>
        </div>
        <div>
          <input type="checkbox" name="" id="filter_uni" />
          <label for="filter_uni">유니섹스</label>
        </div>
      </form>
    </div>

    <hr />

    <div>
      <div class="accordion_btns act flex_sb">
        <p>키즈</p>
        <div class="btn_icon"></div>
      </div>
      <form class="accordion_menus">
        <div>
          <input type="checkbox" name="" id="filter_man" />
          <label for="filter_man">남아</label>
        </div>
        <div>
          <input type="checkbox" name="" id="filter_woman" />
          <label for="filter_woman">여아</label>
        </div>
      </form>
    </div>

    <hr />

    <div>
      <div class="accordion_btns act flex_sb">
        <p>색상</p>
        <div class="btn_icon"></div>
      </div>
      <form class="accordion_menus">
        <div class="color_filter">
          <div>
            <div class="purple_bg circle_bg"></div>
            <p>보라</p>
          </div>
          <div>
            <div class="black_bg circle_bg"></div>
            <p>검정</p>
          </div>
          <div>
            <div class="red_bg circle_bg"></div>
            <p>빨강</p>
          </div>
          <div>
            <div class="orange_bg circle_bg"></div>
            <p>주황</p>
          </div>
          <div>
            <div class="blue_bg circle_bg"></div>
            <p>파랑</p>
          </div>
          <div>
            <div class="white2 circle_bg"></div>
            <p>흰색</p>
          </div>
          <div>
            <div class="brown_bg circle_bg"></div>
            <p>갈색</p>
          </div>
          <div>
            <div class="green_bg circle_bg"></div>
            <p>초록</p>
          </div>
          <div>
            <div class="yellow_bg circle_bg"></div>
            <p>노랑</p>
          </div>
          <div>
            <div class="multi_bg circle_bg"></div>
            <p>멀티</p>
          </div>
          <div>
            <div class="gray_bg circle_bg"></div>
            <p>회색</p>
          </div>
          <div>
            <div class="pink_bg circle_bg"></div>
            <p>핑크</p>
          </div>
        </div>
      </form>
    </div>

    <hr />

    <div>
      <div class="accordion_btns act flex_sb">
        <p>가격대</p>
        <div class="btn_icon"></div>
      </div>
      <form class="accordion_menus">
        <div>
          <input type="checkbox" name="" id="filter_price1" />
          <label for="filter_price1">0 - 50,000</label>
        </div>
        <div>
          <input type="checkbox" name="" id="filter_price2" />
          <label for="filter_price2">50,000 - 100,000</label>
        </div>
        <div>
          <input type="checkbox" name="" id="filter_price3" />
          <label for="filter_price3">100,000 - 150,000</label>
        </div>
        <div>
          <input type="checkbox" name="" id="filter_price4" />
          <label for="filter_price4">150,000 - 200,000</label>
        </div>
      </form>
    </div>

    <hr />

    <div>
      <div class="accordion_btns act flex_sb">
        <p>브랜드</p>
        <div class="btn_icon"></div>
      </div>
      <form class="accordion_menus">
        <div>
          <input type="checkbox" name="" id="filter_brand" />
          <label for="filter_brand">나이키 스포츠웨어</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProduct",
  props: {
    products: Object
  },
  methods: {
    filter_on() {
      document.querySelector("body").classList.add("act");
      document.querySelector(".mobiles_filter").classList.add("act");
    },
    filter_off() {
      document.querySelector("body").classList.remove("act");
      document.querySelector(".mobiles_filter").classList.remove("act");
    }
  },
  mounted() {
    let acc_btns = document.querySelectorAll(".accordion_btns");
    let acc_menus = document.querySelectorAll(".accordion_menus");

    for (let i = 0; i < acc_btns.length; i++) {
      acc_btns[i].addEventListener("click", () => filter_tab(i));
    }

    function filter_tab(i) {
      acc_btns[i].classList.toggle("act");
      acc_menus[i].classList.toggle("act");
    }
  }
};
</script>

<style>
@import "../css/Product.css";
</style>
