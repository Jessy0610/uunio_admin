$(document).ready(function(){
	$(".gnb li").click(function(){
		$(".gnb li").removeClass("on");
		$(this).addClass("on");
	});
	$(".close-admin-btn").click(function(){
		$(".close-admin-acc").show();
	});
	$(".close-admin").click(function(){
		$(this).parent(".popup").hide();
		$(".backround-black").show();
		$(".unreg-confirm").show();
	});
	$(".close-popup").click(function(){
		$(this).parent("div").hide();
		$(".background-black").hide();
	});
	$(".background-black").click(function(){
		$(this).hide();
		$(".popup").hide();
	});
	$(document).keyup(function(event){
            if(event.keyCode==27){
                $(".background-black").hide();
				$(".popup").hide();
            }
    });
	var coin_eth = (0.08/$("#eth-usd").text()).toFixed(8);
	$(".eth-uunio").text(coin_eth);
	var coin_qtum = (0.08/$("#qtum-usd").text()).toFixed(8);
	$(".qtum-uunio").text(coin_qtum);
	
	
	$("#checkBox").change(function(){
        if($("#checkBox").is(":checked")){
            $("button.verified").attr("disabled",false);
			$("button.verified").addClass("enabled");
		}
	else{
		$("button.verified").removeClass("enabled");
	}
    });
	$(".download").click(function(){
		var src=$(this).siblings("div").find(".verify-img").attr("href");
		$(this).attr("href",src);
	});
	
	$(".member-page-btn").click(function(){
		$(".panel").hide();
		$(".member-page").show();
	});
	$(".return").click(function(){
		$(".member-page").hide();
		$(".panel").show();
	});
	$(".collection-info").click(function(){
		$(".background-black").show();
		$(".collection-popup").show();
		var name=$(this).attr("data-name");
		$(".tx-name").text(name);
	});
	$(".unregister").click(function(){
		$(".background-black").show();
		$(".unreg-popup").show();
	});
	var is_arr=0;
	var page_on=0;
	$(".page-num li").click(function(){
		page_on=$(this).index();
		is_arr=$(this).index();
		$(".page-num li").removeClass("on");
		if(is_arr!=0 && is_arr!=6){
			$(this).addClass("on");
		}
	});
	function showKeyCode(event) {
		event = event || window.event;
		var keyID = (event.which) ? event.which : event.keyCode;
		if( ( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) )
		{
			return;
		}
		else
		{
			return false;
		}
	}
	$(".ico-menu li").click(function(){
		$(".ico-menu li").removeClass("on");
		$(this).addClass("on");
		
		$(".ico-section").hide();
		if($(this).index()==0){
			$(".ico-info-section").show();
		}
		else{
			$(".record-section").show();
		}
	});
	$(".txid-confirm").click(function(){
		$(".background-black").show();
		$(".txid-popup").show();
	});
	$(".kyc-menu li").click(function(){
		$(".kyc-menu li").removeClass("on");
		$(".kyc-section>div").removeClass("on");
		$(this).addClass("on");
		
		$(".kyc-section>div").hide();
		$(".kyc-page").hide();
		$(".kyc-member-page").hide();
		$(".popup").hide();
		if($(this).index()==0){
			$(".kyc-holding-box").show();
			$(".kyc-section>div").eq(0).addClass("on");
		}
		else{
			$(".kyc-verified-box").show();
			$(".kyc-section>div").eq(1).addClass("on");
		}
	});
	$(".kyc-holding-box .more-btn").click(function(){
		$(".kyc-holding-box").hide();
		$(".kyc-page").show();
	});
	$(".verify-img").click(function(){
		var add=$(this).attr("src");
		$(".scaled-img").attr("src",add);
		
		$(".background-black").show();
		$(".scaled-img").show();
	});
	$(".verified").click(function(){
		$(".verified-popup").show();
	});
	$(".refused").click(function(){
		$(".refused-popup").show();
	});
	$(".refused-popup button").click(function(){
		$(".refused-popup").hide();
	});
	$(".kyc-verified-box .more-btn").click(function(){
		$(".kyc-verified-box").hide();
		$(".kyc-member-page").show();
	});
});