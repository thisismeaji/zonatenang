import Link from 'next/link';

export default function Footer() {
    return(
        <footer>
            <div>
                <ul>
                    <li>
                        <Link href="/tentang">Tentang</Link>
                    </li>
                    <li>
                        <Link href="/kontak">Kontak</Link>
                    </li>
                    <li>
                        <Link href="/kebijakan-privasi">Kebijakan Privasi </Link>
                    </li>
                    <li>
                        <Link href="/ketentuan-pengguna">Ketentuan Pengguna</Link>
                    </li>
                </ul>
            </div>
            <p>© 2024 ZonaTenang.com. Hak Cipta Dilindungi.</p>
        </footer>
    )
}