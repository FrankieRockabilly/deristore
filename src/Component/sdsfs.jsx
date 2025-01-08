useEffect(() => {
    // Animasi menggunakan GSAP
    gsap.fromTo(
        ".heading", // Menargetkan elemen dengan kelas .heading (h2)
        { x: -400, opacity: 0 }, // Posisi awal di kiri dan opacity 0
        { x: 0, opacity: 1, duration: 3, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1
    )

    gsap.fromTo(
        ".paragraph", // Menargetkan elemen dengan kelas .paragraph (p)
        { x: -500, opacity: 0 }, // Posisi awal di kiri dan opacity 0
        { x: 0, opacity: 1, duration: 3, delay: 1, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1 dengan delay
    )
    gsap.fromTo(
        ".social",
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 4, delay: 1, ease: "power2.out" }
    )
}, [])