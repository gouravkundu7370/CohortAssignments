const time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
function counter(hh, mm, ss) {
  console.log("HH:MM:SS - " + hh + ":" + mm + ":" + ss);

  setInterval(() => {
    ss = ss + 1;
    if (ss < 60) {
      console.log("HH:MM:SS - " + hh + ":" + mm + ":" + ss);
    } else {
      ss = 0;
      if (mm < 60) {
        mm = mm + 1;
        console.log("HH:MM:SS - " + hh + ":" + mm + ":" + ss);
      } else {
        mm = 0;
        if (hh < 24) {
          hh = hh + 1;
          console.log("HH:MM:SS - " + hh + ":" + mm + ":" + ss);
        } else {
          hh = 0;
          console.log("HH:MM:SS - " + hh + ":" + mm + ":" + ss);
        }
      }
    }
  }, 1000);
}
counter(h, m, s);
