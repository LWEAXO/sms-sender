const rl=require("readline-sync"),colors=require("colors"),ansi=require("ansi-colors"),title=require("./modules/title.js"),fastBomber=require("./modules/sms.js");global.request=require("request"),global.axios=require("axios"),global.faker=require("faker"),global.dayjs=require("dayjs"),global.fs=require("fs"),global.chalk=require("chalk"),title("Lweaxo - Sms Bomber- v1.0"),console.log("\n[31m██╗░░░░░ ██╗░░░░░░░██╗ ███████╗ ░█████╗░ ██╗░░██╗ ░█████╗░   [33m░██████╗ ███╗░░░███╗ ░██████╗\n[31m██║░░░░░ ██║░░██╗░░██║ ██╔════╝ ██╔══██╗ ╚██╗██╔╝ ██╔══██╗   [33m██╔════╝ ████╗░████║ ██╔════╝\n[31m██║░░░░░ ╚██╗████╗██╔╝ █████╗░░ ███████║ ░╚███╔╝░ ██║░░██║   [33m╚█████╗░ ██╔████╔██║ ╚█████╗░\n[31m██║░░░░░ ░████╔═████║░ ██╔══╝░░ ██╔══██║ ░██╔██╗░ ██║░░██║   [33m░╚═══██╗ ██║╚██╔╝██║ ░╚═══██╗\n[31m███████╗ ░╚██╔╝░╚██╔╝░ ███████╗ ██║░░██║ ██╔╝╚██╗ ╚█████╔╝   [33m██████╔╝ ██║░╚═╝░██║ ██████╔╝\n[31m╚══════╝ ░░╚═╝░░░╚═╝░░ ╚══════╝ ╚═╝░░╚═╝ ╚═╝░░╚═╝ ░╚════╝░   [33m╚═════╝░ ╚═╝░░░░░╚═╝ ╚═════╝░\n".yellow.bold);let telefon=rl.question("Telefon Numarasi Giriniz +90: ".green.bold);10!=telefon.length&&(console.log("- Telefon Numarasi 10 Haneli Olmalidir.".red.bold+" Örn: 5001231233".blue.bold),process.exit(1)),title("Numara: "+telefon);let miktar=rl.question("Kac Adet SMS Gondermek Istiyorsunuz: ".green.bold);isNaN(miktar)&&(console.log(" - Lutfen Bir Rakam Giriniz.".red.bold),process.exit(1)),0==miktar.length&&(console.log("Miktar Giriniz".red.bold),process.exit(1)),title(`Telefon: ${telefon} - Miktar: ${miktar}`),console.log("[Lweaxo]".yellow.bold+" SMS Gonderiliyor...".rainbow.bold),console.log("[Lweaxo]".yellow.bold+" SMS Gonderiliyor...".rainbow.bold),console.log("[Lweaxo]".yellow.bold+" SMS Gonderiliyor...".rainbow.bold),fastBomber(telefon,miktar);