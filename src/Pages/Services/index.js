import React from 'react';
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import './style.scss';

function Services() {
    return (
        <div className='container container-services'>
            <Swiper className='swiper'
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='slide slide1'>
                    <div className='imagem-alongamento'></div>
                    <div className='descricao-alongamento'>
                        O alongamento acrílico pode ser feito de duas formas: <br></br><br></br>
                        No molde: É iniciado com um primer, que é aplicado nas unhas.
                        Em seguida, com um pincel é aplicado a mistura de um pó acrílico com um líquido e é exatamente essa mistura
                        que faz com que a unha fique modelada.
                        É necessário fazer manutenção a cada 15 dias, porém, ela pode durar até três meses.
                        Mas, isso depende do crescimento da unha de cada pessoa. O alongamento de unha de acrílico é um método rápido
                        e ele consegue deixar a unha com um aspecto natural.
                        Além do mais, esse método consegue reconstruir unhas quebradas, ruídas e danificadas.
                        <br></br><br></br>
                        Na Tips: Retira-se todo o brilho da unha, com lixa e remove-se o pó com escovinha ou pincel.
                        Escolhe-se o tamanho da Tips para cada dedo e corta-se todas as Tips com o cortador de Tips, deixando o
                        tamanho definido pela cliente.

                        Aplicamos o primer em toda a base da unha, depois usamos o monomer com o pó de acrílico para a formação da
                        unha.

                        Com a lixa modelamos a forma desejada e com a pinça definimos a curvatura.
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className='imagem-esmaltacao'></div>
                    <div className='descricao-esmaltacao'>
                        A esmaltação em gel começa com as unhas cortadas, lixadas e cutículas feitas,
                        assim como no processo comum, antes de passar a base e o esmalte.
                        Para tirar a oleosidade da unha, é passada uma lixa chamada diamante.
                        Se a unha estiver muito oleosa, o esmalte não adere.
                        A lixa deve ser passada próxima à cutícula, onde existe maior índice de descolamento do
                        esmalte.
                        <br></br><br></br>
                        Depois, é passado álcool 70% líquido para desinfeccionar e limpar qualquer resíduo de pó.
                        Antes do produto em gel, é passada uma camada de base em gel, própria para esse tipo de
                        esmaltação. Depois de passar a base, limpa-se o que escorreu para as laterais e coloca na
                        cabine própria para secar na luz UV por até três minutos.O equipamento tem timer e avisa
                        quando está pronto.
                        <br></br><br></br>
                        Após o tempo, já pode-se passar a primeira camada do esmalte em gel.
                        O produto deve ser passado com cuidado. Se borrar, é só limpar com um palito depois,
                        com ou sem acetona. Após a primeira camada de esmalte em gel, a mão vai para a cabine
                        secar por mais três minutos. Na segunda e última camada, aproxima-se o esmalte da cutícula.
                        Caso escorra, utiliza acetona ou álcool 70%. O produto vai para a cabine para secar
                        novamente por três minutos.
                        <br></br><br></br>
                        Após as duas camadas de esmalte, passa-se a última camada de base em gel e deixa secar na
                        cabine por mais três minutos. As quatro camadas de gel deixam as unhas mais grossas e
                        resistentes. No final, é passado álcool ou acetona para remover as falhas.
                        Como o esmalte já está seco, ele não sai com esses produtos. Está pronto!
                        Além de prometer acabamento de brilho mais duradouro do que o esmalte comum, o produto em
                        gel pode durar de 15 a 20 dias.
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Services;