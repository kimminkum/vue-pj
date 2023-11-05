<template>
  <div>
    <footer>
      <!-- top icon nav flex sb -->
      <div>
        <div>
          <!--  -->
          <div>
            <h5>새로운 소식</h5>
            <h5>멤버가입</h5>
            <h5>매장안내</h5>
            <h5>나이키 저널</h5>
          </div>

          <div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    도움말
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>로그인 안내</p>
                    <p>주문배송조회</p>
                    <p>반품 정책</p>
                    <p>결제 방법</p>
                    <p>공지사항</p>
                    <p>문의하기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    About Nike
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>소식</p>
                    <p>채용</p>
                    <p>투자자</p>
                    <p>지속가능성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- icon -->
        <div>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-square-instagram"></i>
        </div>
      </div>

      <!-- secondline flex-->
      <div>
        <!-- flex -->
        <div>
          <p><i class="fa-solid fa-location-dot"></i> 대한민국</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <!-- flex -->
        <div>
          <p><a href="#">이용약관</a></p>
          <p><a href="#">개인정보처리방침</a></p>
        </div>
      </div>

      <!-- last line -->
      <div>
        <!-- flex -->
        <div>
          <div>
            <p>
              (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
              멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |
              통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068
              <a href="#">사업자 정보 확인</a>
            </p>
            <p>
              고객센터 전화 문의 <a href="#">080-022-0182</a> FAX 02-6744-5880 |
              이메일 <a href="#">service@nike.co.kr</a> | 호스팅서비스사업자
              (유)나이키코리아
            </p>
          </div>
          <div>
            <p>
              현금 등으로 결제 시 안전 거래를 위해나이키 쇼핑몰에서 가입하신
              한국결제네트웍스 유한회사의 구매안전 서비스(<a href="#"
                >결제대금예치</a
              >)를 이용하실 수 있습니다.
            </p>
            <p>
              콘텐츠산업진흥법에 의한 콘텐츠 보호 안내
              <a href="#">자세히 보기</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style>
@import "../css/Footer.css";
</style>
