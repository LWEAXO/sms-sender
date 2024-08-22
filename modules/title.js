function console_title(x) {//lweaxo
    if (process.platform == 'win32') {//lweaxo
        process.title = x + ` / Sms Gönderme [LWEAXO]`;//lweaxo
    } else {//lweaxo
        process.stdout.write('\x1b]2;' + x + " / Sms Gönderme [LWEAXO]" + '\x1b\x5c');//lweaxo
    }//lweaxo
}//lweaxo
//lweaxo
module.exports = console_title;//lweaxo