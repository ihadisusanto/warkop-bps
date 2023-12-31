export default function Video() {
    return(
    <div className="lg:mt-8 px-8 pb-6 bg-base">
        <div className="mx-auto w-full lg:w-1/2">
            <p className="text-darkbrown text-justify lg:text-center">Warkop hadir untuk mengakomodir seluruh kegiatan pendidikan dan pelatihan baik diklat prajabatan dan kepemimpinan maupun diklat teknis dan fungsional.</p>
        </div>
        <div className="w-full lg:w-1/2 h-1/2 mt-4 mx-auto">
            <iframe allowFullScreen className="w-full aspect-video items-center" src='https://res.cloudinary.com/did9sqw7v/video/upload/v1686402854/Warkop_evvw5i.mp4'></iframe>
        </div>
    </div>
    )
}