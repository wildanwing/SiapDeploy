import React from 'react';

import newsimg from '../assets/images/news.svg';
import newsimg2 from '../assets/images/news2.svg';

class News extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h2 className="newsheader">Di Tengah Pandemi, Ketjilbergerak Berbagi Kotak Nasi Untuk Tunawisma</h2>
                    <p className="newsdate">8 April 2020</p>
                </div>
                <img src={newsimg} alt="news.svg" className="newsimg img-fluid" />
                <div className="newscapt justify-text-left">
                    <p>Ramadhan tahun ini jelas beda. Masa pandemi bikin semua lini kehidupan jadi lebih sulit dari biasanya. Termasuk efek nggak bisa kumpul berbuka dengan teman-teman hingga pulang ke kampung halaman. Dampak Covid 19 bukan cuma dirasakan negeri ini tetapi semua negara merasakan dampaknya. Covid 19 membuat roda perekonomian banyak yang macet. Bagaimana tidak macet? Sebab saat ini manusia memiliki tugas untuk tetap survive (bertahan) di tengah Covid 19.</p>
                    <p>Urusan ekonomi tentu menjadi problem rakyat yang diharuskan stay at home. Mungkin sebagian orang yang mampu masih bisa menyukupi kebutuhan sehari-hari ditengah pandemi ini. Lalu, bagaimana dengan orang tidak mempunyai pekerjaan bahkan atap untuk berlindung? Ketjilbergeak tentu menyikapi ini tidak diam. Kami membuka donasi untuk saudara-saudara kita yang membutuhkan dan melakukan upaya-upaya membantu rakyat. Selain berbagi makanan kami juga mengulirkan bantuan sembako bagi masyarakat terdampak Covid 19. Selain itu kami juga telah mengalokasikan sebagian dana untuk menyekolahkan anak-anak jalanan. Komunitas Ketjilbergerak juga sudah saling gotong-royong mengalang dana sosial Covid 19 ini. </p>
                    <p>Kali ini program #SambungRasa menjadi tanda cinta kita semua, ketika apa yang kita perbuat dapat memberikan kebahagiaan ataupun membantu orang lain, apalagi dalam situasi pandemi COVID-19 ini yang semuanya serba dibatasi dalam rangka mencegah penyebaran virus tersebut. Sudah saatnya kita yang mampu tergugah hatinya untuk berbagi di saat pandemi ini. Berbagi merupakan wujud kepedulian sosial yang perlu disemarakkan apalagi amal di bulan puasa akan mendapat berlipat ganda pahala. Puasa ini akan lebih bermakna ketika kita menjadi dermawan dengan sesama. </p>
                    <p> Manusia sebagai makhluk sosial merupakan mahkluk yang berhubungan secara timbal-balik dengan manusia lain. Dalam sosiologi, mahkluk sosial adalah sebuah konsep ideologis dimana masyarakat atau struktur sosial dipandang sebagai sebuah “organisme hidup”. Semua elemen masyarakat atau makhluk sosial memiliki fungsi yang mempertahankan stabilitas dan kekompakan sesama. Dengan kata lain, manusia tergantung satu sama lainnya untuk menjaga keutuhan masyarakat. Hal inilah yang mendasari budaya berbagi perlu dilestarikan kapan pun, lebih-lebih saat bulan puasa.</p>
                </div>
                <div className="text-center">
                    <img src={newsimg2} alt="news2.svg" className="newsimg2 img-fluid" />
                </div>

            </div>
        )
    }
}

export default News;