// JS2 CA DOM

function cards() {
  for (let i = 1; i <= 9; i++) {
    let c = document.createElement("div");
    c.className = "box1";
    c.setAttribute(`data`, ` data-attribute ${i}`);
    console.log(c);
    let p1 = document.createElement("p");
    let hr1 = document.createElement("hr");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let btn = document.createElement("button");

    // Add Class to the paragraph
    p1.className = "p1";
    hr1.className = "hr1";
    p2.className = "p2";
    p3.className = "p3";
    btn.className = "btn";

    p1.appendChild(
      document.createTextNode(`This is a test card for Norrof it is number 1`)
    );
    p2.appendChild(document.createTextNode("By Michael"));
    p3.appendChild(document.createTextNode("43 minutes ago"));
    // btn.appendChild(document.createTextNode("View on site"));
    btn.innerHTML = "View on site";

    document.querySelector("section").appendChild(c);
    c.appendChild(p1);
    c.appendChild(hr1);
    c.appendChild(p2);
    c.appendChild(p3);
    c.appendChild(btn);

    // Odd
    let cOdd = document.querySelectorAll("div:nth-child(even) ");

    cOdd.forEach(lii => {
      lii.style.background = "#52ce90";
      lii.style.color = "white";
      lii.innerHTML = `This is a test card for Norrof it is number 1 <hr style = "  border: 2px solid rgb(0, 162, 255);"> By Michael <br><br> an hour ago <br><br>`;
      let btn1 = document.createElement("button");
      btn1.className = "btn1";
      btn1.innerHTML = "View on site";
      lii.appendChild(btn1);
    });
  }
}

cards();
