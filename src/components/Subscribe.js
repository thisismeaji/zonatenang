// EmailInput.js
export default function Subscribe() {
    return (
        <div className="subscribe">
            <input
                type="email"
                id="email"
                placeholder="Masukan email kamu"
                required
            />
            <button>Subscribe</button>
        </div>
    );
}
