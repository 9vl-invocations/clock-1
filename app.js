function clock() {

    const HH = document.getElementById('hh');
    const MH = document.getElementById('mh');
    const SH = document.getElementById('sh');
    const S_DEG = M_DEG = 6;
    const H_DEG = 30;


    function getTime() {
        let t = new Date();

        let h = t.getHours();
        let m = t.getMinutes();
        let s = t.getSeconds();

        return time = {
            h: h,
            m: m,
            s: s
        }
    }

    function adjustHands() {

        let rortationSpeed = 16.7;

        getTime();

        if (H_DEG * time.h > 360) {
            hPositionRotate = "rotateZ(" + ((H_DEG * time.h) - 354) + "deg)";
        } else {
            hPositionRotate = "rotateZ(" + (H_DEG * time.h) + "deg)";
        }
        let mPositionRotate = "rotateZ(" + (M_DEG * time.m) + "deg)";
        let sPositionRotate = "rotateZ(" + ((S_DEG * time.s) + 6) + "deg)";

        let sPosition = mPosition = hPosition = "rotateZ(0deg)";



        let shDuration = rortationSpeed * time.s;
        let sDelay = 1000 - shDuration;
        sh.animate([
            { transform: sPosition },
            { transform: sPositionRotate },
        ], {
            duration: shDuration,
            delay: sDelay,
            easing: "cubic-bezier(.19,.89,.41,1.05)",
        });

        let mhDuration = rortationSpeed * time.m;
        let mDelay = 1000 - mhDuration;
        mh.animate([
            { transform: mPosition },
            { transform: mPositionRotate },
        ], {
            duration: mhDuration,
            delay: mDelay,
            easing: "cubic-bezier(.19,.89,.41,1.1)",
        });

        let hhDuration = rortationSpeed * time.h;
        let hDelay = 1000 - hhDuration;
        hh.animate([
            { transform: hPosition },
            { transform: hPositionRotate },
        ], {
            duration: hhDuration,
            delay: hDelay,
            easing: "cubic-bezier(.19,.89,.41,1.1)",
        });
    };


    function clockTicker() {

        getTime();

        let sPositionRotate = "rotateZ(" + ((S_DEG * time.s) + 6) + "deg)";
        let sPosition = "rotateZ(" + S_DEG * time.s + "deg)";

        SH.animate([
            { transform: sPosition },
            { transform: sPositionRotate },
        ], {
            duration: 850,
            delay: 325,
            easing: "cubic-bezier(.31,.3,.67,1.31)"
        });

        let hPositionRotate = "rotateZ(" + ((H_DEG * time.h) + 30) + "deg)";
        let hPosition = "rotateZ(" + H_DEG * time.h + "deg)";
        let mPositionDeg = M_DEG * time.m;
        let mPositionRotate = "rotateZ(" + ((M_DEG * time.m) + 6) + "deg)";
        let mPosition = "rotateZ(" + M_DEG * time.m + "deg)";
        let sPositionDeg = S_DEG * time.s;

        if (348 < sPositionDeg) {
            MH.animate([
                { transform: mPosition },
                { transform: mPositionRotate },
            ], {
                duration: 1225,
                delay: 175,
                easing: "cubic-bezier(.31,.3,.67,1.31)"
            });
            if (348 < mPositionDeg) {
                HH.animate([
                    { transform: hPosition },
                    { transform: hPositionRotate },
                ], {
                    duration: 1550,
                    easing: "cubic-bezier(.31,.3,.67,1.31)"
                });
            }
        };

        SH.style.transform = sPosition;
        MH.style.transform = mPosition;
        HH.style.transform = hPosition;

    }

    adjustHands();

    setInterval(() => {
        clockTicker();
    }, 1000);

}

clock();
