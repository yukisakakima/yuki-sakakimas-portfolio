var ctx = document.getElementById("radar");
var radar = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["HTML/CSS", "Sass", "JS", "TS", "jQuery", "Node.js", "Express.js", "Ruby", "Ruby on Rails", "Python", "Flask", "Go", "RDB/SQL", "Git/Github"],
        //データセット
        datasets: [{
            // label: "スキル分析",
            //背景色
            backgroundColor: "rgba(255,255,255,0.7)",
            //枠線の色
            borderColor: "white",
            //結合点の背景色
            pointBackgroundColor: "white",
            //結合点の枠線の色
            pointBorderColor: "#fff",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#fff",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "rgba(51,255,51,1)",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [4, 2, 3, 2, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4]
        }]
    },
    //オプションの設定
    options: {
        // レスポンシブ指定
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            ticks: {
                // 最小値の値を0指定
                beginAtZero: true,
                min: 0,
                stepSize: 1,
                // 最大値を指定
                max: 5,
                fontColor: "black"
            },
            pointLabels: {
                fontSize: 16,
                fontColor: "rgb(13, 203, 69)"
            },
            angleLines: {        // 軸（放射軸）
                color: "rgb(13, 203, 69)"
            },
            gridLines: {
                color: "rgb(13, 203, 69)"
            }
        },
        //ラベル非表示
        legend: {
            // ラベルを非表示
            display: false,
            fontSize: 10,
            labels: {
                // このフォント設定はグローバルプロパティを上書きします。
                fontSize: 14,
            }
        }
    }
});