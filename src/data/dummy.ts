// Dummy data untuk development
// Data ini akan digunakan ketika STRAPI_URL tidak di-set

export const dummyHero = {
	data: {
		id: 1,
		documentId: 'hero-1',
		title: 'Bertumbuh dalam Iman',
		subtitle: 'Melayani dengan Kasih',
		background_image: {
			url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80'
		},
		cta_button_text: 'Jadwal Ibadah',
		cta_button_link: '#jadwal',
		whatsapp_link: 'https://wa.me/6281234567890',
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z'
	}
};

export const dummyJadwalIbadah = {
	data: [
		// {
		// 	id: 1,
		// 	documentId: 'jadwal-1',
		// 	hari: 'Senin',
		// 	nama_ibadah: 'Doa Pagi',
		// 	waktu: '04.30',
		// 	keterangan: 'Senin-Kamis: 04.30 | Sabtu: 05.00 (Kecuali Jumat & Minggu)',
		// 	createdAt: '2024-01-01T00:00:00.000Z',
		// 	updatedAt: '2024-01-01T00:00:00.000Z'
		// },
		{
			id: 2,
			documentId: 'jadwal-2',
			hari: 'Selasa',
			nama_ibadah: 'Ibadah Kaum Wanita',
			waktu: '17.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 3,
			documentId: 'jadwal-3',
			hari: 'Rabu',
			nama_ibadah: 'Persekutuan Doa Pemuda',
			waktu: '18.30',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 4,
			documentId: 'jadwal-4',
			hari: 'Rabu',
			nama_ibadah: 'Ibadah Keluarga Muda',
			waktu: '19.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 5,
			documentId: 'jadwal-5',
			hari: 'Kamis',
			nama_ibadah: 'Doa Puasa Session I',
			waktu: '08.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 6,
			documentId: 'jadwal-6',
			hari: 'Kamis',
			nama_ibadah: 'Doa Puasa Session II',
			waktu: '10.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 7,
			documentId: 'jadwal-7',
			hari: 'Kamis',
			nama_ibadah: 'Ibadah Tengah Minggu',
			waktu: '18.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 8,
			documentId: 'jadwal-8',
			hari: 'Kamis',
			nama_ibadah: 'Doa Malam Session I',
			waktu: '20.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 9,
			documentId: 'jadwal-9',
			hari: 'Kamis',
			nama_ibadah: 'Doa Malam Session II',
			waktu: '22.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 10,
			documentId: 'jadwal-10',
			hari: 'Jumat',
			nama_ibadah: 'Ibadah Kaum Pria',
			waktu: '18.30',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 11,
			documentId: 'jadwal-11',
			hari: 'Sabtu',
			nama_ibadah: 'Ibadah Pemuda',
			waktu: '17.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 12,
			documentId: 'jadwal-12',
			hari: 'Sabtu',
			nama_ibadah: 'Ibadah HCC',
			waktu: '17.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 13,
			documentId: 'jadwal-13',
			hari: 'Minggu',
			nama_ibadah: 'Ibadah Raya Umum I',
			waktu: '06.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 14,
			documentId: 'jadwal-14',
			hari: 'Minggu',
			nama_ibadah: 'Ibadah Sekolah Minggu',
			waktu: '09.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 15,
			documentId: 'jadwal-15',
			hari: 'Minggu',
			nama_ibadah: 'Ibadah Raya Umum II',
			waktu: '09.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 16,
			documentId: 'jadwal-16',
			hari: 'Minggu',
			nama_ibadah: 'Ibadah Raya Umum III',
			waktu: '16.00',
			keterangan: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		}
	]
};

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

export const dummyRayon = {
	data: [
		{
			id: 1,
			documentId: 'rayon-1',
			nama: 'RAYON BUKIT SION',
			tanggal: '2018-11-28',
			waktu: '19.00',
			lokasi: 'Kel. Bpk. Samuel Hadi\nRungkut Asri Timur XV/22',
			ketua_rayon: 'Bpk. Samuel Hadi',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 2,
			documentId: 'rayon-2',
			nama: 'RAYON BETLEHEM',
			tanggal: '2018-11-30',
			waktu: '18.00',
			lokasi: 'Kel. Bp. Gunawan Limanto\nDukuh Kupang 1/117',
			ketua_rayon: 'Bp. Gunawan Limanto',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 3,
			documentId: 'rayon-3',
			nama: 'RAYON TORSINA',
			tanggal: '2018-12-01',
			waktu: '18.30',
			lokasi: 'Kel. Bpk. Mulyanto\nRungkut Mutiara Blok C-14\nGrand City Regency, Rungkut Madya',
			ketua_rayon: 'Bpk. Mulyanto',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 4,
			documentId: 'rayon-4',
			nama: 'RAYON AGAPE',
			tanggal: '2018-12-01',
			waktu: '17.00',
			lokasi: 'Kel. Bpk. Soebroto\nRungkut Mapan Tengah 1/FD-12',
			ketua_rayon: 'Bpk. Soebroto',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		}
	]
};

export const dummyEvents = {
	data: [
		{
			id: 1,
			documentId: 'event-1',
			judul: 'Ibadah Syukur Anniversary Gereja',
			tanggal: '2026-07-15',
			waktu: '09.00 - 12.00 WIB',
			kategori: 'Ibadah Khusus',
			deskripsi: 'Merayakan ulang tahun gereja dengan ibadah syukur dan fellowship bersama seluruh jemaat.',
			lokasi: 'Gedung Gereja',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 2,
			documentId: 'event-2',
			judul: 'Youth Retreat 2026',
			tanggal: '2026-07-22',
			waktu: '22-24 Juli 2026',
			kategori: 'Retreat',
			deskripsi: 'Retreat pemuda dengan tema "Bertumbuh Bersama" untuk mempererat hubungan dengan Tuhan dan sesama.',
			lokasi: 'Locasi Retreat',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 3,
			documentId: 'event-3',
			judul: 'Seminar Parenting',
			tanggal: '2026-08-05',
			waktu: '09.00 - 15.00 WIB',
			kategori: 'Seminar',
			deskripsi: 'Seminar parenting untuk membantu orang tua dalam mendidik anak sesuai dengan firman Tuhan.',
			lokasi: 'Gedung Gereja',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 4,
			documentId: 'event-4',
			judul: 'Baptisan Air',
			tanggal: '2026-08-12',
			waktu: '10.00 WIB',
			kategori: 'Baptisan',
			deskripsi: 'Ibadah baptisan air bagi jemaat yang ingin mengikuti perintah Tuhan untuk dibaptis.',
			lokasi: 'Gedung Gereja',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		}
	]
};

export const dummyTentang = {
	data: {
		id: 1,
		documentId: 'tentang-1',
		sejarah: 'GPdI Haleluya didirikan dengan visi untuk menjadi rumah bagi semua orang yang ingin bertumbuh dalam iman dan melayani dengan kasih. Sejak awal berdirinya, gereja ini telah menjadi tempat di mana ribuan jiwa menemukan pengharapan dan kedamaian. Berawal dari sebuah kelompok doa kecil, GPdI Haleluya telah berkembang menjadi komunitas yang dinamis dengan berbagai pelayanan yang melayani berbagai kelompok usia dan kebutuhan. Setiap langkah perjalanan kami adalah bukti dari kasih dan kesetiaan Tuhan. Hingga hari ini, kami terus berkomitmen untuk membangun jemaat yang solid, mengasihi satu sama lain, dan menjadi berkat bagi komunitas di sekitar kami.',
		visi: 'Menjadi gereja yang bertumbuh dalam iman, melayani dengan kasih, dan memberikan dampak positif bagi komunitas dan kota.',
		misi: '<li class="flex items-start gap-3"><span class="text-slate-600 font-bold">•</span><span>Membangun jemaat yang solid dan mengasihi satu sama lain</span></li><li class="flex items-start gap-3"><span class="text-slate-600 font-bold">•</span><span>Mengembangkan potensi setiap individu untuk melayani Tuhan</span></li><li class="flex items-start gap-3"><span class="text-slate-600 font-bold">•</span><span>Menjadi berkat bagi komunitas di sekitar gereja</span></li><li class="flex items-start gap-3"><span class="text-slate-600 font-bold">•</span><span>Menjangkau jiwa-jiwa dengan kasih dan kebenaran</span></li>',
		nilai: [
			{
				judul: 'Kasih',
				ikon: 'heart',
				deskripsi: 'Mengasihi Tuhan dan sesama dengan sepenuh hati'
			},
			{
				judul: 'Integritas',
				ikon: 'shield',
				deskripsi: 'Hidup dengan jujur dan konsisten dalam kebenaran'
			},
			{
				judul: 'Komunitas',
				ikon: 'users',
				deskripsi: 'Membangun hubungan yang kuat dan saling mendukung'
			},
			{
				judul: 'Semangat',
				ikon: 'zap',
				deskripsi: 'Melayani dengan antusias dan penuh energi'
			},
			{
				judul: 'Pertumbuhan',
				ikon: 'book',
				deskripsi: 'Terus belajar dan bertumbuh dalam iman'
			},
			{
				judul: 'Dampak',
				ikon: 'target',
				deskripsi: 'Memberikan dampak positif bagi lingkungan sekitar'
			}
		],
		nama_gembala: 'Pdt. Nama Gembala',
		profil_gembala: 'Melayani di GPdI Haleluya dengan hati yang penuh kasih dan dedikasi. Memiliki visi untuk membangun jemaat yang solid dan bertumbuh dalam iman. Percaya bahwa setiap individu memiliki potensi yang dapat dikembangkan untuk kemuliaan Tuhan.',
		foto_gembala: null,
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z'
	}
};

export const dummyPelayanan = {
	data: [
		{
			id: 1,
			documentId: 'pelayanan-1',
			nama: 'Youth',
			deskripsi: 'Komunitas pemuda yang dinamis, bertumbuh bersama dalam iman dan persahabatan.',
			ikon: 'music',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 2,
			documentId: 'pelayanan-2',
			nama: 'Worship Team',
			deskripsi: 'Tim pujian dan penyembahan yang berdedikasi untuk memimpin jemaat dalam worship.',
			ikon: 'child',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 3,
			documentId: 'pelayanan-3',
			nama: 'Multimedia',
			deskripsi: 'Tim multimedia yang bertanggung jawab atas visual, audio, dan teknologi ibadah.',
			ikon: 'users',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 4,
			documentId: 'pelayanan-4',
			nama: 'Sekolah Minggu',
			deskripsi: 'Pelayanan anak-anak untuk mengajar kebenaran dengan cara yang menyenangkan.',
			ikon: 'heart',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 5,
			documentId: 'pelayanan-5',
			nama: 'Doa Syafaat',
			deskripsi: 'Tim doa yang setia berdoa untuk kebutuhan jemaat dan bangsa.',
			ikon: 'heart',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 6,
			documentId: 'pelayanan-6',
			nama: 'Connect Group',
			deskripsi: 'Kelompok kecil untuk fellowship yang lebih dalam dan saling menguatkan.',
			ikon: 'heart',
			gambar: null,
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		}
	]
};

export const dummyGaleri = {
	data: [
		{
			id: 1,
			documentId: 'galeri-1',
			judul: 'Ibadah Raya 1',
			deskripsi: 'Foto kegiatan ibadah raya',
			gambar: {
				url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80'
			},
			kategori: 'Ibadah Minggu',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 2,
			documentId: 'galeri-2',
			judul: 'Ibadah Raya 2',
			deskripsi: 'Foto kegiatan ibadah raya',
			gambar: {
				url: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80'
			},
			kategori: 'Ibadah Minggu',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 3,
			documentId: 'galeri-3',
			judul: 'Ibadah Raya 3',
			deskripsi: 'Foto kegiatan ibadah raya',
			gambar: {
				url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'
			},
			kategori: 'Ibadah Minggu',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 4,
			documentId: 'galeri-4',
			judul: 'Ibadah Raya 4',
			deskripsi: 'Foto kegiatan ibadah raya',
			gambar: {
				url: 'https://images.unsplash.com/photo-1604328698692-f76ea9499e76?w=800&q=80'
			},
			kategori: 'Ibadah Minggu',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 5,
			documentId: 'galeri-5',
			judul: 'Retreat 1',
			deskripsi: 'Kegiatan retreat pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80'
			},
			kategori: 'Retreat',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 6,
			documentId: 'galeri-6',
			judul: 'Retreat 2',
			deskripsi: 'Kegiatan retreat pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80'
			},
			kategori: 'Retreat',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 7,
			documentId: 'galeri-7',
			judul: 'Retreat 3',
			deskripsi: 'Kegiatan retreat pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80'
			},
			kategori: 'Retreat',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 8,
			documentId: 'galeri-8',
			judul: 'Retreat 4',
			deskripsi: 'Kegiatan retreat pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80'
			},
			kategori: 'Retreat',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 9,
			documentId: 'galeri-9',
			judul: 'Youth 1',
			deskripsi: 'Kegiatan pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80'
			},
			kategori: 'Youth',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 10,
			documentId: 'galeri-10',
			judul: 'Youth 2',
			deskripsi: 'Kegiatan pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80'
			},
			kategori: 'Youth',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 11,
			documentId: 'galeri-11',
			judul: 'Youth 3',
			deskripsi: 'Kegiatan pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80'
			},
			kategori: 'Youth',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 12,
			documentId: 'galeri-12',
			judul: 'Youth 4',
			deskripsi: 'Kegiatan pemuda',
			gambar: {
				url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80'
			},
			kategori: 'Youth',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 13,
			documentId: 'galeri-13',
			judul: 'Baptisan 1',
			deskripsi: 'Kegiatan baptisan air',
			gambar: {
				url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
			},
			kategori: 'Baptisan',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 14,
			documentId: 'galeri-14',
			judul: 'Baptisan 2',
			deskripsi: 'Kegiatan baptisan air',
			gambar: {
				url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80'
			},
			kategori: 'Baptisan',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 15,
			documentId: 'galeri-15',
			judul: 'Baptisan 3',
			deskripsi: 'Kegiatan baptisan air',
			gambar: {
				url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'
			},
			kategori: 'Baptisan',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 16,
			documentId: 'galeri-16',
			judul: 'Baptisan 4',
			deskripsi: 'Kegiatan baptisan air',
			gambar: {
				url: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80'
			},
			kategori: 'Baptisan',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-01T00:00:00.000Z'
		}
	]
};

export const dummyGlobal = {
	data: {
		id: 1,
		documentId: 'global-1',
		nama_gereja: 'GPdI Haleluya',
		alamat: 'MQ8G+P5P, Rungkut Tengah\nKec. Gn. Anyar, Surabaya\nJawa Timur 60293',
		whatsapp: '6281234567890',
		email: 'info@gpdihaleluya.org',
		social_media: {
			facebook: 'https://facebook.com/gpdihaleluya',
			instagram: 'https://instagram.com/gpdihaleluya',
			youtube: 'https://youtube.com/gpdihaleluya'
		},
		logo: {
			url: '/logo-haleluya-nobg.png'
		},
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z'
	}
};
