import Subscribe from "./Subscribe";

export default function Hero() {
    return(
        <section className="hero">
            <div>
                <p className="welcome">Selamat Datang di ZonaTenang.com</p>
                <h1>Tempat Nyaman Buat Kamu yang Suka Sendiri</h1>
                <p className="description">Temukan informasi Seputar Tips dan Trik untuk Kaum Introvert dengan fokus pada pengembangan diri yang tenang dan santai </p>
                <Subscribe/>
            </div>
        </section>
    )
}