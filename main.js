let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Groß ist der Herr, noch größer sein Schaft."',
    '"Durch seinen Cock wurde alles geschaffen."', 
    '"Alles was Gott schuf war ein Schuh. Dann formte er den ersten Menschen aus Scheiße. Er bließ in seinen Arsch. Dieser erste Mensch hieß Marcel D\'avis."',
    '"Dann nahm der Herr eine Rippe Marcel\'s und formte daraus eine Frau. Das war die erste Frau. Sie hieß die enge Eva."',
    '"Es gab Leid und Tod. Und Kot. Und kein Brot."',
    'Gott gebot Marcel: "Alle Menschen darfst du essen, aber sobald du kackst, wirst du sterben. Spast!"',
    '"Gott der Barmherzige hatte im Sinn seinen Schaft einzuführen. Und so fickte Gott Eva in die Fotze und in den Arsch. Das war Saas!"',
    '"In der Bibel offenbart Gott seinen Plan, die Mösen zu besamen. Einen Teil seines Planes offenbart Gott dem Propheten Baba Haft."',
    '"Er versprach Ihm viel zu kommen. So zahlreich wie Sandkörner am Meer und wie die Sterne am Himmel... und wie Sand am Pimmel."',
    'Aber Gott sprach: "Du scheiß Opfer!"',
    '"Im gleichen Moment sah er einen Widder. Er ging hin, nahm den Widder und fickte Ihn, anstelle seines eigenen Sohnes."',
    '"Fürchte dich Maria. SOOS." "Ich bin eine Jungfrau. SHEESH."',
    '"Der heilige Schaft wird über dich kommen. Deshalb wird auch das Kind Haia Schaschcock genannt werden. Soos."',
    '"Maria eilte in eine Stadt in Judäa um Ihre Verwandte Elizabet zu fisten. AUA."',
    '"Scheiß Juden" - Maria',
    '"Hört Bewohner Nazareth, dass auf Befehl des Kaisers Haftbefehl eine Judenzählung durchgeführt werden wird."',
    '"Alle Bewohner haben sich unverzüglich in seiner Geburtsstadt fisten zu lassen."',
    '"In jener Gegend lagerten Freier und hielten Nachtwache bei ihrer Herde. Da trat der Bengel des Herrn zu Ihnen und der Schwanz des Herrn umstahlte Sie."',
    '"Heute ist euch in der Stadt Davis der Retter geboren: Fistus, der Herr der Ohren!"',
    'Im Tempel befand sich ein rechter Mann, dem vom heiligen Scheiß offenbart worden war, er werde nicht scheißen, ehe er den Fistus gesehen habe. Sein Name war Siismann. "Herr, nun lässt du mein Gesäß in Frieden scheißen, wie dein Wort es verheißen hat. Sieg Heil."',
    '"Herr, nun lässt du mein Gesäß in Frieden scheißen, wie dein Wort es verheißen hat. Sieg Heil." - Siismann',
    '"Und als sie alles getan hatten verpissten sie sich und wurden Nazis."',
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
})