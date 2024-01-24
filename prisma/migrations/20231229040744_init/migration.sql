-- CreateTable
CREATE TABLE "MataKuliah" (
    "id" SERIAL NOT NULL,
    "kode_matkul" TEXT NOT NULL,
    "nama_matkul" TEXT NOT NULL,
    "dosen_pengampu" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MataKuliah_pkey" PRIMARY KEY ("id")
);
