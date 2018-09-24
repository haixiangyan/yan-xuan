<template>
    <a :href="counterInfo.url" class="yan-counter-wrapper">
        <div class="yan-counter-intro">
            <!--标题-->
            <div class="yan-counter-title">严选限时购</div>
    
            <!--倒计时-->
            <div class="yan-counter">
                <span class="yan-counter-hours">{{hours}}</span>
                <span class="yan-colon animated flash infinite">:</span>
                <span class="yan-counter-minutes">{{minutes}}</span>
                <span class="yan-colon animated flash infinite">:</span>
                <span class="yan-counter-seconds">{{seconds}}</span>
            </div>
    
            <!--下一场开始时间-->
            <div class="yan-next">
                <span>下一场 {{nextTime}} 开始</span>
            </div>
        </div>
    
        <div class="yan-counter-img-wrapper">
            <img :src="counterInfo.img" alt="counter-pic">
            <div class="yan-counter-price">
                <div class="yan-counter-cur-price">{{counterInfo.currentPrice}}</div>
                <div class="yan-counter-prev-price">{{counterInfo.previousPrice}}</div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: ['counterInfo'],
    data() {
        return {
            // hours: 0,
            // minutes: 0,
            // seconds: 0,
        }
    },
    computed: {
        nextTime() {
            let nextdate = new Date(this.counterInfo.next);
            return `${nextdate.getHours()}:${nextdate.getSeconds()}`
        },
        hours() {
            return new Date().getHours();
        },
        minutes() {
            return new Date().getMinutes();
        },
        seconds() {
            return new Date().getSeconds();
        }
    },
    watch: {
        now() {
            this.hours = new Date().getHours();
            this.minutes = new Date().getMinutes();
            this.seconds = new Date().getSeconds();
        }
    },
}
</script>

<style scoped>
.yan-counter-wrapper {
    display: flex;
    height: 350px;
    padding: 50px;
    align-items: center;
    justify-content: space-around;
    background: #fff;
}

/*标题*/
.yan-counter-title {
    margin-bottom: 30px;
    font-size: 50px;
    letter-spacing: 20px;
}

/*倒计时*/
.yan-counter-hours,
.yan-counter-minutes,
.yan-counter-seconds {
    display: inline-flex;
    height: 65px;
    width: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: rgb(68, 68, 68);
    color: #fff;
    font-size: 42px;
}

/*冒号*/
.yan-colon {
    font-weight: bold;
}

/*下一场*/
.yan-next {
    margin-top: 40px;
}

/*倒计时的图片*/
.yan-counter-img-wrapper {
    position: relative;
}

/*价格部分*/
.yan-counter-price {
    position: absolute;
    padding: 20px;
    bottom: 0;
    right: 0;
    background: rgba(244, 143, 24, 0.95);
    border-radius: 50%;
}

.yan-counter-prev-price,
.yan-counter-cur-price {
    color: #fff;
}

.yan-counter-prev-price {
    text-decoration: line-through;
}
</style>
