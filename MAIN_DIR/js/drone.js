$(function() {
    $('#vegas').vegas({
        slides: [
            { src: './images/vegas_sample01.jpg' },
            { src: './images/vegas_sample02.jpg' },
            { src: './images/vegas_sample03.jpg' },
            { src: './images/vegas_sample04.jpg' }
        ],
        overlay: './vegas/overlays/08.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        transition: 'zoomIn', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 3000, //スライド切り替え時の遅延時間
        //animation: 'random', //スライド表示中のアニメーション
        animationDuration: 20000, //スライド表示中のアニメーションの時間
    });
});