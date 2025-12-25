// console.log('hello');
// // 1.body要素を取得する
// // 2.ハンバーガーボタン要素を取得する
// // 3.ハンバーガーボタンにクリックのイベントリスナーを追加する
// // 4.ハンバーガーボタンがクリックされたら、body要素にopenというクラスを付けたり外したりする

// // 1.
// let bodyElement = document.querySelector('body');
// // 2.
// // document.getElementById('取得したい要素のid属性の値)
// let hamBtn = document.getElementById('hamBtn');
// // console.log(bodyElement,hamBtn);
// // 3.
//     hamBtn.addEventListener('click',function(){
// // 4.
//     bodyElement.classList.toggle('open')
// });


let bodyElement = document.querySelector('body');
let hamBtn = document.getElementById('hamBtn');
let mainNav = document.querySelector('.main-nav'); // ナビ要素も取得

hamBtn.addEventListener('click', function() {
    // ボタンとナビ、それぞれにクラスを付け外しする
    hamBtn.classList.toggle('is-open');
    mainNav.classList.toggle('is-open');
});

// 1. ナビゲーション内の全てのリンク（aタグ）を取得する
const navLinks = document.querySelectorAll('.main-nav a');

// 2. 取得した各リンクに対して、クリックイベントを設定する
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // クリックされたら、ボタンとメニューから 'is-open' クラスを削除する
    hamBtn.classList.remove('is-open');
    mainNav.classList.remove('is-open');
    
    // もしbodyにクラスをつけている場合は、それも外す（必要に応じて）
    // bodyElement.classList.remove('open');
  });
});