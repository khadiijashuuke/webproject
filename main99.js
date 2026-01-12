// ===== 1. BODY STYLE =====
document.body.style.margin = "0";
document.body.style.fontFamily = "'Segoe UI', Roboto, sans-serif";
document.body.style.backgroundColor = "#f0f2f5";

// ===== 2. DATA: DHAMMAAN EXAMPLES-KA (CH 7=16, CH 8=10, CH 9=ALL) =====
const serviceData = {
    7: [
        { title: "1. Object Literal", code: "const s = { name: 'Cali', age: 20 }; return s.name;" },
        { title: "2. New Object Keyword", code: "const p = new Object(); p.item = 'Laptop'; return p.item;" },
        { title: "3. Constructor Function", code: "function User(n) { this.name = n; } const u1 = new User('Amina'); return u1.name;" },
        { title: "4. Class Syntax (ES6)", code: "class Car { constructor(n) { this.n = n; } } const c = new Car('BMW'); return c.n;" },
        { title: "5. Dot Notation", code: "const obj = { id: 1 }; return obj.id;" },
        { title: "6. Bracket Notation", code: "const obj = { 'job-type': 'Dev' }; return obj['job-type'];" },
        { title: "7. Adding Property", code: "const s = {}; s.gpa = 3.5; return s.gpa;" },
        { title: "8. Modifying Property", code: "const s = { age: 20 }; s.age = 22; return s.age;" },
        { title: "9. Deleting Property", code: "const s = { a: 1, b: 2 }; delete s.a; return s.a || 'Deleted';" },
        { title: "10. Object Methods", code: "const o = { say: () => 'Hello' }; return o.say();" },
        { title: "11. This Keyword", code: "const o = { n: 'Axmed', hi: function() { return this.n; } }; return o.hi();" },
        { title: "12. Object.keys()", code: "const o = { a: 1, b: 2 }; return Object.keys(o).length;" },
        { title: "13. Object.values()", code: "const o = { a: 1, b: 2 }; return Object.values(o)[0];" },
        { title: "14. For...in Loop", code: "const o = { a: 1 }; let r = ''; for(let k in o) r=k; return r;" },
        { title: "15. JSON.stringify()", code: "return JSON.stringify({id: 1});" },
        { title: "16. JSON.parse()", code: "return JSON.parse('{\"n\":\"Ali\"}').n;" }
    ],
    8: [
        { title: "1. getElementById", code: "return 'Syntax: document.getElementById(\"id\")';" },
        { title: "2. getElementsByClassName", code: "return 'Syntax: document.getElementsByClassName(\"cls\")';" },
        { title: "3. querySelector", code: "return 'Syntax: document.querySelector(\".btn\")';" },
        { title: "4. innerHTML", code: "return 'Action: el.innerHTML = \"<b>Hi</b>\"';" },
        { title: "5. textContent", code: "return 'Action: el.textContent = \"Plain Text\"';" },
        { title: "6. style Property", code: "return 'Action: el.style.color = \"red\"';" },
        { title: "7. createElement", code: "return 'Syntax: document.createElement(\"div\")';" },
        { title: "8. appendChild", code: "return 'Action: parent.appendChild(child)';" },
        { title: "9. remove()", code: "return 'Action: element.remove()';" },
        { title: "10. setAttribute", code: "return 'Action: el.setAttribute(\"src\", \"img.jpg\")';" }
    ],
    9: [
        { title: "Click Event", code: "return 'btn.addEventListener(\"click\", func)';" },
        { title: "Double Click", code: "return 'Triggered on dblclick event';" },
        { title: "Mouseover", code: "return 'Detects mouse entry on element';" },
        { title: "Keydown", code: "return 'Detects keyboard press: e.key';" },
        { title: "Submit Event", code: "return 'e.preventDefault() stops refresh';" },
        { title: "Focus & Blur", code: "return 'Detects entry/exit in input fields';" },
        { title: "Event Delegation", code: "return 'Handling child events via parent listener';" }
    ]
};

// ===== 3. HEADER & NAVIGATION =====
const header = document.createElement("header");
header.style.cssText = "background:linear-gradient(135deg, #1b5e20, #4caf50); color:white; padding:15px 3%; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 10px rgba(0,0,0,0.2); position:sticky; top:0; z-index:1100;";
document.body.appendChild(header);

const leftSide = document.createElement("div");
leftSide.style.display = "flex"; leftSide.style.alignItems = "center"; leftSide.style.gap = "15px";
header.appendChild(leftSide);

const hamburger = document.createElement("div");
hamburger.style.cssText = "width:30px; height:22px; display:flex; flex-direction:column; justify-content:space-between; cursor:pointer; position:relative;";
for(let i=0; i<3; i++) {
    const line = document.createElement("div");
    line.style.cssText = "height:3px; width:100%; background:white; border-radius:2px; transition:0.3s;";
    hamburger.appendChild(line);
}
leftSide.appendChild(hamburger);

const logo = document.createElement("h2"); logo.textContent = "Khadiija"; logo.style.margin = "0";
leftSide.appendChild(logo);

const topNav = document.createElement("nav");
topNav.style.display = "flex"; topNav.style.gap = "15px";
header.appendChild(topNav);

const pages = ["Home", "About", "Services", "Contact"];
pages.forEach(p => {
    const a = document.createElement("a");
    a.textContent = p;
    a.style.cssText = "color:white; text-decoration:none; font-weight:bold; cursor:pointer; font-size:14px; padding:5px 8px;";
    a.onclick = () => showContent(p);
    topNav.appendChild(a);
});

// ===== 4. SIDEBAR =====
const sidebar = document.createElement("div");
sidebar.style.cssText = "position:fixed; top:0; left:-280px; width:280px; height:100%; background:#1b5e20; color:white; transition:0.3s; z-index:1050; padding-top:80px; box-shadow:5px 0 15px rgba(0,0,0,0.3);";
document.body.appendChild(sidebar);

let menuOpen = false;
hamburger.onclick = () => {
    menuOpen = !menuOpen;
    sidebar.style.left = menuOpen ? "0" : "-280px";
    const lines = hamburger.children;
    if (menuOpen) {
        lines[0].style.transform = "rotate(45deg) translate(6px, 7px)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "rotate(-45deg) translate(6px, -7px)";
    } else {
        lines[0].style.transform = "none"; lines[1].style.opacity = "1"; lines[2].style.transform = "none";
    }
};

pages.forEach(p => {
    const item = document.createElement("div");
    item.textContent = p;
    item.style.cssText = "padding:15px 25px; cursor:pointer; font-weight:bold; font-size:18px; border-bottom:1px solid #2e7d32;";
    item.onclick = () => { showContent(p); hamburger.click(); };
    sidebar.appendChild(item);
});

// ===== 5. MAIN CONTENT =====
const main = document.createElement("main");
main.style.padding = "40px 5%";
main.style.marginBottom = "80px";
document.body.appendChild(main);

function showContent(page) {
    main.innerHTML = "";
    const container = document.createElement("div");
    container.style.cssText = "background:white; padding:30px; border-radius:15px; box-shadow:0 10px 30px rgba(0,0,0,0.1); max-width:850px; margin:auto;";

    if (page === "About") {
        container.innerHTML = `
            <div style="text-align:center;">
                <img src="khadiija.jpg.jpeg" style="width:160px; height:160px; border-radius:50%; border:5px solid #4caf50; object-fit:cover; margin-bottom:15px;">
                <h1 style="color:#1b5e20; margin:0;">Khadija Ahmed Mohamud</h1>
                <p style="font-weight:bold;">ID: CS1501026</p>
                <div style="text-align:left; background:#f9f9f9; padding:20px; border-radius:10px; margin-top:20px; border-top:4px solid #4caf50;">
                    <p><strong>Phone:</strong> 619920680</p>
                    <p><strong>Email:</strong> inashuuke@gmail.com</p>
                    <p><strong>University:</strong> Jazeera University</p>
                    <p><strong>College:</strong> Computer Science</p>
                    <p><strong>Class:</strong> BATACH 15 A</p>
                    <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>
                    <p><strong>Project 1:</strong> <a href="https://www.benjerry.com/" target="_blank" style="color:#4caf50; font-weight:bold; text-decoration:none;">Ben & Jerry's</a></p>
                    <p><strong>Project 2:</strong> <a href="https://jenis.com/collections/all-flavors" target="_blank" style="color:#2196f3; font-weight:bold; text-decoration:none;">Jeni's Splendid Ice Creams</a></p>
                </div>
            </div>
        `;
    } 
    else if (page === "Services") {
        container.innerHTML = `<h1 style="text-align:center; color:#1b5e20;">Chapter Lab Exercises</h1>`;
        Object.keys(serviceData).forEach(ch => {
            const h = document.createElement("h2"); h.textContent = "Chapter " + ch;
            h.style.cssText = "border-bottom:3px solid #4caf50; color:#2e7d32; margin-top:30px;";
            container.appendChild(h);
            serviceData[ch].forEach(ex => {
                const box = document.createElement("div");
                box.style.cssText = "background:#f9f9f9; padding:15px; border-radius:8px; margin:15px 0; border-left:5px solid #1b5e20;";
                box.innerHTML = `<strong>${ex.title}</strong><pre style="background:#282c34; color:#61dafb; padding:10px; border-radius:5px; font-size:12px; margin:10px 0; overflow-x:auto;">${ex.code}</pre>`;
                
                const btn = document.createElement("button");
                btn.textContent = "Test Result";
                btn.style.cssText = "background:#1b5e20; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;";
                
                const res = document.createElement("div");
                res.style.cssText = "margin-top:10px; color:#2196f3; font-weight:bold; display:none;";
                
                btn.onclick = () => {
                    res.style.display = "block";
                    try { res.textContent = "Result: " + new Function(ex.code)(); } catch(e) { res.textContent = "Executed (Action-based)"; }
                };
                box.append(btn, res);
                container.appendChild(box);
            });
        });
    }
    else if (page === "Home") {
        container.innerHTML = `
            <div style="text-align:center;">
                <h1 style="color:#1b5e20;">Welcome Home</h1>
                <p>Khadiija's Official Portal</p>
            </div>
            <div style="margin-top:30px; padding:20px; background:#f4f4f4; border-radius:10px; border:1px dashed #4caf50;">
                <div id="demoArea"><h3>Admin Panel - DOM Live</h3></div>
                <div style="display:flex; gap:10px; margin-top:15px;">
                    <button id="iBtn" style="background:#4caf50; color:white; border:none; padding:10px; flex:1; cursor:pointer; border-radius:5px;">INSERT</button>
                    <button id="rBtn" style="background:#2196f3; color:white; border:none; padding:10px; flex:1; cursor:pointer; border-radius:5px;">REPLACE</button>
                    <button id="dBtn" style="background:#f44336; color:white; border:none; padding:10px; flex:1; cursor:pointer; border-radius:5px;">REMOVE</button>
                </div>
            </div>
        `;
        setTimeout(() => {
            const area = document.getElementById("demoArea");
            document.getElementById("iBtn").onclick = () => { area.innerHTML += "<p>New Item ✨</p>"; };
            document.getElementById("rBtn").onclick = () => { area.innerHTML = "<h4>Content Swapped! 🔁</h4>"; };
            document.getElementById("dBtn").onclick = () => { area.innerHTML = "<h3>Admin Panel - DOM Live</h3>"; };
        }, 0);
    }
    else if (page === "Contact") {
        container.innerHTML = `<h1 style="text-align:center;">Contact Us</h1>
            <div style="display:flex; flex-direction:column; gap:15px;">
                <input type="text" placeholder="Email/Phone" style="padding:12px; border:1px solid #ccc; border-radius:5px;">
                <textarea placeholder="Message" style="padding:12px; border:1px solid #ccc; border-radius:5px; height:80px;"></textarea>
                <button onclick="alert('Sent!')" style="background:#1b5e20; color:white; padding:12px; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">SEND</button>
                <p style="text-align:center;">📞 619920680</p>
            </div>`;
    }
    main.appendChild(container);
}

// ===== 6. FOOTER =====
const footer = document.createElement("footer");
footer.style.cssText = "text-align:center; padding:15px; background:#222; color:white; position:fixed; bottom:0; width:100%; box-sizing:border-box;";
footer.textContent = "Prepared by Khadija Ahmed Mohamud | 619920680";
document.body.appendChild(footer);

showContent("Home");