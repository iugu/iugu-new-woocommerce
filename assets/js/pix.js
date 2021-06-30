/*jshint devel: true */
(function($) {

	'use strict';

	$(function() {

    const qrcode_div = $('#iugu_pix_qrcode');

    console.log(qrcode_div.attr('data-qrcode-url'));

    let qrcode = new QRCode('iugu_pix_qrcode', {
      text: qrcode_div.attr('data-qrcode-url')
    });

    let clipboard = new ClipboardJS('#iugu_pix_qrcode_text_button');

	});

}(jQuery));
