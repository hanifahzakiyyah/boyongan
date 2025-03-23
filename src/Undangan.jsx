import { useState } from "react";

export default function Undangan() {
    const [nama, setNama] = useState("");
    const [panggilan, setPanggilan] = useState("");
    const [sesi, setSesi] = useState("1");
    const [copied, setCopied] = useState(false);

    const defaultNama = "tamu undangan";
    const defaultPanggilan = "Bapak/Ibu Saudara/i";

    const url = `https://walimah-anang-ais.vercel.app/?kpd=${encodeURIComponent((nama || defaultNama).toLowerCase())}&p=${encodeURIComponent((panggilan || defaultPanggilan).toLowerCase())}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const resetForm = () => {
        setNama("");
        setPanggilan("");
    };

    return (
        <section className="bg-white fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center">
            <div className="w-96 min-h-96 shadow-2xl border rounded-3xl p-6 relative">
                <h2 className="text-xl font-bold text-center mb-4">Form Undangan</h2>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium">Nama</label>
                        <input 
                            type="text" 
                            className="w-full border rounded-lg p-2" 
                            placeholder={defaultNama} 
                            value={nama} 
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Panggilan</label>
                        <input 
                            type="text" 
                            className="w-full border rounded-lg p-2" 
                            placeholder={defaultPanggilan} 
                            value={panggilan} 
                            onChange={(e) => setPanggilan(e.target.value)}
                        />
                    </div>
                </form>
                <div className="mt-4 p-3 border rounded-lg bg-gray-100 text-center break-all">
                    {url}
                </div>
                <div className="relative mt-2">
                    <button 
                        onClick={copyToClipboard} 
                        className="w-full bg-lime-700 text-white py-2 rounded-lg hover:bg-lime-800"
                    >
                        Copy Link
                    </button>
                    {copied && <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2">Tautan telah disalin.</span>}
                </div>
                <button 
                    onClick={resetForm} 
                    className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800 mt-2"
                >
                    Isi Lagi
                </button>
            </div>
        </section>
    );
}
