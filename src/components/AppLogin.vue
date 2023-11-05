<template>
  <div class="login_f">
    <form>
      <div>
        <a href="#"
          ><img
            src="https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/07/02095908/%EB%82%98%EC%9D%B4%ED%82%A4.png"
            alt="나이키"
        /></a>
      </div>
      <div>
        <p class="title">가입 또는 로그인을 위해 이메일을 입력하세요.</p>
        <p>대한민국 <span class="gray_txt">변경</span></p>
      </div>
      <div>
        <input type="text" placeholder="이메일" />
      </div>
      <div>
        <p>
          계속 진행하면 나이키의 <span>개인정보 처리방침</span> 및
          <span> 이용 약관</span>에 동의하게 됩니다.
        </p>
      </div>
      <div>
        <button class="black_btn">계속</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppLogin"
};
</script>

<style>
.login_f {
  width: 100%;
  max-width: 480px;
  padding: 60px 20px 100px;
  margin: 0 auto;
}

.gray_txt {
  color: gray;
  text-decoration: underline;
}

.login_f > form > :nth-child(2) > p:nth-child(2) {
  margin: 6px 0;
  padding: 6px 0;
}

.login_f > form > :nth-child(3) {
  height: 100px;
  display: flex;
  align-items: center;
}

.login_f > form > :nth-childs(4) span {
  text-decoration: underline;
}

.login_f > form > :nth-child(5) {
  position: relative;
  padding: 10px 0;
}

.next_btn {
  position: absolute;
  right: 0;
  background: black;
  color: white;
  border-radius: 30px;
  cursor: pointer;
}

input[type="text"] {
  width: 100%;
  border-radius: 6px;
  border: 1px solid #aaa;
  height: 48px;
  line-height: 48px;
}

input[type="checkbox"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 8px !important;
  padding: 0;
  cursor: pointer;
  outline: none !important;
  border: 1px solid #999;
  vertical-align: middle;
  cursor: pointer;
}

input[type="checkbox"]::before {
  content: "\2713";
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: scale(0) translate(-50%, -50%);
  line-height: 1;
}

input[type="checkbox"]:checked {
  background-color: #63aeff;
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

input[type="checkbox"]:checked::before {
  border-radius: 4px;
  transform: scale(1) translate(-50%, -50%);
}

.black_btn {
  position: relative;
}
</style>
