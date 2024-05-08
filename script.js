function trans() {
    alert("Tulkojums:\n Eiropas vienotie valodu prasmes un izpratnes pamatprincipu ietvarprincipu kopums (CEFR) ir starptautisks valodas prasmes un izpratnes standarts. Šis standarts ietver 6 dažādus angļu valodas līmeņus: A1, A2, B1, B2, C1 un C2. Dažas iestādes atzīst arī pirms A1 līmeni, lai gan tas nav tik izplatīts. Ko šie apzīmējumi patiesībā nozīmē par jūsu angļu valodas prasmēm?");

}
function trans1() {
    alert("Tulkojums:\n A1 līmenis attiecas uz runātājiem, kuriem ir pamata zināšanas angļu valodā. Ja esat A1 līmenī, varat saprast dažas izplatītas frāzes un vārdus angļu valodā. Varat uzdot vienkāršus jautājumus un atbildēt uz tiem (t.i., cik jums gadu? Kur jūs dzīvojat? Kāda ir jūsu mīļākā krāsa?).");
}
function trans2() {
    alert("Tulkojums:\n Visticamāk, jums būs pilnīga saruna par sevi un dažādām savas dzīves daļām. Lai gan jūsu klausīšanās izpratne ir uzlabojusies, jums joprojām var būt nepieciešams, lai citi runātu lēni vai ik pa laikam atkārtojas.");
}
function showCaption() {
    document.getElementById("caption").style.display = "block";
}

function closeCaption() {
    document.getElementById("caption").style.display = "none";
}
function check() {
    let totalSum = 0;
    if (document.getElementById("variant1b").checked) totalSum++;
    if (document.getElementById("variant2b").checked) totalSum++;
    if (document.getElementById("variant3a").checked) totalSum++;
    if (document.getElementById("variant4a").checked) totalSum++;
    if (document.getElementById("variant5a").checked) totalSum++;
    alert(totalSum);

}
function check2() {
    let totalSum = 0;
    if (document.getElementById("variant1c").checked) totalSum++;
    if (document.getElementById("variant2b").checked) totalSum++;
    if (document.getElementById("variant3c").checked) totalSum++;
    if (document.getElementById("variant4b").checked) totalSum++;
    if (document.getElementById("variant5b").checked) totalSum++;
    alert(totalSum);

}
function check3() {
    let totalSum = 0;
    let answer = document.getElementById("answer1").value;
    if (answer === "hand in")
        totalSum++;
    alert(totalSum);
}