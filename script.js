var countDownDate = new Date("Jul 1, 2024 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var Audio = document.getElementById("snd");
  Audio.Play()
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("final").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("final").innerHTML = "$aH252ax2023_a1114ax1417a1922ax1417ax241a1316_a252a1316ax1013_ax1215ax69ax1821ax1013_ax47ax2023ax263_a1922ax1013ax1013a912_a252ax2023_a1114ax1417a1922a912_a1114ax1417a14ax1013_ax811ax2023a912ax1013ax241_ax25a1316ax1417ax811a1316_ax69a2326ax1013_a1316ax1417a912a912ax1013a1922_ax69a2326ax2023ax263a1922a912_a252a1316ax1013_ax1821ax69a2124_aH252a1316ax1013_a710ax2023ax241ax241_ax1417ax241_ax69ax811a252ax263ax69a1720a1720ax47_a912ax1013a1114ax1013ax69a252ax69a710a1720ax1013_a2124ax2023ax1417a1922a252_a252a1316ax1013_a710ax1013ax69ax1821ax241_ax69a252_a1316ax1417ax1821_ax1417a1114_ax47ax2023ax263_a912ax2023_ax1013a14ax1013a2326ax47a252a1316ax1417a1922ax1215_ax811ax2023a2326a2326ax1013ax811a252a1720ax47_ax47ax2023ax263_a1316ax69a14ax1013_a1114ax1417a14ax1013_ax1821ax1417a1922ax263a252ax1013ax241_a252ax2023_a1114ax1417a1922a912_a252a1316ax1013_ax1619ax1013ax47_ax1417a252ax241_ax1417a1922_ax2023a1922ax1013_ax2023a1114_a252a1316ax1013_ax811ax2023a1922a252ax69ax1417a1922ax1013a2326ax241_ax69a2326ax2023ax263a1922a912_a252a1316ax1013_ax1821ax69a2124_ax1417a1114_ax47ax2023ax263_ax1215ax1013a252_ax1417a252_ax1215ax2023_a252ax2023_aH1821ax47_aH1013a14ax1013a1922a252_ax69a1922a912_ax241ax69ax47_aH1417a252_a1316ax69ax241_a710ax1013ax1013a1922_ax69_a1720ax2023a1922ax1215_a252ax1417ax1821ax1013_ax1417a1114_ax47ax2023ax263_ax241ax69ax47_ax1417a252_ax25a1316ax1417a1720ax1013_a1316ax69a14ax1417a1922ax1215_a252a1316ax1013_ax1619ax1013ax47_a252a1316ax1013a1922_ax811ax2023a1922ax1215a2326ax69a252ax241_ax47ax2023ax263_a1316ax69a14ax1013_ax69_ax811a1720ax263ax1013_a1114ax2023a2326_a252a1316ax1013_ax2023a252a1316ax1013a2326_ax1619ax1013ax47_ax25ax1417a252a1316_ax69_ax811ax2023a912ax1013_a252a1316ax69a252_ax47ax2023ax263_ax25ax1417a1720a1720_a1922ax1013ax1013a912_a252ax2023_ax1417a1922a2124ax263a252_a252a1316ax1013a2326ax1013$";
          setTimeout(function()
    {
        window.location.replace("https://usterkoweoko.github.io/TheOfficeRecruitment");
    }, 2000)
  }
}, 1000);
