/* ==================================================
   DATA DIRI
================================================== */

const data = {

    name: "Nazwa Fahra Anas",

    age: 18,

    school: "SMKN 1 JAKARTA",

    major: "RPL",

    bio: "Memiliki rasa ingin tahu yang besar mendorong saya untuk terus belajar, mencoba hal baru, dan memberikan yang terbaik dalam setiap tanggung jawab.",


    /* ================= PENDIDIKAN ================= */

    education: [

        {
            year: "2014 — 2015",
            level: "TK",
            name: "TK Cikal Bangsa",
            desc: "Awal perjalanan pendidikan"
        },

        {
            year: "2015 — 2021",
            level: "SD",
            name: "SDN 06 Penjaringan",
            desc: "Membangun fondasi dan pengalaman pertama"
        },

        {
            year: "2021 — 2024",
            level: "SMP",
            name: "SMPN 21 Jakarta",
            desc: "Mulai menemukan minat dan mengembangkan kemampuan"
        },

        {
            year: "2024 — NOW",
            level: "SMK",
            name: "SMKN 1 JAKARTA",
            desc: "Mengembangkan kompetensi dan mempersiapkan masa depan"
        }

    ],


    /* ================= PRESTASI ================= */

    achievements: [

        {
            title: "Juara 1 Senam Kreasi",
            detail: "Tingkat Provinsi",
            year: "2015"
        },

        {
            title: "Juara 1 Lomba Mewarnai",
            detail: "Tingkat Sekolah",
            year: "2018"
        },

        {
            title: "Juara 1 UMKM Kreatif",
            detail: "Tingkat Daerah",
            year: "2025"
        },

        {
            title: "Sertifikat Coding camp",
            detail: "Bidang Akademik",
            year: "2025"
        },


    ]

};


/* ==================================================
   MEMASUKKAN DATA DIRI
================================================== */

document.getElementById("heroName").textContent =
    data.name;


document.getElementById("fullName").textContent =
    data.name;


document.getElementById("age").textContent =
    String(data.age).padStart(2, "0");


document.getElementById("ageDetail").textContent =
    `${data.age} Tahun`;


document.getElementById("schoolDetail").textContent =
    data.school;


document.getElementById("majorDetail").textContent =
    data.major;


document.getElementById("bio").textContent =
    data.bio;


document.getElementById("currentSchool").textContent =
    data.school;


document.getElementById("currentMajor").textContent =
    data.major;


document.getElementById("contactName").textContent =
    data.name;


document.getElementById("footerName").textContent =
    data.name;


/* ==================================================
   JUMLAH PRESTASI
================================================== */

document.getElementById("achievementCount").textContent =
    String(data.achievements.length).padStart(2, "0");


/* ==================================================
   TIMELINE PENDIDIKAN
================================================== */

document.getElementById("timeline").innerHTML =

    data.education.map(item => `

        <div class="timeline-item">

            <div class="timeline-year">
                ${item.year}
            </div>

            <div class="timeline-level">
                ${item.level}
            </div>

            <div>

                <div class="timeline-name">
                    ${item.name}
                </div>

                <span class="timeline-desc">
                    ${item.desc}
                </span>

            </div>

            <div class="timeline-arrow">
                ↗
            </div>

        </div>

    `).join("");



/* ==================================================
   DAFTAR PRESTASI
================================================== */

document.getElementById("achievementList").innerHTML =

    data.achievements.map((item, i) => `

        <div class="achievement-item">

            <div class="achievement-index">
                ${String(i + 1).padStart(2, "0")}
            </div>

            <div>

                <div class="achievement-title">
                    ${item.title}
                </div>

                <div class="achievement-detail">
                    ${item.detail}
                </div>

            </div>

            <div class="achievement-year">
                ${item.year}
            </div>

            <div class="achievement-arrow">
                ↗
            </div>

        </div>

    `).join("");



/* ==================================================
   ANIMASI SCROLL
================================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                /*
                 * Setelah muncul, observer tidak perlu
                 * mengamati elemen tersebut lagi.
                 */

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


/* Semua elemen dengan class reveal */

document
    .querySelectorAll(".reveal")
    .forEach(el => observer.observe(el));



/* ==================================================
   EFEK CAHAYA MENGIKUTI MOUSE
================================================== */

document.addEventListener("mousemove", e => {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 2;


    const orbOne =
        document.querySelector(".orb-one");

    const orbTwo =
        document.querySelector(".orb-two");


    orbOne.style.transform =
        `translate(${x * 18}px, ${y * 18}px)`;


    orbTwo.style.transform =
        `translate(${x * -12}px, ${y * -12}px)`;

});



/* ==================================================
   FOTO ERROR HANDLER
================================================== */

const photo =
    document.getElementById("profilePhoto");


photo.addEventListener("error", () => {

    /*
     * Kalau foto.jpg tidak ditemukan,
     * gambar disembunyikan.
     */

    photo.style.display = "none";

});