// Dummy data untuk Pengumuman
// Data ini akan digunakan ketika STRAPI_URL tidak di-set

export const dummyPengumuman = {
	data: [
		{
			id: 1,
			documentId: 'pengumuman-1',
			judul: 'Retreat Pemuda',
			tanggal: '2026-07-01',
			deskripsi: 'Tema: "Berani Berbeda". Bergabunglah dalam retreat pemuda yang akan diadakan bulan ini.',
			kategori: 'Pemuda',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 2,
			documentId: 'pengumuman-2',
			judul: 'Perayaan Natal',
			tanggal: '2026-11-01',
			deskripsi: 'Persiapan perayaan Natal akan dimulai. Daftarkan diri untuk ikut pelayanan.',
			kategori: 'Umum',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 3,
			documentId: 'pengumuman-3',
			judul: 'Sekolah Minggu',
			tanggal: '2026-06-21',
			deskripsi: 'Kelas dibuka setiap minggu. Anak usia 3-12 tahun sangat welcome!',
			kategori: 'Anak',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		}
	]
};
