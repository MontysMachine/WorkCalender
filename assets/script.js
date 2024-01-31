$(document).ready(function() {
    $('.saveBtn').on('click', function(){
      var eventDetails = $(this).siblings('.description').val();
      var eventHour = $(this).parent().attr('id');
      localStorage.setItem(eventHour, eventDetails);
    })
  
    $('.time-block').each(function(){
      var currentTime = dayjs().hour();
      var blockTime = $(this).attr('data-time');
      var savedEvent = localStorage.getItem(blockTime);
  
      if(savedEvent){
        $(this).find('.description').val(savedEvent);
      }
  
      var currentTime = dayjs().hour();
      if(blockTime == currentTime){
        $(this).addClass('present')
      }else if(blockTime < currentTime){
        $(this).addClass('past')
      }else{
        $(this).addClass('future');
      }
    })

   var currentDate = dayjs();
   $('#currentDay').text(currentDate.format('MMM D, YYYY'));
  });