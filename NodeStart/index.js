
        //1.获取元素
        var hour = document.querySelector(".hour"); //小时的黑色盒子
        var minute = document.querySelector(".minute"); //分钟的黑色盒子
        var second = document.querySelector(".second"); //秒数的黑色盒子
        var inputTime = +new Date("2021-12-14 23:00:00"); //返回的是用户输入时间总的毫秒数
        countDown(); //我们先调用一次这个函数，防止第一次刷新页面有空白
        setInterval(countDown, 1000);
        function countDown() {
            var nowTime = +new Date(); //返回的是当前时间总的毫秒数

            var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数
            var h = parseInt((times / 60 / 60) % 24); //时
            h = h < 10 ? "0" + h : h;
            hour.innerHTML = h; //把剩余的小时给 hour 盒子
            var m = parseInt((times / 60) % 60); //分
            m = m < 10 ? "0" + m : m;
            minute.innerHTML = m; //把剩余的分钟给 minute 盒子
            var s = parseInt(times % 60); //秒
            s = s < 10 ? "0" + s : s;
            second.innerHTML = s; //把剩余的秒数给 second 盒子
        }
    