$(function() {
    $('#vegas').vegas({
        slides: [
            { src: './images/vegas_sample05.png' },
            { src: './images/vegas_sample06.png' },
            { src: './images/vegas_sample07.png' },
            { src: './images/vegas_sample08.png' }
        ],
        //overlay: './vegas/overlays/09.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        transition: 'slideLeft2', //スライドを遷移させる際のアニメーション
        transitionDuration: 1000, //スライドの遷移アニメーションの時間
        delay: 3000, //スライド切り替え時の遅延時間
        //animation: 'random', //スライド表示中のアニメーション
        animationDuration: 20000, //スライド表示中のアニメーションの時間
    });
});