import json

with open('c:/Users/Microsoft/3D Objects/Aditya/Project/Deaditya/Example/kbbg.json', 'r') as file:
    data = json.load(file)

def cari_istilah(istilah_dicari):
    for item in data:
        if item['istilah'].lower() == istilah_dicari.lower():
            return item
    return None

istilah_input = input("Masukkan istilah yang ingin dicari: ")

hasil = cari_istilah(istilah_input)

if hasil:
    print("\nHasil Pencarian:")
    print(f"Istilah: {hasil['istilah']}")
    print(f"Definisi: {'; '.join(hasil['definisi'])}")
    print(f"Contoh Penggunaan: {'; '.join(hasil['contoh_penggunaan'])}")
    print(f"Kategori: {'; '.join(hasil['kategori'])}")
    print(f"Bahasa Asal: {'; '.join(hasil['bahasa_asal'])}")
    print(f"Penggunaan: {hasil['penggunaan']}")
    print(f"Sinonim: {'; '.join(hasil['sinonim'])}")
    print(f"Antonim: {'; '.join(hasil['antonim'])}")
    print(f"Variasi Penulisan: {'; '.join(hasil['variasi_penulisan'])}")
    print("")
else:
    print("Istilah tidak ditemukan dalam kamus.")
    print("")