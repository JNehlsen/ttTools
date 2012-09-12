ttTools.constants = {
  whatsNew : function () {
    return "\
<h2>ttTools is back in business!</h2>\
<br />\
<h3>" +
  ttTools.constants.months[ttTools.release.getMonth()] + " " +
  ttTools.release.getDate() + ", " +
  ttTools.release.getFullYear() +
"</h3>\
<ul>\
	<li>TTtools has been updated to work with the latest update of Turntable.fm</li>\
	<li>New Website - <a href=\"http://tttools.html-5.me/\" target=\"_blank\">ttTools.html-5.me</a></li>\
</ul>\
<br/>";
  },

  donateButton : function () {
    return "\
<h3>Donate to the original author of ttTools</h3>\
<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'>\
<input type='hidden' name='cmd' value='_s-xclick'>\
<input type='hidden' name='hosted_button_id' value='ZNTHAXPNKMKBN'>\
<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>\
<img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'>\
</form>\
<br />";
  },

  submitIssue : function () {
    return "\
<h3>Found a bug? Want a feature?</h3>\
<p>\
  It's impossible to keep track of bugs and feature requests unless they're centralized.<br/><br/>\
  <a href='https://github.com/JNehlsen/ttTools/issues' target='_blank'>Please submit all bugs and feature requests here.</a>\
</p>\
<br/>";
  },

  time : {
    seconds : 1000,
    minutes : 60 * 1000,
    hours   : 60 * 60 * 1000,
    days    : 24 * 60 * 60 * 1000,
    weeks   : 7 * 24 * 60 * 60 * 1000,
    months  : 30 * 7 * 24 * 60 * 60 * 1000,
    years   : 365 * 30 * 7 * 24 * 60 * 60 * 1000
  },

  months : [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],

  hackers : [
    '4deadb0f4fe7d013dc0555f1', // @alain_gilbert
    '4e10fde04fe7d074cd0d8b95', // Axe_
    '4e42c21b4fe7d02e6107b1ff', // chrisinajar
    '4e55144e4fe7d02a3f2c486a', // Egeste
    '4dee9d454fe7d0589304d644', // Frick
    '4e6498184fe7d042db021e95', // Inumedia
    '4e0b4de14fe7d076b205e657', // Jake.Smith
    '4e596d44a3f7517501058e25', // overra
    '4e09dc63a3f7517d140c300d', // Starburst
    '4ddb2be9e8a6c45f6f000125', // SubFuze
    '4dee6cd24fe7d05893018656', // vin
    '4e0ff328a3f751670a084ba6', // YayRamen
    '4eeb7653590ca257710024c0', // DangerousJax
  ]
}
