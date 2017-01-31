//Problem: News are fixed, boooring!
//Solution: Make a news ticker, so that every news is displayed singularly and dynamically.
var $news = $("#news-text ul li")
var $currentNews = "";

function changeNews() {
  $currentNews = $("#news-text ul li:first-child");
  //Display the first one of the list
  $currentNews.slideToggle(750).delay(5000).slideToggle(750);
    //Give the last displayed news the last position in the display queue
    var $lastNews = $currentNews;
      //Remove it from the ul array after the effect is over
      window.setTimeout(function(){
        $lastNews.remove();
      //Append it as last li
        $("#news-text ul").append($lastNews);
        $lastNews.css("display", "none");
      },6500);
}

//When the page is first loaded
$(document).ready(function(){
  //Hide all the news
  $news.hide();
});

setInterval(changeNews, 500);
