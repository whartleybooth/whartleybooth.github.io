$(function(){

  $('#generate_sendBeacon').click(function() {

    marinSendBeacon();

  })
});


$(function(){

  $('#msm_test').click(function() {


     var track = new Image();
     track.src="https://tracker.marinsm.com/tp?act=2&cid=2764ri918980&currency=GBP&trans=UTM:I|" +  dataLayer[0].transaction_timestamp + dataLayer[0].transactionId + "|lifeclickout|||" + dataLayer[0].msmid + "|";

    test(dataLayer[0].transaction_timestamp)

});

function test(time) {
  fbq('track', 'Purchase', {
value: 247.35,
currency: 'USD',
order_id: time //this is the only purchase / lead event parameter we require for this project. We obtain the other values from the Marin event code.
});
};


  });

$(function(){

    $('#stop_light_control').click(function() {



        var track = new Image();
         track.src="https://tracker.marinsm.com/tp?act=2&cid=24l339123&currency=&trans=UTM:I|" + readMsmidCookieid() + "|order|product|category||";



  });




});

function marinSendBeacon(event) {
    var data = JSON.stringify({
      trackerId: "3423sdfs23",
      act: 2,
      conv_type: "order",
      order_id: dataLayer[0].transactionId,
      transactionProducts: dataLayer[0].transactionProducts
    });
    navigator.sendBeacon('https://tracker.marinsm.com/tp', data);
  }
