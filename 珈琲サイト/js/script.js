//ハンバーガーメニューの機能実装
$(function () {

  $('.menu-trigger').click(function () { //ハンバーガーボタン(.menu-trigger)をクリックした時の処理をまとめた関数を作成

    $(this).toggleClass('active'); //ハンバーガーボタンに(.active)を追加・削除

    if ($(this).hasClass('active')) { //もしハンバーガーボタンに(.active)があれば

      $('.g-navi').addClass('active'); //(.g-navi)にも(.active)を追加

    } else { //それ以外の場合は、

      $('.g-navi').removeClass('active'); //(.g-navi)にある(.active)を削除

    }

  });

  $('.nav-wrapper ul li a').click(function () { //各メニュー(.nav-wrapper ul li a)をクリックする

    $('.menu-trigger').removeClass('active'); //ハンバーガーボタンにある(.active)を削除

    $('.g-navi').removeClass('active'); //(.g-navi)にある(.active)も削除

  });

  if ($(this).hasClass('active')) { // 条件分岐用のif文と、条件判定用の「hasClass」メソッドを使って、2パターンの条件分岐と処理内容を記述

    $('.g-navi').addClass('active');

  } else {

    $('.g-navi').removeClass('active');

  }

});

//Thoughtのエリアのコード。スライド機能実装
$(function () {

  function toggleChangeBtn() {

    var slideIndex = $('.staff-box').index($('.active'));

    $('.slide-button').show();

    if (slideIndex == 0) {

      $('.prev').hide();

    } else if (slideIndex == 2) {

      $('.next').hide();

    }

  }



  toggleChangeBtn();



  $('.next').click(function () { /*nextボタンを押したとき*/

    var displaySlide = $('.active'); /*現在表示中のスライドを取得*/

    displaySlide.removeClass('active box-design'); /*そのスライドからactiveクラスを除いて表示されないようにする。*/

    displaySlide.next().addClass('active box-design'); /*次のスライドにactiveクラスをつけ、表示させる。*/

    toggleChangeBtn(); /*nextボタンを隠すか判断*/

  });

  $('.prev').click(function () { /*prevボタンを押したとき*/

    var displaySlide = $('.active'); /*現在表示中のスライドを取得*/

    displaySlide.removeClass('active box-design'); /*そのスライドからactiveクラスを除いて表示されないようにする。*/

    displaySlide.prev().addClass('active box-design'); /*前のスライドにactiveクラスをつけ、表示させる。*/

    toggleChangeBtn(); /*prevボタンを隠すか判断*/

  });

  $('.slide-button').show();

  // さらにif文を使って、2パターンの条件分岐と処理内容を記述します。



  if (slideIndex == 0) { //もし変数「slideIndex」（.activeが付与されている.staff-boxのインデックス番号）の値が「0」だったら？結果：hideメソッドを用いて、prevボタン（.prev）を非表示にします。

    $('.prev').hide();

  } else if (slideIndex == 2) { //もし変数「slideIndex」（.activeが付与されている.staff-boxのインデックス番号）の値が「2」だったら？ 結果：hideメソッドを用いて、nextボタン（.next）を非表示にします。

    $('.next').hide();

  }

  $('.next').click(function () {

    var displaySlide = $('.active');

    displaySlide.removeClass('active box-design');

    displaySlide.next().addClass('active box-design');

    toggleChangeBtn();

  });

  $('.prev').click(function () {

    var displaySlide = $('.active');

    displaySlide.removeClass('active box-design');

    displaySlide.prev().addClass('active box-design');

    toggleChangeBtn();

  });

});

// モーダル部分

$(function () { //①

  $('.modalopen').each(function () {

    $(this).click(function () {　//（.modalopen）がクリックされた時の処理

      var target = $(this).data('target');　//（.modalopen）のdata-target属性値を取得し、変数targetに定義

      var modal = document.getElementById(target);　//targetというid名を持つhtml要素を取得し、変数modalに定義

      console.log(modal);

      $(modal).fadeIn();　//変数modalを表示

      return false;　//処理終了

    });

  });

  $('.modalClose').on('click', function () {　//（.modalClose）がクリックされた時の処理

    $('.js-modal').fadeOut();　//（.js-modal）を非表示

    return false;

  });　//処理終了

});

$(function () {

  var filters = $('.filter [data-filter]'); // ① メニュータブの要素いずれかを取得

  var boxes = $('.lineup-wrapper [data-category]'); // ② 商品ボックスいずれかの要素を取得

  filters.click(function (e) { // ③ メニュータブをクリックした際の処理を記述します。引数（e）はイベントオブジェクトです。

    e.preventDefault(); // ③ ブラウザの持つデフォルト機能を実行させないメソッドです。CSSで登場した「reset.css」に役割が似ています。

    filters.removeClass('active'); // ④ メニュータブ全てから（.active）クラスを取り除きます。



    $(this).addClass('active'); // ⑤ クリックしたメニュータブのオブジェクトにaddClassメソッドで（.active）クラスを付与し表示させる。



    var filterTime = $(this).attr('data-filter'); // ⑥ filterTimeという変数に、⑤のdata-filter属性の値を代入します。



    if (filterTime == 'ranking') { // ⑦ 「data-filter」属性の値が「ranking」だった場合

      boxes.fadeOut().promise().done(function () { // 全ての商品ボックスに対して、ふわっと非表示にし、非同期通信を行う。

        boxes.fadeIn(); // 全ての商品ボックスに対して、ふわっと表示させる。

      });

    } else { // ⑧ 「data-filter」属性の値が「ranking」ではなかった場合

      boxes.fadeOut().promise().done(function () { // 全ての商品ボックスに対して、ふわっと非表示にし、非同期通信を行う。

        boxes.filter('[data-category = "' + filterTime + '"]').fadeIn();// 選択されたタブに対応した商品ボックスのみをふわっと表示させる

      });

    }

  });

});
